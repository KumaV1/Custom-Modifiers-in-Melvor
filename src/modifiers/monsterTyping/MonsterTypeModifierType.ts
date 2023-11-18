/** The types of modifiers existing for monster types */
export enum MonsterTypeModifierType {
    IncreasedDamage = "increasedDamage",
    DecreasedDamage = "decreasedDamage",
    IncreasedMaxHitPercent = "increasedMaxHitPercent",
    DecreasedMaxHitPercent = "decreasedMaxHitPercent",
    IncreasedMaxHitFlat = "increasedMaxHitFlat",
    DecreasedMaxHitFlat = "decreasedMaxHitFlat",
    IncreasedMinHitBasedOnMaxHit = "increasedMinHitBasedOnMaxHit",
    DecreasedMinHitBasedOnMaxHit = "decreasedMinHitBasedOnMaxHit",
    IncreasedFlatMinHit = "increasedFlatMinHit",
    DecreasedFlatMinHit = "decreasedFlatMinHit",
    IncreasedGlobalAccuracy = "increasedGlobalAccuracy",
    DecreasedGlobalAccuracy = "decreasedGlobalAccuracy",
    IncreasedDamageReduction = "increasedDamageReduction",
    DecreasedDamageReduction = "decreasedDamageReduction",
}