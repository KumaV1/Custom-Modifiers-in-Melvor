/** Based on Utils.applyModifier */
export enum ModifierType {
    /** Math.floor(baseStat * (1 + modifier / 100)); */
    PercentageBonus = 0,

    /** baseStat + modifier */
    AdditiveBonus = 1,

    /** Math.floor(baseStat * (1 - modifier / 100)) */
    NegativeAdditiveBonus = 2,

    /** Math.floor(baseStat * (modifier / 100)) */
    MultiplyBaseByPercentageWithFlooring = 3,

    /** baseStat * (modifier / 100) */
    MultiplyBaseByPercentage = 4
}