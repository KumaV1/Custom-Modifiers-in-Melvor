import { ModConstants } from "../constants/ModConstants";
import { languages } from "../languages";

/** A helper to make it easier registering new modifiers code-side (such as the dynamically build monster type related modifiers) */
export class CustomModifiersRegistrationHelper {
    //public static createModifierDataObject(): ModifierData {
    //    return null;
    //}

    /**
     *
     * @param modifierName
     * @param inverted whether a positive value actually has a negative impact (and vice versa)
     */
    public static createGlobalScopeCharacterCombatModifierData(modifierName: string, inverted?: boolean): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, true, true, inverted);
    }

    /**
     *
     * @param modifierName
     * @param inverted whether a positive value actually has a negative impact (and vice versa)
     */
    public static createGlobalScopePlayerCombatModifierData(modifierName: string, inverted?: boolean): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, true, false, inverted);
    }

    /**
     *
     * @param modifierName
     * @param inverted
     * @returns
     */
    public static createGlobalScopeSkillingModifierData(modifierName: string, inverted?: boolean): ModifierData {
        return CustomModifiersRegistrationHelper.createModifierData(modifierName, false, false, inverted);
    }

    public static registerModifiers(modifiers: ModifierData[]): void {
        //const packageObj = {
        //    "$schema": ModConstants.SCHEMA,
        //    "namespace": ModConstants.MOD_NAMESPACE,
        //    "data": {
        //        "modifiers": modifiers
        //    }
        //} as GameDataPackage;

        //game.registerModifiers

        // First of all, we may be able to use game.registerModifiers to do most of the work
        // However, both the ModifierRegistry and the ExpressionBuilder don't deal with modded modifiers exactly the way I want to...
        // ^ though I could move a "fix" for that to the patch of corresponding methods, rather than in here
    }

    /**
     *
     * @param modifierName
     * @param isCombat
     * @param allowEnemy
     * @param inverted
     */
    private static createModifierData(modifierName: string, isCombat: boolean, allowEnemy: boolean, inverted?: boolean): ModifierData {
        return {
            id: modifierName,
            inverted: inverted,
            isCombat: isCombat,
            allowEnemy: allowEnemy,
            allowedScopes: [
                {
                    scopes: {},
                    descriptions: [CustomModifiersRegistrationHelper.createDefaultModifierDescription(modifierName)]
                    //posAliases: [] as ModifierAliasData[], // TODO: merge modifiers together, actually making use of aliases
                    //negAliases: [] as ModifierAliasData[] // TODO: merge modifiers together, actually making use of aliases
                }
            ] as ModifierScopingData[]
        }
    }

    /**
     *
     * @param modifierName
     * @returns
     */
    private static createDefaultModifierDescription(modifierName: string): ModifierDescriptionData {
        return {
            // @ts-ignore Ignore implicit any error
            text: languages.en[`MODIFIER_DATA_${modifierName}`],
            lang: `MODIFIER_DATA_${modifierName}`
            // TODO: above, below and include sign are ignored for now, refactor it later
            // TODO: Check how "inverted" is handled here, whether it needs to match the above object's property
            // scope is also not included, as currently only global scoping is implemented
        }
    }
}