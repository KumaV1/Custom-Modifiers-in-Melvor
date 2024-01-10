// Modules
// You can import script modules and have full type completion
import { CombatAreasUIManager } from './CombatAreasUIManager';
import { Constants } from './modifiers/Constants';
import { CustomModifiersManager } from './modifiers/CustomModifiersManager';
import { GameObjectDataWrapperInitializer } from './GameObjectDataWrapperInitializer';
import { ModContextMemoizer } from './ModContextMemoizer';
import { MonsterType } from './monsterTyping/MonsterType';
import { MonsterTypeManager } from './monsterTyping/MonsterTypeManager';
import { MonsterTypeOverview } from './components/MonsterTypeOverview'
import { SettingsManager } from './settings/SettingsManager';
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
import '../assets/Generic_Monster_Type_Icon.png'

import '../src/settings/settings.css'
// #endregion

export async function setup(ctx: Modding.ModContext) {
    // logLifecycleHookStarts(ctx);

    initGameObjectDataWrapper();
    initApiEndpoints(ctx);
    initCustomModifiers(ctx);
    initTranslation(ctx);
    initSettings(ctx);
    initModCompatibility(ctx);
    initDynamicMonsterTypes(ctx);
    initCombatUIIndicators(ctx);
    initOverviewContainer(ctx);

    // Register our GameData
    await ctx.gameData.addPackage(ModData);
    // @ts-ignore
    //await ctx.gameData.addPackage(ModTestData);

    // Memorize context, to make it easily accessable on mod api calls by other mods
    ModContextMemoizer.memoizeContext(ctx);
}

function logLifecycleHookStarts(ctx: Modding.ModContext) {
    ctx.onModsLoaded(function () {
        console.log("===== onModsLoaded =====");
    });
    ctx.onCharacterSelectionLoaded(function () {
        console.log("===== onCharacterSelectionLoaded =====");
    });
    ctx.onInterfaceAvailable(function () {
        console.log("===== onInterfaceAvailable =====");
    });
    ctx.onCharacterLoaded(function () {
        console.log("===== onCharacterLoaded =====");
    });
    ctx.onInterfaceReady(function () {
        console.log("===== onInterfaceReady =====");
    });
}

/**
 * As one of the first steps, initialize object structure for game-object-quick-access-data
 */
function initGameObjectDataWrapper() {
    GameObjectDataWrapperInitializer.process();
}

/**
 *
 * @param ctx
 */
function initSettings(ctx: Modding.ModContext) {
    SettingsManager.init(ctx);
}

/**
 * Add endpoints that other mods can call, in order to register their monster to be of certain types,
 * and therefore also affected by some of the modifiers implemented by this mod
 * @param ctx
 */
function initApiEndpoints(ctx: Modding.ModContext) {
    ctx.api({
        addMonsters: (type: string | MonsterType, monsterIds: string[]) => MonsterTypeManager.addMonsters(type, monsterIds),
        forceBaseModTypeActive: (type: MonsterType) => MonsterTypeManager.forceBaseModTypeActive(type),
        getActiveTypes: () => MonsterTypeManager.getActiveTypes(),
        getInactiveTypes: () => MonsterTypeManager.getInactiveTypes(),
        monsterIsOfType: (monster: Monster, monsterType: string | MonsterType) => MonsterTypeManager.monsterIsOfType(monster, monsterType),
        registerOrUpdateType: (typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean = true) => MonsterTypeManager.registerOrUpdateType(typeNameSingular, typeNamePlural, iconResourceUrl, monsterIds, active),
        getMonstersOfType: (type: string | MonsterType) => MonsterTypeManager.getMonstersOfType(type),

        // DEPRACATED | Throw errors from next update onwards?
        getHumans: () => MonsterTypeManager.getHumans(),
        getDragons: () => MonsterTypeManager.getDragons(),
        getUndead: () => MonsterTypeManager.getUndead(),
        addHumans: (monsterIds: string[]) => MonsterTypeManager.addHumans(monsterIds),
        addDragons: (monsterIds: string[]) => MonsterTypeManager.addDragons(monsterIds),
        addUndeads: (monsterIds: string[]) => MonsterTypeManager.addUndeads(monsterIds),
        monsterIsHuman: (monster: Monster) => MonsterTypeManager.monsterIsOfType(monster, MonsterType.Human),
        monsterIsDragon: (monster: Monster) => MonsterTypeManager.monsterIsOfType(monster, MonsterType.Dragon),
        monsterIsUndead: (monster: Monster) => MonsterTypeManager.monsterIsOfType(monster, MonsterType.Undead)
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
    tinyIconsCompatibility.register();
}

/**
 * Runs some of the previous managers again, this time specifically for the dynamic monster type definitions
 * @param ctx
 */
function initDynamicMonsterTypes(ctx: Modding.ModContext) {
    MonsterTypeManager.initNativeMonsterTypes();
    MonsterTypeManager.registerMonsterTypeData(ctx);
}

/**
 * Runs some logic that (may) add additional info in the Combat UI
 * @param ctx
 */
function initCombatUIIndicators(ctx: Modding.ModContext) {
    CombatAreasUIManager.initModifierUIImpactIndicator(ctx);
    CombatAreasUIManager.initCombatAreasIndicators(ctx);
}