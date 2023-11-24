import { MonsterTypeMappingManager } from './MonsterTypeMappingManager';
import { MonsterTypeModifierGroup } from './MonsterTypeModifierGroup';
import { MonsterTypeModifierPropertyNames } from './MonsterTypeModifierPropertyNames'
import { MonsterTypeModifierType } from './MonsterTypeModifierType'

export class MonsterTypeHelper {
    /**
     * Creates the name of the property saved on spawn, to enable bool-checks rather than array checks
     * @param typeSingularName
     * @returns
     */
    public static createIsTypePropertyName(typeSingularName: string): string {
        return `is${typeSingularName}`;
    }

    /**
     * Creates an object of all modifiers added for the given type,
     * with the names dynamically created based on the name of the type
     * @param typeSingularName
     * @param typePluralName
     * @returns
     */
    public static createModifierPropertyNames(typeSingularName: string, typePluralName: string): MonsterTypeModifierPropertyNames {
        typeSingularName = `${typeSingularName[0].toLowerCase()}${typeSingularName.substring(1)}`;
        return {
            traitApplied: `${typeSingularName}TraitApplied`,
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
     * Creates the modifier data object, which is used to actually register a modifier to the game
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

    /**
     * For the given entity, retrieves the overall bonus for the given type/group of modifier.
     * Expects that the check for an ongoing fight has already been done (regarding accessing info about the target for certain modifiers)
     * @param entity
     * @param modifierGroup
     * @returns
     */
    public static getModificationValue(entity: Character, modifierGroup: MonsterTypeModifierGroup): number {
        if (!entity) {
            return 0;
        }

        //console.log(`getModificationValue | modifierGroup: ${modifierGroup}`);
        let modification = 0;

        const types = MonsterTypeMappingManager.getActiveTypesAsArray();
        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
            const isOfType: Boolean = entity.target[type.isTypePropertyName];
            // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
            //console.log(`getModificationValue | isOfType | propertyName: ${type.isTypePropertyName} / value: ${entity.target[type.isTypePropertyName]}, ${isOfType}`);
            // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
            const traitApplied: number = entity.target.modifiers[type.modifierPropertyNames.traitApplied];
            // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
            //console.log(`getModificationValue | isOfType | propertyName: ${type.modifierPropertyNames.traitApplied} / value: ${entity.target.modifiers[type.modifierPropertyNames.traitApplied]}, ${traitApplied}`);
            if (!isOfType && traitApplied <= 0) {
                continue;
            }

            switch (modifierGroup) {
                case MonsterTypeModifierGroup.DamagePercent:
                    //console.log(`getModificationValue | TotalDamage`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedDamage]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedDamage]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += entity.modifiers[type.modifierPropertyNames.increasedDamage] - entity.modifiers[type.modifierPropertyNames.decreasedDamage];
                    break;
                case MonsterTypeModifierGroup.MaxHitPercent:
                    //console.log(`getModificationValue | MaxHitPercent`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedMaxHitPercent]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMaxHitPercent]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += entity.modifiers[type.modifierPropertyNames.increasedMaxHitPercent] - entity.modifiers[type.modifierPropertyNames.decreasedMaxHitPercent];
                    break;
                case MonsterTypeModifierGroup.MaxHitFlat:
                    //console.log(`getModificationValue | MaxHitFlat`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedMaxHitFlat]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMaxHitFlat]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification +=  entity.modifiers[type.modifierPropertyNames.increasedMaxHitFlat] - entity.modifiers[type.modifierPropertyNames.decreasedMaxHitFlat];
                    break;
                case MonsterTypeModifierGroup.MinHitBasedOnMaxHit:
                    //console.log(`getModificationValue | MinHitBasedOnMaxHit`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedMinHitBasedOnMaxHit]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += Math.floor((entity.stats.maxHit * (entity.modifiers[type.modifierPropertyNames.increasedMinHitBasedOnMaxHit] - entity.modifiers[type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit])) / 100);
                    break;
                case MonsterTypeModifierGroup.FlatMinHit:
                    //console.log(`getModificationValue | FlatMinHit`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedFlatMinHit]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedFlatMinHit]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += numberMultiplier * (entity.modifiers[type.modifierPropertyNames.increasedFlatMinHit] - entity.modifiers[type.modifierPropertyNames.decreasedFlatMinHit]);
                    break;
                case MonsterTypeModifierGroup.GlobalAccuracy:
                   // console.log(`getModificationValue | GlobalAccuracy`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedGlobalAccuracy]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedGlobalAccuracy]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += entity.modifiers[type.modifierPropertyNames.increasedGlobalAccuracy] - entity.modifiers[type.modifierPropertyNames.decreasedGlobalAccuracy];
                    break;
                case MonsterTypeModifierGroup.DamageReduction:
                    //console.log(`getModificationValue | DamageReduction`);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.increasedDamageReduction]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    //console.log(entity.modifiers[type.modifierPropertyNames.decreasedDamageReduction]);
                    // @ts-ignore - We know these properties exist, as they were dynamically added before
                    modification += entity.modifiers[type.modifierPropertyNames.increasedDamageReduction] - entity.modifiers[type.modifierPropertyNames.decreasedDamageReduction];
                    break;
                default:
                    break;
            }
        }

        //console.log(`getModificationValue | final modification calculation result: ${modification}`);
        return modification;
    }
}