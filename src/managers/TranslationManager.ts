import { ModConstants } from '../constants/ModConstants'
import { MonsterTypeDefinition } from '../models/monsterTyping/MonsterTypeDefinition';

import { languages } from '../languages';

/**
 * Patches a couple name/description getters, so they access our integrated localization
 *
 * IMPORTANT: For certain descriptions, they only run our custom logic, if a custom description has been defined,
 * as otherwise it's an auto generated description (like modifier effects), which are handled by the game's own translations already
 */
export class TranslationManager {
    constructor(private readonly context: Modding.ModContext) { }

    /**
     * Patches multiple name/description getters, so they check our custom injected translations
     */
    public patch(): void {
        this.context.patch(Page, 'name').get(function (patch) {
            if (this.namespace === ModConstants.MOD_NAMESPACE_NAME) {
                return getLangString(`PAGE_NAME_${this.localID}`);
            }

            return patch();
        });
    }

    /**
     * Creates a list of translations for the current languages and registers it
     */
    public register(): void {
        let lang = setLang;

        if (lang === 'lemon' || lang === 'carrot') {
            lang = 'en';
        }

        // Melvor includes functionality to automatically retrieve translations by category (see "LanguageCategory" in the schema)
        // and entity id - for those calls, a mod prefix isn't necessary, which is why we create this const array
        const keysToNotPrefix: string[] = [
            'COMBAT_MISC',
            'MODIFIER_DATA',
            'PAGE_NAME',
            'EFFECT_GROUP',
            'MONSTER_TYPE_NAME_SINGULAR',
            'MONSTER_TYPE_NAME_PLURAL'
        ];

        // Based on how translation is retrieved,
        // we may or may not have to specify the mod namespace
        for (const [key, value] of Object.entries<string>(languages[lang])) {
            if (keysToNotPrefix.some(prefix => key.includes(prefix))) {
                loadedLangJson[key] = value;
            } else {
                loadedLangJson[`${ModConstants.MOD_NAMESPACE_NAME}_${key}`] = value;
            }
        }
    }

    /**
     * Registers translation entries  for the given types
     * @param type
     */
    public registerMonsterTypes(types: MonsterTypeDefinition[]): void {
        // Run special translation for monster types, where a generic pre-definition was defined in the languages object,
        // which shall now be converted into "modified copies" for each monster type
        for (var i = 0; i < types.length; i++) {
            const type = types[i];
            const typeNameTranslated = TranslationManager.getMonsterTypeSingularNameTranslation(type.name);

            loadedLangJson[`COMBAT_MISC_${type.name}_Trait_Modifier_Effect`] = loadedLangJson["COMBAT_MISC_Monster_Type_Trait_Modifier_Effect"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`COMBAT_MISC_${type.name}_Trait_Stacking_Effect`] = loadedLangJson["COMBAT_MISC_Monster_Type_Trait_Stacking_Effect"].replace("${monsterType}", typeNameTranslated);

            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.traitApplied}`] = loadedLangJson["MODIFIER_DATA_MonsterTypeTraitApplied"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.damageDealt}`] = loadedLangJson["MODIFIER_DATA_damageDealtAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.damageTaken}`] = loadedLangJson["MODIFIER_DATA_damageTakenFromMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.maxHit}`] = loadedLangJson["MODIFIER_DATA_maxHitAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.flatMaxHit}`] = loadedLangJson["MODIFIER_DATA_flatMaxHitAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.flatMinHit}`] = loadedLangJson["MODIFIER_DATA_flatMinHitAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.minHitBasedOnMaxHit}`] = loadedLangJson["MODIFIER_DATA_minHitBasedOnMaxHitAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.accuracyRating}`] = loadedLangJson["MODIFIER_DATA_accuracyRatingAgainstMonsterType"].replace("${monsterType}", typeNameTranslated);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.flatResistance}DamageType`] = loadedLangJson["MODIFIER_DATA_flatResistanceAgainstMonsterTypeDamageType"].replace("${monsterType}", typeNameTranslated);
        }
    }

    /**
     *
     * @param identifier
     * @param includeNamespace
     */
    public static getLangString(identifier: string, includeNamespace: boolean = false) {
        return includeNamespace
            ? getLangString(`${ModConstants.MOD_NAMESPACE_NAME}_${identifier}`)
            : getLangString(identifier);
    }

    /**
     *
     * @param typeName
     * @returns
     */
    public static getMonsterTypeSingularNameTranslation(typeName: string): string {
        return TranslationManager.getTranslationOrFallback(`MONSTER_TYPE_NAME_SINGULAR_${typeName}`, typeName);
    }

    /**
     *
     * @param typeName
     * @returns
     */
    public static getMonsterTypePluralNameTranslation(typeName: string): string {
        return TranslationManager.getTranslationOrFallback(`MONSTER_TYPE_NAME_PLURAL_${typeName}`, typeName);
    }

    /**
     * Gets the translation for the key, while returning the fallback, if an entry coudn't be found (instead of returning "UNDEFINED TRANSLATION")
     * @param key the key of the localization entry to retrieve
     * @param fallback the value to return, if a localization entry can't be found
     * @param includeNamespace whether the mod's namespace should be prefixed before the key
     * @returns
     */
    public static getTranslationOrFallback(key: string, fallback: string, includeNamespace: boolean = false): string {
        const translation = includeNamespace
            ? loadedLangJson[`${ModConstants.MOD_NAMESPACE_NAME}_${key}`]
            : loadedLangJson[key];
        return translation !== undefined && translation !== ''
            ? translation
            : fallback;
    }

    /**
     * Gets the translation for the key, while returning the fallback, if an entry coudn't be found (instead of returning "UNDEFINED TRANSLATION")
     * @param key the key of the localization entry to retrieve
     * @param fallback the value to return, if a localization entry can't be found
     * @param includeNamespace whether the mod's namespace should be prefixed before the key
     * @returns
     */
    public static getTemplateTranslationOrFallback(key: string, templateData: StringDictionary<string>, fallback: string, includeNamespace: boolean = false): string {
        const translation = includeNamespace
            ? loadedLangJson[`${ModConstants.MOD_NAMESPACE_NAME}_${key}`]
            : loadedLangJson[key];
        return translation !== undefined && translation !== ''
            ? templateLangString(key, templateData)
            : templateString(fallback, templateData);
    }
}