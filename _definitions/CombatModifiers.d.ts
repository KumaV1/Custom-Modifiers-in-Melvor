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
        increasedChanceToApplyAfflictionOnSpawn: number,
        decreasedChanceToApplyAfflictionOnSpawn: number,
        increasedChanceToApplyBleedOnSpawn: number,
        decreasedChanceToApplyBleedOnSpawn: number,
        increasedChanceToApplyBurnOnSpawn: number,
        decreasedChanceToApplyBurnOnSpawn: number,
        increasedChanceToApplyFreezeOnSpawn: number,
        decreasedChanceToApplyFreezeOnSpawn: number,
        increasedChanceToApplyFrostburnOnSpawn: number,
        decreasedChanceToApplyFrostburnOnSpawn: number,
        increasedChanceToApplyShockOnSpawn: number,
        decreasedChanceToApplyShockOnSpawn: number,
        increasedChanceToApplySleepOnSpawn: number,
        decreasedChanceToApplySleepOnSpawn: number,

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

        // Only for monster types defined by this base mod
        animalTraitApplied: number,
        demonTraitApplied: number,
        dragonTraitApplied: number,
        elementalTraitApplied: number,
        humanTraitApplied: number,
        mythicalCreatureTraitApplied: number,
        seaCreatureTraitApplied: number,
        undeadTraitApplied: number
    }
}

export { };