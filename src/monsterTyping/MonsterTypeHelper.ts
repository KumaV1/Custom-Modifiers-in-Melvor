import { Constants } from '../Constants';
import { Constants as ModifierConstants } from '../modifiers/Constants';
import { MonsterTypeDefinition } from './MonsterTypeDefinition';
import { MonsterTypeEffectObjectNames } from './MonsterTypeEffectObjectNames';
import { MonsterTypeManager } from './MonsterTypeManager';
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
        const typeSingularNameLower = `${typeSingularName[0].toLowerCase()}${typeSingularName.substring(1)}`;
        return {
            traitApplied: `${typeSingularNameLower}TraitApplied`,
            increasedDamage: `increasedDamageAgainst${typePluralName}`,
            decreasedDamage: `decreasedDamageAgainst${typePluralName}`,
            increasedDamageTaken: `increasedDamageTakenFrom${typePluralName}`,
            decreasedDamageTaken: `decreasedDamageTakenFrom${typePluralName}`,
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
            increasedChanceToApplyTraitInfiniteOnSpawn: `increasedChanceToApply${typeSingularName}TraitInfiniteOnSpawn`,
            decreasedChanceToApplyTraitInfiniteOnSpawn: `decreasedChanceToApply${typeSingularName}TraitInfiniteOnSpawn`,
            applyTraitTurnsOnSpawn: `apply${typeSingularName}TraitTurnsOnSpawn`,
            increasedChanceToApplyTrait: `increasedChanceToApply${typeSingularName}Trait`,
            decreasedChanceToApplyTrait: `decreasedChanceToApply${typeSingularName}Trait`,
            applyTraitTurns: `apply${typeSingularName}TraitTurns`
        };
    }

    public static createEffectPropertyNames(typeSingularName: string): MonsterTypeEffectObjectNames {
        const typeSingularNameLower = `${typeSingularName[0].toLowerCase()}${typeSingularName.substring(1)}`;
        return {
            traitApplicationCustomModifierEffect: `${typeSingularNameLower}TraitApplicationCustomEffect`,
            traitApplicationStackingEffect: `${typeSingularNameLower}TraitApplicationStackingEffect`,
            traitApplicationCustomModifierEffectAttack: `${typeSingularNameLower}TraitApplyingAttack`
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
            case MonsterTypeModifierType.IncreasedDamageTaken:
            case MonsterTypeModifierType.DecreasedMaxHitPercent:
            case MonsterTypeModifierType.DecreasedMaxHitFlat:
            case MonsterTypeModifierType.DecreasedMinHitBasedOnMaxHit:
            case MonsterTypeModifierType.DecreasedFlatMinHit:
            case MonsterTypeModifierType.DecreasedGlobalAccuracy:
            case MonsterTypeModifierType.DecreasedDamageReduction:
            case MonsterTypeModifierType.DecreasedChanceToApplyTraitInfiniteOnSpawn:
            case MonsterTypeModifierType.DecreasedChanceToApplyTrait:
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
     *
     * @param type
     * @returns
     */
    public static createTraitStackingEffectGamePackage(type: MonsterTypeDefinition): GameDataPackage {
        return {
            "$schema": Constants.SCHEMA,
            "namespace": Constants.MOD_NAMESPACE,
            "data": {
                "stackingEffects": [MonsterTypeHelper.createTraitStackingEffectDataObject(type)]
            }
        }
    }

    /**
     *
     * @param type
     * @returns
     */
    private static createTraitStackingEffectDataObject(type: MonsterTypeDefinition): StackingEffectData {
        let obj: StackingEffectData = {
            id: `${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`,
            stacksToAdd: 1,
            maxStacks: 99,
            name: `${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_NAME_SUFFIX}`,
            langName: {
                category: ModifierConstants.TRAIT_STACKING_EFFECT_LANGUAGE_CATEGORY,
                id: `${type.singularName}${ModifierConstants.TRAIT_STACKING_EFFECT_ID_SUFFIX}`
            },
            media: type.iconResourceUrl,
            modifiers: {

            }
        };

        // @ts-ignore Ignore implicit any error
        obj.modifiers[type.modifierPropertyNames.traitApplied] = 1;

        return obj;
    }

    /**
     * Custom effects that aren't specifically defined to be an exception to the rule (see "saveWriter.writeEffect"),
     * must be identifiable through an Id, in order to be serializable to game character save file.
     *
     * This method takes care of creating a registerable package for said effect
     * @param type
     * @returns
     */
    public static createTraitCustomModifierEffectAttackGamePackage(type: MonsterTypeDefinition, customEffectData: CustomEffectData): GameDataPackage {
        return {
            "$schema": Constants.SCHEMA,
            "namespace": Constants.MOD_NAMESPACE,
            "data": {
                "attacks": [MonsterTypeHelper.createTraitCustomEffectAttackDataObject(type, customEffectData)]
            }
        }
    }

    /**
     *
     * @param type
     * @returns
     */
    private static createTraitCustomEffectAttackDataObject(type: MonsterTypeDefinition, customEffectData: CustomEffectData): AttackData {
        let attack: AttackData = {
            id: `${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX}`,
            defaultChance: 0, // only used for manual triggering, so irrelevant
            damage: [{
                damageType: "Normal",
                amplitude: 0
            }], // we only define a preHitEffect, this shouldn't deal any damage
            prehitEffects: [customEffectData],
            onhitEffects: [],
            cantMiss: false,
            attackCount: 1,
            attackInterval: -1,
            lifesteal: 0,
            name: "Trait application",
            description: "Performs a non-damaging, pre-hit-effect-only attack that applies the given trait"
        }

        return attack;
    }

    /**
     *
     * @param type
     * @returns
     */
    public static createTraitCustomEffectDataInfiniteObject(type: MonsterTypeDefinition): CustomEffectData {
        const obj: CustomEffectData = {
            effectType: "Custom",
            type: 'Modifier',
            maxStacks: 1,
            stacksToAdd: 1,
            turns: Infinity,
            character: "Target",
            countsOn: "Target",
            media: type.iconResourceUrl,
            name: `${type.singularName}${ModifierConstants.TRAIT_CUSTOM_EFFECT_NAME_SUFFIX}`,
            langName: `${ModifierConstants.TRAIT_CUSTOM_EFFECT_LANGUAGE_CATEGORY}_${type.singularName}_Trait_Modifier_Effect`,
            modifiers: {

            }
        };

        // @ts-ignore Ignore implicit any error
        obj.modifiers[type.modifierPropertyNames.traitApplied] = 1;

        return obj;
    }

    /**
     * For the given entity, retrieves the overall bonus for the given type/group of modifier.
     * Expects that the check for an ongoing fight has already been done (regarding accessing info about the target for certain modifiers)
     *
     * REMARK: This could be optimized performance-wise, if I stopped using an enum and split everything up into separate methods again,
     * as in that case, we won't add a bunch of "switch" questions (basically boolean if-cases) to the calculation process, as it is right now
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

        const types = MonsterTypeManager.getActiveTypesAsArray();
        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            // Right now we wrap method calls into boolean expression, to reduce the overall boolish-checks because of enum value checks from switch-statements
            if (modifierGroup === MonsterTypeModifierGroup.DamageTakenPercent) {
                modification += MonsterTypeHelper.getModificationValueBySelfType(entity, modifierGroup, type);
            } else {
                modification += MonsterTypeHelper.getModificationValueByTargetType(entity, modifierGroup, type);
            }
        }

        //console.log(`getModificationValue | final modification calculation result: ${modification}`);
        return modification;
    }

    /**
     * Calculates modification for cases that are "valid", if the TARGET is treated as the corresponding type
     * @param entity
     * @param modifierGroup
     * @param type
     */
    public static getModificationValueByTargetType(entity: Character, modifierGroup: MonsterTypeModifierGroup, type: MonsterTypeDefinition): number {
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const isOfType: Boolean = entity.target[type.isTypePropertyName];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`getModificationValueByTargetType | isOfType | propertyName: ${type.isTypePropertyName} / value: ${entity.target[type.isTypePropertyName]}, ${isOfType}`);
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const traitApplied: number = entity.target.modifiers[type.modifierPropertyNames.traitApplied];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`getModificationValueByTargetType | isOfType | propertyName: ${type.modifierPropertyNames.traitApplied} / value: ${entity.target.modifiers[type.modifierPropertyNames.traitApplied]}, ${traitApplied}`);
        if (!isOfType && traitApplied <= 0) {
            return 0;
        }

        let modification = 0;
        switch (modifierGroup) {
            case MonsterTypeModifierGroup.DamagePercent:
                //console.log(`getModificationValueByTargetType | TotalDamage`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedDamage]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedDamage]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += entity.modifiers[type.modifierPropertyNames.increasedDamage] - entity.modifiers[type.modifierPropertyNames.decreasedDamage];
                break;
            case MonsterTypeModifierGroup.MaxHitPercent:
                //console.log(`getModificationValueByTargetType | MaxHitPercent`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedMaxHitPercent]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMaxHitPercent]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += entity.modifiers[type.modifierPropertyNames.increasedMaxHitPercent] - entity.modifiers[type.modifierPropertyNames.decreasedMaxHitPercent];
                break;
            case MonsterTypeModifierGroup.MaxHitFlat:
                //console.log(`getModificationValueByTargetType | MaxHitFlat`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedMaxHitFlat]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMaxHitFlat]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += entity.modifiers[type.modifierPropertyNames.increasedMaxHitFlat] - entity.modifiers[type.modifierPropertyNames.decreasedMaxHitFlat];
                break;
            case MonsterTypeModifierGroup.MinHitBasedOnMaxHit:
                //console.log(`getModificationValueByTargetType | MinHitBasedOnMaxHit`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedMinHitBasedOnMaxHit]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += Math.floor((entity.stats.maxHit * (entity.modifiers[type.modifierPropertyNames.increasedMinHitBasedOnMaxHit] - entity.modifiers[type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit])) / 100);
                break;
            case MonsterTypeModifierGroup.FlatMinHit:
                //console.log(`getModificationValueByTargetType | FlatMinHit`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedFlatMinHit]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedFlatMinHit]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += numberMultiplier * (entity.modifiers[type.modifierPropertyNames.increasedFlatMinHit] - entity.modifiers[type.modifierPropertyNames.decreasedFlatMinHit]);
                break;
            case MonsterTypeModifierGroup.GlobalAccuracy:
                // console.log(`getModificationValueByTargetType | GlobalAccuracy`);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.increasedGlobalAccuracy]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                //console.log(entity.modifiers[type.modifierPropertyNames.decreasedGlobalAccuracy]);
                // @ts-ignore - We know these properties exist, as they were dynamically added before
                modification += entity.modifiers[type.modifierPropertyNames.increasedGlobalAccuracy] - entity.modifiers[type.modifierPropertyNames.decreasedGlobalAccuracy];
                break;
            case MonsterTypeModifierGroup.DamageReduction:
                //console.log(`getModificationValueByTargetType | DamageReduction`);
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

        //console.log(`getModificationValue | final modification calculation result: ${modification}`);
        return modification;
    }

    /**
     * Calculates modification for cases that are "valid", if ONESELF is treated as the corresponding type
     *
     * NOTE: The naming can be a little hard to discern, but "damage taken" runs during the same calculation as "damage".
     * There, whether is has an effect is actually based on what modifiers the ENEMY has, not oneself.
     * Inadvertenly, who has to have their type checked is also flipped on its head
     * @param entity
     * @param modifierGroup
     * @param type
     */
    public static getModificationValueBySelfType(entity: Character, modifierGroup: MonsterTypeModifierGroup, type: MonsterTypeDefinition): number {
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const isOfType: Boolean = entity[type.isTypePropertyName];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`getModificationValueBySelfType | isOfType | propertyName: ${type.isTypePropertyName} / value: ${entity.target[type.isTypePropertyName]}, ${isOfType}`);
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const traitApplied: number = entity.modifiers[type.modifierPropertyNames.traitApplied];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`getModificationValueBySelfType | isOfType | propertyName: ${type.modifierPropertyNames.traitApplied} / value: ${entity.target.modifiers[type.modifierPropertyNames.traitApplied]}, ${traitApplied}`);
        if (!isOfType && traitApplied <= 0) {
            return 0;
        }

        //console.log(`getModificationValueBySelfType | TotalDamage (taken)`);
        // @ts-ignore - We know these properties exist, as they were dynamically added before
        //console.log(entity.target.modifiers[type.modifierPropertyNames.increasedDamageTaken]);
        // @ts-ignore - We know these properties exist, as they were dynamically added before
        //console.log(entity.target.modifiers[type.modifierPropertyNames.decreasedDamageTaken]);
        // @ts-ignore - We know these properties exist, as they were dynamically added before
        return entity.target.modifiers[type.modifierPropertyNames.increasedDamageTaken] - entity.target.modifiers[type.modifierPropertyNames.decreasedDamageTaken];
        // ^ this is currently the only case, so we omit actually checking the provided enum value; done so for slight performance optimization
    }
}