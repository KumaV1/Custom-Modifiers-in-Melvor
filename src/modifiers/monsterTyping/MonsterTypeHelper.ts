import { MonsterTypeModifierPropertyNames } from './MonsterTypeModifierPropertyNames'
import { MonsterTypeModifierType } from './MonsterTypeModifierType'

export class MonsterTypeHelper {
    /**
     * TODO: Explain
     * @param typeSingularName
     * @returns
     */
    public static createIsTypePropertyName(typeSingularName: string): string {
        return `is${typeSingularName}`;
    }

    /**
     * TODO: Explain
     * @param typePluralName
     * @returns
     */
    public static createModifierPropertyNames(typePluralName: string): MonsterTypeModifierPropertyNames {
        return {
            increasedDamage: `increasedDamageAgainst${typePluralName}`,
            decreasedDamage: `decreasedDamageAgainst${typePluralName}`,
            increasedMaxHitPercent: `increasedMaxHitPercentAgainst${typePluralName}`,
            decreasedMaxHitPercent: `decreasedMaxHitPercentAgainst${typePluralName}`,
            increasedMaxHitFlat: `increasedMaxHitFlatAgainst${typePluralName}`,
            decreasedMaxHitFlat: `decreasedMaxHitFlatAgainst${typePluralName}`,
            increasedMinHitBasedOnMaxHit: `increasedMinHitBasedOnMaxHitAgainst${typePluralName}`,
            decreasedMinHitBasedOnMaxHit: `decreasedMinHitBasedOnMaxHitAgainst${typePluralName}`,
            increasedFlatMinHit: `increasedFlatMinHitAgainst${typePluralName}`,
            decreasedFlatMinHit: `decreasedFlatMinHitAgainst${typePluralName}`,
            increasedGlobalAccuracy: `increasedGlobalAccuracyAgainst${typePluralName}`,
            decreasedGlobalAccuracy: `decreasedGlobalAccuracyAgainst${typePluralName}`,
            increasedDamageReduction: `increasedDamageReductionAgainst${typePluralName}`,
            decreasedDamageReduction: `decreasedDamageReductionAgainst${typePluralName}`,
        };
    }

    /**
     *
     * @param modifierType
     * @param modifierName
     * @returns
     */
    public static createModifierDataObject(modifierType: MonsterTypeModifierType, modifierName: string) {
        // First, create the default state of the object to crate
        let modifierObject = {
            get langDescription() {
                return getLangString(`MODIFIER_DATA_${modifierName}`);
            },
            description: '',
            isSkill: false,
            isNegative: false,
            tags: ['combat']
        };

        // Modify negative flag
        switch (modifierType) {
            case MonsterTypeModifierType.DecreasedDamage:
            case MonsterTypeModifierType.DecreasedMaxHitPercent:
            case MonsterTypeModifierType.DecreasedMaxHitFlat:
            case MonsterTypeModifierType.DecreasedMinHitBasedOnMaxHit:
            case MonsterTypeModifierType.DecreasedFlatMinHit:
            case MonsterTypeModifierType.DecreasedGlobalAccuracy:
            case MonsterTypeModifierType.DecreasedDamageReduction:
                modifierObject.isNegative = true;
                break;
            default:
        }

        // Modify value modifier
        switch (modifierType) {
            case MonsterTypeModifierType.IncreasedMaxHitFlat:
            case MonsterTypeModifierType.DecreasedMaxHitFlat:
            case MonsterTypeModifierType.IncreasedFlatMinHit:
            case MonsterTypeModifierType.DecreasedFlatMinHit:
                // @ts-ignore Ignore implicit any error
                modifierObject["modifyValue"] = multiplyByNumberMultiplier;
                break;
            default:
        }

        return modifierObject;
    }
}