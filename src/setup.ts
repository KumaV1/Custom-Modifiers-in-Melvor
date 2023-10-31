// Modules
// You can import script modules and have full type completion
import { Constants } from './Constants';
import { CustomModifiersManager } from './modifiers/CustomModifiersManager';
import { MonsterTypeMappingManager } from './modifiers/MonsterTypeMappingManager';
import { languages } from './languages'

// Data
// Game data for registration

// Images
// #region Image imports
import '../assets/logo.png'
// #endregion

export async function setup(ctx: Modding.ModContext) {
    // Register custom modifier logic patches and localized texts
    initCustomModifiers(ctx);
    initLanguage(ctx);
    initApiEndpoints(ctx);
}

/**
 * Add endpoints that other mods can call, in order to register their monster to be of certain types,
 * and therefore also affected by some of the modifiers implemented by this mod
 * @param ctx
 */
function initApiEndpoints(ctx: Modding.ModContext) {
    ctx.api({
        addDragons: (monsterIds: string[]) => MonsterTypeMappingManager.addDragons(monsterIds)
    });
}

/**
 * Patches methods to integrate logic of custom modifiers
 * @param ctx
 */
function initCustomModifiers(ctx: Modding.ModContext) {
    const customModifiers = new CustomModifiersManager(ctx);

    customModifiers.registerModifiers();
    customModifiers.patchMethods();
}

/**
 * Creates a list of translations for the current languages and registers it
 * @param ctx
 */
function initLanguage(ctx: Modding.ModContext) {
    let lang = setLang;

    if (lang === 'lemon' || lang === 'carrot') {
        lang = 'en';
    }

    // Melvor includes functionality to automatically retrieve translations by category (see "LanguageCategory" in the schema)
    // and entity id - for those calls, a mod prefix isn't necessary, which is why we create this const array
    const keysToNotPrefix: string[] = [
        'MODIFIER_DATA'
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
}