// Modules
// You can import script modules and have full type completion
import { CustomModifiersManager } from './modifiers/CustomModifiersManager';
import { ModContextMemoizer } from './ModContextMemoizer';
import { MonsterType } from './modifiers/monsterTyping/MonsterType';
import { MonsterTypeMappingManager } from './modifiers/monsterTyping/MonsterTypeMappingManager';
import { MonsterTypeOverview } from './components/MonsterTypeOverview'
import { TinyIconsCompatibility } from './compatibility/TinyIconsCompatibility';
import { TranslationManager } from './translation/TranslationManager';

// Data
// Game data for registration
import ModData from '../data/data.json'
//import ModTestData from '../data/test-data.json'

// Images
// #region Image imports
import '../assets/Logo.png'
import '../assets/Death_Mark.png'
import '../assets/Invoke_Death.png'
import { GameObjectDataWrapperInitializer } from './GameObjectDataWrapperInitializer';
// #endregion

export async function setup(ctx: Modding.ModContext) {
    // Register custom modifier logic patches and localized texts
    initApiEndpoints(ctx);
    initGameObjectDataWrapper();
    initCustomModifiers(ctx);
    initTranslation(ctx);
    initOverviewContainer(ctx);
    initModCompatibility(ctx);
    initDynamicMonsterTypes(ctx);

    // Register our GameData
    await ctx.gameData.addPackage(ModData);
    // @ts-ignore
    //await ctx.gameData.addPackage(ModTestData);

    // Memorize context, to make it easily accessable on mod api calls by other mods
    ModContextMemoizer.memoizeContext(ctx);
}

/**
 * Add endpoints that other mods can call, in order to register their monster to be of certain types,
 * and therefore also affected by some of the modifiers implemented by this mod
 * @param ctx
 */
function initApiEndpoints(ctx: Modding.ModContext) {
    ctx.api({
        addMonsters: (type: string | MonsterType, monsterIds: string[]) => MonsterTypeMappingManager.addMonsters(type, monsterIds),
        forceBaseModTypeActive: (type: MonsterType) => MonsterTypeMappingManager.forceBaseModTypeActive(type),
        getActiveTypes: () => MonsterTypeMappingManager.getActiveTypes(),
        getInactiveTypes: () => MonsterTypeMappingManager.getInactiveTypes(),
        monsterIsOfType: (monster: Monster, monsterType: string | MonsterType) => MonsterTypeMappingManager.monsterIsOfType(monster, monsterType),
        registerOrUpdateType: (typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean = true) => MonsterTypeMappingManager.registerOrUpdateType(typeNameSingular, typeNamePlural, iconResourceUrl, monsterIds, active),

        // DEPRACATED | Throw errors from next update onwards?
        getHumans: () => MonsterTypeMappingManager.getHumans(),
        getDragons: () => MonsterTypeMappingManager.getDragons(),
        getUndead: () => MonsterTypeMappingManager.getUndead(),
        addHumans: (monsterIds: string[]) => MonsterTypeMappingManager.addHumans(monsterIds),
        addDragons: (monsterIds: string[]) => MonsterTypeMappingManager.addDragons(monsterIds),
        addUndeads: (monsterIds: string[]) => MonsterTypeMappingManager.addUndeads(monsterIds),
        monsterIsHuman: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Human),
        monsterIsDragon: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Dragon),
        monsterIsUndead: (monster: Monster) => MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Undead)
    });
}

/**
 * As one of the first steps, initialize object structure for game-object-quick-access-data
 */
function initGameObjectDataWrapper() {
    GameObjectDataWrapperInitializer.process();
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
    tinyIconsCompatibility.register();
}

/**
 * Runs some of the previous managers again, this time specifically for the dynamic monster type definitions
 * @param ctx
 */
function initDynamicMonsterTypes(ctx: Modding.ModContext) {
    MonsterTypeMappingManager.initNativeMonsterTypes();
}