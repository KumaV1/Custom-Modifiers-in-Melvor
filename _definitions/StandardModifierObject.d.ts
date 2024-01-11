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
        increasedGlobalAccuracyAgainstCombatAreaMonsters: Standard,
        decreasedGlobalAccuracyAgainstCombatAreaMonsters: Standard,
        increasedDamageReductionAgainstCombatAreaMonsters: Standard,
        decreasedDamageReductionAgainstCombatAreaMonsters: Standard,

        increasedMaxHitPercentToSlayerAreaMonsters: Standard,
        decreasedMaxHitPercentToSlayerAreaMonsters: Standard,
        increasedMaxHitFlatToSlayerAreaMonsters: Standard,
        decreasedMaxHitFlatToSlayerAreaMonsters: Standard,
        increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: Standard,
        decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: Standard,
        increasedFlatMinHitToSlayerAreaMonsters: Standard,
        decreasedFlatMinHitToSlayerAreaMonsters: Standard,
        increasedGlobalAccuracyAgainstSlayerAreaMonsters: Standard,
        decreasedGlobalAccuracyAgainstSlayerAreaMonsters: Standard,
        increasedDamageReductionAgainstSlayerAreaMonsters: Standard,
        decreasedDamageReductionAgainstSlayerAreaMonsters: Standard,

        increasedMaxHitPercentToDungeonMonsters: Standard,
        decreasedMaxHitPercentToDungeonMonsters: Standard,
        increasedMaxHitFlatToDungeonMonsters: Standard,
        decreasedMaxHitFlatToDungeonMonsters: Standard,
        increasedMinHitBasedOnMaxHitToDungeonMonsters: Standard,
        decreasedMinHitBasedOnMaxHitToDungeonMonsters: Standard,
        increasedFlatMinHitToDungeonMonsters: Standard,
        decreasedFlatMinHitToDungeonMonsters: Standard,
        increasedGlobalAccuracyAgainstDungeonMonsters: Standard,
        decreasedGlobalAccuracyAgainstDungeonMonsters: Standard,
        increasedDamageReductionAgainstDungeonMonsters: Standard,
        decreasedDamageReductionAgainstDungeonMonsters: Standard,

        increasedMaxHitPercentToSlayerTasks: Standard,
        decreasedMaxHitPercentToSlayerTasks: Standard,
        increasedMaxHitFlatToSlayerTasks: Standard,
        decreasedMaxHitFlatToSlayerTasks: Standard,
        increasedMinHitBasedOnMaxHitToSlayerTasks: Standard,
        decreasedMinHitBasedOnMaxHitToSlayerTasks: Standard,
        increasedFlatMinHitToSlayerTasks: Standard,
        decreasedFlatMinHitToSlayerTasks: Standard,
        increasedGlobalAccuracyAgainstSlayerTasks: Standard,
        decreasedGlobalAccuracyAgainstSlayerTasks: Standard,
        decreasedDamageReductionAgainstSlayerTasks: Standard,

        increasedMaxHitPercentAgainstBosses: Standard,
        decreasedMaxHitPercentAgainstBosses: Standard,
        increasedMaxHitFlatAgainstBosses: Standard,
        decreasedMaxHitFlatAgainstBosses: Standard,
        increasedMinHitBasedOnMaxHitAgainstBosses: Standard,
        decreasedMinHitBasedOnMaxHitAgainstBosses: Standard,
        increasedFlatMinHitAgainstBosses: Standard,
        decreasedFlatMinHitAgainstBosses: Standard,
        increasedGlobalAccuracyAgainstBosses: Standard,
        decreasedGlobalAccuracyAgainstBosses: Standard,

        increasedThievingDamagePreventionThreshold: Standard,
        decreasedThievingDamagePreventionThreshold: Standard

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
}

export { };