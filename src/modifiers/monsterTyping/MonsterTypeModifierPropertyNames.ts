/**
 * Defines the ultimately dynamically built names for the following modifiers,
 * specific for the respective monster type
 * */
export interface MonsterTypeModifierPropertyNames {
    traitApplied: string,
    increasedDamage: string,
    decreasedDamage: string,
    increasedDamageTaken: string,
    decreasedDamageTaken: string
    increasedMaxHitPercent: string,
    decreasedMaxHitPercent: string,
    increasedMaxHitFlat: string,
    decreasedMaxHitFlat: string,
    increasedMinHitBasedOnMaxHit: string,
    decreasedMinHitBasedOnMaxHit: string,
    increasedFlatMinHit: string,
    decreasedFlatMinHit: string,
    increasedGlobalAccuracy: string,
    decreasedGlobalAccuracy: string,
    increasedDamageReduction: string,
    decreasedDamageReduction: string,
    increasedChanceToApplyTraitInfiniteOnSpawn: string,
    decreasedChanceToApplyTraitInfiniteOnSpawn: string,
    applyTraitTurnsOnSpawn: string,
    increasedChanceToApplyTrait: string,
    decreasedChanceToApplyTrait: string,
    applyTraitTurns: string
}