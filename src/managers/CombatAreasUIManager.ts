import { CmimUtils } from "../Utils";
import { CombatAreasUIHelper } from "../helpers/CombatAreasUIHelper";
import { ModConstants } from "../constants/ModConstants";
import { MonsterTypeCombatAreasIndicatorDefinition } from "../models/monsterTyping/MonsterTypeCombatAreasIndicatorDefinition";
import { MonsterTypeManager } from "../managers/MonsterTypeManager";
import { SettingsManager } from "../managers/SettingsManager";
import { CombatAreasIndicatorBadgeContainer } from "../models/combatAreaUi/CombatAreasIndicatorBadgeContainer";
import { CombatAreasIndicatorBadgesVisibilityConfiguration } from "../models/combatAreaUi/CombatAreasIndicatorBadgesVisibilityConfiguration";
import { ModifierConstants } from "../constants/ModifierConstants";

export class CombatAreasUIManager {
    private static _modifierUIImpactIndicatorElement: HTMLElement;

    private static _badgeContainers: CombatAreasIndicatorBadgeContainer[] = [];

    /**
     * Patches multiple html element classes, to inject additional elements
     * TODO: Patches do not take into account, that other mods may add their monster types, so the logic may need to be moved into lifecycle hook, depending on whether the methods are actually called
     * @param ctx
     */
    public static patch(ctx: Modding.ModContext): void {
        /**
         * Patch into row creation (apparently, 'MonsterSelectTableRowElement.setRow' isn't actually called... unfortunate, would have been a better place to patch into)
         */
        ctx.patch(MonsterSelectTableElement, 'createRow').after(function (returnValue: void, monster: Monster, area: AnyCombatArea) {
            CmimUtils.log(`=== MonsterSelectTableElement.createRow | ${monster.id} | ${area.id} ===`);
            const rowElement = this.tableBody.lastElementChild;
            const tdElements = rowElement?.getElementsByTagName('td');
            if (tdElements === undefined || tdElements === null || tdElements.length === 0) {
                CmimUtils.log('this.tableBody does not have any td element');
                return;
            }

            const badgeContainer = new CombatAreasIndicatorBadgeContainer(
                CombatAreasUIHelper.createBadgeContainer(),
                [monster]
            );
            CmimUtils.logObj(badgeContainer);
            CombatAreasUIManager._badgeContainers.push(badgeContainer);

            const infoContainer = tdElements[0];
            infoContainer.insertBefore(badgeContainer.element, infoContainer.childNodes[0]);
        });

        /**
         * Patches into row element creation for combat/slayer areas
         */
        //ctx.patch(MonsterSelectTableRowElement, 'setRow').after(function (returnValue: void, monster: Monster, area: AnyCombatArea) {
        //    // Add an invisible container with its badges
        //    CmimUtils.log(`=== MonsterSelectTableRowElement.setRow | ${monster.id} ===`);
        //    const badgeContainer = new CombatAreasIndicatorBadgeContainer(
        //        CombatAreasUIHelper.createBadgeContainer(),
        //        [monster]
        //    );
        //    CmimUtils.logObj(badgeContainer);

        //    this.attackType.parentElement!.insertBefore(badgeContainer.element, this.attackType);
        //});

        /** Patches into creation of overall menu elements for other areas, where you can't select a single specifi monster */
        ctx.patch(CombatAreaMenuElement, 'setArea').after(function (returnValue: void, area: AnyCombatArea) {
            // This patch is only to deal with areas that don't let you directly fight a single specific monster
            if (!(area instanceof Dungeon || area instanceof Stronghold)) {
                return;
            }

            // Add an invisible container with its badges
            CmimUtils.log(`=== CombatAreaMenuElement.setArea (dungeon/stronghold) | ${area.id} ===`);
            const badgeContainer = new CombatAreasIndicatorBadgeContainer(
                CombatAreasUIHelper.createBadgeContainer(),
                area.monsters
            );
            CmimUtils.logObj(badgeContainer);
            CombatAreasUIManager._badgeContainers.push(badgeContainer);

            this.monsterCount.parentElement!.insertBefore(badgeContainer.element, this.monsterCount);
        });


    }

    /**
     * Patches the display of a warning message,
     * to indicate if modifiers are active that may cause wrong information in the UI
     * @param ctx
     */
    public static initModifierUIImpactIndicator(ctx: Modding.ModContext): void {
        ctx.onInterfaceReady(function () {
            if (SettingsManager.getEnableModifierUIImpactIndicator) {
                // Build and add indicator html
                const containerEl = CombatAreasUIHelper.createModifierUIImpactIndicator();
                CombatAreasUIManager._modifierUIImpactIndicatorElement = containerEl;

                document.getElementsByTagName
                const siblingEl = document.getElementById('combat-select-area-Dungeon');
                if (siblingEl !== undefined && siblingEl !== null) {
                    siblingEl.insertAdjacentElement("afterend", containerEl);
                }

                // Check, whenever a fight starts, whether to display the info or not
                ctx.patch(CombatManager, 'startFight').after(function (returnValue: void, tickOffset: boolean | undefined) {
                    CombatAreasUIManager.evaluateModifierUIImpactIndicatorDisplay();
                });
            }
        });
    }

    /**
     * Patch creation of combat areas html, so we can hook into it and add some badges,
     * though only if said badges have been enabled in mod settings
     * @param ctx
     */
    public static initCombatAreasIndicators(ctx: Modding.ModContext): void {
        ctx.onInterfaceReady(function () {
            //combatAreaMenus.all.forEach((camValue: CombatAreaMenu, camKey: CombatAreaCategory) => {
            //    // If first element is of type dungeon (any form, so AbyssDepth count too for example), then do process 1
            //    // Otherwise it's a combat area like combat and slayer areas, so go with process 2 instead

            //    CombatAreasUIManager.renderIndicatorBadges(camValue);
            //});
            //CombatAreasUIManager.buildCombatAreasIndicators(
            //    SettingsManager.getEnableBossIndicators,
            //    SettingsManager.getEnableActiveMonsterTypeIndicators,
            //    SettingsManager.getEnableInactiveMonsterTypeIndicators
            //);

            const visibilityConfig = {
                showBoss: SettingsManager.getEnableBossIndicators,
                showActiveMonsterTypes: SettingsManager.getEnableActiveMonsterTypeIndicators,
                showInactiveMonsterTypes: SettingsManager.getEnableInactiveMonsterTypeIndicators
            } as CombatAreasIndicatorBadgesVisibilityConfiguration;

            CombatAreasUIManager.toggleCombatAreaMonsterTypeIndicators(visibilityConfig);
        });
    }

    /**
     * @param bossEnabled whether to display boss badge (provided as parameter, in case this is called during settings change)
     * @param activeEnabled whether to display active badges (provided as parameter, in case this is called during settings change)
     * @param inactiveEnabled whether to display active badges (provided as parameter, in case this is called during settings change)
     * @returns
     */
    public static toggleCombatAreaMonsterTypeIndicators(visibilityConfig: CombatAreasIndicatorBadgesVisibilityConfiguration): void {
        CmimUtils.log('=== CombatAreasUIManager.toggleCombatAreaMonsterTypeIndicators ===');
        CombatAreasUIManager._badgeContainers.forEach((badgeContainer) => {
            badgeContainer.toggleBadgesVisibility(visibilityConfig);
        });
        CmimUtils.logObj(CombatAreasUIManager._badgeContainers);

        //combatAreaMenus.all.forEach((camValue: CombatAreaMenu, camKey: CombatAreaCategory) => {
        //    // If first element is of type dungeon (any form, so AbyssDepth count too for example), then do process 1
        //    // Otherwise it's a combat area like combat and slayer areas, so go with process 2 instead

        //    CombatAreasUIManager.renderIndicatorBadges(camValue);
        //});

        //// Delete all existing
        //const container = document.getElementById(ModConstants.COMBAT_CONTAINER_ELEMENT_ID);
        //CmimUtils.removeElementsByClass(ModConstants.COMBAT_AREAS_INDICATOR_BADGE_CLASS, container);
        //CmimUtils.removeElementsByClass(ModConstants.COMBAT_AREAS_INDICATOR_BADGE_BR_CLASS, container);

        //// Rebuild anew, repeating "init" just not in a lifecycle hook
        //CombatAreasUIManager.buildCombatAreasIndicators(bossEnabled, activeEnabled, inactiveEnabled);
    }

    /**
     *
     * @param bossEnabled whether to display boss badge (provided as parameter, in case this is called during settings change)
     * @param activeEnabled whether to display active badges (provided as parameter, in case this is called during settings change)
     * @param inactiveEnabled whether to display active badges (provided as parameter, in case this is called during settings change)
     * @returns
     */
    //private static buildCombatAreasIndicators(bossEnabled: boolean, activeEnabled: boolean, inactiveEnabled: boolean): void {
    //    // Get types to iterate
    //    let indicatorDefinitions: MonsterTypeCombatAreasIndicatorDefinition[] = [];
    //    if (activeEnabled) {
    //        const activeTypes = MonsterTypeManager.getActiveTypesAsArray();
    //        for (var i = 0; i < activeTypes.length; i++) {
    //            indicatorDefinitions.push(new MonsterTypeCombatAreasIndicatorDefinition(activeTypes[i], true));
    //        }
    //    }
    //    if (inactiveEnabled) {
    //        const inactiveTypes = MonsterTypeManager.getInactiveTypesAsArray();
    //        for (var i = 0; i < inactiveTypes.length; i++) {
    //            indicatorDefinitions.push(new MonsterTypeCombatAreasIndicatorDefinition(inactiveTypes[i], false));
    //        }
    //    }

    //    if (!bossEnabled && indicatorDefinitions.length === 0) {
    //        return;
    //    }

    //    // Order them alphabetically
    //    CmimUtils.orderAlphabetically(indicatorDefinitions, "translatedTypeSingularName");

    //    try {
    //        // Add badges to combat area monsters
    //        const combatAreasContainer = document.getElementById('combat-select-area-Combat');
    //        if (combatAreasContainer !== undefined && combatAreasContainer !== null) {
    //            for (var i = 0; i < combatAreasContainer.children.length; i++) {
    //                const combatArea = game.combatAreaDisplayOrder[i];
    //                const monsterListElement: HTMLElement = combatAreasContainer
    //                    .getElementsByTagName("monster-select-table")[i]
    //                    .getElementsByTagName("tbody")[0];

    //                for (var j = 0; j < combatArea.monsters.length; j++) {
    //                    const monster: Monster = combatArea.monsters[j];

    //                    // Generate list
    //                    let ui: HTMLElement[] = [];

    //                    if (bossEnabled && monster.isBoss) {
    //                        ui.push(CombatAreasUIHelper.createCombatAreaBossIndicatorBadge());
    //                    }

    //                    for (var k = 0; k < indicatorDefinitions.length; k++) {
    //                        const definition = indicatorDefinitions[k];
    //                        if (MonsterTypeManager.monsterIsOfType(monster, definition.type.singularName)) {
    //                            ui.push(CombatAreasUIHelper.createCombatAreaIndicatorBadge(definition.type, definition.active, 1, false));
    //                        }
    //                    }

    //                    // If we injected at least one badge, we also want to add a linebreak
    //                    // Added here at the end, as injecting it at the start of an element's innerhtml doesn't work (at least not via insertBefore)
    //                    if (ui.length > 0) {
    //                        ui.push(CombatAreasUIHelper.createCombatAreaIndicatorBadgeBr());
    //                    }

    //                    // Inject badges into first td-element, placing it above the monster's name
    //                    const monsterListEntryElement = monsterListElement.children[j];
    //                    let monsterListEntryTdElement = monsterListEntryElement.getElementsByTagName("td")[0];
    //                    for (var k = ui.length - 1; k >= 0; k--) {
    //                        monsterListEntryTdElement.insertBefore(ui[k], monsterListEntryTdElement.children[0]);
    //                    }
    //                }
    //            }
    //        }

    //        // Add badges to slayer monsters
    //        const slayerAreasContainer = document.getElementById('combat-select-area-Slayer');
    //        if (slayerAreasContainer !== undefined && slayerAreasContainer !== null) {
    //            for (var i = 0; i < slayerAreasContainer.children.length; i++) {
    //                const slayerArea = game.slayerAreaDisplayOrder[i];
    //                const monsterListElement: HTMLElement = slayerAreasContainer
    //                    .getElementsByTagName("monster-select-table")[i]
    //                    .getElementsByTagName("tbody")[0];

    //                for (var j = 0; j < slayerArea.monsters.length; j++) {
    //                    const monster: Monster = slayerArea.monsters[j];

    //                    // Generate list
    //                    let ui: HTMLElement[] = [];

    //                    if (bossEnabled && monster.isBoss) {
    //                        ui.push(CombatAreasUIHelper.createCombatAreaBossIndicatorBadge());
    //                    }

    //                    for (var k = 0; k < indicatorDefinitions.length; k++) {
    //                        const definition = indicatorDefinitions[k];
    //                        if (MonsterTypeManager.monsterIsOfType(monster, definition.type.singularName)) {
    //                            ui.push(CombatAreasUIHelper.createCombatAreaIndicatorBadge(definition.type, definition.active, 1, false));
    //                        }
    //                    }

    //                    // If we injected at least one badge, we also want to add a linebreak
    //                    if (ui.length > 0) {
    //                        ui.push(CombatAreasUIHelper.createCombatAreaIndicatorBadgeBr());
    //                    }

    //                    // Inject badges into first td-element, placing it above the monster's name
    //                    const monsterListEntryElement = monsterListElement.children[j];
    //                    let monsterListEntryTdElement = monsterListEntryElement.getElementsByTagName("td")[0];
    //                    for (var k = ui.length - 1; k >= 0; k--) {
    //                        monsterListEntryTdElement.insertBefore(ui[k], monsterListEntryTdElement.children[0]);
    //                    }
    //                }
    //            }
    //        }

    //        // Add badges to dungeons
    //        const dungeonsContainer = document.getElementById('combat-select-area-Dungeon');
    //        if (dungeonsContainer !== undefined && dungeonsContainer !== null) {
    //            for (var i = 0; i < dungeonsContainer.children.length; i++) {
    //                const dungeon = game.dungeonDisplayOrder[i];
    //                const dungeonMediaBodyElement = dungeonsContainer
    //                    .getElementsByTagName("combat-area-menu")[i]
    //                    .children[0]
    //                    .children[3]
    //                    .children[2];

    //                // Generate list
    //                let ui: HTMLElement[] = [];
    //                for (var j = 0; j < indicatorDefinitions.length; j++) {
    //                    const definition = indicatorDefinitions[j];
    //                    let count: number = 0;

    //                    dungeon.monsters.forEach(function (value: Monster) {
    //                        if (MonsterTypeManager.monsterIsOfType(value, definition.type.singularName)) {
    //                            count++;
    //                        }
    //                    });

    //                    if (count > 0) {
    //                        ui.push(CombatAreasUIHelper.createCombatAreaIndicatorBadge(definition.type, definition.active, count, true));
    //                    }
    //                }

    //                // Inject badges into first td-element, placing it above the monster's name
    //                if (ui.length > 0) {
    //                    const dungeonMediaBodyInjectTargetElement = dungeonMediaBodyElement.children[1];

    //                    // Start of with a line break
    //                    dungeonMediaBodyInjectTargetElement.appendChild(CombatAreasUIHelper.createCombatAreaIndicatorBadgeBr());

    //                    for (var k = 0; k < ui.length; k++) {
    //                        dungeonMediaBodyInjectTargetElement.appendChild(ui[k]);
    //                    }
    //                }
    //            }
    //        }
    //    } catch (e) {
    //        CmimUtils.warn(`Couldn't generate boss and/or monster type badges: Reason: ${e}`);
    //    }
    //}



    /**
     * Re-evaluate whether the indicator container has to be displayed or not,
     * and toggle its visibility if necessary
     */
    private static evaluateModifierUIImpactIndicatorDisplay(): void {
        if (game.combat.fightInProgress) {
            const requireDisplay = game.combat.player.modifiers.getValue(ModifierConstants.IDS.CHARACTER.chanceToReduceAttackDamageToZero, ModifierQuery.EMPTY) > 0
                || game.combat.enemy.modifiers.getValue(ModifierConstants.IDS.CHARACTER.chanceToReduceAttackDamageToZero, ModifierQuery.EMPTY) > 0;
            //    const requireDisplay = (game.combat.player.modifiers.increasedChanceToReduceAttackDamageToZero - game.combat.player.modifiers.decreasedChanceToReduceAttackDamageToZero) > 0
            //        || (game.combat.enemy.modifiers.increasedChanceToReduceAttackDamageToZero - game.combat.enemy.modifiers.decreasedChanceToReduceAttackDamageToZero) > 0;
            if (requireDisplay) {
                showElement(CombatAreasUIManager._modifierUIImpactIndicatorElement);
            } else {
                hideElement(CombatAreasUIManager._modifierUIImpactIndicatorElement);
            }
        }
    }

    //private static renderIndicatorBadges(cam: CombatAreaMenu): void {
    //    if (cam.areas.length > 0) {
    //        const firstArea = cam.areas[0];

    //        // Areas that do not allow starting a fight with one specific monster
    //        if (firstArea instanceof Dungeon || firstArea instanceof Stronghold) {
    //            cam.menuElems.forEach((menuElement: CombatAreaMenuElement, area: AnyCombatArea) => {
    //                CmimUtils.log(`=== CombatAreasUIManager.renderIndicatorBadges (dungeon or stronghold) | area: ${area.id} ===`);
    //                CmimUtils.logObj(area);
    //                CmimUtils.logObj(menuElement);
    //                // Build children (anew)
    //                let badges = CombatAreasUIHelper.createIndicatorBadgesForList(area.monsters);

    //                // Add elements to container
    //                if (menuElement.indicatorBadgesContainer !== undefined) {
    //                    menuElement.indicatorBadgesContainer.replaceChildren(); // no replacement provided, so just clear them
    //                }
    //                else {
    //                    menuElement.indicatorBadgesContainer = CombatAreasUIHelper.createBadgeContainer();
    //                    menuElement.monsterCount.parentElement!.insertBefore(menuElement.indicatorBadgesContainer, menuElement.monsterCount);
    //                }

    //                for (var i = 0; i < badges.length; i++) {
    //                    menuElement.indicatorBadgesContainer.appendChild(badges[i]);
    //                }
    //            });
    //        }

    //        // Areas that do allow starting a fight with one specific monster
    //        else {
    //            cam.menuElems.forEach((menuElement: CombatAreaMenuElement, area: AnyCombatArea) => {
    //                CmimUtils.log(`=== CombatAreasUIManager.renderIndicatorBadges (neither dungeon nor stronghold) | area: ${area.id} ===`);
    //                CmimUtils.logObj(area);
    //                CmimUtils.logObj(menuElement);
    //                // TODO: For each row
    //                menuElement

    //                const rowElement = {} as MonsterSelectTableRowElement;
    //                const rowMonster = {} as Monster;

    //                // Build children (anew)
    //                let badges = CombatAreasUIHelper.createIndicatorBadges(rowMonster);

    //                // Add elements to container
    //                if (rowElement.indicatorBadgesContainer !== undefined) {
    //                    rowElement.indicatorBadgesContainer.replaceChildren(); // no replacement provided, so just clear them
    //                }
    //                else {
    //                    rowElement.indicatorBadgesContainer = CombatAreasUIHelper.createBadgeContainer();
    //                    rowElement.attackType.parentElement!.insertBefore(rowElement.indicatorBadgesContainer, menuElement.monsterCount);
    //                }

    //                for (var i = 0; i < badges.length; i++) {
    //                    rowElement.indicatorBadgesContainer.appendChild(badges[i]);
    //                }
    //            });
    //        }
    //    }
    //}
}