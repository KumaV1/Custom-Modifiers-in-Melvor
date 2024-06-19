import { CustomModifiersRegistrationHelper } from './CustomModifiersRegistrationHelper';
import { ModConstants } from '../constants/ModConstants';
import { MonsterTypeConstants } from '../constants/MonsterTypeConstants'
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeModifierPropertyNames } from '../models/monsterTyping/MonsterTypeModifierPropertyNames'

import { languages } from '../languages';

export class MonsterTypeHelper {
    /**
     * Creates the name of the property saved on spawn, to enable bool-checks rather than array checks
     * @param typeName
     * @returns
     */
    public static createIsTypePropertyName(typeName: string): string {
        return `is${typeName}`;
    }

    /**
     * Creates an object of all modifiers added for the given type,
     * with the names dynamically created based on the name of the type
     * @param typeName
     * @returns
     */
    public static createModifierPropertyNames(typeName: string): MonsterTypeModifierPropertyNames {
        //const typeSingularNameLower = `${typeSingularName[0].toLowerCase()}${typeSingularName.substring(1)}`;

        return {
            traitApplied: `traitApplied${typeName}`,
            damageDealt: `damageDealt${typeName}`,
            damageTaken: `damageTaken${typeName}`,
            maxHit: `maxHit${typeName}`,
            flatMaxHit: `flatMaxHit${typeName}`,
            flatMinHit: `flatMinHit${typeName}`,
            minHitBasedOnMaxHit: `minHitBasedOnMaxHit${typeName}`,
            accuracyRating: `accuracyRating${typeName}`,
            flatResistance: `flatResistance${typeName}`
        }
    }

    /**
     * Creates the modifier data object, which is used to actually register a modifier to the game
     * @param type
     * @param modifierType
     * @param modifierName
     * @returns
     */
    public static createModifierDataObject(type: MonsterTypeDefinition, modifierType: keyof (MonsterTypeModifierPropertyNames), modifierName: string): ModifierData {
        // First, create the default state of the object to create
        let modifierObject = {
            id: modifierName,
            inverted: false, // default, may be overwritten
            isCombat: true,
            allowEnemy: true,
            allowedScopes: [
                {
                    scopes: {}, // for now, only a global scope
                    // skip scope source, as not relevant for monster type modifiers (unless something like increased spell damage against undead is added :D *cough* crumble undead *cough*)
                    descriptions: [
                        {
                            // Set up an english description (mainly for mod synergy support)
                            // Actually rendered text uses the translation pipeline, so grammar isn't optimized here
                            text: (modifierType === 'traitApplied'
                                ? languages.en[`MODIFIER_DATA_MonsterTypeTraitApplied`]
                                // @ts-ignore Ignore implicit any error
                                : languages.en[`MODIFIER_DATA_${modifierType}AgainstMonsterType`])
                                    ?.replace("${monsterType}", type.name)
                                ?? '',
                            lang: (modifierType === 'flatResistance'
                                ? `MODIFIER_DATA_${modifierName}DamageType`
                                : `MODIFIER_DATA_${modifierName}`)
                        }
                    ] as ModifierDescriptionData[],
                    posAliases: [] as ModifierAliasData[],
                    negAliases: [] as ModifierAliasData[]
                }
            ] as ModifierScopingData[]
        } as ModifierData;


        // Set up an english descriptions (mainly for mod synergy support)
        // Actually rendered text uses the translation pipeline, so grammar isn't optimized here

        // Some modifiers actually don't allow for a global scope
        switch (modifierType) {
            case 'flatResistance':
                modifierObject.allowedScopes[0].scopes = { damageType: true };
                break;
            default:
                break;
        }

        // Some modifiers may have a positive value, but result in negative effects
        switch (modifierType) {
            case 'damageTaken':
                modifierObject.inverted = true;
                break;
            default:
        }

        // Modify value modifier
        switch (modifierType) {
            case 'flatMaxHit':
            case 'flatMinHit':
                // @ts-ignore Ignore implicit any error
                modifierObject["modifyValue"] = 'value*hpMultiplier';
                break;
            default:
        }

        // Aliases for backwards compatbility
        switch (modifierType) {
            case 'traitApplied':
                const typeSingularNameLower = `${type.name[0].toLowerCase()}${type.name.substring(1)}`;
                modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`${typeSingularNameLower}TraitApplied`));
                break;
            default:
                break;
        }

        if (type.pluralName !== undefined && type.pluralName !== null) {
            switch (modifierType) {
                case 'damageDealt':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedDamageAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedDamageAgainst${type.pluralName}`));
                    break;
                case 'damageTaken':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedDamageTakenFrom${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedDamageTakenFrom${type.pluralName}`));
                    break;
                case 'maxHit':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedMaxHitPercentAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedMaxHitPercentAgainst${type.pluralName}`));
                    break;
                case 'flatMaxHit':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedMaxHitFlatAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedMaxHitFlatAgainst${type.pluralName}`));
                    break;
                case 'minHitBasedOnMaxHit':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedMinHitBasedOnMaxHitAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedMinHitBasedOnMaxHitAgainst${type.pluralName}`));
                    break;
                case 'flatMinHit':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedFlatMinHitAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedFlatMinHitAgainst${type.pluralName}`));
                    break;
                case 'accuracyRating':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedGlobalAccuracyAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedGlobalAccuracyAgainst${type.pluralName}`));
                    break;
                case 'flatResistance':
                    modifierObject.allowedScopes[0].posAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedDamageReductionAgainst${type.pluralName}`));
                    modifierObject.allowedScopes[0].negAliases?.push(CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedDamageReductionAgainst${type.pluralName}`));
                    break;
                default:
                    break;
            }
        }

        return modifierObject;
    }

    /**
     * Creates a data object by which to register an effect that can be used to forcibly apply a certain monster type to a character
     *
     * Note: Using this base template in addition to something like `melvorD:StaticSelfCountingModifier`, `melvorD:StaticNonCountingModifier` and such should allow mods to define any kind of effect easily, without needing much custom work
     * @param type
     */
    public static createTraitEffectTemplateData(type: MonsterTypeDefinition): CombatEffectTemplateData {
        // Compiler sugar, already defining a proper object to set the trait modifier
        let effectModifiers = {} as ModifierValuesRecordData;
        effectModifiers[`${ModConstants.MOD_NAMESPACE_NAME}:${type.modifierPropertyNames.traitApplied}`] = 1;

        return {
            id: `${type.name}_Trait_Effect_Base`,
            description: 'A base template to apply some consistent data for any such effect',
            baseTemplates: [] as string[], // 'melvorD:StackingModifiers' maybe? Will have to see what templates there are, but I generally any value > 0 should be treated the same, so a static value is fine, but things like whether the effect can be renewed may have to be defined, though will ultimately be overridable by other mods, as far as I understand
            baseEffectData: {
                name: `${type.name} Trait`,
                nameLang: `MONSTER_TYPE_TRAIT_EFFECT_NAME_${type.name}`,
                media: type.iconResourceUrl,
                target: 'Target',
                statGroups: [
                    {
                        name: 'stacks',
                        modifiers: effectModifiers
                    } as CombatEffectStatGroupData
                ],
                effectGroups: [
                    `${ModConstants.MOD_NAMESPACE_NAME}:MonsterTypeTraitApplication`
                ]
            } as BaseCombatEffectData // base templates -> this object -> a mod's effect using this template and further overriding properties, so shouldn't be to problematic here, as it's ultimately just a template, not meant to be used as is (at least not without modifications)
        } as CombatEffectTemplateData;
    }

    public static createTraitStaticEffectTemplateData(type: MonsterTypeDefinition): CombatEffectTemplateData {
        return {
            id: `${type.name}_Trait_Static_Effect_Base`,
            baseTemplates: [
                CombatEffectTemplateIDs.StaticSelfCountingModifier,
                `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Effect_Base`
            ] as string[], // 'melvorD:StackingModifiers' maybe? Will have to see what templates there are, but I generally any value > 0 should be treated the same, so a static value is fine, but things like whether the effect can be renewed may have to be defined, though will ultimately be overridable by other mods, as far as I understand
            baseEffectData: {
                parameters: [
                    {
                        name: 'turns',
                        initialValue: 1 // custom effects/implementations can override this, if they want the effect to stay longer
                    }
                ] as CombatEffectParameter[],
            }
        }
    }

    public static createTraitStaticNonCountingEffectTemplateData(type: MonsterTypeDefinition): CombatEffectTemplateData {
        return {
            id: `${type.name}_Trait_Static_Non_Counting_Effect_Base`,
            baseTemplates: [
                CombatEffectTemplateIDs.StaticNonCountingModifier,
                `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Effect_Base`
            ] as string[], // 'melvorD:StackingModifiers' maybe? Will have to see what templates there are, but I generally any value > 0 should be treated the same, so a static value is fine, but things like whether the effect can be renewed may have to be defined, though will ultimately be overridable by other mods, as far as I understand
            baseEffectData: {

            }
        }
    }

    public static createTraitStackingEffectTemplateData(type: MonsterTypeDefinition): CombatEffectTemplateData {
        return {
            id: `${type.name}_Trait_Stacking_Effect_Base`,
            baseTemplates: [
                CombatEffectTemplateIDs.StackingSelfCountingModifier,
                `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Effect_Base`
            ] as string[], // 'melvorD:StackingModifiers' maybe? Will have to see what templates there are, but I generally any value > 0 should be treated the same, so a static value is fine, but things like whether the effect can be renewed may have to be defined, though will ultimately be overridable by other mods, as far as I understand
            baseEffectData: {
                parameters: [
                    {
                        name: 'turns',
                        initialValue: 1 // custom effects/implementations can override this, if they want the effect to stay longer
                    },
                    {
                        name: 'initialStacks',
                        initialValue: 1
                    },
                    {
                        name: 'stacksToAdd',
                        initialValue: 1
                    },
                    {
                        name: 'maxStacks',
                        initialValue: Infinity
                    }
                ] as CombatEffectParameter[]
            }
        }
    }

    /**
     * Primarily exists for backwards compatibility
     * @param type
     */
    public static createTraitStaticEffectData(type: MonsterTypeDefinition): TemplatedCombatEffectData {
        return {
            id: `${type.name}_Trait_Static_Effect`, // follows naming of stacking, but generally didn't have ids before
            templateID: `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Static_Effect_Base`
        } as TemplatedCombatEffectData;
    }

    public static createTraitStaticNonCountingEffectData(type: MonsterTypeDefinition): TemplatedCombatEffectData {
        return {
            id: `${type.name}_Trait_Static_Non_Counting_Effect`, // follows naming of stacking, but generally didn't have ids before
            templateID: `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Static_Non_Counting_Effect_Base`,
        } as TemplatedCombatEffectData;
    }

    /**
     * Primarily exists for backwards compatibility
     * @param type
     */
    public static createTraitStackingEffectData(type: MonsterTypeDefinition): TemplatedCombatEffectData {
        return {
            id: `${type.name}_Trait_Stacking_Effect`, // same as before rewrite
            templateID: `${ModConstants.MOD_NAMESPACE_NAME}:${type.name}_Trait_Stacking_Effect_Base`
        } as TemplatedCombatEffectData;
    }

    /**
     *
     * @param modifiers
     * @param combatEffectTemplates
     * @param combatEffects
     * @returns
     */
    public static createMonsterTypeDataPackage(modifiers: ModifierData[], combatEffectTemplates: CombatEffectTemplateData[], combatEffects: AnyCombatEffectData[]): GameDataPackage {
        return {
            "$schema": ModConstants.SCHEMA,
            namespace: ModConstants.MOD_NAMESPACE_NAME,
            data: {
                modifiers: modifiers,
                combatEffectTemplates: combatEffectTemplates,
                combatEffects: combatEffects
            }
        }
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
        const isOfType: boolean | undefined = entity[type.isTypePropertyName];
        if (isOfType) {
            return true;
        }

        const traitApplied: number = entity.modifiers.getValue(`${ModConstants.MOD_NAMESPACE_NAME}:${[type.modifierPropertyNames.traitApplied]}`, ModifierQuery.EMPTY);
        if (traitApplied > 0) {
            return true;
        }

        return false;
    }

    /**
     * Returns an array of monster ids, indicating which monsters of base game + expansions are allocated to the corresponding type
     * @param type
     */
    public static getNonModMonsterIds(type: string): MonsterIDs[] {
        const includeTotH = cloudManager.hasTotHEntitlementAndIsEnabled;
        const includeAoD = cloudManager.hasAoDEntitlementAndIsEnabled;
        const includeItA = cloudManager.hasItAEntitlementAndIsEnabled;
        let ids: MonsterIDs[] = [];
        switch (type) {
            case MonsterType.Animal:
                ids = ids.concat(MonsterTypeConstants.ANIMALS_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.ANIMALS_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.ANIMALS_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.ANIMALS_ITA);
                }
                break;
            case MonsterType.Demon:
                ids = ids.concat(MonsterTypeConstants.DEMONS_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.DEMONS_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.DEMONS_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.DEMONS_ITA);
                }
                break;
            case MonsterType.Dragon:
                ids = ids.concat(MonsterTypeConstants.DRAGONS_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.DRAGONS_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.DRAGONS_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.DRAGONS_ITA);
                }
                break;
            case MonsterType.Elemental:
                ids = ids.concat(MonsterTypeConstants.ELEMENTALS_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.ELEMENTALS_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.ELEMENTALS_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.ELEMENTALS_ITA);
                }
                break;
            case MonsterType.Elf:
                ids = ids.concat(MonsterTypeConstants.ELVES_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.ELVES_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.ELVES_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.ELVES_ITA);
                }
                break;
            case MonsterType.Human:
                ids = ids.concat(MonsterTypeConstants.HUMANS_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.HUMANS_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.HUMANS_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.HUMANS_ITA);
                }
                break;
            case MonsterType.MythicalCreature:
                ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.MYTHICAL_CREATURES_ITA);
                }
                break;
            case MonsterType.SeaCreature:
                ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.SEA_CREATURES_ITA);
                }
                break;
            case MonsterType.Undead:
                ids = ids.concat(MonsterTypeConstants.UNDEAD_BASE);
                if (includeTotH) {
                    ids = ids.concat(MonsterTypeConstants.UNDEAD_TOTH);
                }
                if (includeAoD) {
                    ids = ids.concat(MonsterTypeConstants.UNDEAD_AOD);
                }
                if (includeItA) {
                    ids = ids.concat(MonsterTypeConstants.UNDEAD_ITA);
                }
                break;
            default:
        }

        // Return result
        return ids;
    }

    /**
     * Provides aliases for modifiers that have been removed with the V1.3 update
     * @param type
     * @returns
     */
    public static getBackwardsCompatibilityAliases(type: MonsterTypeDefinition): { posAliases: ModifierAliasData[], negAliases: ModifierAliasData[] } {
        return {
            posAliases: [
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedChanceToApply${type.name}TraitInfiniteOnSpawn`),
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`apply${type.name}TraitTurnsOnSpawn`),
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`increasedChanceToApply${type.name}Trait`),
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`apply${type.name}TraitTurns`)
            ],
            negAliases: [
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedChanceToApply${type.name}TraitInfiniteOnSpawn`),
                CustomModifiersRegistrationHelper.createDefaultModifierAlias(`decreasedChanceToApply${type.name}Trait`)
            ]
        };
    }
}