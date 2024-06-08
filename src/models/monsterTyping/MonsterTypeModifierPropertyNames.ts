/**
 * Defines the ultimately dynamically built names for the following modifiers,
 * specific for the respective monster type
 * */
export interface MonsterTypeModifierPropertyNames {
    traitApplied: string,
    damage: string
    //increasedDamage: string,
    //decreasedDamage: string,
    damageTaken: string, // TODO: If I can add a custom scope, then this (among others here) could be added as a scope instead
    //increasedDamageTaken: string,
    //decreasedDamageTaken: string
    maxHitPercent: string,
    //increasedMaxHitPercent: string,
    //decreasedMaxHitPercent: string,
    maxHitFlat: string,
    //increasedMaxHitFlat: string,
    //decreasedMaxHitFlat: string,
    minHitBasedOnMaxHit: string,
    //increasedMinHitBasedOnMaxHit: string,
    //decreasedMinHitBasedOnMaxHit: string,
    flatMinHit: string,
    //increasedFlatMinHit: string,
    //decreasedFlatMinHit: string,
    accuracyRating: string,
    //increasedGlobalAccuracy: string,
    //decreasedGlobalAccuracy: string,
    flatResistance: string,
    //increasedDamageReduction: string,
    //decreasedDamageReduction: string,
    //chanceToApplyTraitInfiniteOnSpawn: string, // TODO: REPLACE BY COMBAT EFFECT INSTEAD - no equivalent modifier, so just remove as is?
    //increasedChanceToApplyTraitInfiniteOnSpawn: string,
    //decreasedChanceToApplyTraitInfiniteOnSpawn: string,
    //applyTraitTurnsOnSpawn: string, // TODO: REPLACE BY COMBAT EFFECT INSTEAD - no equivalent modifier, so just remove as is?
    //chanceToApplyTrait: string, // TODO: REPLACE BY COMBAT EFFECT INSTEAD - no equivalent modifier, so just remove as is?
    //increasedChanceToApplyTrait: string,
    //decreasedChanceToApplyTrait: string,
    //applyTraitTurns: string // TODO: REPLACE BY COMBAT EFFECT INSTEAD - no equivalent modifier, so just remove as is?
}