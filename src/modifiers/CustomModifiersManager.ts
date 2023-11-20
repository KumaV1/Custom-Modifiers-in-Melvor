﻿import { Constants } from '../Constants';
import { Constants as ModifierConstants } from './Constants';
import { MonsterType } from './monsterTyping/MonsterType';
import { MonsterTypeMappingManager } from './monsterTyping/MonsterTypeMappingManager';
import { CustomModifiersCalculator } from './CustomModifiersCalculator'
import { MonsterTypeHelper } from './monsterTyping/MonsterTypeHelper';
import { MonsterTypeModifierType } from './monsterTyping/MonsterTypeModifierType';

/**
 * Patches different sections of the code, in order to integrate custom modifiers
 * Check "./definitions" for typescript intellisense and not throwing errors
 */
export class CustomModifiersManager {
    constructor(private readonly context: Modding.ModContext) { }

    /**
     * Registers all custom modifers, so they are known by the game
     */
    public registerModifiers() {
        this.registerSkillModifiers();
        this.registerSpawnModifiers();
        this.registerDeathMarkModifiers();
        this.registerCombatAreaModifiers();
        this.registerSlayerAreaModifiers();
        this.registerDungeonModifiers();
        this.registerSlayerTaskModifiers();
        this.registerSpellModifiers();
        this.registerTraitApplicationModifiers();
        this.registerMonsterTypeModifiers();
        this.registerBossModifiers();
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
        this.patchDamageModifierCalculations();
        this.patchAccuracyCalculations();
        this.patchDamageReductionCalculations();
    }


    // #region Modifier Registration

    private registerSkillModifiers() {
        modifierData.increasedGlobalSkillXPPerLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalSkillXPPerLevel');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedGlobalSkillXPPerLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalSkillXPPerLevel');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: true,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatGlobalSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatGlobalSkillXP');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatGlobalSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatGlobalSkillXP');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatSkillXP');
            },
            description: '',
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatSkillXP = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatSkillXP');
            },
            description: '',
            isSkill: true,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatGlobalSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatGlobalSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: [],
        };
        modifierData.increasedFlatSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: true,
            isNegative: false,
            tags: [],
        };
        modifierData.decreasedFlatSkillXPPerSkillLevel = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel');
            },
            description: '',
            isSkill: true,
            isNegative: true,
            tags: [],
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplySlowOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyStunOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyStunOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyStunOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyDeadlyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyDeadlyPoisonOnSpawn = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn');
            },
            description: '',
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
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDeathMarkOnHit = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDeathMarkOnHit');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedChanceToApplyStackOfDeathMark = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedChanceToApplyStackOfDeathMark = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDeathMarkImmunity = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDeathMarkImmunity');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDeathMarkImmunity = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDeathMarkImmunity');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    private registerCombatAreaModifiers() {
        modifierData.increasedMaxHitPercentToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters');
            },
            description: '',
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters');
            },
            description: '',
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };

        modifierData.increasedDamageReductionAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters');
            },
            description: '',
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks');
            },
            description: '',
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
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromAirSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromAirSpells');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromWaterSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromWaterSpells');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromWaterSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromWaterSpells');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromEarthSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromEarthSpells');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromEarthSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromEarthSpells');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.increasedDamageTakenFromFireSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageTakenFromFireSpells');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.decreasedDamageTakenFromFireSpells = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageTakenFromFireSpells');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerTraitApplicationModifiers() {
        modifierData.humanTraitApplied = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_humanTraitApplied');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.dragonTraitApplied = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_dragonTraitApplied');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.undeadTraitApplied = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_undeadTraitApplied');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
    }

    private registerMonsterTypeModifiers() {
        // #region add types
        MonsterTypeMappingManager.registerTypeIfNotExist(MonsterType.Human, "Humans", ["melvorD:BlackKnight",
            "melvorD:ConfusedPirate",
            "melvorD:FrozenArcher",
            "melvorD:Pirate",
            "melvorD:FirstMate",
            "melvorD:JuniorFarmer",
            "melvorD:AdultFarmer",
            "melvorD:MasterFarmer",
            "melvorD:Wizard",
            "melvorD:SteelKnight",
            "melvorD:MithrilKnight",
            "melvorD:AdamantKnight",
            "melvorD:RuneKnight",
            "melvorD:BanditTrainee",
            "melvorD:Bandit",
            "melvorD:BanditLeader",
            "melvorD:DarkWizard",
            "melvorD:MasterWizard",
            "melvorD:ElderWizard",
            "melvorF:Druid",
            "melvorF:Thief",
            "melvorF:Shaman",
            "melvorF:Necromancer",
            "melvorF:Elementalist",
            "melvorF:Paladin",
            "melvorF:Priest",
            "melvorF:WanderingBard",
            "melvorTotH:DarkKnight",
            "melvorAoD:BlindWarrior",
            "melvorAoD:BlindArcher",
            "melvorAoD:BlindMage",
            "melvorAoD:SoulTakerWitch"]);
        MonsterTypeMappingManager.registerTypeIfNotExist(MonsterType.Dragon, "Dragons", ["melvorD:PratTheProtectorOfSecrets",
            "melvorD:GreenDragon",
            "melvorD:BlueDragon",
            "melvorD:RedDragon",
            "melvorD:BlackDragon",
            "melvorF:ElderDragon",
            "melvorF:ChaoticGreaterDragon",
            "melvorF:HuntingGreaterDragon",
            "melvorF:WickedGreaterDragon",
            "melvorF:MalcsTheLeaderOfDragons",
            "melvorF:GreaterSkeletalDragon",
            "melvorTotH:TwinSeaDragonSerpent"]);
        MonsterTypeMappingManager.registerTypeIfNotExist(MonsterType.Undead, "Undead", ["melvorD:PirateCaptain",
            "melvorD:ZombieHand",
            "melvorD:Zombie",
            "melvorD:ZombieLeader",
            "melvorD:Ghost",
            "melvorD:Skeleton",
            "melvorF:UndeadWerewolf",
            "melvorF:CursedLich",
            "melvorF:GreaterSkeletalDragon",
            "melvorTotH:Phantom",
            "melvorTotH:Banshee",
            "melvorTotH:Spectre",
            "melvorTotH:CursedSkeletonWarrior",
            "melvorTotH:Fiozor",
            "melvorAoD:BlindGhost",
            "melvorAoD:Lich",
            "melvorAoD:GhostSailor",
            "melvorAoD:GhostMercenary",
            "melvorAoD:CursedPirateCaptain"]);
        // #endregion

        const types = MonsterTypeMappingManager.getTypes();
        //console.log(`Registering modifiers for following type definitions: ${types}`)

        Object.entries(types).forEach(([key, value]) => {
            console.log(`Processing property ${key}`);
            Object.entries(value.modifierPropertyNames).forEach(([key, value]) => {
                //console.log(`Processing modifierProperty: ${key} | ${value}`);

                // @ts-ignore We know the keys (property names) match the enum expected as parameter
                const obj = MonsterTypeHelper.createModifierDataObject(key, value);
                //console.log(obj);
                // @ts-ignore implicit 'any' type error
                // we know though that it is an object to which we want to add a property
                modifierData[value] = obj;
            });
        });
    }

    /**
     *
     */
    private registerHumanModifiers() {
        modifierData.increasedDamageAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitPercentAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatAgainstHumans');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstHumans');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstHumans');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstHumans');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerDragonModifiers() {
        modifierData.increasedDamageAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitPercentAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatAgainstDragons');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstDragons');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstDragons');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstDragons');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
    }

    /**
     *
     */
    private registerUndeadModifiers() {
        modifierData.increasedDamageAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitPercentAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatAgainstUndead');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstUndead');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstUndead');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstUndead');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedDamageReductionAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedDamageReductionAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedDamageReductionAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedDamageReductionAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitPercentAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMaxHitFlatAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMaxHitFlatAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstBosses');
            },
            modifyValue: multiplyByNumberMultiplier,
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedMinHitBasedOnMaxHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMinHitBasedOnMaxHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedGlobalAccuracyAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedGlobalAccuracyAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses');
            },
            description: '',
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
            return currentAmount += CustomModifiersCalculator.getPercentagetXpModification(this);
        });

        /**
         * Add flat xp modifiers
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "modifyXP").after(function (currentAmount) {
            return currentAmount += CustomModifiersCalculator.getFlatXpModification(this);
        });
    }

    /**
     *
     */
    private patchGame() {
        /**
         * Register custom effects as properties on the Game object (akin to e.g. "unholyMarkEffect")
         */
        this.context.patch(Game, "postDataRegistration").after(function () {
            const effect = this.stackingEffects.getObjectByID(ModifierConstants.DEATH_MARK_EFFECT_FULL_ID);
            if (effect) {
                this.deathMarkEffect = effect;
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
            this.increasedChanceToApplySlowOnSpawn ??= 0;
            this.decreasedChanceToApplySlowOnSpawn ??= 0;
            this.increasedChanceToApplyStunOnSpawn ??= 0;
            this.decreasedChanceToApplyStunOnSpawn ??= 0;
            this.increasedChanceToApplyPoisonOnSpawn ??= 0;
            this.decreasedChanceToApplyPoisonOnSpawn ??= 0;
            this.increasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
            this.decreasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;

            this.deathMark ??= 0;
            this.increasedDeathMarkOnHit ??= 0;
            this.increasedChanceToApplyStackOfDeathMark ??= 0;
            this.decreasedChanceToApplyStackOfDeathMark ??= 0;
            this.increasedDeathMarkImmunity ??= 0;
            this.decreasedDeathMarkImmunity ??= 0;

            this.increasedDamageTakenFromAirSpells ??= 0;
            this.decreasedDamageTakenFromAirSpells ??= 0;
            this.increasedDamageTakenFromWaterSpells ??= 0;
            this.decreasedDamageTakenFromWaterSpells ??= 0;
            this.increasedDamageTakenFromEarthSpells ??= 0;
            this.decreasedDamageTakenFromEarthSpells ??= 0;
            this.increasedDamageTakenFromFireSpells ??= 0;
            this.decreasedDamageTakenFromFireSpells ??= 0;

            this.humanTraitApplied ??= 0;
            this.dragonTraitApplied ??= 0;
            this.undeadTraitApplied ??= 0;

            this.increasedDamageAgainstHumans ??= 0;
            this.decreasedDamageAgainstHumans ??= 0;
            this.increasedMaxHitPercentAgainstHumans ??= 0;
            this.decreasedMaxHitPercentAgainstHumans ??= 0;
            this.increasedMaxHitFlatAgainstHumans ??= 0;
            this.decreasedMaxHitFlatAgainstHumans ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstHumans ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstHumans ??= 0;
            this.increasedFlatMinHitAgainstHumans ??= 0;
            this.decreasedFlatMinHitAgainstHumans ??= 0;
            this.increasedGlobalAccuracyAgainstHumans ??= 0;
            this.decreasedGlobalAccuracyAgainstHumans ??= 0;
            this.increasedDamageReductionAgainstHumans ??= 0;
            this.decreasedDamageReductionAgainstHumans ??= 0;

            this.increasedDamageAgainstDragons ??= 0;
            this.decreasedDamageAgainstDragons ??= 0;
            this.increasedMaxHitPercentAgainstDragons ??= 0;
            this.decreasedMaxHitPercentAgainstDragons ??= 0;
            this.increasedMaxHitFlatAgainstDragons ??= 0;
            this.decreasedMaxHitFlatAgainstDragons ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstDragons ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstDragons ??= 0;
            this.increasedFlatMinHitAgainstDragons ??= 0;
            this.decreasedFlatMinHitAgainstDragons ??= 0;
            this.increasedGlobalAccuracyAgainstDragons ??= 0;
            this.decreasedGlobalAccuracyAgainstDragons ??= 0;
            this.increasedDamageReductionAgainstDragons ??= 0;
            this.decreasedDamageReductionAgainstDragons ??= 0;

            this.increasedDamageAgainstUndead ??= 0;
            this.decreasedDamageAgainstUndead ??= 0;
            this.increasedMaxHitPercentAgainstUndead ??= 0;
            this.decreasedMaxHitPercentAgainstUndead ??= 0;
            this.increasedMaxHitFlatAgainstUndead ??= 0;
            this.decreasedMaxHitFlatAgainstUndead ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstUndead ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstUndead ??= 0;
            this.increasedFlatMinHitAgainstUndead ??= 0;
            this.decreasedFlatMinHitAgainstUndead ??= 0;
            this.increasedGlobalAccuracyAgainstUndead ??= 0;
            this.decreasedGlobalAccuracyAgainstUndead ??= 0;
            this.increasedDamageReductionAgainstUndead ??= 0;
            this.decreasedDamageReductionAgainstUndead ??= 0;
        });
    }

    /**
     * On spawn, applies booleans on entity, so we don't have to check an array every time
     * Remark: We do not have to patch all properties onto the player, as not setting them will just trigger a "falsey" match, resulting in the same outcome
     */
    private patchMonsterTypeAllocation() {
        this.context.patch(Player, "initializeForCombat").after(function () {
            this.isHuman = true; // Well, the player is a human, right?
        });

        this.context.patch(Enemy, "setStatsFromMonster").after(function (returnValue, monster: any): void {
            const types = MonsterTypeMappingManager.getTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];
                // console.log(`setStatsFromMonster | Checking to see whether or not to apply ${type.modifierPropertyNames.traitApplied}: ${isOfType}`);
                // @ts-ignore - We add is{Type} dynamically
                this[type.isTypePropertyName] = MonsterTypeMappingManager.monsterIsOfType(monster, type.singularName);
            }
        });
    }

    /**
     *
     */
    private patchApplyUniqueSpawnEffects() {
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Character, "applyUniqueSpawnEffects").after(function () {
            if (rollPercentage(this.modifiers.increasedChanceToApplySlowOnSpawn - this.modifiers.decreasedChanceToApplySlowOnSpawn)) {
                this.applyModifierEffect(new SlowEffect(25, 3), this.target, this.game.normalAttack);
            }
            if (rollPercentage(this.modifiers.increasedChanceToApplyStunOnSpawn - this.modifiers.decreasedChanceToApplyStunOnSpawn)) {
                this.applyStun({ chance: 100, turns: 1, type: 'Stun', flavour: 'Stun' }, this.target);
            }
            if (rollPercentage(this.modifiers.increasedChanceToApplyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyPoisonOnSpawn)) {
                this.applyDOT(poisonEffect, this.target, 0);
            }
            if (rollPercentage(this.modifiers.increasedChanceToApplyDeadlyPoisonOnSpawn - this.modifiers.decreasedChanceToApplyDeadlyPoisonOnSpawn)) {
                this.applyDOT(deadlyPoisonEffect, this.target, 0);
            }
        });
    }

    /**
     * Whenever the amount of HP changes, check the death mark threshold.
     * The original function doesn't really do anything aside from changing hp, only setting some "rerender/recompute" flags,
     * so it's pretty much perfect
     */
    private patchAddHitpoints() {
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Character, "addHitpoints").after(function () {
            // If death marks are applied and hitpoints are under certain threshold, execute character
            if (this.modifiers.deathMark > 0 && this.hitpoints <= ModifierConstants.DEATH_MARK_MAX_FLAT_HP) {
                const effect = this.stackingEffect.get(this.game.deathMarkEffect);
                if (effect === undefined) {
                    console.log("effect not found on game object");
                }
                else {
                    const maxHpPercentage = (this.hitpoints / this.stats.maxHitpoints) * 100;
                    if (maxHpPercentage < effect.stacks) {
                        // If the one who got death mark triggered on them was the player,
                        // then build a notification for them, so they know it was death mark that killed them
                        if (this instanceof Player) {
                            const notification: NotificationData = {
                                media: Constants.ERROR_ICON_MEDIA_PATH,
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
     * "On hit effect" means both literal "on hit modifiers" but also stuff like "roll to poison, only because you actually hit the enemy".
     * REMARK: We patch 'clampDamageValue' because it is only ever called in ONE location. We don't patch to modify its functionality,
     * we actually patch it as a means of injecting our code into the process we want to (there is no natural method to beforé/after patch).
     *
     * More specifically, the patched method is called only when the entity's target has been rolled to hit,
     * which is the condition for which we want to implement some more stuff
     */
    private patchApplyOnHitEffects() {
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Character, "clampDamageValue").after(function (returnedDamage) {
            // do some custom stuff inbetween
            if (this.target.barrier <= 0 && this.game.deathMarkEffect !== undefined) {
                if (this.modifiers.increasedDeathMarkOnHit > 0) {
                    if (rollPercentage(100 - (this.target.modifiers.increasedDeathMarkImmunity - this.target.modifiers.decreasedDeathMarkImmunity))) {
                        this.applyStackingEffect(this.game.deathMarkEffect, this.target, this.modifiers.increasedDeathMarkOnHit);
                        this.target.rendersRequired.effects = true;
                    }
                }

                if (rollPercentage(this.modifiers.increasedChanceToApplyStackOfDeathMark - this.modifiers.decreasedChanceToApplyStackOfDeathMark)) {
                    if (rollPercentage(100 - (this.target.modifiers.increasedDeathMarkImmunity - this.target.modifiers.decreasedDeathMarkImmunity))) {
                        this.applyStackingEffect(this.game.deathMarkEffect, this.target, 1);
                        this.target.rendersRequired.effects = true;
                    }
                }
            }

            // return unchanged value
            return returnedDamage;
        });
    }

    /**
     * Patch new min hit changing modifiers (both percentage and flat)
     *
     * REMARK: I'm not sure about being able to provide result of before patch to original call, so
     * instead just used after patch as usual, repeating the "clampValue" call at the end to avoid invalid values
     */
    private patchMinHitCalculations() {
        this.context.patch(Player, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculator.getPlayerMinHitModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
        this.context.patch(Enemy, "modifyMinHit").after(function (minHit: number) {
            minHit += CustomModifiersCalculator.getEnemyMinHitModification(this);

            return clampValue(minHit, 1, this.stats.maxHit);
        });
    }

    /**
     * Patches new max hit changing modifiers (both percentage and flat) into base logic
     */
    private patchMaxHitCalculations() {
        this.context.patch(Player, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            return maxHitModifier += CustomModifiersCalculator.getPlayerMaxHitPercentageModification(this);
        });
        this.context.patch(Enemy, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            return maxHitModifier += CustomModifiersCalculator.getEnemyMaxHitPercentageModification(this);
        });

        this.context.patch(Player, "modifyMaxHit").after(function (maxHit) {
            maxHit += CustomModifiersCalculator.getPlayerMaxHitFlatModification(this);

            return Math.max(maxHit, 1);
        });
        this.context.patch(Enemy, "modifyMaxHit").after(function (maxHit) {
            maxHit += CustomModifiersCalculator.getEnemyMaxHitFlatModification(this);

            return Math.max(maxHit, 1);
        });
    }

    /**
     * Patches new (total) damage (percentage) changing modifiers into base logic
     */
    private patchDamageModifierCalculations() {
        this.context.patch(Player, "getDamageModifiers").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculator.getPlayerDamagePercentageModification(this);
        });
        this.context.patch(Enemy, "getDamageModifiers").after(function (totalModifier: number) {
            return totalModifier += CustomModifiersCalculator.getEnemyDamagePercentageModification(this);
        });
    }

    /**
     * Patches new accuracy (percentage) changing modifiers into base logic
     */
    private patchAccuracyCalculations() {
        /**
         * @param returnValue the current flat accuracy, afer 'modifyAccuracy' run (which includes several percentage based modifiers)
         * @param accuracy the accuracy originally provided to the method, the value we use to calculate our percentage boosts with,
         *                 as there is no flat accuracy bonus between the start of the method and the addition of percentage based boosts
         */
        this.context.patch(Player, "modifyAccuracy").after(function (returnValue, accuracy) {
            return returnValue += CustomModifiersCalculator.getPlayerAccuracyFlatModification(this, accuracy);
        });
        this.context.patch(Enemy, "modifyAccuracy").after(function (returnValue, accuracy) {
            return returnValue += CustomModifiersCalculator.getEnemyAccuracyFlatModification(this, accuracy);
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
        // 3.1) "increasedDamageReductionWithActivePrayer" is ADDITIVELY added to DR%
        // 3.2) Then, the final DR% at that point in time is multiplied by combat triangle (which based on mode may define something like "You are only 10% as accurate against monsters strong to your attack style")
        // based on combat triangle, which has to be repeated for the overall custom DR% calculated for this case
        // #endregion

        this.context.patch(Player, "modifyDamageReduction").after(function (returnValue) {
            return returnValue += CustomModifiersCalculator.getPlayerDamageReductionFlatModification(this);
        });
        this.context.patch(Enemy, "modifyDamageReduction").after(function (returnValue) {
            return returnValue += CustomModifiersCalculator.getEnemyDamageReductionFlatModification(this);
        });
    }

    // #endregion
}