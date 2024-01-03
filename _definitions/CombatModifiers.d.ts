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