import { Constants } from '../Constants'
import { MonsterTypeDefinition } from '../modifiers/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeMappingManager } from '../modifiers/monsterTyping/MonsterTypeMappingManager';
import { languages } from './languages';

/**
 * Patches a couple name/description getters, so they access our integrated localization
 *
 * IMPORTANT: For certain descriptions, they only run our custom logic, if a custom description has been defined,
 * as otherwise it's an auto generated descriütion (like modifier effects), which are handled by the game's own translations already
 */
export class TranslationManager {
    constructor(private readonly context: Modding.ModContext) { }

    public patch() {
        this.context.patch(Page, 'name').get(function (patch) {
            if (this.namespace === Constants.MOD_NAMESPACE) {
                return getLangString(`PAGE_NAME_${this.localID}`);
            }

            return patch();
        });
    }

    public register() {
        let lang = setLang;

        if (lang === 'lemon' || lang === 'carrot') {
            lang = 'en';
        }

        // Melvor includes functionality to automatically retrieve translations by category (see "LanguageCategory" in the schema)
        // and entity id - for those calls, a mod prefix isn't necessary, which is why we create this const array
        const keysToNotPrefix: string[] = [
            'COMBAT_MISC',
            'MODIFIER_DATA',
            'PAGE_NAME'
        ];

        // Based on how translation is retrieved,
        // we may or may not have to specify the mod namespace
        for (const [key, value] of Object.entries<string>(languages[lang])) {
            if (keysToNotPrefix.some(prefix => key.includes(prefix))) {
                loadedLangJson[key] = value;
            } else {
                loadedLangJson[`${Constants.MOD_NAMESPACE}_${key}`] = value;
            }
        }

        // Run special translation for monster types, where a generic pre-definition was defined in the languages object,
        // which shall now be converted into "modified copies" for each monster type
        for (const [key, value] of Object.entries<MonsterTypeDefinition>(MonsterTypeMappingManager.getTypes())) {
            const type = value;
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.traitApplied}`] = loadedLangJson["MODIFIER_DATA_MonsterTypeTraitApplied"].replace("${monsterType}", type.singularName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedDamage}`] = loadedLangJson["MODIFIER_DATA_increasedDamageAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedDamage}`] = loadedLangJson["MODIFIER_DATA_decreasedDamageAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMaxHitPercent}`] = loadedLangJson["MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMaxHitPercent}`] = loadedLangJson["MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMaxHitFlat}`] = loadedLangJson["MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMaxHitFlat}`] = loadedLangJson["MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedMinHitBasedOnMaxHit}`] = loadedLangJson["MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit}`] = loadedLangJson["MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedFlatMinHit}`] = loadedLangJson["MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedFlatMinHit}`] = loadedLangJson["MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedGlobalAccuracy}`] = loadedLangJson["MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedGlobalAccuracy}`] = loadedLangJson["MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.increasedDamageReduction}`] = loadedLangJson["MODIFIER_DATA_increasedDamageReductionAgainstMonsterType"].replace("${monsterType}", type.pluralName);
            loadedLangJson[`MODIFIER_DATA_${type.modifierPropertyNames.decreasedDamageReduction}`] = loadedLangJson["MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType"].replace("${monsterType}", type.pluralName);
        }
    }
}