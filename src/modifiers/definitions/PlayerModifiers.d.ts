declare global {
    interface PlayerModifiers {
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
}

export { };