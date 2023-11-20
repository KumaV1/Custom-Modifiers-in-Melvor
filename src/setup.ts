// Modules
// You can import script modules and have full type completion
import { Constants } from './Constants';
import { CustomModifiersManager } from './modifiers/CustomModifiersManager';
import { MonsterTypeMappingManager } from './modifiers/monsterTyping/MonsterTypeMappingManager';
import { MonsterType } from './modifiers/monsterTyping/MonsterType';
import { TranslationManager } from './translation/TranslationManager';
import { languages } from './translation/languages'
import { MonsterTypeOverview } from './components/MonsterTypeOverview'
import { TinyIconsCompatibility } from './compatibility/TinyIconsCompatibility';

// Data
// Game data for registration
import ModData from '../data/data.json'
import ModTestData from '../data/test-data.json'

// Images
// #region Image imports
import '../assets/Logo.png'
import '../assets/Death_Mark.png'
import '../assets/Invoke_Death.png'
import { MonsterTypeDefinition } from './modifiers/monsterTyping/MonsterTypeDefinition';
// #endregion

export async function setup(ctx: Modding.ModContext) {
    // Register custom modifier logic patches and localized texts
    initApiEndpoints(ctx);
    initCustomModifiers(ctx);
    initTranslation(ctx);
    initOverviewContainer(ctx);
    initModCompatibility(ctx);

    // Register our GameData
    await ctx.gameData.addPackage(ModData);
    // @ts-ignore
    await ctx.gameData.addPackage(ModTestData);
}

/**
 * Add endpoints that other mods can call, in order to register their monster to be of certain types,
 * and therefore also affected by some of the modifiers implemented by this mod
 * @param ctx
 */
function initApiEndpoints(ctx: Modding.ModContext) {
    ctx.api({
        // Add types to your own monsters
        addHumans: (monsterIds: string[]) => MonsterTypeMappingManager.addHumans(monsterIds),
        addDragons: (monsterIds: string[]) => MonsterTypeMappingManager.addDragons(monsterIds),
        addUndeads: (monsterIds: string[]) => MonsterTypeMappingManager.addUndeads(monsterIds),

        // Get current typing list, might be handy for debugging, although there is the type overviewe now
        getHumans: () => MonsterTypeMappingManager.getHumans(),
        getDragons: () => MonsterTypeMappingManager.getDragons(),
        getUndead: () => MonsterTypeMappingManager.getUndead(),
        getTypes: () => MonsterTypeMappingManager.getTypes(),

        /** The flag is specifically set on the "Enemy",
         * therefore you might want to call this in places
         * where you have "only" the monster object itself */
        monsterIsOfType: (monster: Monster, monsterType: MonsterType) => MonsterTypeMappingManager.monsterIsOfType(monster, monsterType),
        monsterIsHuman: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Human),
        monsterIsDragon: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Dragon),
        monsterIsUndead: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Undead)
    });
}

/**
 * Patches methods to integrate logic of custom modifiers
 * @param ctx
 */
function initCustomModifiers(ctx: Modding.ModContext) {
    const cmm = new CustomModifiersManager(ctx);

    cmm.registerModifiers();
    cmm.patchMethods();
}

/**
 * Patches multiple name/description getters, so they check our custom injected translations
 * Also creates a list of translations for the current languages and registers it
 * @param ctx
 */
function initTranslation(ctx: Modding.ModContext) {
    const translation = new TranslationManager(ctx);

    translation.patch();
    translation.register();
}

/**
 * Initializes the container that is then accessed through an entry in the sidebar
 * @param ctx
 */
function initOverviewContainer(ctx: Modding.ModContext) {
    // Because we're loading our templates.min.html file via the manifest.json,
    // the templates aren't available until after the setup() function runs
    ctx.onInterfaceReady(() => {
        // @ts-ignore: The container is guaranteed to exist
        const contentContainerElement: Element = document.getElementById('main-container');

        // Add template to container
        // Create overview by using component and template definitions
        ui.create(MonsterTypeOverview(), contentContainerElement);
    });
}

/**
 * Initializes certain functionality, to enable/inject specialized compatibility
 * based on other mods (e.g. "Tiny Icons" for the custom modifiers of this mod)
 * @param ctx
 */
function initModCompatibility(ctx: Modding.ModContext) {
    const tinyIconsCompatibility = new TinyIconsCompatibility(ctx);
    tinyIconsCompatibility.patch();
}