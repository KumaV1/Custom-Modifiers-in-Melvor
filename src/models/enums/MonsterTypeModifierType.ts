/**
 * The types of modifiers existing for monster types
 * TODO: Check, whether or not this can replace/be replaced with `MonsterTypeModifierPropertyNames`, as that one basically defines an object, but there may be a way to use this collection of values and define it as the only possible property names, making a separate interface redundant
 */
export enum MonsterTypeModifierType {
    TraitApplied = "traitApplied",
    Damage = "damage",
    //IncreasedDamage = "increasedDamage",
    //DecreasedDamage = "decreasedDamage",
    DamageTaken = "damageTaken",
    //IncreasedDamageTaken = "increasedDamageTaken",
    //DecreasedDamageTaken = "decreasedDamageTaken",
    MaxHitPercent = "maxHitPercent",
    //IncreasedMaxHitPercent = "increasedMaxHitPercent",
    //DecreasedMaxHitPercent = "decreasedMaxHitPercent",
    MaxHitFlat = "maxHitFlat",
    //IncreasedMaxHitFlat = "increasedMaxHitFlat",
    //DecreasedMaxHitFlat = "decreasedMaxHitFlat",
    MinHitBasedOnMaxHit = "minHitBasedOnMaxHit",
    //IncreasedMinHitBasedOnMaxHit = "increasedMinHitBasedOnMaxHit",
    //DecreasedMinHitBasedOnMaxHit = "decreasedMinHitBasedOnMaxHit",
    FlatMinHit = "flatMinHit",
    //IncreasedFlatMinHit = "increasedFlatMinHit",
    //DecreasedFlatMinHit = "decreasedFlatMinHit",
    AccuracyRating = "accuracyRating",
    //IncreasedGlobalAccuracy = "increasedGlobalAccuracy",
    //DecreasedGlobalAccuracy = "decreasedGlobalAccuracy",
    FlatResistance = "flatResistance",
    //IncreasedDamageReduction = "increasedDamageReduction",
    //DecreasedDamageReduction = "decreasedDamageReduction",
    //ChanceToApplyTraitInfiniteOnSpawn = "chanceToApplyTraitInfiniteOnSpawn",
    //IncreasedChanceToApplyTraitInfiniteOnSpawn = "increasedChanceToApplyTraitInfiniteOnSpawn",
    //DecreasedChanceToApplyTraitInfiniteOnSpawn = "decreasedChanceToApplyTraitInfiniteOnSpawn",
    //ApplyTraitTurnsOnSpawn = "applyTraitTurnsOnSpawn",
    //ChanceToApplyTrait = "chanceToApplyTrait",
    //IncreasedChanceToApplyTrait = "increasedChanceToApplyTrait",
    //DecreasedChanceToApplyTrait = "decreasedChanceToApplyTrait",
    //ApplyTraitTurns = "applyTraitTurns"
}