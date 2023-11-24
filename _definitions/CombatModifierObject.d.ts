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

        // Only for monster types set to be active
        humanTraitApplied: Standard,
        dragonTraitApplied: Standard,
        undeadTraitApplied: Standard
    }
}

export { };