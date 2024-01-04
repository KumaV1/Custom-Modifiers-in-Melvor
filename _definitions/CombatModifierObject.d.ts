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
        increasedChanceToApplyAfflictionOnSpawn: Standard,
        decreasedChanceToApplyAfflictionOnSpawn: Standard,
        increasedChanceToApplyBleedOnSpawn: Standard,
        decreasedChanceToApplyBleedOnSpawn: Standard,
        increasedChanceToApplyBurnOnSpawn: Standard,
        decreasedChanceToApplyBurnOnSpawn: Standard,
        increasedChanceToApplyFreezeOnSpawn: Standard,
        decreasedChanceToApplyFreezeOnSpawn: Standard,
        increasedChanceToApplyFrostburnOnSpawn: Standard,
        decreasedChanceToApplyFrostburnOnSpawn: Standard,
        increasedChanceToApplyShockOnSpawn: Standard,
        decreasedChanceToApplyShockOnSpawn: Standard,
        increasedChanceToApplySleepOnSpawn: Standard,
        decreasedChanceToApplySleepOnSpawn: Standard,

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

        // Only for monster types defined by this base mod
        animalTraitApplied: Standard,
        demonTraitApplied: Standard,
        dragonTraitApplied: Standard,
        elementalTraitApplied: Standard,
        humanTraitApplied: Standard,
        mythicalCreatureTraitApplied: Standard,
        seaCreatureTraitApplied: Standard,
        undeadTraitApplied: Standard
    }
}

export { };