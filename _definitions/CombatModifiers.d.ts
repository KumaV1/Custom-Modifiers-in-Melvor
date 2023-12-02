// Possibly move modifiers based on monster types to "_definitions" - although other mods are most likely not gonna use those modifiers in their own code
// Exception to that being the "trait applied" modifiers I guess
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
        seaCreatureTraitApplied: number,
        undeadTraitApplied: number
    }
}

export { };