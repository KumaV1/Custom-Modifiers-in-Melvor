﻿import { ModConstants } from '../constants/ModConstants'
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
            if (this.namespace === ModConstants.MOD_NAMESPACE) {
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

            'MONSTER_TYPE_SINGULAR',
            'MONSTER_TYPE_PLURAL'
        ];

        // Based on how translation is retrieved,
        // we may or may not have to specify the mod namespace
        for (const [key, value] of Object.entries<string>(languages[lang])) {
            if (keysToNotPrefix.some(prefix => key.includes(prefix))) {
                loadedLangJson[key] = value;
            } else {
                loadedLangJson[`${ModConstants.MOD_NAMESPACE}_${key}`] = value;
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
            const typeSingularName = TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName);
            //console.log(`translationManager | registerMonsterType | key: MONSTER_TYPE_SINGULAR_${type.singularName} | value: ${typeSingularName}`);

            const typePluralName = TranslationManager.getMonsterTypePluralNameTranslation(type.singularName, type.pluralName);
            //console.log(`translationManager | registerMonsterType | key: MONSTER_TYPE_PLURAL_${type.singularName} | value: ${typePluralName}`);
            loadedLangJson[`COMBAT_MISC_${type.singularName}_Trait_Modifier_Effect`] = loadedLangJson["COMBAT_MISC_Monster_Type_Trait_Modifier_Effect"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`COMBAT_MISC_${type.singularName}_Trait_Stacking_Effect`] = loadedLangJson["COMBAT_MISC_Monster_Type_Trait_Stacking_Effect"].replace("${monsterType}", typeSingularName);

            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.traitApplied}`] = loadedLangJson["MODIFIER_DATA_MonsterTypeTraitApplied"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedDamage}`] = loadedLangJson["MODIFIER_DATA_increasedDamageAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedDamage}`] = loadedLangJson["MODIFIER_DATA_decreasedDamageAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedDamageTaken}`] = loadedLangJson["MODIFIER_DATA_increasedDamageTakenFromMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedDamageTaken}`] = loadedLangJson["MODIFIER_DATA_decreasedDamageTakenFromMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMaxHitPercent}`] = loadedLangJson["MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMaxHitPercent}`] = loadedLangJson["MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMaxHitFlat}`] = loadedLangJson["MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMaxHitFlat}`] = loadedLangJson["MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMinHitBasedOnMaxHit}`] = loadedLangJson["MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit}`] = loadedLangJson["MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedFlatMinHit}`] = loadedLangJson["MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedFlatMinHit}`] = loadedLangJson["MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedGlobalAccuracy}`] = loadedLangJson["MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedGlobalAccuracy}`] = loadedLangJson["MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedDamageReduction}`] = loadedLangJson["MODIFIER_DATA_increasedDamageReductionAgainstMonsterType"].replace("${monsterType}", typePluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedDamageReduction}`] = loadedLangJson["MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType"].replace("${monsterType}", typePluralName);

            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedChanceToApplyTraitInfiniteOnSpawn}`] = loadedLangJson["MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedChanceToApplyTraitInfiniteOnSpawn}`] = loadedLangJson["MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.applyTraitTurnsOnSpawn}`] = loadedLangJson["MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn"].replace("${monsterType}", typeSingularName);

            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedChanceToApplyTrait}`] = loadedLangJson["MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedChanceToApplyTrait}`] = loadedLangJson["MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait"].replace("${monsterType}", typeSingularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.applyTraitTurns}`] = loadedLangJson["MODIFIER_DATA_applyMonsterTypeTraitTurns"].replace("${monsterType}", typeSingularName);
        }
    }

    /**
     *
     * @param identifier
     * @param includeNamespace
     */
    public static getLangString(identifier: string, includeNamespace: boolean = false) {
        return includeNamespace
            ? getLangString(`${ModConstants.MOD_NAMESPACE}_${identifier}`)
            : getLangString(identifier);
    }

    /**
     *
     * @param typeNameSingular
     * @returns
     */
    public static getMonsterTypeSingularNameTranslation(typeNameSingular: string): string {
        return TranslationManager.getTranslationOrFallback(`MONSTER_TYPE_SINGULAR_${typeNameSingular}`, typeNameSingular);
    }

    /**
     *
     * @param typeNameSingular
     * @param typeNamePlural
     * @returns
     */
    public static getMonsterTypePluralNameTranslation(typeNameSingular: string, typeNamePlural: string): string {
        return TranslationManager.getTranslationOrFallback(`MONSTER_TYPE_PLURAL_${typeNameSingular}`, typeNamePlural);
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
            ? loadedLangJson[`${ModConstants.MOD_NAMESPACE}_${key}`]
            : loadedLangJson[key];
        //console.log(`translationManager | getTranslationOrFallback | key: ${key} | fallback: ${fallback} | key result: ${translation}`);
        return translation !== undefined && translation !== ''
            ? translation
            : fallback;
    }
}