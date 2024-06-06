import { ModConstants } from "../constants/ModConstants";
import { languages } from "../languages";

/**
 * A helper to make it easier registering new modifiers code-side (such as the dynamically build monster type related modifiers)
 * Also effects...
 * */
export class CustomModifiersRegistrationHelper {
    //public static createModifierDataObject(): ModifierData {
    //    return null;
    //}

    private static TempTester(): void {
        let array = [] as TriggeredCombatEffectApplicatorData[];
        let obj = {} as TriggeredCombatEffectApplicatorData;

        // # CombatEffectApplicatorTriggerData
        obj.appliesWhen = 'StartOfFight'; // aka, on spawn
        //obj.applyEffectWhenMerged // I presume this means, if an effect already exists, whether it should be re-applied
        //obj.customDescription // as usual
        //obj.descriptionLang // as usual
        //obj.isNegative // whether the description is formatted positive or negative, basically depends on whether the bonus is beneficial or not

        // # AnyCombatEffectApplicatorData => SingleCombatEffectApplicatorData/TableCombatEffectApplicatorData => CombatEffectApplicatorData
        //obj.chance
        //obj.condition // for example a buff with a chance of 100% to apply on start of fight, but only if applier has >50% of their max hitpoints at that time
        //obj.targetOverride // similar to initialParams, I assume, an override but specificly of the target
        //obj.bypassBarrier // whether the effect can be applied while a barrier is up

        // # AnyCombatEffectApplicatorData => SingleCombatEffectApplicatorData
        //obj.effectID // e.g. "cmim:Death_Mark_Static" or whatever; due to the any restriction, access to this via code is restricted, but is ultimately possible by manual type specification (or putting it in data package json file)
        //obj.initialParams // overrider for initial values it seems, for example an effect being reused from a weaker to stronger monster, where you might want to increase the 'chance' to apply but re-use the rest

        // # AnyCombatEffectApplicatorData => TableCombatEffectApplicatorData
        //obj.tableID // can't say much here, I don't know anything about combat tables yet (but I guess it's basically a list of pre-defined effects?)
    }

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
            allowedScopes: [] as ModifierScopingModificationData[]
        } as ModifierModificationData;

        let modificationObj = {
            scopes: scopes ?? {}
        } as ModifierScopingModificationData;

        if (descriptions !== undefined) {
            modificationObj.descriptions = [] as ModifierDescriptionData[];
            for (var i = 0; i < descriptions.length; i++) {
                modificationObj.descriptions.push(descriptions[i]);
            }
        }

        if (posAliases !== undefined) {
            modificationObj.posAliases = [] as ModifierAliasData[];
            for (var i = 0; i < posAliases.length; i++) {
                const alias = posAliases[i];
                modificationObj.posAliases.push(
                    typeof (alias) === 'string'
                        ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
                        : alias
                );
            }
        }

        if (negAliases !== undefined) {
            modificationObj.negAliases = [] as ModifierAliasData[];
            for (var i = 0; i < negAliases.length; i++) {
                const alias = negAliases[i];
                modificationObj.negAliases.push(
                    typeof (alias) === 'string'
                        ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
                        : alias
                );
            }
        }

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
            // TODO: above, below and include sign are ignored for now, refactor it later
            // TODO: Check how "inverted" is handled here, whether it needs to match the above object's property
            // scope is also not included, as currently only global scoping is implemented
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
            //allowedScopes: [
            //    {
            //        scopes: {},
            //        descriptions: [CustomModifiersRegistrationHelper.createDefaultModifierDescription(modifierName)]
            //    }
            //] as ModifierScopingData[]
        };

        //if (posAliases !== undefined) {
        //    for (var i = 0; i < posAliases.length; i++) {
        //        const alias = posAliases[i];
        //        obj.allowedScopes[0].posAliases?.push(
        //            typeof (alias) === 'string'
        //                ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
        //                : alias
        //        );
        //    }
        //}

        //if (negAliases !== undefined) {
        //    for (var i = 0; i < negAliases.length; i++) {
        //        const alias = negAliases[i];
        //        obj.allowedScopes[0].negAliases?.push(
        //            typeof (alias) === 'string'
        //                ? CustomModifiersRegistrationHelper.createDefaultModifierAlias(alias)
        //                : alias
        //        );
        //    }
        //}

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