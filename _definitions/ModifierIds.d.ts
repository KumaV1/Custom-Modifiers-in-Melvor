declare global {
    /**
     * Defines all static modifier definitions the mod provides
     * Does NOT include monster type modifiers
     */
    declare const enum CmimModifierIds {
        skillXPPerLevel = "customModifiersInMelvor:skillXPPerLevel",
        flatSkillXPPerLevel = "customModifiersInMelvor:flatSkillXPPerLevel",
        flatSkillXP = "customModifiersInMelvor:flatSkillXP",
        damagePreventionThresholdThieving = "customModifiersInMelvor:damagePreventionThresholdThieving",

        maxHitAgainstCombatAreaMonsters = "customModifiersInMelvor:maxHitAgainstCombatAreaMonsters",
        flatMaxHitAgainstCombatAreaMonsters = "customModifiersInMelvor:flatMaxHitAgainstCombatAreaMonsters",
        flatMinHitAgainstCombatAreaMonsters = "customModifiersInMelvor:flatMinHitAgainstCombatAreaMonsters",
        minHitBasedOnMaxHitToCombatAreaMonsters = "customModifiersInMelvor:minHitBasedOnMaxHitToCombatAreaMonsters",
        accuracyRatingAgainstCombatAreaMonsters = "customModifiersInMelvor:accuracyRatingAgainstCombatAreaMonsters",
        flatResistanceAgainstCombatAreaMonsters = "customModifiersInMelvor:flatResistanceAgainstCombatAreaMonsters",

        maxHitAgainstSlayerAreaMonsters = "customModifiersInMelvor:maxHitAgainstSlayerAreaMonsters",
        flatMaxHitAgainstSlayerAreaMonsters = "customModifiersInMelvor:flatMaxHitAgainstSlayerAreaMonsters",
        flatMinHitAgainstSlayerAreaMonsters = "customModifiersInMelvor:flatMinHitAgainstSlayerAreaMonsters",
        minHitBasedOnMaxHitToSlayerAreaMonsters = "customModifiersInMelvor:minHitBasedOnMaxHitToSlayerAreaMonsters",
        accuracyRatingAgainstSlayerAreaMonsters = "customModifiersInMelvor:accuracyRatingAgainstSlayerAreaMonsters",
        flatResistanceAgainstSlayerAreaMonsters = "customModifiersInMelvor:flatResistanceAgainstSlayerAreaMonsters",

        maxHitAgainstDungeonMonsters = "customModifiersInMelvor:maxHitAgainstDungeonMonsters",
        flatMaxHitAgainstDungeonMonsters = "customModifiersInMelvor:flatMaxHitAgainstDungeonMonsters",
        flatMinHitAgainstDungeonMonsters = "customModifiersInMelvor:flatMinHitAgainstDungeonMonsters",
        minHitBasedOnMaxHitToDungeonMonsters = "customModifiersInMelvor:minHitBasedOnMaxHitToDungeonMonsters",
        accuracyRatingAgainstDungeonMonsters = "customModifiersInMelvor:accuracyRatingAgainstDungeonMonsters",
        flatResistanceAgainstDungeonMonsters = "customModifiersInMelvor:flatResistanceAgainstDungeonMonsters",

        maxHitSlayerTask = "customModifiersInMelvor:maxHitSlayerTask",
        flatMaxHitSlayerTask = "customModifiersInMelvor:flatMaxHitSlayerTask",
        minHitBasedOnMaxHitSlayerTask = "customModifiersInMelvor:minHitBasedOnMaxHitSlayerTask",
        flatMinHitSlayerTask = "customModifiersInMelvor:flatMinHitSlayerTask",
        accuracyRatingSlayerTask = "customModifiersInMelvor:accuracyRatingSlayerTask",

        maxHitAgainstBosses = "customModifiersInMelvor:maxHitAgainstBosses",
        flatMaxHitAgainstBosses = "customModifiersInMelvor:flatMaxHitAgainstBosses",
        flatMinHitAgainstBosses = "customModifiersInMelvor:flatMinHitAgainstBosses",
        minHitBasedOnMaxHitAgainstBosses = "customModifiersInMelvor:minHitBasedOnMaxHitAgainstBosses",
        accuracyRatingAgainstBosses = "customModifiersInMelvor:accuracyRatingAgainstBosses",

        chanceToReduceAttackDamageToZero = "customModifiersInMelvor:chanceToReduceAttackDamageToZero",
        damageFlatWhileTargetHasMaxHP = "customModifiersInMelvor:damageFlatWhileTargetHasMaxHP",
        damagePercentWhileTargetHasMaxHP = "customModifiersInMelvor:damagePercentWhileTargetHasMaxHP",
        damageFlatIgnoringResistance = "customModifiersInMelvor:damageFlatIgnoringResistance",
        damagePreventionThreshold = "customModifiersInMelvor:damagePreventionThreshold",
        damagePreventionThresholdCombat = "customModifiersInMelvor:damagePreventionThresholdCombat",
        damagePreventionThresholdBarrier = "customModifiersInMelvor:damagePreventionThresholdBarrier",
    }
}

export { };