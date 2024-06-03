declare global {
    declare interface PlayerModifierTable {
        readonly increasedMaxHitPercentToCombatAreaMonsters: number;
        readonly decreasedMaxHitPercentToCombatAreaMonsters: number;
        readonly increasedMaxHitFlatToCombatAreaMonsters: number;
        readonly decreasedMaxHitFlatToCombatAreaMonsters: number;
        readonly increasedMinHitBasedOnMaxHitToCombatAreaMonsters: number;
        readonly decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: number;
        readonly increasedFlatMinHitToCombatAreaMonsters: number;
        readonly decreasedFlatMinHitToCombatAreaMonsters: number;
        readonly increasedGlobalAccuracyAgainstCombatAreaMonsters: number;
        readonly decreasedGlobalAccuracyAgainstCombatAreaMonsters: number;
        readonly increasedDamageReductionAgainstCombatAreaMonsters: number;
        readonly decreasedDamageReductionAgainstCombatAreaMonsters: number;

        readonly increasedMaxHitPercentToSlayerAreaMonsters: number;
        readonly decreasedMaxHitPercentToSlayerAreaMonsters: number;
        readonly increasedMaxHitFlatToSlayerAreaMonsters: number;
        readonly decreasedMaxHitFlatToSlayerAreaMonsters: number;
        readonly increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: number;
        readonly decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: number;
        readonly increasedFlatMinHitToSlayerAreaMonsters: number;
        readonly decreasedFlatMinHitToSlayerAreaMonsters: number;
        readonly increasedGlobalAccuracyAgainstSlayerAreaMonsters: number;
        readonly decreasedGlobalAccuracyAgainstSlayerAreaMonsters: number;
        readonly increasedDamageReductionAgainstSlayerAreaMonsters: number;
        readonly decreasedDamageReductionAgainstSlayerAreaMonsters: number;

        readonly increasedMaxHitPercentToDungeonMonsters: number;
        readonly decreasedMaxHitPercentToDungeonMonsters: number;
        readonly increasedMaxHitFlatToDungeonMonsters: number;
        readonly decreasedMaxHitFlatToDungeonMonsters: number;
        readonly increasedMinHitBasedOnMaxHitToDungeonMonsters: number;
        readonly decreasedMinHitBasedOnMaxHitToDungeonMonsters: number;
        readonly increasedFlatMinHitToDungeonMonsters: number;
        readonly decreasedFlatMinHitToDungeonMonsters: number;
        readonly increasedGlobalAccuracyAgainstDungeonMonsters: number;
        readonly decreasedGlobalAccuracyAgainstDungeonMonsters: number;
        readonly increasedDamageReductionAgainstDungeonMonsters: number;
        readonly decreasedDamageReductionAgainstDungeonMonsters: number;

        readonly increasedMaxHitPercentToSlayerTasks: number;
        readonly decreasedMaxHitPercentToSlayerTasks: number;
        readonly increasedMaxHitFlatToSlayerTasks: number;
        readonly decreasedMaxHitFlatToSlayerTasks: number;
        readonly increasedMinHitBasedOnMaxHitToSlayerTasks: number;
        readonly decreasedMinHitBasedOnMaxHitToSlayerTasks: number;
        readonly increasedFlatMinHitToSlayerTasks: number;
        readonly decreasedFlatMinHitToSlayerTasks: number;
        readonly increasedGlobalAccuracyAgainstSlayerTasks: number;
        readonly decreasedGlobalAccuracyAgainstSlayerTasks: number;
        readonly decreasedDamageReductionAgainstSlayerTasks: number;

        readonly increasedMaxHitPercentAgainstBosses: number;
        readonly decreasedMaxHitPercentAgainstBosses: number;
        readonly increasedMaxHitFlatAgainstBosses: number;
        readonly decreasedMaxHitFlatAgainstBosses: number;
        readonly increasedMinHitBasedOnMaxHitAgainstBosses: number;
        readonly decreasedMinHitBasedOnMaxHitAgainstBosses: number;
        readonly increasedFlatMinHitAgainstBosses: number;
        readonly decreasedFlatMinHitAgainstBosses: number;
        readonly increasedGlobalAccuracyAgainstBosses: number;
        readonly decreasedGlobalAccuracyAgainstBosses: number;

        readonly increasedThievingDamagePreventionThreshold: number;
        readonly decreasedThievingDamagePreventionThreshold: number;

        /** Percentage */
        readonly increasedGlobalSkillXPPerLevel: number;
        /** Percentage */
        readonly decreasedGlobalSkillXPPerLevel: number;
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        readonly increasedFlatGlobalSkillXP: number;
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        readonly decreasedFlatGlobalSkillXP: number;
        /** Increases total xp gain for all skills (so unaffected by xp multipliers!) */
        readonly increasedFlatGlobalSkillXPPerSkillLevel: number;
        /** Decreases total xp gain for all skills (so unaffected by xp multipliers!) */
        readonly decreasedFlatGlobalSkillXPPerSkillLevel: number
    }
}

export { };