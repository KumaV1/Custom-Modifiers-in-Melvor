declare global {
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

        increasedDamageTakenFromAirSpells: Standard,
        decreasedDamageTakenFromAirSpells: Standard,
        increasedDamageTakenFromWaterSpells: Standard,
        decreasedDamageTakenFromWaterSpells: Standard,
        increasedDamageTakenFromEarthSpells: Standard,
        decreasedDamageTakenFromEarthSpells: Standard,
        increasedDamageTakenFromFireSpells: Standard,
        decreasedDamageTakenFromFireSpells: Standard,

        humanTraitApplied: Standard,
        dragonTraitApplied: Standard,
        undeadTraitApplied: Standard,

        increasedDamageAgainstHumans: Standard,
        decreasedDamageAgainstHumans: Standard,
        increasedMaxHitPercentAgainstHumans: Standard,
        decreasedMaxHitPercentAgainstHumans: Standard,
        increasedMaxHitFlatAgainstHumans: Standard,
        decreasedMaxHitFlatAgainstHumans: Standard,
        increasedMinHitBasedOnMaxHitAgainstHumans: Standard,
        decreasedMinHitBasedOnMaxHitAgainstHumans: Standard,
        increasedFlatMinHitAgainstHumans: Standard,
        decreasedFlatMinHitAgainstHumans: Standard,
        increasedGlobalAccuracyAgainstHumans: Standard,
        decreasedGlobalAccuracyAgainstHumans: Standard,
        increasedDamageReductionAgainstHumans: Standard,
        decreasedDamageReductionAgainstHumans: Standard,

        increasedDamageAgainstDragons: Standard,
        decreasedDamageAgainstDragons: Standard,
        increasedMaxHitPercentAgainstDragons: Standard,
        decreasedMaxHitPercentAgainstDragons: Standard,
        increasedMaxHitFlatAgainstDragons: Standard,
        decreasedMaxHitFlatAgainstDragons: Standard,
        increasedMinHitBasedOnMaxHitAgainstDragons: Standard,
        decreasedMinHitBasedOnMaxHitAgainstDragons: Standard,
        increasedFlatMinHitAgainstDragons: Standard,
        decreasedFlatMinHitAgainstDragons: Standard,
        increasedGlobalAccuracyAgainstDragons: Standard,
        decreasedGlobalAccuracyAgainstDragons: Standard,
        increasedDamageReductionAgainstDragons: Standard,
        decreasedDamageReductionAgainstDragons: Standard,

        increasedDamageAgainstUndead: Standard,
        decreasedDamageAgainstUndead: Standard,
        increasedMaxHitPercentAgainstUndead: Standard,
        decreasedMaxHitPercentAgainstUndead: Standard,
        increasedMaxHitFlatAgainstUndead: Standard,
        decreasedMaxHitFlatAgainstUndead: Standard,
        increasedMinHitBasedOnMaxHitAgainstUndead: Standard,
        decreasedMinHitBasedOnMaxHitAgainstUndead: Standard,
        increasedFlatMinHitAgainstUndead: Standard,
        decreasedFlatMinHitAgainstUndead: Standard,
        increasedGlobalAccuracyAgainstUndead: Standard,
        decreasedGlobalAccuracyAgainstUndead: Standard,
        increasedDamageReductionAgainstUndead: Standard,
        decreasedDamageReductionAgainstUndead: Standard,
    }
}

export { };