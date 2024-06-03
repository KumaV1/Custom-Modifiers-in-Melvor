declare global {
    // TODO: Change names to start with cmim prefix, to avoid collision with other mods
    declare interface CharacterModifierTable {
        readonly increasedChanceToReduceAttackDamageToZero: number;
        readonly decreasedChanceToReduceAttackDamageToZero: number;
        readonly increasedDamageFlatWhileTargetHasMaxHP: number;
        readonly decreasedDamageFlatWhileTargetHasMaxHP: number;
        readonly increasedDamagePercentWhileTargetHasMaxHP: number;
        readonly decreasedDamagePercentWhileTargetHasMaxHP: number;
        readonly increasedDamageFlatIgnoringDamageReduction: number;
        readonly decreasedDamageFlatIgnoringDamageReduction: number;
        readonly increasedGlobalDamagePreventionThreshold: number;
        readonly decreasedGlobalDamagePreventionThreshold: number;
        readonly increasedDamagePreventionThreshold: number;
        readonly decreasedDamagePreventionThreshold: number;
        readonly increasedBarrierDamagePreventionThreshold: number;
        readonly decreasedBarrierDamagePreventionThreshold: number;

        readonly increasedChanceToApplySlowOnSpawn: number;
        readonly decreasedChanceToApplySlowOnSpawn: number;
        readonly increasedChanceToApplyStunOnSpawn: number;
        readonly decreasedChanceToApplyStunOnSpawn: number;
        readonly applyStunOnSpawn: number;
        readonly increasedChanceToApplyPoisonOnSpawn: number;
        readonly decreasedChanceToApplyPoisonOnSpawn: number;
        readonly increasedChanceToApplyDeadlyPoisonOnSpawn: number;
        readonly decreasedChanceToApplyDeadlyPoisonOnSpawn: number;
        readonly increasedChanceToApplyAfflictionOnSpawn: number;
        readonly decreasedChanceToApplyAfflictionOnSpawn: number;
        readonly applyAfflictionOnSpawn: number;
        readonly increasedChanceToApplyBleedOnSpawn: number;
        readonly decreasedChanceToApplyBleedOnSpawn: number;
        readonly increasedChanceToApplyBurnOnSpawn: number;
        readonly decreasedChanceToApplyBurnOnSpawn: number;
        readonly increasedChanceToApplyFreezeOnSpawn: number;
        readonly decreasedChanceToApplyFreezeOnSpawn: number;
        readonly applyFreezeOnSpawn: number;
        readonly increasedChanceToApplyFrostburnOnSpawn: number;
        readonly decreasedChanceToApplyFrostburnOnSpawn: number;
        readonly increasedChanceToApplyShockOnSpawn: number;
        readonly decreasedChanceToApplyShockOnSpawn: number;
        readonly applyShockOnSpawn: number;
        readonly increasedChanceToApplySleepOnSpawn: number;
        readonly decreasedChanceToApplySleepOnSpawn: number;
        readonly applySleepOnSpawn: number;

        readonly increasedChanceToApplyBleed: number;
        readonly decreasedChanceToApplyBleed: number;

        /** Flag (by the custom effect) that effect has been applied, it's NOT an increasing value */
        readonly deathMark: number;
        readonly increasedDeathMarkOnHit: number;
        readonly increasedChanceToApplyStackOfDeathMark: number;
        readonly decreasedChanceToApplyStackOfDeathMark: number;
        readonly increasedDeathMarkImmunity: number;
        readonly decreasedDeathMarkImmunity: number;
        readonly applyDeathMarkOnSpawn: number;

        readonly increasedDamageTakenFromAirSpells: number;
        readonly decreasedDamageTakenFromAirSpells: number;
        readonly increasedDamageTakenFromWaterSpells: number;
        readonly decreasedDamageTakenFromWaterSpells: number;
        readonly increasedDamageTakenFromEarthSpells: number;
        readonly decreasedDamageTakenFromEarthSpells: number;
        readonly increasedDamageTakenFromFireSpells: number;
        readonly decreasedDamageTakenFromFireSpells: number;

        // Only for monster types defined by this base mod
        readonly animalTraitApplied: number;
        readonly demonTraitApplied: number;
        readonly dragonTraitApplied: number;
        readonly elementalTraitApplied: number;
        readonly elfTraitApplied: number;
        readonly humanTraitApplied: number;
        readonly mythicalCreatureTraitApplied: number;
        readonly seaCreatureTraitApplied: number;
        readonly undeadTraitApplied: number

        // TODO: Add method that provides certain boosts based on monster type - although the according getters have to be patched anyway, so not sure if any custom methods/getters could be relevant
    }
}

export { };