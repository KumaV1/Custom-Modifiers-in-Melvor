﻿import { MonsterTypeMappingManager } from './MonsterTypeMappingManager'
import { MonsterType } from './MonsterType'
import { Constants as ModifierConstants } from './Constants';
import { Constants } from '../Constants'

/** For typescript intellisense and not throwing errors */
declare global {
    interface StandardModifierObject<Standard> {
        increasedMaxHitPercentToCombatAreaMonsters: Standard,
        decreasedMaxHitPercentToCombatAreaMonsters: Standard,
        increasedMaxHitFlatToCombatAreaMonsters: Standard,
        decreasedMaxHitFlatToCombatAreaMonsters: Standard,
        increasedMinHitBasedOnMaxHitToCombatAreaMonsters: Standard,
        decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: Standard,
        increasedFlatMinHitToCombatAreaMonsters: Standard,
        decreasedFlatMinHitToCombatAreaMonsters: Standard,

        increasedMaxHitPercentToSlayerAreaMonsters: Standard,
        decreasedMaxHitPercentToSlayerAreaMonsters: Standard,
        increasedMaxHitFlatToSlayerAreaMonsters: Standard,
        decreasedMaxHitFlatToSlayerAreaMonsters: Standard,
        increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: Standard,
        decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: Standard,
        increasedFlatMinHitToSlayerAreaMonsters: Standard,
        decreasedFlatMinHitToSlayerAreaMonsters: Standard,

        increasedMaxHitPercentToDungeonMonsters: Standard,
        decreasedMaxHitPercentToDungeonMonsters: Standard,
        increasedMaxHitFlatToDungeonMonsters: Standard,
        decreasedMaxHitFlatToDungeonMonsters: Standard,
        increasedMinHitBasedOnMaxHitToDungeonMonsters: Standard,
        decreasedMinHitBasedOnMaxHitToDungeonMonsters: Standard,
        increasedFlatMinHitToDungeonMonsters: Standard,
        decreasedFlatMinHitToDungeonMonsters: Standard,

        increasedMaxHitPercentToSlayerTasks: Standard,
        decreasedMaxHitPercentToSlayerTasks: Standard,
        increasedMaxHitFlatToSlayerTasks: Standard,
        decreasedMaxHitFlatToSlayerTasks: Standard,
        increasedMinHitBasedOnMaxHitToSlayerTasks: Standard,
        decreasedMinHitBasedOnMaxHitToSlayerTasks: Standard,
        increasedFlatMinHitToSlayerTasks: Standard,
        decreasedFlatMinHitToSlayerTasks: Standard,

        increasedMaxHitPercentAgainstBosses: Standard,
        decreasedMaxHitPercentAgainstBosses: Standard,
        increasedMaxHitFlatAgainstBosses: Standard,
        decreasedMaxHitFlatAgainstBosses: Standard,
        increasedMinHitBasedOnMaxHitAgainstBosses: Standard,
        decreasedMinHitBasedOnMaxHitAgainstBosses: Standard,
        increasedFlatMinHitAgainstBosses: Standard,
        decreasedFlatMinHitAgainstBosses: Standard

        /** Percentage */
        increasedGlobalSkillXPPerLevel: Standard,
        /** Percentage */
        decreasedGlobalSkillXPPerLevel: Standard,
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        increasedFlatGlobalSkillXP: Standard,
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        decreasedFlatGlobalSkillXP: Standard,
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        increasedFlatGlobalSkillXPPerSkillLevel: Standard,
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        decreasedFlatGlobalSkillXPPerSkillLevel: Standard
    }

    interface SkillModifierObject<Skill> {
        /** Percentage */
        increasedSkillXPPerSkillLevel: Skill,
        /** Percentage */
        decreasedSkillXPPerSkillLevel: Skill,
        /** Increases total xp gain for given skill (so unaffected by xp multipliers!) */
        increasedFlatSkillXP: Skill,
        /** Decreased total xp gain for given skill (so unaffected by xp multipliers!) */
        decreasedFlatSkillXP: Skill,
        /** Increases total xp gain for given skill (so unaffected by xp multipliers!) */
        increasedFlatSkillXPPerSkillLevel: Skill,
        /** Decreased total xp gain for given skill (so unaffected by xp multipliers!) */
        decreasedFlatSkillXPPerSkillLevel: Skill,
    }

    interface PlayerModifiers {
        increasedMaxHitPercentToCombatAreaMonsters: number,
        decreasedMaxHitPercentToCombatAreaMonsters: number,
        increasedMaxHitFlatToCombatAreaMonsters: number,
        decreasedMaxHitFlatToCombatAreaMonsters: number,
        increasedMinHitBasedOnMaxHitToCombatAreaMonsters: number,
        decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: number,
        increasedFlatMinHitToCombatAreaMonsters: number,
        decreasedFlatMinHitToCombatAreaMonsters: number,

        increasedMaxHitPercentToSlayerAreaMonsters: number,
        decreasedMaxHitPercentToSlayerAreaMonsters: number,
        increasedMaxHitFlatToSlayerAreaMonsters: number,
        decreasedMaxHitFlatToSlayerAreaMonsters: number,
        increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: number,
        decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: number,
        increasedFlatMinHitToSlayerAreaMonsters: number,
        decreasedFlatMinHitToSlayerAreaMonsters: number,

        increasedMaxHitPercentToDungeonMonsters: number,
        decreasedMaxHitPercentToDungeonMonsters: number,
        increasedMaxHitFlatToDungeonMonsters: number,
        decreasedMaxHitFlatToDungeonMonsters: number,
        increasedMinHitBasedOnMaxHitToDungeonMonsters: number,
        decreasedMinHitBasedOnMaxHitToDungeonMonsters: number,
        increasedFlatMinHitToDungeonMonsters: number,
        decreasedFlatMinHitToDungeonMonsters: number,

        increasedMaxHitPercentToSlayerTasks: number,
        decreasedMaxHitPercentToSlayerTasks: number,
        increasedMaxHitFlatToSlayerTasks: number,
        decreasedMaxHitFlatToSlayerTasks: number,
        increasedMinHitBasedOnMaxHitToSlayerTasks: number,
        decreasedMinHitBasedOnMaxHitToSlayerTasks: number,
        increasedFlatMinHitToSlayerTasks: number,
        decreasedFlatMinHitToSlayerTasks: number,

        increasedMaxHitPercentAgainstBosses: number,
        decreasedMaxHitPercentAgainstBosses: number,
        increasedMaxHitFlatAgainstBosses: number,
        decreasedMaxHitFlatAgainstBosses: number,
        increasedMinHitBasedOnMaxHitAgainstBosses: number,
        decreasedMinHitBasedOnMaxHitAgainstBosses: number,
        increasedFlatMinHitAgainstBosses: number,
        decreasedFlatMinHitAgainstBosses: number

        /** Percentage */
        increasedGlobalSkillXPPerLevel: number,
        /** Percentage */
        decreasedGlobalSkillXPPerLevel: number,
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        increasedFlatGlobalSkillXP: number,
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        decreasedFlatGlobalSkillXP: number,
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        increasedFlatGlobalSkillXPPerSkillLevel: number,
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        decreasedFlatGlobalSkillXPPerSkillLevel: number
    }

    interface CombatModifierObject<Standard> {
        increasedChanceToApplySlowOnSpawn: Standard,
        decreasedChanceToApplySlowOnSpawn: Standard,
        increasedChanceToApplyStunOnSpawn: Standard,
        decreasedChanceToApplyStunOnSpawn: Standard,
        increasedChanceToApplyPoisonOnSpawn: Standard,
        decreasedChanceToApplyPoisonOnSpawn: Standard,
        increasedChanceToApplyDeadlyPoisonOnSpawn: Standard,
        decreasedChanceToApplyDeadlyPoisonOnSpawn: Standard,

        /** Flag (by the custom effect) that effect has been applied, it's NOT an increasing value */
        deathMark: Standard,
        increasedDeathMarkOnHit: Standard,
        increasedChanceToApplyStackOfDeathMark: Standard,
        decreasedChanceToApplyStackOfDeathMark: Standard,
        increasedDeathMarkImmunity: Standard,
        decreasedDeathMarkImmunity: Standard,

        humanTraitApplied: Standard,
        dragonTraitApplied: Standard,
        undeadTraitApplied: Standard,

        increasedDamageToHumans: Standard,
        decreasedDamageToHumans: Standard,
        increasedMaxHitPercentAgainstHumans: Standard,
        decreasedMaxHitPercentAgainstHumans: Standard,
        increasedMaxHitFlatAgainstHumans: Standard,
        decreasedMaxHitFlatAgainstHumans: Standard,
        increasedMinHitBasedOnMaxHitAgainstHumans: Standard,
        decreasedMinHitBasedOnMaxHitAgainstHumans: Standard,
        increasedFlatMinHitAgainstHumans: Standard,
        decreasedFlatMinHitAgainstHumans: Standard,

        increasedDamageToDragons: Standard,
        decreasedDamageToDragons: Standard,
        increasedMaxHitPercentAgainstDragons: Standard,
        decreasedMaxHitPercentAgainstDragons: Standard,
        increasedMaxHitFlatAgainstDragons: Standard,
        decreasedMaxHitFlatAgainstDragons: Standard,
        increasedMinHitBasedOnMaxHitAgainstDragons: Standard,
        decreasedMinHitBasedOnMaxHitAgainstDragons: Standard,
        increasedFlatMinHitAgainstDragons: Standard,
        decreasedFlatMinHitAgainstDragons: Standard,

        increasedDamageToUndead: Standard,
        decreasedDamageToUndead: Standard,
        increasedMaxHitPercentAgainstUndead: Standard,
        decreasedMaxHitPercentAgainstUndead: Standard,
        increasedMaxHitFlatAgainstUndead: Standard,
        decreasedMaxHitFlatAgainstUndead: Standard,
        increasedMinHitBasedOnMaxHitAgainstUndead: Standard,
        decreasedMinHitBasedOnMaxHitAgainstUndead: Standard,
        increasedFlatMinHitAgainstUndead: Standard,
        decreasedFlatMinHitAgainstUndead: Standard
    }

    interface CombatModifiers {
        increasedChanceToApplySlowOnSpawn: number,
        decreasedChanceToApplySlowOnSpawn: number,
        increasedChanceToApplyStunOnSpawn: number,
        decreasedChanceToApplyStunOnSpawn: number,
        increasedChanceToApplyPoisonOnSpawn: number,
        decreasedChanceToApplyPoisonOnSpawn: number,
        increasedChanceToApplyDeadlyPoisonOnSpawn: number,
        decreasedChanceToApplyDeadlyPoisonOnSpawn: number,

        deathMark: number,
        increasedDeathMarkOnHit: number,
        increasedChanceToApplyStackOfDeathMark: number,
        decreasedChanceToApplyStackOfDeathMark: number,
        increasedDeathMarkImmunity: number,
        decreasedDeathMarkImmunity: number,

        humanTraitApplied: number,
        dragonTraitApplied: number,
        undeadTraitApplied: number,

        increasedDamageToHumans: number,
        decreasedDamageToHumans: number,
        increasedMaxHitPercentAgainstHumans: number,
        decreasedMaxHitPercentAgainstHumans: number,
        increasedMaxHitFlatAgainstHumans: number,
        decreasedMaxHitFlatAgainstHumans: number,
        increasedMinHitBasedOnMaxHitAgainstHumans: number,
        decreasedMinHitBasedOnMaxHitAgainstHumans: number,
        increasedFlatMinHitAgainstHumans: number,
        decreasedFlatMinHitAgainstHumans: number,

        increasedDamageToDragons: number,
        decreasedDamageToDragons: number,
        increasedMaxHitPercentAgainstDragons: number,
        decreasedMaxHitPercentAgainstDragons: number,
        increasedMaxHitFlatAgainstDragons: number,
        decreasedMaxHitFlatAgainstDragons: number,
        increasedMinHitBasedOnMaxHitAgainstDragons: number,
        decreasedMinHitBasedOnMaxHitAgainstDragons: number,
        increasedFlatMinHitAgainstDragons: number,
        decreasedFlatMinHitAgainstDragons: number,

        increasedDamageToUndead: number,
        decreasedDamageToUndead: number,
        increasedMaxHitPercentAgainstUndead: number,
        decreasedMaxHitPercentAgainstUndead: number,
        increasedMaxHitFlatAgainstUndead: number,
        decreasedMaxHitFlatAgainstUndead: number,
        increasedMinHitBasedOnMaxHitAgainstUndead: number,
        decreasedMinHitBasedOnMaxHitAgainstUndead: number,
        increasedFlatMinHitAgainstUndead: number,
        decreasedFlatMinHitAgainstUndead: number
    }

    interface Character {
        isHuman: boolean,
        isDragon: boolean,
        isUndead: boolean
    }

    interface Game {
        deathMarkEffect: StackingEffect
    }
}

/**
 * Patches different sections of the code, in order to integrate custom modifiers
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
        this.registerTraitApplicationModifiers();
        this.registerHumanModifiers();
        this.registerDragonModifiers();
        this.registerUndeadModifiers();
        this.registerBossModifiers();
    }

    /**
     * Patch pre existing logic, to also take our custom modifiers into account
     */
    public patchMethods() {
        this.patchSkillingActions();
        this.patchGame();
        this.patchAddHitpoints();
        this.patchCombatModifiersReset();
        this.patchMonsterTypeAllocation();
        this.patchApplyUniqueSpawnEffects();
        this.patchApplyOnHitEffects();
        this.patchMinHitCalculations();
        this.patchMaxHitCalculations();
        this.patchDamageModifierCalculations();
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
            isNegative: false,
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
            isNegative: false,
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
            isNegative: false,
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
            isNegative: false,
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
            isNegative: false,
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToCombatAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters');
            },
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerAreaMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters');
            },
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToDungeonMonsters = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters');
            },
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitToSlayerTasks');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitToSlayerTasks = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks');
            },
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

    /**
     * 
     */
    private registerHumanModifiers() {
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstHumans');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstHumans = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstHumans');
            },
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
    }

    /**
     * 
     */
    private registerDragonModifiers() {
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstDragons');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstDragons = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstDragons');
            },
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
    }

    /**
     * 
     */
    private registerUndeadModifiers() {
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstUndead');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstUndead = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstUndead');
            },
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
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedMaxHitFlatAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: true,
            tags: ['combat']
        };
        modifierData.increasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_increasedFlatMinHitAgainstBosses');
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };
        modifierData.decreasedFlatMinHitAgainstBosses = {
            get langDescription() {
                return getLangString('MODIFIER_DATA_decreasedFlatMinHitAgainstBosses');
            },
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
    }

    // #endregion

    // #region Method patching

    private patchSkillingActions() {
        /**
         * 
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "getXPModifier").after(function (currentAmount) {
            currentAmount += (this.game.modifiers.increasedGlobalSkillXPPerLevel * this.level)
                - (this.game.modifiers.decreasedGlobalSkillXPPerLevel * this.level)
                + this.game.modifiers.getSkillModifierValue('increasedSkillXPPerSkillLevel', this)
                - this.game.modifiers.getSkillModifierValue('decreasedSkillXPPerSkillLevel', this);

            return Math.max(0, currentAmount);
        });

        /**
         * Patch "modifyXp" to add flat xp. 
         * The original method already checked "halfSkillXp" for provided value, 
         * but we have to check ourselves for our new modifiers
         */
        // @ts-ignore You can actually patch base classes no problem
        this.context.patch(Skill, "modifyXP").after(function (currentAmount) {
            let flatXp = this.game.modifiers.increasedFlatGlobalSkillXP
                - this.game.modifiers.decreasedFlatGlobalSkillXP
                + (this.game.modifiers.increasedFlatGlobalSkillXPPerSkillLevel * this.level)
                - (this.game.modifiers.decreasedFlatGlobalSkillXPPerSkillLevel * this.level)
                + this.game.modifiers.getSkillModifierValue('increasedFlatSkillXP', this)
                - this.game.modifiers.getSkillModifierValue('decreasedFlatSkillXP', this)
                + (this.game.modifiers.getSkillModifierValue('increasedFlatSkillXPPerSkillLevel', this) * this.level)
                - ((this.game.modifiers.getSkillModifierValue('decreasedFlatSkillXPPerSkillLevel', this) * this.level));

            flatXp = Math.max(0, flatXp); // avoid skill xp actually ending up being reduced

            return this.game.modifiers.halfSkillXP
                ? currentAmount + (flatXp / 2)
                : currentAmount + flatXp;
        });
    }

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

            this.humanTraitApplied ??= 0;
            this.dragonTraitApplied ??= 0;
            this.undeadTraitApplied ??= 0;

            this.increasedDamageToHumans ??= 0;
            this.decreasedDamageToHumans ??= 0;
            this.increasedMaxHitPercentAgainstHumans ??= 0;
            this.decreasedMaxHitPercentAgainstHumans ??= 0;
            this.increasedMaxHitFlatAgainstHumans ??= 0;
            this.decreasedMaxHitFlatAgainstHumans ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstHumans ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstHumans ??= 0;
            this.increasedFlatMinHitAgainstHumans ??= 0;
            this.decreasedFlatMinHitAgainstHumans ??= 0;

            this.increasedDamageToDragons ??= 0;
            this.decreasedDamageToDragons ??= 0;
            this.increasedMaxHitPercentAgainstDragons ??= 0;
            this.decreasedMaxHitPercentAgainstDragons ??= 0;
            this.increasedMaxHitFlatAgainstDragons ??= 0;
            this.decreasedMaxHitFlatAgainstDragons ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstDragons ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstDragons ??= 0;
            this.increasedFlatMinHitAgainstDragons ??= 0;
            this.decreasedFlatMinHitAgainstDragons ??= 0;

            this.increasedDamageToUndead ??= 0;
            this.decreasedDamageToUndead ??= 0;
            this.increasedMaxHitPercentAgainstUndead ??= 0;
            this.decreasedMaxHitPercentAgainstUndead ??= 0;
            this.increasedMaxHitFlatAgainstUndead ??= 0;
            this.decreasedMaxHitFlatAgainstUndead ??= 0;
            this.increasedMinHitBasedOnMaxHitAgainstUndead ??= 0;
            this.decreasedMinHitBasedOnMaxHitAgainstUndead ??= 0;
            this.increasedFlatMinHitAgainstUndead ??= 0;
            this.decreasedFlatMinHitAgainstUndead ??= 0;
        });
    }

    /**
     * 
     */
    private patchMonsterTypeAllocation() {
        /**
         * Apply type flags to the enemy on spawn, so modifier checks don't have to check the array constantly.
         * Remark: We do not have to patch this property onto the player, as not setting it will just trigger a "falsey" match, resulting in the same outcome
         */
        this.context.patch(Enemy, "setStatsFromMonster").after(function (monster: any): void {
            this.isHuman = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Human);
            this.isDragon = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Dragon);
            this.isUndead = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Undead);
        });

        /**
         * Well, the player is a human, right?
         */
        this.context.patch(Player, "initializeForCombat").after(function () {
            this.isHuman = true;
        });
    }

    /**
     * 
     */
    private patchApplyUniqueSpawnEffects() {
        this.context.patch(Player, "applyUniqueSpawnEffects").after(function () {
            CustomModifiersManager.customApplyUniqueSpawnEffects(this);
        });
        this.context.patch(Enemy, "applyUniqueSpawnEffects").after(function () {
            CustomModifiersManager.customApplyUniqueSpawnEffects(this);
        });
    }

    /**
     * Whenever the amount of HP changes, check the death mark threshold.
     * The original function doesn't really do anything aside from changing hp, only setting some "rerender/recompute" flags,
     * so it's pretty much perfect
     */
    private patchAddHitpoints() {
        this.context.patch(Player, "addHitpoints").after(function () {
            CustomModifiersManager.customPatchAddHitpoints(this);
        });
        this.context.patch(Enemy, "addHitpoints").after(function () {
            CustomModifiersManager.customPatchAddHitpoints(this);
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
        this.context.patch(Player, "clampDamageValue").after(function (returnedDamage) {
            // do some custom stuff
            CustomModifiersManager.customApplyOnHitEffects(this);

            // run original stuff
            return returnedDamage;
        });
        this.context.patch(Enemy, "clampDamageValue").after(function (returnedDamage) {
            // do some custom stuff
            CustomModifiersManager.customApplyOnHitEffects(this);

            // run original stuff
            return returnedDamage;
        });
    }

    private patchMinHitCalculations() {
        /** Patch percentage and flat modifiers
         * Also because existing flat modifiers aren't based on enemies and 
         * the method we could have patched is therefore part of the CombatModifiers class (which doesn't have battle context)
         * 
         * REMARK: I'm not sure about being able to provide result of before patch to original call, so
         * instead just used after patch as usual, repeating the "clampValue" call at the end to avoid invalid values
         */
        this.context.patch(Player, "modifyMinHit").after(function (minHit: number) {
            if (this.manager.fightInProgress) {
                minHit = CustomModifiersManager.customGetMinModifierAgainstType(this, minHit);

                if (this.manager.enemy.isBoss) {
                    minHit += Math.floor((this.stats.maxHit * (this.modifiers.increasedMinHitBasedOnMaxHitAgainstBosses - this.modifiers.decreasedMinHitBasedOnMaxHitAgainstBosses)) / 100);
                    minHit += numberMultiplier * (this.modifiers.increasedFlatMinHitAgainstBosses - this.modifiers.decreasedFlatMinHitAgainstBosses);
                }

                switch (this.manager.areaType) {
                    case CombatAreaType.Combat:
                        minHit += Math.floor((this.stats.maxHit * (this.modifiers.increasedMinHitBasedOnMaxHitToCombatAreaMonsters - this.modifiers.decreasedMinHitBasedOnMaxHitToCombatAreaMonsters)) / 100);
                        minHit += numberMultiplier * (this.modifiers.increasedFlatMinHitToCombatAreaMonsters - this.modifiers.decreasedFlatMinHitToCombatAreaMonsters);
                        break;
                    case CombatAreaType.Slayer:
                        minHit += Math.floor((this.stats.maxHit * (this.modifiers.increasedMinHitBasedOnMaxHitToSlayerAreaMonsters - this.modifiers.decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters)) / 100);
                        minHit += numberMultiplier * (this.modifiers.increasedFlatMinHitToSlayerAreaMonsters - this.modifiers.decreasedFlatMinHitToSlayerAreaMonsters);
                        break;
                    case CombatAreaType.Dungeon:
                        minHit += Math.floor((this.stats.maxHit * (this.modifiers.increasedMinHitBasedOnMaxHitToDungeonMonsters - this.modifiers.decreasedMinHitBasedOnMaxHitToDungeonMonsters)) / 100);
                        minHit += numberMultiplier * (this.modifiers.increasedFlatMinHitToDungeonMonsters - this.modifiers.decreasedFlatMinHitToDungeonMonsters);
                        break;
                    default:
                }

                if (this.manager.onSlayerTask) {
                    minHit += Math.floor((this.stats.maxHit * (this.modifiers.increasedMinHitBasedOnMaxHitToSlayerTasks - this.modifiers.decreasedMinHitBasedOnMaxHitToSlayerTasks)) / 100);
                    minHit += numberMultiplier * (this.modifiers.increasedFlatMinHitToSlayerTasks - this.modifiers.decreasedFlatMinHitToSlayerTasks);
                }
            }

            return clampValue(minHit, 1, this.stats.maxHit);
        });
        this.context.patch(Enemy, "modifyMinHit").after(function (minHit: number) {
            minHit = CustomModifiersManager.customGetMinModifierAgainstType(this, minHit);
            return clampValue(minHit, 1, this.stats.maxHit);
        });
    }

    /**
     * 
     */
    private patchMaxHitCalculations() {
        /**
         * Patches new max hit percentage increasing modifiers into base logic.
         * Presumably two patches, as the base class "Character" is abstract and therefore cannot be patched
         */
        this.context.patch(Player, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            if (this.manager.fightInProgress) {
                maxHitModifier = CustomModifiersManager.customGetMaxHitModifierAgainstType(this, maxHitModifier);

                if (this.manager.enemy.isBoss) {
                    maxHitModifier += this.modifiers.increasedMaxHitPercentAgainstBosses - this.modifiers.decreasedMaxHitPercentAgainstBosses;
                }

                switch (this.manager.areaType) {
                    case CombatAreaType.Combat:
                        maxHitModifier += this.modifiers.increasedMaxHitPercentToCombatAreaMonsters - this.modifiers.decreasedMaxHitPercentToCombatAreaMonsters;
                        break;
                    case CombatAreaType.Slayer:
                        maxHitModifier += this.modifiers.increasedMaxHitPercentToSlayerAreaMonsters - this.modifiers.decreasedMaxHitPercentToSlayerAreaMonsters;
                        break;
                    case CombatAreaType.Dungeon:
                        maxHitModifier += this.modifiers.increasedMaxHitPercentToDungeonMonsters - this.modifiers.decreasedMaxHitPercentToDungeonMonsters;
                        break;
                    default:
                }

                if (this.manager.onSlayerTask) {
                    maxHitModifier += this.modifiers.increasedMaxHitPercentToSlayerTasks - this.modifiers.decreasedMaxHitPercentToSlayerTasks;
                }
            }

            return maxHitModifier;
        });
        this.context.patch(Enemy, "getMaxHitModifier").after(function (maxHitModifier: number): number {
            return CustomModifiersManager.customGetMaxHitModifierAgainstType(this, maxHitModifier);
        });

        /**
         * Patches new max hit flat increasing modifiers into base logic
         */
        this.context.patch(Player, "modifyMaxHit").after(function (maxHit) {
            if (this.manager.fightInProgress) {
                maxHit = CustomModifiersManager.customModifyMaxHitAgainstType(this, maxHit);

                if (this.manager.enemy.isBoss) {
                    maxHit += numberMultiplier * (this.modifiers.increasedMaxHitFlatAgainstBosses - this.modifiers.decreasedMaxHitFlatAgainstBosses);
                }

                switch (this.manager.areaType) {
                    case CombatAreaType.Combat:
                        maxHit += this.modifiers.increasedMaxHitFlatToCombatAreaMonsters - this.modifiers.decreasedMaxHitFlatToCombatAreaMonsters;
                        break;
                    case CombatAreaType.Slayer:
                        maxHit += this.modifiers.increasedMaxHitFlatToSlayerAreaMonsters - this.modifiers.decreasedMaxHitFlatToSlayerAreaMonsters;
                        break;
                    case CombatAreaType.Dungeon:
                        maxHit += this.modifiers.increasedMaxHitFlatToDungeonMonsters - this.modifiers.decreasedMaxHitFlatToDungeonMonsters;
                        break;
                    default:
                }

                if (this.manager.onSlayerTask) {
                    maxHit += this.modifiers.increasedMaxHitFlatToSlayerTasks - this.modifiers.decreasedMaxHitFlatToSlayerTasks;
                }
            }

            return maxHit;
        });
        this.context.patch(Enemy, "modifyMaxHit").after(function (maxHit) {
            return CustomModifiersManager.customModifyMaxHitAgainstType(this, maxHit);
        });
    }

    /**
     * 
     */
    private patchDamageModifierCalculations() {
        this.context.patch(Player, "getDamageModifiers").after(function (totalModifier: number, target: Character) {
            return CustomModifiersManager.customGetDamageModifiersAgainstType(this, totalModifier);
        });
        this.context.patch(Enemy, "getDamageModifiers").after(function (totalModifier: number, target: Character) {
            return CustomModifiersManager.customGetDamageModifiersAgainstType(this, totalModifier);
        });
    }

    /**
     * 
     * @param entity
     */
    private static customApplyUniqueSpawnEffects(entity: Character): void {
        if (rollPercentage(entity.modifiers.increasedChanceToApplySlowOnSpawn - entity.modifiers.decreasedChanceToApplySlowOnSpawn)) {
            entity.applyModifierEffect(new SlowEffect(25, 3), entity.target, entity.game.normalAttack);
        }
        if (rollPercentage(entity.modifiers.increasedChanceToApplyStunOnSpawn - entity.modifiers.decreasedChanceToApplyStunOnSpawn)) {
            entity.applyStun({ chance: 100, turns: 1, type: 'Stun', flavour: 'Stun' }, entity.target);
        }
        if (rollPercentage(entity.modifiers.increasedChanceToApplyPoisonOnSpawn - entity.modifiers.decreasedChanceToApplyPoisonOnSpawn)) {
            entity.applyDOT(poisonEffect, entity.target, 0);
        }
        if (rollPercentage(entity.modifiers.increasedChanceToApplyDeadlyPoisonOnSpawn - entity.modifiers.decreasedChanceToApplyDeadlyPoisonOnSpawn)) {
            entity.applyDOT(deadlyPoisonEffect, entity.target, 0);
        }
    }

    /**
     * 
     * @param entity
     */
    private static customPatchAddHitpoints(entity: Character) {
        // If death marks are applied and hitpoints are under certain threshold, execute character
        if (entity.modifiers.deathMark > 0 && entity.hitpoints <= ModifierConstants.DEATH_MARK_MAX_FLAT_HP) {
            const effect = entity.stackingEffect.get(entity.game.deathMarkEffect);
            if (effect === undefined) {
                console.log("effect not found on game object");
            }
            else {
                const maxHpPercentage = (entity.hitpoints / entity.stats.maxHitpoints) * 100;
                if (maxHpPercentage < effect.stacks) {
                    // If the one who got death mark triggered on them was the player, 
                    // then build a notification for them, so they know it was death mark that killed them
                    if (entity instanceof Player) {
                        const notification: NotificationData = {
                            media: Constants.ERROR_ICON_MEDIA_PATH,
                            quantity: 1,
                            text: getLangString(ModifierConstants.DEATH_MARK_NOTIFICATION_TEXT_LANGUAGE_ID),
                            isImportant: true,
                            isError: false
                        };
                        entity.game.notifications.addNotification(
                            new ErrorNotification(ModifierConstants.DEATH_MARK_NOTIFICATION_ID),
                            notification
                        );
                    }

                    // Flat out set hp to zero
                    entity.hitpoints = 0;
                }
            }
        }
    }

    /**
     * 
     * @param entity
     */
    private static customApplyOnHitEffects(entity: Character): void {
        if (entity.target.barrier <= 0 && entity.game.deathMarkEffect !== undefined) {
            if (entity.modifiers.increasedDeathMarkOnHit > 0) {
                if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
                    entity.applyStackingEffect(entity.game.deathMarkEffect, entity.target, entity.modifiers.increasedDeathMarkOnHit);
                    entity.target.rendersRequired.effects = true;
                }
            }

            if (rollPercentage(entity.modifiers.increasedChanceToApplyStackOfDeathMark - entity.modifiers.decreasedChanceToApplyStackOfDeathMark)) {
                if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
                    entity.applyStackingEffect(entity.game.deathMarkEffect, entity.target, 1);
                    entity.target.rendersRequired.effects = true;
                }
            }
        }
    }

    /**
     * 
     * @param entity The player or the enemy the player is fighting
     * @param minHit Current value of the max hit modifier, before custom logic
     */
    private static customGetMinModifierAgainstType(entity: Character, minHit: number): number {
        // Percentage and Flat modifiers
        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            minHit += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstHumans - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstHumans)) / 100);
            minHit += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstHumans - entity.modifiers.decreasedFlatMinHitAgainstHumans);
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            minHit += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstDragons - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstDragons)) / 100);
            minHit += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstDragons - entity.modifiers.decreasedFlatMinHitAgainstDragons);
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            minHit += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstUndead - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstUndead)) / 100);
            minHit += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstUndead - entity.modifiers.decreasedFlatMinHitAgainstUndead);
        }

        return minHit;
    }

    /**
     * Patches percentage based max hit modifiers
     * @param entity The player or the enemy the player is fighting
     * @param maxHitModifier Current value of the max hit modifier, before custom logic
     * @returns
     */
    private static customGetMaxHitModifierAgainstType(entity: Character, maxHitModifier: number): number {
        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstHumans - entity.modifiers.decreasedMaxHitPercentAgainstHumans;
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstDragons - entity.modifiers.decreasedMaxHitPercentAgainstDragons;
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstUndead - entity.modifiers.decreasedMaxHitPercentAgainstUndead;
        }

        return maxHitModifier;
    }

    /**
     * Patches flat based max hit modifiers
     * @param entity
     * @param maxHit
     */
    private static customModifyMaxHitAgainstType(entity: Character, maxHit: number): number {
        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            maxHit += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstHumans - entity.modifiers.decreasedMaxHitFlatAgainstHumans);
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            maxHit += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstDragons - entity.modifiers.decreasedMaxHitFlatAgainstDragons);
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            maxHit += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstUndead - entity.modifiers.decreasedMaxHitFlatAgainstUndead);
        }

        return maxHit;
    }

    /**
     * 
     * @param entity
     * @param maxHit
     * @returns
     */
    private static customGetDamageModifiersAgainstType(entity: Character, totalModifier: number): number {
        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            totalModifier += entity.modifiers.increasedDamageToHumans - entity.modifiers.decreasedDamageToHumans;
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            totalModifier += entity.modifiers.increasedDamageToDragons - entity.modifiers.decreasedDamageToDragons;
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            totalModifier += entity.modifiers.increasedDamageToUndead - entity.modifiers.decreasedDamageToUndead;
        }

        return totalModifier;
    }

    // #endregion
}