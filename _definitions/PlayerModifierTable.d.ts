declare global {
    declare interface PlayerModifierTable {
        readonly maxHitPercentToCombatAreaMonsters: number;
        readonly maxHitFlatToCombatAreaMonsters: number;
        readonly flatMinHitToCombatAreaMonsters: number;
        readonly minHitBasedOnMaxHitToCombatAreaMonsters: number;
        readonly accuracyRatingAgainstCombatAreaMonsters: number;
        readonly flatResistanceAgainstCombatAreaMonsters: number; // TODO: Will require rewrite of modifier texts btw

        readonly maxHitPercentToSlayerAreaMonsters: number;
        readonly maxHitFlatToSlayerAreaMonsters: number;
        readonly flatMinHitToSlayerAreaMonsters: number;
        readonly minHitBasedOnMaxHitToSlayerAreaMonsters: number;
        readonly accuracyRatingAgainstSlayerAreaMonsters: number;
        readonly flatResistanceAgainstSlayerAreaMonsters: number;

        readonly maxHitPercentToDungeonMonsters: number;
        readonly maxHitFlatToDungeonMonsters: number;
        readonly flatMinHitToDungeonMonsters: number;
        readonly minHitBasedOnMaxHitToDungeonMonsters: number;
        readonly accuracyRatingAgainstDungeonMonsters: number;
        readonly flatResistanceAgainstDungeonMonsters: number;

        readonly maxHitPercentToSlayerTasks: number;
        readonly maxHitFlatToSlayerTasks: number;
        readonly minHitBasedOnMaxHitToSlayerTasks: number;
        readonly flatMinHitToSlayerTasks: number;
        readonly accuracyRatingAgainstSlayerTasks: number;

        readonly maxHitPercentAgainstBosses: number;
        readonly maxHitFlatAgainstBosses: number;
        readonly flatMinHitAgainstBosses: number;
        readonly minHitBasedOnMaxHitAgainstBosses: number;
        readonly accuracyRatingAgainstBosses: number;

        readonly thievingDamagePreventionThreshold: number; // TODO: Check whether damage prevention threshold can be scoped (probably not)

        /** Percentage */
        readonly skillXPPerLevel: number;
        /** Increases total xp gain for all skills (so unaffected by xp multipliers, except for halving!) */
        readonly flatSkillXPPerLevel: number;
        /** Increases total xp gain for all skills (so unaffected by xp multipliers, except for halving!) */
        readonly flatSkillXP: number;
    }
}

export { };