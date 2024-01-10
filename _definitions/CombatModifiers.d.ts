declare global {
    interface CombatModifiers {
        increasedChanceToReduceAttackDamageToZero: number,
        decreasedChanceToReduceAttackDamageToZero: number,
        increasedDamageFlatWhileTargetHasMaxHP: number,
        decreasedDamageFlatWhileTargetHasMaxHP: number,
        increasedDamagePercentWhileTargetHasMaxHP: number,
        decreasedDamagePercentWhileTargetHasMaxHP: number,
        increasedDamageFlatIgnoringDamageReduction: number,
        decreasedDamageFlatIgnoringDamageReduction: number,

        increasedChanceToApplySlowOnSpawn: number,
        decreasedChanceToApplySlowOnSpawn: number,
        increasedChanceToApplyStunOnSpawn: number,
        decreasedChanceToApplyStunOnSpawn: number,
        applyStunOnSpawn: number,
        increasedChanceToApplyPoisonOnSpawn: number,
        decreasedChanceToApplyPoisonOnSpawn: number,
        increasedChanceToApplyDeadlyPoisonOnSpawn: number,
        decreasedChanceToApplyDeadlyPoisonOnSpawn: number,
        increasedChanceToApplyAfflictionOnSpawn: number,
        decreasedChanceToApplyAfflictionOnSpawn: number,
        applyAfflictionOnSpawn: number,
        increasedChanceToApplyBleedOnSpawn: number,
        decreasedChanceToApplyBleedOnSpawn: number,
        increasedChanceToApplyBurnOnSpawn: number,
        decreasedChanceToApplyBurnOnSpawn: number,
        increasedChanceToApplyFreezeOnSpawn: number,
        decreasedChanceToApplyFreezeOnSpawn: number,
        applyFreezeOnSpawn: number,
        increasedChanceToApplyFrostburnOnSpawn: number,
        decreasedChanceToApplyFrostburnOnSpawn: number,
        increasedChanceToApplyShockOnSpawn: number,
        decreasedChanceToApplyShockOnSpawn: number,
        applyShockOnSpawn: number,
        increasedChanceToApplySleepOnSpawn: number,
        decreasedChanceToApplySleepOnSpawn: number,
        applySleepOnSpawn: number,

        increasedChanceToApplyBleed: number,
        decreasedChanceToApplyBleed: number,

        /** Flag (by the custom effect) that effect has been applied, it's NOT an increasing value */
        deathMark: number,
        increasedDeathMarkOnHit: number,
        increasedChanceToApplyStackOfDeathMark: number,
        decreasedChanceToApplyStackOfDeathMark: number,
        increasedDeathMarkImmunity: number,
        decreasedDeathMarkImmunity: number,
        applyDeathMarkOnSpawn: number,

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