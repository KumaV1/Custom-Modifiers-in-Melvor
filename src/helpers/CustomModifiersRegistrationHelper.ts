import { ModConstants } from "../constants/ModConstants";
import { languages } from "../languages";

/**
 * A helper to make it easier registering new modifiers code-side (such as the dynamically build monster type related modifiers)
 * Also effects...
 * */
export class CustomModifiersRegistrationHelper {
    public static createCombatEffectsDataPackage(templates: CombatEffectTemplateData[], effects: AnyCombatEffectData[]): GameDataPackage {
        return {
            "$schema": ModConstants.SCHEMA,
            "namespace": ModConstants.MOD_NAMESPACE_NAME,
            "data": {
                combatEffectTemplates: templates,
                combatEffects: effects
            }
        };
    }

    /**
     *
     * @param modifierName
     * @param inverted whether a positive value actually has a negative impact (and vice versa)
     */
    public static createGlobalScopeCharacterCombatModifierData(modifierName: string, inverted?: boolean, posAlias?: string, negAlias?: string): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, true, true, [CustomModifiersRegistrationHelper.createDefaultModifierGlobalScope(modifierName, posAlias, negAlias)], inverted);
    }

    /**
     *
     * @param modifierName
     * @param inverted whether a positive value actually has a negative impact (and vice versa)
     */
    public static createGlobalScopePlayerCombatModifierData(modifierName: string, inverted?: boolean): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, true, false, [CustomModifiersRegistrationHelper.createDefaultModifierGlobalScope(modifierName)], inverted);
    }

    /**
     *
     * @param modifierName
     * @param inverted
     * @returns
     */
    public static createGlobalScopeSkillingModifierData(modifierName: string, inverted?: boolean, posAlias?: string, negAlias?: string): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, false, false, [CustomModifiersRegistrationHelper.createDefaultModifierGlobalScope(modifierName, posAlias, negAlias)], inverted);
    }

    public static createMultiScopeSkillingModifierData(modifierName: string, scopes: ModifierScopingData[], inverted?: boolean): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, false, false, scopes, inverted);
    }

    /**
     * Create a data package that can be loaded as is, being the most safe way of ensuring that any logic necessary will be called (unless `isModded` is checked and ignored, that is...)
     * @param modifiers
     */
    public static createModifierDataPackage(modifiers: ModifierData[]): GameDataPackage {
        return {
            "$schema": ModConstants.SCHEMA,
            "namespace": ModConstants.MOD_NAMESPACE_NAME,
            "data": {
                modifiers: modifiers
            }
        };
    }

    /**
     *
     * @param modifierId - full id, of a pre-existing modifier
     * @param posAliases
     * @param negAliases
     * @returns
     */
    public static createModifierModificationData(modifierId: string, scopes?: TrueFlags<IModifierScope>, descriptions?: ModifierDescriptionData[], posAliases?: ModifierAliasData[] | string[], negAliases?: ModifierAliasData[] | string[]): ModifierModificationData {
        let obj = {
            id: modifierId,
            allowedScopes: [] as ModifierScopingModificationData[]
        } as ModifierModificationData;

        let scopeObj = {
            scopes: scopes ?? {},
            descriptions: descriptions ?? [CustomModifiersRegistrationHelper.createDefaultModifierDescription(modifierId.split(':')[1])]
        } as ModifierScopingModificationData;

        if (posAliases !== undefined) {
            scopeObj.posAliases = [] as ModifierAliasData[];
            for (var i = 0; i < posAliases.length; i++) {
                const alias = posAliases[i];
                scopeObj.posAliases.push(
                    typeof (alias) === 'string'
                        ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
                        : alias
                );
            }
        }

        if (negAliases !== undefined) {
            scopeObj.negAliases = [] as ModifierAliasData[];
            for (var i = 0; i < negAliases.length; i++) {
                const alias = negAliases[i];
                scopeObj.negAliases.push(
                    typeof (alias) === 'string'
                        ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
                        : alias
                );
            }
        }

        obj.allowedScopes.push(scopeObj);
        return obj;
    }

    /**
     * Create a data package that can be loaded as is, being the most safe way of ensuring that any logic necessary will be called (unless `isModded` is checked and ignored, that is...)
     * @param modifiersModifications
     */
    public static createModifierModificationDataPackage(modifiersModifications: ModifierModificationData[]): GameDataPackage {
        return {
            "$schema": ModConstants.SCHEMA,
            "namespace": ModConstants.MOD_NAMESPACE_NAME,
            "modifications": {
                modifiers: modifiersModifications
            }
        };
    }

    /**
     *
     * @param modifierName
     * @returns
     */
    public static createDefaultModifierDescription(modifierName: string): ModifierDescriptionData {
        return {
            // @ts-ignore Ignore implicit any error
            text: languages.en[`MODIFIER_DATA_${modifierName}`],
            lang: `MODIFIER_DATA_${modifierName}`
        }
    }

    /**
     *
     * @param modifierName
     */
    public static createDefaultModifierAlias(modifierName: string): ModifierAliasData {
        return {
            key: modifierName // default, as in no scoping necessary
        };
    }

    public static createDefaultModifierScopingDataArray(modifierName: string, scopeDefinitions: { scopes: TrueFlags<IModifierScope>, posAlias: string, negAlias: string }[]): ModifierScopingData[] {
        let objs = [] as ModifierScopingData[];

        for (var i = 0; i < scopeDefinitions.length; i++) {
            const def = scopeDefinitions[i];
            objs.push({
                scopes: def.scopes,
                descriptions: [CustomModifiersRegistrationHelper.createDefaultModifierDescription(modifierName)],
                posAliases: [CustomModifiersRegistrationHelper.createDefaultModifierAlias(def.posAlias)],
                negAliases: [CustomModifiersRegistrationHelper.createDefaultModifierAlias(def.negAlias)]
            })
        }

        return objs;
    }

    /**
     *
     * @param modifierName
     * @param isCombat
     * @param allowEnemy
     * @param inverted
     */
    private static createModifierData(modifierName: string, isCombat: boolean, allowEnemy: boolean, scopes: ModifierScopingData[], inverted?: boolean): ModifierData {
        let obj = {
            id: modifierName,
            inverted: inverted,
            isCombat: isCombat,
            allowEnemy: allowEnemy,
            allowedScopes: scopes
        };

        return obj;
    }

    private static createDefaultModifierGlobalScope(modifierName: string, posAlias?: string, negAlias?: string): ModifierScopingData {
        let obj = {
            scopes: {},
            descriptions: [CustomModifiersRegistrationHelper.createDefaultModifierDescription(modifierName)]
        } as ModifierScopingData;

        if (posAlias !== undefined) {
            obj.posAliases = [CustomModifiersRegistrationHelper.createDefaultModifierAlias(posAlias)]
        }

        if (negAlias !== undefined) {
            obj.negAliases = [CustomModifiersRegistrationHelper.createDefaultModifierAlias(negAlias)]
        }

        return obj;
    }
}