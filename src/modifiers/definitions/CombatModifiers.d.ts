declare global {
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

        increasedDamageTakenFromAirSpells: number,
        decreasedDamageTakenFromAirSpells: number,
        increasedDamageTakenFromWaterSpells: number,
        decreasedDamageTakenFromWaterSpells: number,
        increasedDamageTakenFromEarthSpells: number,
        decreasedDamageTakenFromEarthSpells: number,
        increasedDamageTakenFromFireSpells: number,
        decreasedDamageTakenFromFireSpells: number,

        humanTraitApplied: number,
        dragonTraitApplied: number,
        undeadTraitApplied: number,

        increasedDamageAgainstHumans: number,
        decreasedDamageAgainstHumans: number,
        increasedMaxHitPercentAgainstHumans: number,
        decreasedMaxHitPercentAgainstHumans: number,
        increasedMaxHitFlatAgainstHumans: number,
        decreasedMaxHitFlatAgainstHumans: number,
        increasedMinHitBasedOnMaxHitAgainstHumans: number,
        decreasedMinHitBasedOnMaxHitAgainstHumans: number,
        increasedFlatMinHitAgainstHumans: number,
        decreasedFlatMinHitAgainstHumans: number,

        increasedDamageAgainstDragons: number,
        decreasedDamageAgainstDragons: number,
        increasedMaxHitPercentAgainstDragons: number,
        decreasedMaxHitPercentAgainstDragons: number,
        increasedMaxHitFlatAgainstDragons: number,
        decreasedMaxHitFlatAgainstDragons: number,
        increasedMinHitBasedOnMaxHitAgainstDragons: number,
        decreasedMinHitBasedOnMaxHitAgainstDragons: number,
        increasedFlatMinHitAgainstDragons: number,
        decreasedFlatMinHitAgainstDragons: number,

        increasedDamageAgainstUndead: number,
        decreasedDamageAgainstUndead: number,
        increasedMaxHitPercentAgainstUndead: number,
        decreasedMaxHitPercentAgainstUndead: number,
        increasedMaxHitFlatAgainstUndead: number,
        decreasedMaxHitFlatAgainstUndead: number,
        increasedMinHitBasedOnMaxHitAgainstUndead: number,
        decreasedMinHitBasedOnMaxHitAgainstUndead: number,
        increasedFlatMinHitAgainstUndead: number,
        decreasedFlatMinHitAgainstUndead: number
    }
}

export { };