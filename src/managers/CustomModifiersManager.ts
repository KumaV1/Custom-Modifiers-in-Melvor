import { CmimUtils } from '../Utils';
import { CustomModifiersCalculationHelper } from '../helpers/CustomModifiersCalculationHelper'
import { CustomModifiersRegistrationHelper } from '../helpers/CustomModifiersRegistrationHelper';
import { ModifierConstants } from '../constants/ModifierConstants';
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeHelper } from '../helpers/MonsterTypeHelper';
import { MonsterTypeManager } from '../managers/MonsterTypeManager';

/**
 * Patches different sections of the code, in order to integrate custom modifiers
 * Check "./definitions" for typescript intellisense and not throwing errors.
 *
 * REMARK: Usually, Player and Enemy end up with separate patches,
 * to avoid having to worry about code-order. It also helps in implementing a structure from the get go,
 * that is easy to expand for either type, rather than having to refactor things later on
 */
export class CustomModifiersManager {
    constructor(private readonly context: Modding.ModContext) { }

    /**
     * Patch pre existing logic, to also take our custom modifiers into account
     *
     * FYI: All flat damage modifications use the "numberMultiplier", which is based on the game mode (numberMultiplier = this.gamemode.hitpointMultiplier)
     */
    public patchMethods() {
        this.patchSkilling();
        this.patchMonsterTypeAllocation();
        this.patchMinHitCalculations();
        this.patchMaxHitCalculations();
        this.patchAttackDamageCalculations();
        this.patchDamageModifierCalculations();
        this.patchAccuracyCalculations();
        this.patchResistanceCalculations(); // formerly known as damage reduction
        this.patchDamage();
        this.patchUtils();
    }

    /**
     * Registers modifiers and effects for the given types
     * @param type
     */
    public registerMonsterTypes(types: MonsterTypeDefinition[]): void {
        let modifiers = [] as ModifierData[];
        let modifierModifications = [] as ModifierModificationData[];
        let combatEffectTemplates = [] as CombatEffectTemplateData[];
        let combatEffects = [] as AnyCombatEffectData[];

        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            // Create modifiers
            Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {

                // @ts-ignore We know the keys (property names) match the enum expected as parameter
                const obj = MonsterTypeHelper.createModifierDataObject(type, key, value);

                // @ts-ignore implicit 'any' type error
                // we know though that it is an object to which we want to add a property
                modifiers.push(obj);
            });

            // Create combat effect template and static and stacking variants
            combatEffectTemplates.push(MonsterTypeHelper.createTraitEffectTemplateData(type));
            combatEffectTemplates.push(MonsterTypeHelper.createTraitStaticEffectTemplateData(type));
            combatEffectTemplates.push(MonsterTypeHelper.createTraitStaticNonCountingEffectTemplateData(type));
            combatEffectTemplates.push(MonsterTypeHelper.createTraitStackingEffectTemplateData(type));
            combatEffects.push(MonsterTypeHelper.createTraitStaticEffectData(type));
            combatEffects.push(MonsterTypeHelper.createTraitStaticNonCountingEffectData(type));
            combatEffects.push(MonsterTypeHelper.createTraitStackingEffectData(type));

            const { posAliases, negAliases } = MonsterTypeHelper.getBackwardsCompatibilityAliases(type);
            modifierModifications.push(CustomModifiersRegistrationHelper.createModifierModificationData(
                ModifierConstants.IDS.backwardsCompatibility,
                undefined,
                undefined,
                posAliases,
                negAliases
            ));
        }

        const dataPackage = MonsterTypeHelper.createMonsterTypeDataPackage(modifiers, combatEffectTemplates, combatEffects);
        game.registerDataPackage(dataPackage);

        // Add modifications to pre-existing modifiers

        const modificationDataPackage = CustomModifiersRegistrationHelper.createModifierModificationDataPackage(modifierModifications);
        game.registerDataPackage(modificationDataPackage);
    }

    /**
     * Registers entries in the global modifierData object
     * @param type
     */
    public registerMonsterTypeModifierData(type: MonsterTypeDefinition): void {
        let modifiers = [] as ModifierData[];

        Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {

            // @ts-ignore We know the keys (property names) match the enum expected as parameter
            const obj = MonsterTypeHelper.createModifierDataObject(type, key, value);

            // @ts-ignore implicit 'any' type error
            // we know though that it is an object to which we want to add a property
            modifiers.push(obj);
        });

        const dataPackage = CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers);
        game.registerDataPackage(dataPackage);
    }

    // #region Method patching

    /**
     *
     */
    private patchSkilling() {
        /**
         * Add percentage-based xp modifiers
         */
        this.context.patch(Skill<BaseSkillData, SkillEvents, BaseSkillModificationData>, "getXPModifier").after(function (returnValue: number, action?: NamedObject) {
            return returnValue += CustomModifiersCalculationHelper.getPercentagetXpModification(this, action);
        });

        /**
         * Add flat xp modifiers
         */
        this.context.patch(Skill<BaseSkillData, SkillEvents, BaseSkillModificationData>, "modifyXP").after(function (returnValue: number, amount: number, action?: NamedObject) {
            return returnValue += CustomModifiersCalculationHelper.getFlatXpModification(this, action);
        });

        /**
         * Add custom modifiers to modifier value source buider
         */
        this.context.patch(Skill<BaseSkillData, SkillEvents, BaseSkillModificationData>, '_buildXPSources').after(function (returnValue: ModifierSourceBuilder, action?: NamedObject) {
            const query = this.getActionModifierQuery(action);
            returnValue.addSources(ModifierConstants.IDS.PLAYER.skillXPPerLevel, query);
            returnValue.addSources(ModifierConstants.IDS.PLAYER.flatSkillXP, query);
            returnValue.addSources(ModifierConstants.IDS.PLAYER.flatSkillXPPerLevel, query);

            return returnValue;
        })
    }

    /**
     * On spawn, applies booleans on entity, so we don't have to check an array every time
     * Remark: We do not have to patch all properties onto the player, as not setting them will just trigger a "falsey" match, resulting in the same outcome
     */
    private patchMonsterTypeAllocation() {
        this.context.patch(Enemy, "setStatsFromMonster").after(function (returnValue, monster: any): void {
            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];
                // @ts-ignore - We add is{Type} dynamically
                this[type.isTypePropertyName] = MonsterTypeManager.monsterIsOfType(monster, type.name);
            }
        });
    }

    /**
     * Patch new min hit changing modifiers (both percentage and flat)
     *
     * REMARK: I'm not sure about being able to provide result of before patch to original call, so
     * instead just used after patch as usual, repeating the "clampValue" call at the end to avoid invalid values
     */
    private patchMinHitCalculations() {
        /**
         * Patch percentage modifier for min hit based on max hit
         */
        this.context.patch(Player, 'getMinHitFromMaxHitPercent').after(function (returnValue: number): number {
            return returnValue + CustomModifiersCalculationHelper.getPlayerMinHitFromMaxHitPercentModification(this);
        });

        this.context.patch(Enemy, 'getMinHitFromMaxHitPercent').after(function (returnValue: number): number {
            return returnValue + CustomModifiersCalculationHelper.getEnemyMinHitFromMaxHitPercentModification(this);
        });

        /**
         * Patch min hit flat modification, repeating the clamping logic
         */
        this.context.patch(Player, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculationHelper.getPlayerMinHitFlatModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
        this.context.patch(Enemy, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculationHelper.getEnemyMinHitFlatModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
    }

    /**
     * Patches new max hit changing modifiers (both percentage and flat) into base logic
     */
    private patchMaxHitCalculations() {
        /** Percentage modification of max hit */
        this.context.patch(Player, "getMaxHitModifier").after(function (returnValue: number): number {
            return returnValue += CustomModifiersCalculationHelper.getPlayerMaxHitPercentageModification(this);
        });
        this.context.patch(Enemy, "getMaxHitModifier").after(function (returnValue: number): number {
            return returnValue += CustomModifiersCalculationHelper.getEnemyMaxHitPercentageModification(this);
        });

        /** Flat modification of max hit */
        this.context.patch(Player, 'getFlatMaxHitModifier').after(function (returnValue: number): number {
            return returnValue + CustomModifiersCalculationHelper.getPlayerMaxHitFlatModification(this);
        });
        this.context.patch(Enemy, 'getFlatMaxHitModifier').after(function (returnValue: number): number {
            return returnValue + CustomModifiersCalculationHelper.getEnemyMaxHitFlatModification(this);
        });
    }

    /**
     * Patches certain modifiers that affect the damage already rolled basically
     */
    private patchAttackDamageCalculations() {
        this.context.patch(Player, "getFlatAttackDamageBonus").after(function (returnValue: number, target: Character) {
            return returnValue + CustomModifiersCalculationHelper.getPlayerFlatAttackDamageBonusModification(this, target);
        });
        this.context.patch(Enemy, "getFlatAttackDamageBonus").after(function (returnValue: number, target: Character) {
            return returnValue + CustomModifiersCalculationHelper.getEnemyFlatAttackDamageBonusModification(this, target);
        });

        /**
         * @param returnValue the current flat damage, after 'modifyAttackDamage' ran
         * @param damage the damage originally provided to
         */
        this.context.patch(Player, "modifyAttackDamage").after(function (returnValue: number, target: Character, attack: SpecialAttack, damage: number) {
            return returnValue + CustomModifiersCalculationHelper.getPlayerDamageModification(this, target, attack, damage, returnValue);
        });
        this.context.patch(Enemy, "modifyAttackDamage").after(function (returnValue: number, target: Character, attack: SpecialAttack, damage: number) {
            return returnValue + CustomModifiersCalculationHelper.getEnemyDamageModification(this, target, attack, damage, returnValue);
        });
    }

    /**
     * Patches new (total) damage (percentage) changing modifiers into base logic.
     * As example, the base method includes things like "increasedDamageTaken" and the increases through effects like Stun
     */
    private patchDamageModifierCalculations() {
        this.context.patch(Player, "getDamageDealtModifier").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculationHelper.getPlayerDamageDealtPercentageModification(this);
        });
        this.context.patch(Enemy, "getDamageDealtModifier").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculationHelper.getEnemyDamageDealtPercentageModification(this);
        });

        /** Specifically called on the target */
        this.context.patch(Player, "getDamageTakenModifier").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculationHelper.getPlayerDamageTakenPercentageModification(this);
        });
        this.context.patch(Enemy, "getDamageTakenModifier").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculationHelper.getEnemyDamageTakenPercentageModification(this);
        });
    }

    /**
     * Patches new accuracy (percentage) changing modifiers into base logic
     */
    private patchAccuracyCalculations() {
        this.context.patch(Player, "getAccuracyModifier").after(function (returnValue: number) {
            return returnValue += CustomModifiersCalculationHelper.getPlayerAccuracyPercentModification(this);
        });
        this.context.patch(Enemy, "getAccuracyModifier").after(function (returnValue: number) {
            return returnValue += CustomModifiersCalculationHelper.getEnemyAccuracyPercentModification(this);
        });
    }

    /**
     * Patches new damage reduction (flat percentage) changing modifiers into base logic
     */
    private patchResistanceCalculations() {
        this.context.patch(Player, "modifyResistance").before(function (damageType: DamageType, resistance: number) {
            return [damageType, resistance + CustomModifiersCalculationHelper.getPlayerDamageReductionFlatModification(this, damageType)];
        });
        this.context.patch(Enemy, "modifyResistance").before(function (damageType: DamageType, resistance: number) {
            return [damageType, resistance + CustomModifiersCalculationHelper.getEnemyDamageReductionFlatModification(this, damageType)];
        });
    }

    /**
     * Patch method that takes care of actually triggering the damage step.
     * The patch basically conditionally changes some of the parameter values, before then running the original logic
     */
    private patchDamage() {
        this.context.patch(Player, "damage").before(function (amount: number, source: SplashType, thieving?: boolean | undefined) {
            // Thieving
            if (thieving) {
                const threshold: number = numberMultiplier * (
                    this.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePreventionThreshold, ModifierQuery.EMPTY)
                    + this.modifiers.getValue(ModifierConstants.IDS.PLAYER.damagePreventionThresholdThieving, ModifierQuery.EMPTY)
                );

                return threshold > 0 && amount < threshold
                    ? [0, source, thieving]
                    : [amount, source, thieving];
            }

            // Combat
            return CustomModifiersManager.getCharacterDamageShouldBeZero(this, amount, source)
                ? [0, source, thieving]
                : [amount, source, thieving];
        });
        this.context.patch(Enemy, "damage").before(function (amount: number, source: SplashType) {
            return CustomModifiersManager.getCharacterDamageShouldBeZero(this, amount, source)
                ? [0, source]
                : [amount, source];
        });
    }

    /**
     * Shared logic between character classes, that may cause the damage to be reduced to zero
     * @param entity the entity that is to receive damage
     * @param amount the amount is to be received
     * @param source the source of the damage that is to be received
     * @returns Whether the method patch should call the original logic with damage set to 0
     */
    private static getCharacterDamageShouldBeZero(entity: Character, amount: number, source: SplashType): boolean {
        // Do not run this logic, if the splat in question is actually a heal (unlikely based on function name, but possible based on type definition)
        if (CmimUtils.splashTypeIsHeal(source)) {
            return false;
        }

        const barrierActive = entity.isBarrierActive;
        const canDamageBarrier = entity.canDamageBarrier(source);

        // If barrier is active, but the damage cannot deal damage to it,
        // then damage is already impossible, so we don't have to evaluate any modifiers
        if (barrierActive && !canDamageBarrier) {
            return false;
        }

        // If barrier is active, and the damage source is capable of dealing damage to it,
        // then we have to evaluate the barrier modifiers
        if (entity.isBarrierActive && canDamageBarrier) {
            const threshold = numberMultiplier * (
                entity.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePreventionThreshold, ModifierQuery.EMPTY)
                + entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.damagePreventionThresholdBarrier, ModifierQuery.EMPTY)
            );
            if (threshold > 0 && amount < threshold) {
                return true;
            }
        }

        // Otherwise, no barrier is active, so we evaluate the non-barrier modifiers
        const threshold = numberMultiplier * (
            entity.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePreventionThreshold, ModifierQuery.EMPTY)
            + entity.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePreventionThresholdCombat, ModifierQuery.EMPTY)
        );
        //const threshold = numberMultiplier * (entity.modifiers.increasedGlobalDamagePreventionThreshold
        //    - entity.modifiers.decreasedGlobalDamagePreventionThreshold
        //    + entity.modifiers.increasedDamagePreventionThreshold
        //    - entity.modifiers.decreasedDamagePreventionThreshold);
        if (threshold > 0 && amount < threshold) {
            return true;
        }

        // Nothing ended up causing the damage having to be set to 0
        return false;
    }

    /**
     * Patches some of the util functions.
     * Do note though, that the original logic isn't stored by this patcher, but instead through the 'GameObjectDataWrapperInitializer' class
     */
    private patchUtils() {
        // Build new function logic
        let newFunc = function (damage: number): void {
            // Check the modifiers that may change how the original logic is supposed to behave
            const threshold: number = numberMultiplier * (
                game.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePreventionThreshold, ModifierQuery.EMPTY)
                + game.modifiers.getValue(ModifierConstants.IDS.PLAYER.damagePreventionThresholdThieving, ModifierQuery.EMPTY)
            );

            // Call the original logic, with its expected parameter possibly changed
            if (threshold > 0 && damage < threshold) {
                game.customModifiersInMelvor.originalFunctions.utils.stunNotify(0);
            } else {
                game.customModifiersInMelvor.originalFunctions.utils.stunNotify(damage);
            }
        }

        // Re-define original function with new logic (original logic has already been stored at this point)
        window.stunNotify = newFunc;
    }

    // #endregion
}