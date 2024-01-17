import { ModConstants } from '../constants/ModConstants';
import { ModifierConstants } from '../constants/ModifierConstants';
import { MonsterTypeConstants } from '../constants/MonsterTypeConstants'
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeEffectObjectNames } from '../models/monsterTyping/MonsterTypeEffectObjectNames';
import { MonsterTypeModifierPropertyNames } from '../models/monsterTyping/MonsterTypeModifierPropertyNames'
import { MonsterTypeModifierType } from '../models/enums/MonsterTypeModifierType'
import { TranslationManager } from '../managers/TranslationManager';

import { languages } from '../languages';

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
        // First, create the default state of the object to create
        let modifierObject = {
            get langDescription() {
                return getLangString(`MODIFIER_DATA_${modifierName}`);
            },
            // @ts-ignore Ignore implicit any error
            description: languages.en[`MODIFIER_DATA_${modifierName}`],
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
            "$schema": ModConstants.SCHEMA,
            "namespace": ModConstants.MOD_NAMESPACE,
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
            "$schema": ModConstants.SCHEMA,
            "namespace": ModConstants.MOD_NAMESPACE,
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
     * Whether the given entity should be treated as the given type,
     * either through native type application, or having the corresponding trait modifier applied
     * @param entity whom to check - whether the object is defined is not checked again
     * @param type
     * @returns
     */
    public static entityIsTreatedAsType(entity: Character, type: MonsterTypeDefinition): boolean {
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const isOfType: Boolean = entity[type.isTypePropertyName];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`entityIsTreatedAsType | isOfType | propertyName: ${type.isTypePropertyName} / value: ${entity.target[type.isTypePropertyName]}, ${isOfType}`);
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        const traitApplied: number = entity.modifiers[type.modifierPropertyNames.traitApplied];
        // @ts-ignore - We know that behind this property lies a boolean. And if not, well "falsey" check work too
        //console.log(`entityIsTreatedAsType | isOfType | propertyName: ${type.modifierPropertyNames.traitApplied} / value: ${entity.target.modifiers[type.modifierPropertyNames.traitApplied]}, ${traitApplied}`);

        return isOfType || traitApplied > 0;
    }

    /**
     * Create a badge html element to communicate info regarding allocation of the given monster type
     * @param type the monster type
     * @param typeActive whether the type is active
     * @param count how many monsters are currently relevant for this method call
     * @param displayCount whether the count should be included in the text returned
     */
    public static createCombatAreaIndicatorBadge(type: MonsterTypeDefinition, typeActive: boolean, count: number, displayCount: boolean): HTMLElement {
        let badgeEl = document.createElement('span');
        badgeEl.classList.add('badge');
        badgeEl.classList.add('bage-pill');
        badgeEl.classList.add('mr-1');
        badgeEl.classList.add(typeActive ? 'badge-success' : 'badge-warning');
        badgeEl.classList.add(ModConstants.COMBAT_AREAS_INDICATOR_BADGE_CLASS);

        badgeEl.innerHTML = displayCount
            ? `${count} `
            : '';
        badgeEl.innerHTML += count > 1
            ? TranslationManager.getMonsterTypePluralNameTranslation(type.singularName, type.pluralName)
            : TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName);

        return badgeEl;
    }

    /**
     * Returns an array of monster ids, indicating which monsters of base game + expansions are allocated to the corresponding type
     * @param type
     */
    public static getNonModMonsterIds(type: string): string[] {
        let ids: string[] = [];

        switch (type) {
            case MonsterType.Animal:
                ids = ids.concat(MonsterTypeConstants.ANIMALS_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.ANIMALS_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.ANIMALS_AOD);
                }
                break;
            case MonsterType.Demon:
                ids = ids.concat(MonsterTypeConstants.DEMONS_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.DEMONS_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.DEMONS_AOD);
                }
                break;
            case MonsterType.Dragon:
                ids = ids.concat(MonsterTypeConstants.DRAGONS_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.DRAGONS_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.DRAGONS_AOD);
                }
                break;
            case MonsterType.Elemental:
                ids = ids.concat(MonsterTypeConstants.ELEMENTALS_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.ELEMENTALS_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.ELEMENTALS_AOD);
                }
                break;
            case MonsterType.Human:
                ids = ids.concat(MonsterTypeConstants.HUMANS_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.HUMANS_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.HUMANS_AOD);
                }
                break;
            case MonsterType.MythicalCreature:
                ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_AOD);
                }
                break;
            case MonsterType.SeaCreature:
                ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_AOD);
                }
                break;
            case MonsterType.Undead:
                ids = ids.concat(MonsterTypeConstants.UNDEAD_BASE);
                if (cloudManager.hasTotHEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.UNDEAD_TOTH);
                }
                if (cloudManager.hasAoDEntitlement) {
                    ids = ids.concat(MonsterTypeConstants.UNDEAD_AOD);
                }
                break;
            default:
        }

        // Return result
        return ids;
    }
}