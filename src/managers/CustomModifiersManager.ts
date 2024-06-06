import { CmimUtils } from '../Utils';
import { ModConstants } from '../constants/ModConstants';
import { ModifierConstants } from '../constants/ModifierConstants';
import { CustomModifiersCalculationHelper } from '../helpers/CustomModifiersCalculationHelper'
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeHelper } from '../helpers/MonsterTypeHelper';
import { MonsterTypeManager } from '../managers/MonsterTypeManager';
import { SettingsManager } from '../managers/SettingsManager';

import { languages } from '../languages';
import { CustomModifiersRegistrationHelper } from '../helpers/CustomModifiersRegistrationHelper';

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
     * Registers all non-dynamic custom modifers, so they are known by the game
     */
    public registerModifiers() {
        this.registerSkillModifiers();
        //this.registerSpawnModifiers();
        //this.registerOnHitModifiers();
        this.registerDeathMarkModifiers();
        this.registerCombatAreaModifiers();
        this.registerSlayerAreaModifiers();
        this.registerDungeonModifiers();
        this.registerSlayerTaskModifiers();
        //this.registerSpellModifiers();
        this.registerBossModifiers();
        this.registerGeneralModifiers();
    }

    /**
     * Patch pre existing logic, to also take our custom modifiers into account
     *
     * FYI: All flat damage modifications use the "numberMultiplier", which is based on the game mode (numberMultiplier = this.gamemode.hitpointMultiplier)
     */
    public patchMethods() {
        this.patchSkilling();
        //this.patchGame();
        //this.patchAddHitpoints();
        //this.patchCombatModifiersReset();
        this.patchMonsterTypeAllocation();
        //this.patchApplyUniqueSpawnEffects();
        //this.patchApplyOnHitEffects();
        this.patchMinHitCalculations();
        this.patchMaxHitCalculations();
        this.patchAttackDamageCalculations();
        this.patchDamageModifierCalculations();
        this.patchAccuracyCalculations();
        this.patchDamageReductionCalculations();
        this.patchDamage();
        this.patchUtils();
    }

    /**
     * Registers modifiers and effects for the given types
     * @param type
     */
    public registerMonsterTypes(types: MonsterTypeDefinition[]): void {
        let modifiers = [] as ModifierData[];
        let combatEffectTemplates = [] as CombatEffectTemplateData[];
        let combatEffects = [] as AnyCombatEffectData[];

        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            // Create modifiers
            Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {
                //console.log(`Processing modifierProperty: ${key} | ${value}`);

                // @ts-ignore We know the keys (property names) match the enum expected as parameter
                const obj = MonsterTypeHelper.createModifierDataObject(type, key, value);

                // @ts-ignore implicit 'any' type error
                // we know though that it is an object to which we want to add a property
                //modifierData[value] = obj;
                modifiers.push(obj);
            });

            // Create combat effect template and static and stacking variants
            combatEffectTemplates.push(MonsterTypeHelper.createTraitEffectTemplateData(type));
            combatEffects.push(MonsterTypeHelper.createTraitStaticEffectData(type));
            combatEffects.push(MonsterTypeHelper.createTraitStackingEffectData(type));

            // Create and register custom effect and stacking effect data
            // TODO: Only create a package to register instead, other mods can just reference it through id used in combat effects then
            //const customEffectData: CustomEffectData = MonsterTypeHelper.createTraitCustomEffectDataInfiniteObject(type);
            //game.customModifiersInMelvor.customModifierEffects[type.effectPropertyObjectNames.traitApplicationCustomModifierEffect] = customEffectData;

            // TODO: Fix This: game.registerDataPackage(MonsterTypeHelper.createTraitStackingEffectGamePackage(type));
            // TODO: Only create a package to register instead, other mods can just reference it through id used in combat effects then
            //const stackingEffect = game.stackingEffects.getObjectByID(`${ModConstants.MOD_NAMESPACE_NAME}:${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`);
            //if (stackingEffect === undefined) {
            //    CmimUtils.error(`Failed to find stacking effect for monster type '${type.singularName}' after registering it`);
            //} else {
            //    game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect] = stackingEffect;
            //}

            // TODO: Only create a package to register instead, other mods can just reference it through id used in combat effects then
            // TODO: Fix This: game.registerDataPackage(MonsterTypeHelper.createTraitCustomModifierEffectAttackGamePackage(type, customEffectData));
            //const specialAttack = game.specialAttacks.getObjectByID(`${ModConstants.MOD_NAMESPACE_NAME}:${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX}`);
            //if (specialAttack === undefined) {
            //    CmimUtils.error(`Failed to find special attack for monster type '${type.singularName}' after registering it`);
            //} else {
            //    game.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack] = specialAttack;
            //}
        }

        const dataPackage = MonsterTypeHelper.createMonsterTypeDataPackage(modifiers, combatEffectTemplates, combatEffects);
        game.registerDataPackage(dataPackage);
    }

    /**
     * Registers entries in the global modifierData object
     * @param type
     */
    public registerMonsterTypeModifierData(type: MonsterTypeDefinition): void {
        let modifiers = [] as ModifierData[];

        Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {
            //console.log(`Processing modifierProperty: ${key} | ${value}`);

            // @ts-ignore We know the keys (property names) match the enum expected as parameter
            const obj = MonsterTypeHelper.createModifierDataObject(type, key, value);

            // @ts-ignore implicit 'any' type error
            // we know though that it is an object to which we want to add a property
            //modifierData[value] = obj;
            modifiers.push(obj);
        });

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    // #region Modifier Registration

    /** Register skill-related modifiers | TODO: Move to data package instead, as not dynamic? */
    private registerSkillModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createMultiScopeSkillingModifierData(
            'skillXPPerLevel',
            CustomModifiersRegistrationHelper.createDefaultModifierScopingDataArray(
                'skillXPPerLevel',
                [
                    {
                        scopes: {},
                        posAlias: 'increasedGlobalSkillXPPerLevel',
                        negAlias: 'decreasedGlobalSkillXPPerLevel'
                    },
                    {
                        scopes: { skill: true },
                        posAlias: 'increasedSkillXPPerSkillLevel',
                        negAlias: 'decreasedSkillXPPerSkillLevel'
                    }
                ]
            ),
            false
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createMultiScopeSkillingModifierData(
            'flatSkillXPPerLevel',
            CustomModifiersRegistrationHelper.createDefaultModifierScopingDataArray(
                'flatSkillXPPerLevel',
                [
                    {
                        scopes: {},
                        posAlias: 'increasedFlatGlobalSkillXPPerSkillLevel',
                        negAlias: 'decreasedFlatGlobalSkillXPPerSkillLevel'
                    },
                    {
                        scopes: { skill: true },
                        posAlias: 'increasedFlatSkillXPPerSkillLevel',
                        negAlias: 'decreasedFlatSkillXPPerSkillLevel'
                    }
                ]
            ),
            false
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createMultiScopeSkillingModifierData(
            'flatSkillXP',
            CustomModifiersRegistrationHelper.createDefaultModifierScopingDataArray(
                'flatSkillXP',
                [
                    {
                        scopes: {},
                        posAlias: 'increasedFlatGlobalSkillXP',
                        negAlias: 'decreasedFlatGlobalSkillXP'
                    },
                    {
                        scopes: { skill: true },
                        posAlias: 'increasedFlatSkillXP',
                        negAlias: 'decreasedFlatSkillXP'
                    }
                ]
            ),
            false
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeSkillingModifierData(
            'thievingDamagePreventionThreshold',
            false,
            'increasedThievingDamagePreventionThreshold',
            'decreasedThievingDamagePreventionThreshold'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    /**
     * Not relevant anymore, as doable through combat effects
     */
    //private registerSpawnModifiers() {
    //    let modifiers = [] as ModifierData[];

    //    // TODO: All these will be on "Battle Start" (or whatever the identifier is) combat effects on corresponding items, I guess

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplySlowOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplySlowOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyStunOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyStunOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applyStunOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyPoisonOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyPoisonOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyDeadlyPoisonOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyDeadlyPoisonOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyAfflictionOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyAfflictionOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applyAfflictionOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyBleedOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyBleedOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyBurnOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyBurnOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyFreezeOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyFreezeOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applyFreezeOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyFrostburnOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyFrostburnOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyShockOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyShockOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applyShockOnSpawn')); // TODO: Cases like this one require two different descriptions between higher 1 and not higher 1

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplySleepOnSpawn'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplySleepOnSpawn', true));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applySleepOnSpawn'));

    //    game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    //}

    /**
     * Not relevant anymore, as doable through combat effects
     */
    //private registerOnHitModifiers() {
    //    let modifiers = [] as ModifierData[];

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyBleed'));

    //    modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyBleed', true));

    //    game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    //}

    /**
     *
     */
    private registerDeathMarkModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('deathMark'));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedDeathMarkOnHit'));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedChanceToApplyStackOfDeathMark'));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedChanceToApplyStackOfDeathMark', true));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('increasedDeathMarkImmunity')); // melvorD:effectIgnoreChance

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('decreasedDeathMarkImmunity', true)); // melvorD:effectIgnoreChance

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData('applyDeathMarkOnSpawn'));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    private registerCombatAreaModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitPercentToCombatAreaMonsters',
            false,
            'increasedMaxHitPercentToCombatAreaMonsters',
            'decreasedMaxHitPercentToCombatAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitFlatToCombatAreaMonsters',
            false,
            'increasedMaxHitFlatToCombatAreaMonsters',
            'decreasedMaxHitFlatToCombatAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatMinHitToCombatAreaMonsters',
            false,
            'increasedFlatMinHitToCombatAreaMonsters',
            'decreasedFlatMinHitToCombatAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'minHitBasedOnMaxHitToCombatAreaMonsters',
            false,
            'increasedMinHitBasedOnMaxHitToCombatAreaMonsters',
            'decreasedMinHitBasedOnMaxHitToCombatAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'accuracyRatingAgainstCombatAreaMonsters',
            false,
            'increasedGlobalAccuracyAgainstCombatAreaMonsters',
            'decreasedGlobalAccuracyAgainstCombatAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatResistanceAgainstCombatAreaMonsters',
            false,
            'increasedDamageReductionAgainstCombatAreaMonsters',
            'decreasedDamageReductionAgainstCombatAreaMonsters'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    private registerSlayerAreaModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitPercentToSlayerAreaMonsters',
            false,
            'increasedMaxHitPercentToSlayerAreaMonsters',
            'decreasedMaxHitPercentToSlayerAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitFlatToSlayerAreaMonsters',
            false,
            'increasedMaxHitFlatToSlayerAreaMonsters',
            'decreasedMaxHitFlatToSlayerAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatMinHitToSlayerAreaMonsters',
            false,
            'increasedFlatMinHitToSlayerAreaMonsters',
            'decreasedFlatMinHitToSlayerAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'minHitBasedOnMaxHitToSlayerAreaMonsters',
            false,
            'increasedMinHitBasedOnMaxHitToSlayerAreaMonsters',
            'decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'accuracyRatingAgainstSlayerAreaMonsters',
            false,
            'increasedGlobalAccuracyAgainstSlayerAreaMonsters',
            'decreasedGlobalAccuracyAgainstSlayerAreaMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatResistanceAgainstSlayerAreaMonsters',
            false,
            'increasedDamageReductionAgainstSlayerAreaMonsters',
            'decreasedDamageReductionAgainstSlayerAreaMonsters'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    private registerDungeonModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitPercentToDungeonMonsters',
            false,
            'increasedMaxHitPercentToDungeonMonsters',
            'decreasedMaxHitPercentToDungeonMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitFlatToDungeonMonsters',
            false,
            'increasedMaxHitFlatToDungeonMonsters',
            'decreasedMaxHitFlatToDungeonMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatMinHitToDungeonMonsters',
            false,
            'increasedFlatMinHitToDungeonMonsters',
            'decreasedFlatMinHitToDungeonMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'minHitBasedOnMaxHitToDungeonMonsters',
            false,
            'increasedMinHitBasedOnMaxHitToDungeonMonsters',
            'decreasedMinHitBasedOnMaxHitToDungeonMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'accuracyRatingAgainstDungeonMonsters',
            false,
            'increasedGlobalAccuracyAgainstDungeonMonsters',
            'decreasedGlobalAccuracyAgainstDungeonMonsters'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatResistanceAgainstDungeonMonsters',
            false,
            'increasedDamageReductionAgainstDungeonMonsters',
            'decreasedDamageReductionAgainstDungeonMonsters'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    private registerSlayerTaskModifiers() {
        // Add modifiers
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitPercentToSlayerTasks',
            false,
            'increasedMaxHitPercentToSlayerTasks',
            'decreasedMaxHitPercentToSlayerTasks'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitFlatToSlayerTasks',
            false,
            'increasedMaxHitFlatToSlayerTasks',
            'decreasedMaxHitFlatToSlayerTasks'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'minHitBasedOnMaxHitToSlayerTasks',
            false,
            'increasedFlatMinHitToSlayerTasks',
            'decreasedFlatMinHitToSlayerTasks'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatMinHitToSlayerTasks',
            false,
            'increasedMinHitBasedOnMaxHitToSlayerTasks',
            'decreasedMinHitBasedOnMaxHitToSlayerTasks'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'accuracyRatingAgainstSlayerTasks',
            false,
            'increasedGlobalAccuracyAgainstSlayerTasks',
            'decreasedGlobalAccuracyAgainstSlayerTasks'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));

        // Add modifications to pre-existing modifiers
        let modifierModifications = [] as ModifierModificationData[];

        modifierModifications.push(CustomModifiersRegistrationHelper.createModifierModificationData(
            ModifierIDs.flatResistanceAgainstSlayerTasks,
            undefined,
            undefined,
            ['decreasedDamageReductionAgainstSlayerTasks']
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierModificationDataPackage(modifierModifications));
    }

    /**
     *
     */
    private registerBossModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitPercentAgainstBosses',
            false,
            'increasedMaxHitPercentAgainstBosses',
            'decreasedMaxHitPercentAgainstBosses'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'maxHitFlatAgainstBosses',
            false,
            'increasedMaxHitFlatAgainstBosses',
            'decreasedMaxHitFlatAgainstBosses'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'flatMinHitAgainstBosses',
            false,
            'increasedFlatMinHitAgainstBosses',
            'decreasedFlatMinHitAgainstBosses'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'minHitBasedOnMaxHitAgainstBosses',
            false,
            'increasedMinHitBasedOnMaxHitAgainstBosses',
            'decreasedMinHitBasedOnMaxHitAgainstBosses'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'accuracyRatingAgainstBosses',
            false,
            'increasedGlobalAccuracyAgainstBosses',
            'decreasedGlobalAccuracyAgainstBosses'
        ));

        game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierDataPackage(modifiers));
    }

    /**
     * Not needed anymore, just use `magicMaxHit` ('damageTaken' unfortunately doesn't take the subcategory scope into account) and set it as 'enemyModifier' on a monster's passive
     */
    //private registerSpellModifiers() {
    //    let modifierModifications = [] as ModifierModificationData[];

    //    modifierModifications.push(CustomModifiersRegistrationHelper.createModifierModificationData(
    //        ModifierIDs.damageTaken,
    //        { subcategory: true },
    //        [
    //            {
    //                text: '${value}% Damage taken when attacked by ${subcategoryName} Spells',
    //                lang: 'MODIFIER_DATA_damageTakenSubcategory'
    //            }
    //        ],
    //        [
    //            {
    //                key: 'increasedDamageTakenFromAirSpells',
    //                subcategoryID: SpellCategoryIDs.Air
    //            },
    //            {
    //                key: 'increasedDamageTakenFromWaterSpells',
    //                subcategoryID: SpellCategoryIDs.Water
    //            },
    //            {
    //                key: 'increasedDamageTakenFromEarthSpells',
    //                subcategoryID: SpellCategoryIDs.Earth
    //            },
    //            {
    //                key: 'increasedDamageTakenFromFireSpells',
    //                subcategoryID: SpellCategoryIDs.Fire
    //            }
    //        ],
    //        [
    //            {
    //                key: 'decreasedDamageTakenFromAirSpells',
    //                subcategoryID: SpellCategoryIDs.Air
    //            },
    //            {
    //                key: 'decreasedDamageTakenFromWaterSpells',
    //                subcategoryID: SpellCategoryIDs.Water
    //            },
    //            {
    //                key: 'decreasedDamageTakenFromEarthSpells',
    //                subcategoryID: SpellCategoryIDs.Earth
    //            },
    //            {
    //                key: 'decreasedDamageTakenFromFireSpells',
    //                subcategoryID: SpellCategoryIDs.Fire
    //            }
    //        ]
    //    ));

    //    game.registerDataPackage(CustomModifiersRegistrationHelper.createModifierModificationDataPackage(modifierModifications));
    //}

    /** Modifiers that don't fit any of the previous groups */
    private registerGeneralModifiers() {
        let modifiers = [] as ModifierData[];

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'chanceToReduceAttackDamageToZero',
            false,
            'increasedChanceToReduceAttackDamageToZero',
            'decreasedChanceToReduceAttackDamageToZero'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'damageFlatWhileTargetHasMaxHP',
            false,
            'increasedDamageFlatWhileTargetHasMaxHP',
            'decreasedDamageFlatWhileTargetHasMaxHP'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'damagePercentWhileTargetHasMaxHP',
            false,
            'increasedDamagePercentWhileTargetHasMaxHP',
            'decreasedDamagePercentWhileTargetHasMaxHP'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'damageFlatIgnoringResistance',
            false,
            'increasedDamageFlatIgnoringDamageReduction',
            'decreasedDamageFlatIgnoringDamageReduction'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'damagePreventionThreshold',
            false,
            'increasedGlobalDamagePreventionThreshold',
            'decreasedGlobalDamagePreventionThreshold'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'combatDamagePreventionThreshold',
            false,
            'increasedDamagePreventionThreshold',
            'decreasedDamagePreventionThreshold'
        ));

        modifiers.push(CustomModifiersRegistrationHelper.createGlobalScopeCharacterCombatModifierData(
            'combatBarrierDamagePreventionThreshold',
            false,
            'increasedBarrierDamagePreventionThreshold',
            'decreasedBarrierDamagePreventionThreshold'
        ));

        game.registerModifiers(ModConstants.MOD_NAMESPACE_DATA, modifiers);
    }

    // #endregion

    // #region Method patching

    /**
     *
     */
    private patchSkilling() {
        /**
         * Add percentage-based xp modifiers
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "getXPModifier").after(function (returnValue: number, action?: NamedObject) {
            return returnValue += CustomModifiersCalculationHelper.getPercentagetXpModification(this, action);
        });

        /**
         * Add flat xp modifiers
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "modifyXP").after(function (returnValue, amount: number, action?: NamedObject) {
            return returnValue += CustomModifiersCalculationHelper.getFlatXpModification(this, action);
        });
    }

    /**
     * Not needed anymore, as objects won't get referenced like that anymore
     */
    //private patchGame() {
    //    /**
    //     * Register custom effects and attacks as properties on the Game object (akin to e.g. "unholyMarkEffect"),
    //     * for easy and quick access
    //     */
    //    this.context.patch(Game, "postDataRegistration").after(function () {
    //        const deathMarkEffect = this.stackingEffects.getObjectByID(ModifierConstants.DEATH_MARK_EFFECT_FULL_ID);
    //        if (deathMarkEffect) {
    //            this.customModifiersInMelvor.stackingEffects.deathMarkEffect = deathMarkEffect;
    //        }

    //        const types = MonsterTypeManager.getActiveTypesAsArray();
    //        for (var i = 0; i < types.length; i++) {
    //            const type = types[i];

    //            const stackingEffect = this.stackingEffects.getObjectByID(`${ModConstants.MOD_NAMESPACE_NAME}:${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`);
    //            if (stackingEffect) {
    //                this.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect] = stackingEffect;
    //            }

    //            const traitApplyingAttack = this.specialAttacks.getObjectByID(`${ModConstants.MOD_NAMESPACE_NAME}:${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX}`);
    //            if (traitApplyingAttack) {
    //                this.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack] = traitApplyingAttack;
    //            }
    //        }
    //    });
    //}

    ///**
    // * TODO: Presumably not required anymore
    // */
    //private patchCombatModifiersReset() {
    //    /**
    //     * This method is called during initialization of both player and enemies, as quick safety measure for a "clean state" before setting everything up. (to avoid undefined/null/nan)
    //     * However, as we do not actually add our properties to Melvor's definition of the class, the dynamic build up doesn't include our properties,
    //     * so we handle those ourselves. Should in theory take care of all instances, so including cases such as area modifiers
    //     *
    //     * REMARK: We don't have to do the same for player modifiers actually, as those are either initialized as 0 by default,
    //     * or "getSkillModifierValue" parses undefined to 0 anyway
    //     */
    //    this.context.patch(CombatModifiers, "reset").after(function () {
    //        this.increasedChanceToReduceAttackDamageToZero ??= 0;
    //        this.decreasedChanceToReduceAttackDamageToZero ??= 0;
    //        this.increasedDamageFlatWhileTargetHasMaxHP ??= 0;
    //        this.decreasedDamageFlatWhileTargetHasMaxHP ??= 0;
    //        this.increasedDamagePercentWhileTargetHasMaxHP ??= 0;
    //        this.decreasedDamagePercentWhileTargetHasMaxHP ??= 0;
    //        this.increasedDamageFlatIgnoringDamageReduction ??= 0;
    //        this.decreasedDamageFlatIgnoringDamageReduction ??= 0;
    //        this.increasedGlobalDamagePreventionThreshold ??= 0;
    //        this.decreasedGlobalDamagePreventionThreshold ??= 0;
    //        this.increasedDamagePreventionThreshold ??= 0;
    //        this.decreasedDamagePreventionThreshold ??= 0;
    //        this.increasedBarrierDamagePreventionThreshold ??= 0;
    //        this.decreasedBarrierDamagePreventionThreshold ??= 0;

    //        this.increasedChanceToApplySlowOnSpawn ??= 0;
    //        this.decreasedChanceToApplySlowOnSpawn ??= 0;
    //        this.increasedChanceToApplyStunOnSpawn ??= 0;
    //        this.decreasedChanceToApplyStunOnSpawn ??= 0;
    //        this.applyStunOnSpawn ??= 0;
    //        this.increasedChanceToApplyPoisonOnSpawn ??= 0;
    //        this.decreasedChanceToApplyPoisonOnSpawn ??= 0;
    //        this.increasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
    //        this.decreasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
    //        this.increasedChanceToApplyAfflictionOnSpawn ??= 0;
    //        this.decreasedChanceToApplyAfflictionOnSpawn ??= 0;
    //        this.applyAfflictionOnSpawn ??= 0;
    //        this.increasedChanceToApplyBleedOnSpawn ??= 0;
    //        this.decreasedChanceToApplyBleedOnSpawn ??= 0;
    //        this.increasedChanceToApplyBurnOnSpawn ??= 0;
    //        this.decreasedChanceToApplyBurnOnSpawn ??= 0;
    //        this.increasedChanceToApplyFreezeOnSpawn ??= 0;
    //        this.decreasedChanceToApplyFreezeOnSpawn ??= 0;
    //        this.applyFreezeOnSpawn ??= 0;
    //        this.increasedChanceToApplyFrostburnOnSpawn ??= 0;
    //        this.decreasedChanceToApplyFrostburnOnSpawn ??= 0;
    //        this.increasedChanceToApplyShockOnSpawn ??= 0;
    //        this.decreasedChanceToApplyShockOnSpawn ??= 0;
    //        this.applyShockOnSpawn ??= 0;
    //        this.increasedChanceToApplySleepOnSpawn ??= 0;
    //        this.decreasedChanceToApplySleepOnSpawn ??= 0;
    //        this.applySleepOnSpawn ??= 0;

    //        this.increasedChanceToApplyBleed ??= 0;
    //        this.decreasedChanceToApplyBleed ??= 0;

    //        this.deathMark ??= 0;
    //        this.increasedDeathMarkOnHit ??= 0;
    //        this.increasedChanceToApplyStackOfDeathMark ??= 0;
    //        this.decreasedChanceToApplyStackOfDeathMark ??= 0;
    //        this.increasedDeathMarkImmunity ??= 0;
    //        this.decreasedDeathMarkImmunity ??= 0;
    //        this.applyDeathMarkOnSpawn ??= 0;

    //        this.increasedDamageTakenFromAirSpells ??= 0;
    //        this.decreasedDamageTakenFromAirSpells ??= 0;
    //        this.increasedDamageTakenFromWaterSpells ??= 0;
    //        this.decreasedDamageTakenFromWaterSpells ??= 0;
    //        this.increasedDamageTakenFromEarthSpells ??= 0;
    //        this.decreasedDamageTakenFromEarthSpells ??= 0;
    //        this.increasedDamageTakenFromFireSpells ??= 0;
    //        this.decreasedDamageTakenFromFireSpells ??= 0;

    //        // Ensure 0 instead of undefined for monster type related modifiers as well
    //        const types = MonsterTypeManager.getActiveTypesAsArray();
    //        for (var i = 0; i < types.length; i++) {
    //            const type = types[i];
    //            Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {
    //                // @ts-ignore
    //                this[value] ??= 0;
    //            });
    //        }
    //    });
    //}

    /**
     * On spawn, applies booleans on entity, so we don't have to check an array every time
     * Remark: We do not have to patch all properties onto the player, as not setting them will just trigger a "falsey" match, resulting in the same outcome
     */
    private patchMonsterTypeAllocation() {
        this.context.patch(Enemy, "setStatsFromMonster").after(function (returnValue, monster: any): void {
            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];
                // console.log(`setStatsFromMonster | Checking to see whether or not to apply ${type.modifierPropertyNames.traitApplied}: ${isOfType}`);
                // @ts-ignore - We add is{Type} dynamically
                this[type.isTypePropertyName] = MonsterTypeManager.monsterIsOfType(monster, type.singularName);
            }
        });
    }

    /**
     * Not needed anymore, as doable through combat effects
     */
    //private patchApplyUniqueSpawnEffects() {
    //    // @ts-ignore You can actually patch base classes no problem
    //    this.context.patch(Character, "applyUniqueSpawnEffects").after(function () {
    //        // Do not do anything, if functionality has been disabled through mod settings
    //        if (SettingsManager.getDisableAllOnSpawnModifiers()) {
    //            return;
    //        }

    //        // Static
    //        if (game.customModifiersInMelvor.stackingEffects.deathMarkEffect !== undefined && this.modifiers.applyDeathMarkOnSpawn > 0) {
    //            this.applyStackingEffect(game.customModifiersInMelvor.stackingEffects.deathMarkEffect, this.target, this.modifiers.applyDeathMarkOnSpawn);
    //        }

    //        let afflictionStacks = this.modifiers.applyAfflictionOnSpawn;
    //        if (rollPercentage(this.modifiers.increasedChanceToApplyAfflictionOnSpawn - this.modifiers.decreasedChanceToApplyAfflictionOnSpawn)) {
    //            afflictionStacks++;
    //        }
    //        for (var i = 0; i < afflictionStacks; i++) {
    //            this.applyModifierEffect(afflictionEffect, this.target, this.game.normalAttack);
    //        }

    //        let stunTurns = this.modifiers.applyStunOnSpawn;
    //        if (rollPercentage(this.modifiers.increasedChanceToApplyStunOnSpawn - this.modifiers.decreasedChanceToApplyStunOnSpawn)) {
    //            stunTurns++;
    //        }
    //        if (stunTurns > 0) {
    //            this.applyStun({ chance: 100, turns: stunTurns, type: 'Stun', flavour: 'Stun' }, this.target);
    //        }

    //        let freezeTurns = this.modifiers.applyFreezeOnSpawn;
    //        if (rollPercentage(this.modifiers.increasedChanceToApplyFreezeOnSpawn - this.modifiers.decreasedChanceToApplyFreezeOnSpawn)) {
    //            freezeTurns++;
    //        }
    //        if (freezeTurns > 0) {
    //            this.applyStun({ chance: 100, turns: freezeTurns, type: 'Stun', flavour: 'Freeze' }, this.target);
    //        }

    //        let sleepTurns = this.modifiers.applySleepOnSpawn;
    //        if (rollPercentage(this.modifiers.increasedChanceToApplySleepOnSpawn - this.modifiers.decreasedChanceToApplySleepOnSpawn)) {
    //            sleepTurns++;
    //        }
    //        if (sleepTurns > 0) {
    //            this.applySleep({ chance: 100, turns: sleepTurns, type: 'Sleep' }, this.target, this.game.normalAttack);
    //        }

    //        let shockStacks = this.modifiers.applyShockOnSpawn;
    //        if (rollPercentage(this.modifiers.increasedChanceToApplyShockOnSpawn - this.modifiers.decreasedChanceToApplyShockOnSpawn)) {
    //            shockStacks++;
    //        }
    //        for (var i = 0; i < shockStacks; i++) {
    //            this.applyModifierEffect(shockEffect, this.target, this.game.normalAttack);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplyFrostburnOnSpawn - this.modifiers.decreasedChanceToApplyFrostburnOnSpawn)) {
    //            this.applyModifierEffect(frostBurnEffect, this.target, this.game.normalAttack);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplySlowOnSpawn - this.modifiers.decreasedChanceToApplySlowOnSpawn)) {
    //            this.applyModifierEffect(new SlowEffect(25, 3), this.target, this.game.normalAttack);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyPoisonOnSpawn)) {
    //            this.applyDOT(poisonEffect, this.target, 0);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplyDeadlyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyDeadlyPoisonOnSpawn)) {
    //            this.applyDOT(deadlyPoisonEffect, this.target, 0);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplyBleedOnSpawn - this.modifiers.decreasedChanceToApplyBleedOnSpawn)) {
    //            this.applyDOT({ chance: 100, procs: 20, interval: 500, type: 'DOT', subtype: 'Bleed', damage: [{ "roll": false, "character": "Attacker", "maxRoll": "MaxHit", "maxPercent": 100 }] }, this.target, 0);
    //        }

    //        if (rollPercentage(this.modifiers.increasedChanceToApplyBurnOnSpawn - this.modifiers.decreasedChanceToApplyBurnOnSpawn)) {
    //            this.applyDOT(burnEffect, this.target, 0);
    //        }

    //        // Monster types
    //        const types = MonsterTypeManager.getActiveTypesAsArray();
    //        for (var i = 0; i < types.length; i++) {
    //            const type = types[i];

    //            const applyTraitInfinite = rollPercentage(
    //                this.modifiers[type.modifierPropertyNames.chanceToApplyTraitInfiniteOnSpawn]
    //            );
    //            //const applyTraitInfinite = rollPercentage(
    //            //    this.modifiers[type.modifierPropertyNames.increasedChanceToApplyTraitInfiniteOnSpawn]
    //            //    - this.modifiers[type.modifierPropertyNames.decreasedChanceToApplyTraitInfiniteOnSpawn]
    //            //);
    //            if (applyTraitInfinite) {
    //                const effectData: CustomEffectData = game.customModifiersInMelvor.customModifierEffects[type.effectPropertyObjectNames.traitApplicationCustomModifierEffect];
    //                this.applyModifierEffect(effectData, this.target, game.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack]);
    //            } else {
    //                if (this.modifiers[type.modifierPropertyNames.applyTraitTurnsOnSpawn] > 0) {
    //                    this.applyStackingEffect(this.game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect], this.target, this.modifiers[type.modifierPropertyNames.applyTraitTurnsOnSpawn]);
    //                }
    //            }
    //        }
    //    });
    //}

    /**
     * Whenever the amount of HP changes, check the death mark threshold.
     * The original function doesn't really do anything aside from changing hp, only setting some "rerender/recompute" flags,
     * so it's pretty much perfect (it's, btw, the function called by the damage-function, to actually go and change the hp)
     *
     * Not needed anymore, as it will be handled through combat effects instead
     */
    //private patchAddHitpoints() {
    //    // @ts-ignore You can actually patch base classes no problem
    //    this.context.patch(Character, "addHitpoints").after(function () {
    //        // If death marks are applied and hitpoints are under certain threshold, execute character
    //        if (this.modifiers.deathMark > 0 && this.hitpoints <= ModifierConstants.DEATH_MARK_MAX_FLAT_HP) {
    //            const effect = this.stackingEffect.get(game.customModifiersInMelvor.stackingEffects.deathMarkEffect);
    //            if (effect === undefined) {
    //                CmimUtils.error("[Character.addHitpoints] Death mark effect not found on game object");
    //            }
    //            else {
    //                if (this.hitpointsPercent < Math.min(ModifierConstants.DEATH_MARK_MAX_PERCENT, effect.stacks)) {
    //                    // If the one who got death mark triggered on them was the player,
    //                    // then build a notification for them, so they know it was death mark that killed them
    //                    if (this instanceof Player) {
    //                        const notification: NotificationData = {
    //                            media: ModConstants.ERROR_ICON_MEDIA_PATH,
    //                            quantity: 1,
    //                            text: getLangString(ModifierConstants.DEATH_MARK_NOTIFICATION_TEXT_LANGUAGE_ID),
    //                            isImportant: true,
    //                            isError: false
    //                        };
    //                        this.game.notifications.addNotification(
    //                            new ErrorNotification(ModifierConstants.DEATH_MARK_NOTIFICATION_ID),
    //                            notification
    //                        );
    //                    }

    //                    // Flat out set hp to zero
    //                    // TODO: Presumably have to go with `damage`(or a method before, should be easy to do with pure damage ignoring resistance ?), so rebirth chance has a chance to proc
    //                    this.hitpoints = 0;
    //                }
    //            }
    //        }
    //    });
    //}

    /**
     * "On hit effect" means both literal "on hit modifiers" but also stuff like "roll to poison, only because you actually hit the enemy"
     */
    //private patchApplyOnHitEffects() {
    //    this.context.patch(Player, "onHit").after(function (returnValue: void) {
    //        CustomModifiersManager.onCharacterHit(this);
    //    });

    //    this.context.patch(Enemy, "onHit").after(function (returnValue: void) {
    //        CustomModifiersManager.onCharacterHit(this);
    //    });
    //}

    /**
     * Not needed anymore, as doable through combat effects
     * @param entity
     */
    //private static onCharacterHit(entity: Character): void {
    //    // If the target has a barrier up, no on hit stuff can apply
    //    if (entity.target.barrier > 0) {
    //        return;
    //    }

    //    // Death mark
    //    if (game.customModifiersInMelvor.stackingEffects.deathMarkEffect !== undefined) {
    //        let deathMarkStacks = entity.modifiers.increasedDeathMarkOnHit;
    //        if (rollPercentage(entity.modifiers.increasedChanceToApplyStackOfDeathMark - entity.modifiers.decreasedChanceToApplyStackOfDeathMark)) {
    //            deathMarkStacks++;
    //        }
    //        if (deathMarkStacks > 0) {
    //            if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
    //                entity.applyStackingEffect(game.customModifiersInMelvor.stackingEffects.deathMarkEffect, entity.target, deathMarkStacks);
    //                entity.target.rendersRequired.effects = true;
    //            }
    //        }
    //    }

    //    // Monster type traits
    //    const types = MonsterTypeManager.getActiveTypesAsArray();
    //    for (var i = 0; i < types.length; i++) {
    //        const type = types[i];

    //        // @ts-ignore - collection keys
    //        let turns = entity.modifiers[type.modifierPropertyNames.applyTraitTurns];
    //        // @ts-ignore - collection keys
    //        if (rollPercentage(entity.modifiers[type.modifierPropertyNames.chanceToApplyTrait])) {
    //            turns++;
    //        }
    //        //if (rollPercentage(entity.modifiers[type.modifierPropertyNames.increasedChanceToApplyTrait] - entity.modifiers[type.modifierPropertyNames.decreasedChanceToApplyTrait])) {
    //        //    turns++;
    //        //}

    //        if (turns > 0) {
    //            entity.applyStackingEffect(entity.game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect], entity.target, turns);
    //            entity.target.rendersRequired.effects = true;
    //        }
    //    }

    //    // Bleed
    //    if (rollPercentage(entity.modifiers.increasedChanceToApplyBleed - entity.modifiers.decreasedChanceToApplyBleed)) {
    //        entity.applyDOT({ chance: 100, procs: 20, interval: 500, type: 'DOT', subtype: 'Bleed', damage: [{ "roll": false, "character": "Attacker", "maxRoll": "MaxHit", "maxPercent": 100 }] }, entity.target, 0);
    //    }
    //}

    /**
     * Patch new min hit changing modifiers (both percentage and flat)
     *
     * REMARK: I'm not sure about being able to provide result of before patch to original call, so
     * instead just used after patch as usual, repeating the "clampValue" call at the end to avoid invalid values
     */
    private patchMinHitCalculations() {
        this.context.patch(Player, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculationHelper.getPlayerMinHitModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
        this.context.patch(Enemy, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculationHelper.getEnemyMinHitModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
    }

    /**
     * Patches new max hit changing modifiers (both percentage and flat) into base logic
     */
    private patchMaxHitCalculations() {
        this.context.patch(Player, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            return maxHitModifier += CustomModifiersCalculationHelper.getPlayerMaxHitPercentageModification(this);
        });
        this.context.patch(Enemy, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            return maxHitModifier += CustomModifiersCalculationHelper.getEnemyMaxHitPercentageModification(this);
        });

        this.context.patch(Player, "modifyMaxHit").after(function (maxHit) {
            maxHit += CustomModifiersCalculationHelper.getPlayerMaxHitFlatModification(this);

            return Math.max(maxHit, 1);
        });
        this.context.patch(Enemy, "modifyMaxHit").after(function (maxHit) {
            maxHit += CustomModifiersCalculationHelper.getEnemyMaxHitFlatModification(this);

            return Math.max(maxHit, 1);
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
        this.context.patch(Player, "getDamageModifiers").after(function (totalModifier: number, target: Character) {
            return totalModifier += CustomModifiersCalculationHelper.getPlayerDamagePercentageModification(this, target);
        });
        this.context.patch(Enemy, "getDamageModifiers").after(function (totalModifier: number, target: Character) {
            return totalModifier += CustomModifiersCalculationHelper.getEnemyDamagePercentageModification(this, target);
        });
    }

    /**
     * Patches new accuracy (percentage) changing modifiers into base logic
     */
    private patchAccuracyCalculations() {
        /**
         * @param returnValue the current flat accuracy, afer 'modifyAccuracy' ran (which includes several percentage based modifiers)
         * @param accuracy the accuracy originally provided to the method, the value we use to calculate our percentage boosts with,
         *                 as there is no flat accuracy bonus between the start of the method and the addition of percentage based boosts
         */
        this.context.patch(Player, "modifyAccuracy").after(function (returnValue, accuracy) {
            return returnValue += CustomModifiersCalculationHelper.getPlayerAccuracyFlatModification(this, accuracy);
        });
        this.context.patch(Enemy, "modifyAccuracy").after(function (returnValue, accuracy) {
            return returnValue += CustomModifiersCalculationHelper.getEnemyAccuracyFlatModification(this, accuracy);
        });
    }

    /**
     * Patches new damage reduction (flat percentage) changing modifiers into base logic
     */
    private patchDamageReductionCalculations() {
        // Btw, the method calling this one takes care of flooring whatever value we calculate
        // May as well keep the following in, which I noted down while checking how to add the custom modifiers to the calculation
        // #region Some explanation of what the base game does
        // 1) First, a bunch of additive bonuses are added with each other
        // 2) Then, both Player and Enemy call "super.modifyDamageReduction"
        // 2.1) In there, some more additive bonus are added
        // 2.2) Then, the total flat DR% summed up at this point is multiplicated by "increasedDamageReductionPercent - decreasedDamageReductionPercent"
        // 2.3) THEN, that result is once again multiplicated, this time by "halveDamageReduction" (if set, that is)
        // 2.4) That is the final result for the Enemy class
        // 3) However, with the player, the following two things happen too
        // 3.1) "increasedDamageReductionWithActivePrayer" is ADDITIVELY added to DR% (this was a bug and has since been patched)
        // 3.2) Then, the final DR% at that point in time is multiplied by combat triangle (which based on mode may define something like "You are only 10% as accurate against monsters strong to your attack style")
        // based on combat triangle, which has to be repeated for the overall custom DR% calculated for this case
        // #endregion

        this.context.patch(Player, "modifyResistance").after(function (returnValue, damageType: DamageType, resistance: number) {
            return returnValue += CustomModifiersCalculationHelper.getPlayerDamageReductionFlatModification(this, damageType);
        });
        this.context.patch(Enemy, "modifyResistance").after(function (returnValue, damageType: DamageType, resistance: number) {
            return returnValue += CustomModifiersCalculationHelper.getEnemyDamageReductionFlatModification(this, damageType);
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
                    this.modifiers.damagePreventionThreshold
                    + this.modifiers.thievingDamagePreventionThreshold
                );
            //    const threshold: number = numberMultiplier * (this.modifiers.increasedGlobalDamagePreventionThreshold
            //        - this.modifiers.decreasedGlobalDamagePreventionThreshold
            //        + this.modifiers.increasedThievingDamagePreventionThreshold
            //        - this.modifiers.decreasedThievingDamagePreventionThreshold);

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
                entity.modifiers.damagePreventionThreshold
                + entity.modifiers.combatBarrierDamagePreventionThreshold
            );
            //const threshold = numberMultiplier * (entity.modifiers.increasedGlobalDamagePreventionThreshold
            //    - entity.modifiers.decreasedGlobalDamagePreventionThreshold
            //    + entity.modifiers.increasedBarrierDamagePreventionThreshold
            //    - entity.modifiers.decreasedBarrierDamagePreventionThreshold);
            if (threshold > 0 && amount < threshold) {
                return true;
            }
        }

        // Otherwise, no barrier is active, so we evaluate the non-barrier modifiers
        const threshold = numberMultiplier * (
            entity.modifiers.damagePreventionThreshold
            + entity.modifiers.combatDamagePreventionThreshold
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
                game.modifiers.damagePreventionThreshold
                + game.modifiers.thievingDamagePreventionThreshold
            );
            //const threshold: number = numberMultiplier * (game.modifiers.increasedGlobalDamagePreventionThreshold
            //    - game.modifiers.decreasedGlobalDamagePreventionThreshold
            //    + game.modifiers.increasedThievingDamagePreventionThreshold
            //    - game.modifiers.decreasedThievingDamagePreventionThreshold);

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