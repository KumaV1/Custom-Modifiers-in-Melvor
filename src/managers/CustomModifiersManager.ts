import { CmimUtils } from '../Utils';
import { ModConstants } from '../constants/ModConstants';
import { ModifierConstants } from '../constants/ModifierConstants';
import { CustomModifiersCalculationHelper } from '../helpers/CustomModifiersCalculationHelper'
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeHelper } from '../helpers/MonsterTypeHelper';
import { MonsterTypeManager } from '../managers/MonsterTypeManager';
import { SettingsManager } from '../managers/SettingsManager';

import { languages } from '../languages';

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
        this.registerSpawnModifiers();
        this.registerOnHitModifiers();
        this.registerDeathMarkModifiers();
        this.registerCombatAreaModifiers();
        this.registerSlayerAreaModifiers();
        this.registerDungeonModifiers();
        this.registerSlayerTaskModifiers();
        this.registerSpellModifiers();
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
        this.patchGame();
        this.patchAddHitpoints();
        this.patchCombatModifiersReset();
        this.patchMonsterTypeAllocation();
        this.patchApplyUniqueSpawnEffects();
        this.patchApplyOnHitEffects();
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
     * Registers modifiers for the given types
     * @param type
     */
    public registerMonsterTypes(types: MonsterTypeDefinition[]): void {
        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            // Create modifiers
            this.registerMonsterTypeModifierData(type);

            // Create and register custom effect and stacking effect data
            const customEffectData: CustomEffectData = MonsterTypeHelper.createTraitCustomEffectDataInfiniteObject(type);
            game.customModifiersInMelvor.customModifierEffects[type.effectPropertyObjectNames.traitApplicationCustomModifierEffect] = customEffectData;

            game.registerDataPackage(MonsterTypeHelper.createTraitStackingEffectGamePackage(type));
            const stackingEffect = game.stackingEffects.getObjectByID(`${ModConstants.MOD_NAMESPACE}:${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`);
            if (stackingEffect === undefined) {
                CmimUtils.error(`Failed to find stacking effect for monster type '${type.singularName}' after registering it`);
            } else {
                game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect] = stackingEffect;
            }

            game.registerDataPackage(MonsterTypeHelper.createTraitCustomModifierEffectAttackGamePackage(type, customEffectData));
            const specialAttack = game.specialAttacks.getObjectByID(`${ModConstants.MOD_NAMESPACE}:${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX}`);
            if (specialAttack === undefined) {
                CmimUtils.error(`Failed to find special attack for monster type '${type.singularName}' after registering it`);
            } else {
                game.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack] = specialAttack;
            }
        }
    }

    /**
     * Registers entries in the global modifierData object
     * @param type
     */
    public registerMonsterTypeModifierData(type: MonsterTypeDefinition): void {
        Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {
            //console.log(`Processing modifierProperty: ${key} | ${value}`);

            // @ts-ignore We know the keys (property names) match the enum expected as parameter
            const obj = MonsterTypeHelper.createModifierDataObject(key, value);

            // @ts-ignore implicit 'any' type error
            // we know though that it is an object to which we want to add a property
            modifierData[value] = obj;
        });
    }

    // #region Modifier Registration

    private registerSkillModifiers() {
        modifierData.increasedGlobalSkillXPPerLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalSkillXPPerLevel');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalSkillXPPerLevel,
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedGlobalSkillXPPerLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalSkillXPPerLevel');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalSkillXPPerLevel,
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_increasedSkillXPPerSkillLevel,
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_decreasedSkillXPPerSkillLevel,
            isSkill: true,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatGlobalSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatGlobalSkillXP');
            },
            description: languages.en.MODIFIER_DATA_increasedFlatGlobalSkillXP,
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatGlobalSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatGlobalSkillXP');
            },
            description: languages.en.MODIFIER_DATA_decreasedFlatGlobalSkillXP,
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatSkillXP');
            },
            description: languages.en.MODIFIER_DATA_increasedFlatSkillXP,
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatSkillXP');
            },
            description: languages.en.MODIFIER_DATA_decreasedFlatSkillXP,
            isSkill: true,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatGlobalSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel,
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatGlobalSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel,
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel,
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel');
            },
            description: languages.en.MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel,
            isSkill: true,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedThievingDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedThievingDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedThievingDamagePreventionThreshold,
            isSkill: false,
            isNegative: false,
            tags: ['thieving']
        };
        modifierData.decreasedThievingDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedThievingDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedThievingDamagePreventionThreshold,
            isSkill: false,
            isNegative: true,
            tags: ['thieving']
        };
    }

    /**
     *
     */
    private registerSpawnModifiers() {
        modifierData.increasedChanceToApplySlowOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplySlowOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplySlowOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplySlowOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyStunOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyStunOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyStunOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.applyStunOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applyStunOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applyStunOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyStunOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyDeadlyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyDeadlyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyAfflictionOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyAfflictionOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.applyAfflictionOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applyAfflictionOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applyAfflictionOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyBleedOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyBleedOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyBurnOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyBurnOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyFreezeOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyFreezeOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.applyFreezeOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applyFreezeOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applyFreezeOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyFrostburnOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyFrostburnOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyShockOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyShockOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyShockOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyShockOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.applyShockOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applyShockOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applyShockOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplySleepOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplySleepOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplySleepOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplySleepOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.applySleepOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applySleepOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applySleepOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerOnHitModifiers() {
        modifierData.increasedChanceToApplyBleed = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyBleed');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyBleed,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyBleed = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyBleed');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyBleed,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerDeathMarkModifiers() {
        modifierData.deathMark = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_deathMark');
            },
            description: languages.en.MODIFIER_DATA_deathMark,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDeathMarkOnHit = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDeathMarkOnHit');
            },
            description: languages.en.MODIFIER_DATA_increasedDeathMarkOnHit,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyStackOfDeathMark = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyStackOfDeathMark = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDeathMarkImmunity = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDeathMarkImmunity');
            },
            description: languages.en.MODIFIER_DATA_increasedDeathMarkImmunity,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDeathMarkImmunity = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDeathMarkImmunity');
            },
            description: languages.en.MODIFIER_DATA_decreasedDeathMarkImmunity,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.applyDeathMarkOnSpawn = {
            get langDescription() {
                return '${value}'
            },
            modifyValue: (value: number) => {
                return CmimUtils.getModifierDescription(value, 'applyDeathMarkOnSpawn');
            },
            description: languages.en.MODIFIER_DATA_applyDeathMarkOnSpawn,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
    }

    private registerCombatAreaModifiers() {
        modifierData.increasedMaxHitPercentToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    private registerSlayerAreaModifiers() {
        modifierData.increasedMaxHitPercentToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    private registerDungeonModifiers() {
        modifierData.increasedMaxHitPercentToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };

        modifierData.increasedDamageReductionAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    private registerSlayerTaskModifiers() {
        modifierData.increasedMaxHitPercentToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedFlatMinHitToSlayerTasks,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerSpellModifiers() {
        modifierData.increasedDamageTakenFromAirSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromAirSpells');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageTakenFromAirSpells,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromAirSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromAirSpells');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageTakenFromAirSpells,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromWaterSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromWaterSpells');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageTakenFromWaterSpells,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromWaterSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromWaterSpells');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageTakenFromWaterSpells,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromEarthSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromEarthSpells');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageTakenFromEarthSpells,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromEarthSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromEarthSpells');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageTakenFromEarthSpells,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromFireSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromFireSpells');
            },
            description: languages.en.MODIFIER_DATA_increasedDamageTakenFromFireSpells,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromFireSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromFireSpells');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamageTakenFromFireSpells,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerBossModifiers() {
        modifierData.increasedMaxHitPercentAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_increasedMaxHitPercentAgainstBosses,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedMaxHitFlatAgainstBosses,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedFlatMinHitAgainstBosses,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedFlatMinHitAgainstBosses,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses');
            },
            description: languages.en.MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    /** Modifiers that don't fit any of the previous groups */
    private registerGeneralModifiers() {
        modifierData.increasedChanceToReduceAttackDamageToZero = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero');
            },
            description: languages.en.MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToReduceAttackDamageToZero = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero');
            },
            description: languages.en.MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageFlatWhileTargetHasMaxHP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageFlatWhileTargetHasMaxHP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamagePercentWhileTargetHasMaxHP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP');
            },
            description: languages.en.MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamagePercentWhileTargetHasMaxHP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP');
            },
            description: languages.en.MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageFlatIgnoringDamageReduction = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageFlatIgnoringDamageReduction = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedGlobalDamagePreventionThreshold,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedDamagePreventionThreshold,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedDamagePreventionThreshold,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedBarrierDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedBarrierDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_increasedBarrierDamagePreventionThreshold,
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedBarrierDamagePreventionThreshold = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: languages.en.MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold,
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
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
        this.context.patch(Skill, "getXPModifier").after(function (currentAmount) {
            return currentAmount += CustomModifiersCalculationHelper.getPercentagetXpModification(this);
        });

        /**
         * Add flat xp modifiers
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "modifyXP").after(function (currentAmount) {
            return currentAmount += CustomModifiersCalculationHelper.getFlatXpModification(this);
        });
    }

    /**
     *
     */
    private patchGame() {
        /**
         * Register custom effects and attacks as properties on the Game object (akin to e.g. "unholyMarkEffect"),
         * for easy and quick access
         */
        this.context.patch(Game, "postDataRegistration").after(function () {
            const deathMarkEffect = this.stackingEffects.getObjectByID(ModifierConstants.DEATH_MARK_EFFECT_FULL_ID);
            if (deathMarkEffect) {
                this.customModifiersInMelvor.stackingEffects.deathMarkEffect = deathMarkEffect;
            }

            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];

                const stackingEffect = this.stackingEffects.getObjectByID(`${ModConstants.MOD_NAMESPACE}:${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`);
                if (stackingEffect) {
                    this.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect] = stackingEffect;
                }

                const traitApplyingAttack = this.specialAttacks.getObjectByID(`${ModConstants.MOD_NAMESPACE}:${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX}`);
                if (traitApplyingAttack) {
                    this.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack] = traitApplyingAttack;
                }
            }
        });
    }

    /**
     *
     */
    private patchCombatModifiersReset() {
        /**
         * This method is called during initialization of both player and enemies, as quick safety measure for a "clean state" before setting everything up. (to avoid undefined/null/nan)
         * However, as we do not actually add our properties to Melvor's definition of the class, the dynamic build up doesn't include our properties,
         * so we handle those ourselves. Should in theory take care of all instances, so including cases such as area modifiers
         *
         * REMARK: We don't have to do the same for player modifiers actually, as those are either initialized as 0 by default,
         * or "getSkillModifierValue" parses undefined to 0 anyway
         */
        this.context.patch(CombatModifiers, "reset").after(function () {
            this.increasedChanceToReduceAttackDamageToZero ??= 0;
            this.decreasedChanceToReduceAttackDamageToZero ??= 0;
            this.increasedDamageFlatWhileTargetHasMaxHP ??= 0;
            this.decreasedDamageFlatWhileTargetHasMaxHP ??= 0;
            this.increasedDamagePercentWhileTargetHasMaxHP ??= 0;
            this.decreasedDamagePercentWhileTargetHasMaxHP ??= 0;
            this.increasedDamageFlatIgnoringDamageReduction ??= 0;
            this.decreasedDamageFlatIgnoringDamageReduction ??= 0;
            this.increasedGlobalDamagePreventionThreshold ??= 0;
            this.decreasedGlobalDamagePreventionThreshold ??= 0;
            this.increasedDamagePreventionThreshold ??= 0;
            this.decreasedDamagePreventionThreshold ??= 0;
            this.increasedBarrierDamagePreventionThreshold ??= 0;
            this.decreasedBarrierDamagePreventionThreshold ??= 0;

            this.increasedChanceToApplySlowOnSpawn ??= 0;
            this.decreasedChanceToApplySlowOnSpawn ??= 0;
            this.increasedChanceToApplyStunOnSpawn ??= 0;
            this.decreasedChanceToApplyStunOnSpawn ??= 0;
            this.applyStunOnSpawn ??= 0;
            this.increasedChanceToApplyPoisonOnSpawn ??= 0;
            this.decreasedChanceToApplyPoisonOnSpawn ??= 0;
            this.increasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
            this.decreasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
            this.increasedChanceToApplyAfflictionOnSpawn ??= 0;
            this.decreasedChanceToApplyAfflictionOnSpawn ??= 0;
            this.applyAfflictionOnSpawn ??= 0;
            this.increasedChanceToApplyBleedOnSpawn ??= 0;
            this.decreasedChanceToApplyBleedOnSpawn ??= 0;
            this.increasedChanceToApplyBurnOnSpawn ??= 0;
            this.decreasedChanceToApplyBurnOnSpawn ??= 0;
            this.increasedChanceToApplyFreezeOnSpawn ??= 0;
            this.decreasedChanceToApplyFreezeOnSpawn ??= 0;
            this.applyFreezeOnSpawn ??= 0;
            this.increasedChanceToApplyFrostburnOnSpawn ??= 0;
            this.decreasedChanceToApplyFrostburnOnSpawn ??= 0;
            this.increasedChanceToApplyShockOnSpawn ??= 0;
            this.decreasedChanceToApplyShockOnSpawn ??= 0;
            this.applyShockOnSpawn ??= 0;
            this.increasedChanceToApplySleepOnSpawn ??= 0;
            this.decreasedChanceToApplySleepOnSpawn ??= 0;
            this.applySleepOnSpawn ??= 0;

            this.increasedChanceToApplyBleed ??= 0;
            this.decreasedChanceToApplyBleed ??= 0;

            this.deathMark ??= 0;
            this.increasedDeathMarkOnHit ??= 0;
            this.increasedChanceToApplyStackOfDeathMark ??= 0;
            this.decreasedChanceToApplyStackOfDeathMark ??= 0;
            this.increasedDeathMarkImmunity ??= 0;
            this.decreasedDeathMarkImmunity ??= 0;
            this.applyDeathMarkOnSpawn ??= 0;

            this.increasedDamageTakenFromAirSpells ??= 0;
            this.decreasedDamageTakenFromAirSpells ??= 0;
            this.increasedDamageTakenFromWaterSpells ??= 0;
            this.decreasedDamageTakenFromWaterSpells ??= 0;
            this.increasedDamageTakenFromEarthSpells ??= 0;
            this.decreasedDamageTakenFromEarthSpells ??= 0;
            this.increasedDamageTakenFromFireSpells ??= 0;
            this.decreasedDamageTakenFromFireSpells ??= 0;

            // Ensure 0 instead of undefined for monster type related modifiers as well
            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];
                Object.entries(type.modifierPropertyNames).forEach(([key, value]) => {
                    // @ts-ignore
                    this[value] ??= 0;
                });
            }
        });
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
                // console.log(`setStatsFromMonster | Checking to see whether or not to apply ${type.modifierPropertyNames.traitApplied}: ${isOfType}`);
                // @ts-ignore - We add is{Type} dynamically
                this[type.isTypePropertyName] = MonsterTypeManager.monsterIsOfType(monster, type.singularName);
            }
        });
    }

    /**
     *
     */
    private patchApplyUniqueSpawnEffects() {
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Character, "applyUniqueSpawnEffects").after(function () {
            // Do not do anything, if functionality has been disabled through mod settings
            if (SettingsManager.getDisableAllOnSpawnModifiers()) {
                return;
            }

            // Static
            if (game.customModifiersInMelvor.stackingEffects.deathMarkEffect !== undefined && this.modifiers.applyDeathMarkOnSpawn > 0) {
                this.applyStackingEffect(game.customModifiersInMelvor.stackingEffects.deathMarkEffect, this.target, this.modifiers.applyDeathMarkOnSpawn);
            }

            let afflictionStacks = this.modifiers.applyAfflictionOnSpawn;
            if (rollPercentage(this.modifiers.increasedChanceToApplyAfflictionOnSpawn - this.modifiers.decreasedChanceToApplyAfflictionOnSpawn)) {
                afflictionStacks++;
            }
            for (var i = 0; i < afflictionStacks; i++) {
                this.applyModifierEffect(afflictionEffect, this.target, this.game.normalAttack);
            }

            let stunTurns = this.modifiers.applyStunOnSpawn;
            if (rollPercentage(this.modifiers.increasedChanceToApplyStunOnSpawn - this.modifiers.decreasedChanceToApplyStunOnSpawn)) {
                stunTurns++;
            }
            if (stunTurns > 0) {
                this.applyStun({ chance: 100, turns: stunTurns, type: 'Stun', flavour: 'Stun' }, this.target);
            }

            let freezeTurns = this.modifiers.applyFreezeOnSpawn;
            if (rollPercentage(this.modifiers.increasedChanceToApplyFreezeOnSpawn - this.modifiers.decreasedChanceToApplyFreezeOnSpawn)) {
                freezeTurns++;
            }
            if (freezeTurns > 0) {
                this.applyStun({ chance: 100, turns: freezeTurns, type: 'Stun', flavour: 'Freeze' }, this.target);
            }

            let sleepTurns = this.modifiers.applySleepOnSpawn;
            if (rollPercentage(this.modifiers.increasedChanceToApplySleepOnSpawn - this.modifiers.decreasedChanceToApplySleepOnSpawn)) {
                sleepTurns++;
            }
            if (sleepTurns > 0) {
                this.applySleep({ chance: 100, turns: sleepTurns, type: 'Sleep' }, this.target, this.game.normalAttack);
            }

            let shockStacks = this.modifiers.applyShockOnSpawn;
            if (rollPercentage(this.modifiers.increasedChanceToApplyShockOnSpawn - this.modifiers.decreasedChanceToApplyShockOnSpawn)) {
                shockStacks++;
            }
            for (var i = 0; i < shockStacks; i++) {
                this.applyModifierEffect(shockEffect, this.target, this.game.normalAttack);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplyFrostburnOnSpawn - this.modifiers.decreasedChanceToApplyFrostburnOnSpawn)) {
                this.applyModifierEffect(frostBurnEffect, this.target, this.game.normalAttack);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplySlowOnSpawn - this.modifiers.decreasedChanceToApplySlowOnSpawn)) {
                this.applyModifierEffect(new SlowEffect(25, 3), this.target, this.game.normalAttack);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyPoisonOnSpawn)) {
                this.applyDOT(poisonEffect, this.target, 0);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplyDeadlyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyDeadlyPoisonOnSpawn)) {
                this.applyDOT(deadlyPoisonEffect, this.target, 0);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplyBleedOnSpawn - this.modifiers.decreasedChanceToApplyBleedOnSpawn)) {
                this.applyDOT({ chance: 100, procs: 20, interval: 500, type: 'DOT', subtype: 'Bleed', damage: [{ "roll": false, "character": "Attacker", "maxRoll": "MaxHit", "maxPercent": 100 }] }, this.target, 0);
            }

            if (rollPercentage(this.modifiers.increasedChanceToApplyBurnOnSpawn - this.modifiers.decreasedChanceToApplyBurnOnSpawn)) {
                this.applyDOT(burnEffect, this.target, 0);
            }

            // Monster types
            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];

                const applyTraitInfinite = rollPercentage(
                    this.modifiers[type.modifierPropertyNames.increasedChanceToApplyTraitInfiniteOnSpawn]
                    - this.modifiers[type.modifierPropertyNames.decreasedChanceToApplyTraitInfiniteOnSpawn]
                );
                if (applyTraitInfinite) {
                    const effectData: CustomEffectData = game.customModifiersInMelvor.customModifierEffects[type.effectPropertyObjectNames.traitApplicationCustomModifierEffect];
                    this.applyModifierEffect(effectData, this.target, game.customModifiersInMelvor.specialAttacks[type.effectPropertyObjectNames.traitApplicationCustomModifierEffectAttack]);
                } else {
                    if (this.modifiers[type.modifierPropertyNames.applyTraitTurnsOnSpawn] > 0) {
                        this.applyStackingEffect(this.game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect], this.target, this.modifiers[type.modifierPropertyNames.applyTraitTurnsOnSpawn]);
                    }
                }
            }
        });
    }

    /**
     * Whenever the amount of HP changes, check the death mark threshold.
     * The original function doesn't really do anything aside from changing hp, only setting some "rerender/recompute" flags,
     * so it's pretty much perfect (it's, btw, the function called by the damage-function, to actually go and change the hp)
     */
    private patchAddHitpoints() {
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Character, "addHitpoints").after(function () {
            // If death marks are applied and hitpoints are under certain threshold, execute character
            if (this.modifiers.deathMark > 0 && this.hitpoints <= ModifierConstants.DEATH_MARK_MAX_FLAT_HP) {
                const effect = this.stackingEffect.get(game.customModifiersInMelvor.stackingEffects.deathMarkEffect);
                if (effect === undefined) {
                    CmimUtils.error("[Character.addHitpoints] Death mark effect not found on game object");
                }
                else {
                    const maxHpPercentage = (this.hitpoints / this.stats.maxHitpoints) * 100;
                    if (maxHpPercentage < Math.min(ModifierConstants.DEATH_MARK_MAX_PERCENT, effect.stacks)) {
                        // If the one who got death mark triggered on them was the player,
                        // then build a notification for them, so they know it was death mark that killed them
                        if (this instanceof Player) {
                            const notification: NotificationData = {
                                media: ModConstants.ERROR_ICON_MEDIA_PATH,
                                quantity: 1,
                                text: getLangString(ModifierConstants.DEATH_MARK_NOTIFICATION_TEXT_LANGUAGE_ID),
                                isImportant: true,
                                isError: false
                            };
                            this.game.notifications.addNotification(
                                new ErrorNotification(ModifierConstants.DEATH_MARK_NOTIFICATION_ID),
                                notification
                            );
                        }

                        // Flat out set hp to zero
                        this.hitpoints = 0;
                    }
                }
            }
        });
    }

    /**
     * "On hit effect" means both literal "on hit modifiers" but also stuff like "roll to poison, only because you actually hit the enemy"
     */
    private patchApplyOnHitEffects() {
        this.context.patch(Player, "onHit").after(function (returnValue: void) {
            CustomModifiersManager.onCharacterHit(this);
        });

        this.context.patch(Enemy, "onHit").after(function (returnValue: void) {
            CustomModifiersManager.onCharacterHit(this);
        });
    }

    /**
     *
     * @param entity
     */
    private static onCharacterHit(entity: Character): void {
        // do some custom stuff inbetween
        if (entity.target.barrier <= 0) {
            // Death mark
            if (game.customModifiersInMelvor.stackingEffects.deathMarkEffect !== undefined) {
                let deathMarkStacks = entity.modifiers.increasedDeathMarkOnHit;
                if (rollPercentage(entity.modifiers.increasedChanceToApplyStackOfDeathMark - entity.modifiers.decreasedChanceToApplyStackOfDeathMark)) {
                    deathMarkStacks++;
                }
                if (deathMarkStacks > 0) {
                    if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
                        entity.applyStackingEffect(game.customModifiersInMelvor.stackingEffects.deathMarkEffect, entity.target, deathMarkStacks);
                        entity.target.rendersRequired.effects = true;
                    }
                }
            }

            // Monster type traits
            const types = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];

                // @ts-ignore - collection keys
                let turns = entity.modifiers[type.modifierPropertyNames.applyTraitTurns];
                // @ts-ignore - collection keys
                if (rollPercentage(entity.modifiers[type.modifierPropertyNames.increasedChanceToApplyTrait] - entity.modifiers[type.modifierPropertyNames.decreasedChanceToApplyTrait])) {
                    turns++;
                }

                if (turns > 0) {
                    entity.applyStackingEffect(entity.game.customModifiersInMelvor.stackingEffects[type.effectPropertyObjectNames.traitApplicationStackingEffect], entity.target, turns);
                        entity.target.rendersRequired.effects = true;
                    }
                }

            // Bleed
            if (rollPercentage(entity.modifiers.increasedChanceToApplyBleed - entity.modifiers.decreasedChanceToApplyBleed)) {
                entity.applyDOT({ chance: 100, procs: 20, interval: 500, type: 'DOT', subtype: 'Bleed', damage: [{ "roll": false, "character": "Attacker", "maxRoll": "MaxHit", "maxPercent": 100 }] }, entity.target, 0);
            }
        }
    }

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

        this.context.patch(Player, "modifyDamageReduction").after(function (returnValue) {
            return returnValue += CustomModifiersCalculationHelper.getPlayerDamageReductionFlatModification(this);
        });
        this.context.patch(Enemy, "modifyDamageReduction").after(function (returnValue) {
            return returnValue += CustomModifiersCalculationHelper.getEnemyDamageReductionFlatModification(this);
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
                const threshold: number = numberMultiplier * (this.modifiers.increasedGlobalDamagePreventionThreshold
                    - this.modifiers.decreasedGlobalDamagePreventionThreshold
                    + this.modifiers.increasedThievingDamagePreventionThreshold
                    - this.modifiers.decreasedThievingDamagePreventionThreshold);

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
            const threshold = numberMultiplier * (entity.modifiers.increasedGlobalDamagePreventionThreshold
                - entity.modifiers.decreasedGlobalDamagePreventionThreshold
                + entity.modifiers.increasedBarrierDamagePreventionThreshold
                - entity.modifiers.decreasedBarrierDamagePreventionThreshold);
            if (threshold > 0 && amount < threshold) {
                return true;
            }
        }

        // Otherwise, no barrier is active, so we evaluate the non-barrier modifiers
        const threshold = numberMultiplier * (entity.modifiers.increasedGlobalDamagePreventionThreshold
            - entity.modifiers.decreasedGlobalDamagePreventionThreshold
            + entity.modifiers.increasedDamagePreventionThreshold
            - entity.modifiers.decreasedDamagePreventionThreshold);
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
            const threshold: number = numberMultiplier * (game.modifiers.increasedGlobalDamagePreventionThreshold
                - game.modifiers.decreasedGlobalDamagePreventionThreshold
                + game.modifiers.increasedThievingDamagePreventionThreshold
                - game.modifiers.decreasedThievingDamagePreventionThreshold);

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