import { CmimUtils } from "../Utils";
import { CombatAreasIndicatorBadgeContainerMap } from "../models/combatAreaUi/CombatAreasIndicatorBadgeContainerMap";
import { CombatAreasIndicatorBadgesVisibilityConfiguration } from "../models/combatAreaUi/CombatAreasIndicatorBadgesVisibilityConfiguration";
import { CombatAreasUIHelper } from "../helpers/CombatAreasUIHelper";
import { ModifierConstants } from "../constants/ModifierConstants";
import { SettingsManager } from "../managers/SettingsManager";

export class CombatAreasUIManager {
    private static _modifierUIImpactIndicatorElement: HTMLElement;

    /**
     * A nested map, each badge container being uniquely allocated to a combination of related combat area and where exactly it is located in there (or you could say, what class was responsible for creating it)
     */
    private static _badgeContainers: CombatAreasIndicatorBadgeContainerMap = new CombatAreasIndicatorBadgeContainerMap();

    /**
     * Patches multiple html element classes, to inject additional elements
     * The patched method is called when loading a character, therefore other mods should have long registered additional monster types
     * @param ctx
     */
    public static patch(ctx: Modding.ModContext): void {
        /**
         * Patch into row creation (apparently, 'MonsterSelectTableRowElement.setRow' isn't actually called... unfortunate, would have been a better place to patch into)
         */
        ctx.patch(MonsterSelectTableElement, 'createRow').after(function (returnValue: void, monster: Monster, area: AnyCombatArea) {
            let badgeContainer = CombatAreasUIManager._badgeContainers.getContainer('MonsterSelectTableElement.createRow', { area: area, monster: monster });
            if (badgeContainer === undefined) {
                badgeContainer = CombatAreasUIManager._badgeContainers.createContainer('MonsterSelectTableElement.createRow', { area: area, monster: monster });
            }

            const rowElement = this.tableBody.lastElementChild;
            const tdElements = rowElement?.getElementsByTagName('td');
            if (tdElements === undefined || tdElements === null || tdElements.length === 0) {
                CmimUtils.log('this.tableBody does not have any td element');
                return;
            }
            const infoContainer = tdElements[0];
            infoContainer.insertBefore(badgeContainer.element, infoContainer.childNodes[0]);
        });

        /** Patches into creation of overall menu elements for other areas, where you can't select a single specifi monster */
        ctx.patch(CombatAreaMenuElement, 'setArea').after(function (returnValue: void, area: AnyCombatArea) {
            // This patch is only to deal with areas that don't let you directly fight a single specific monster
            if (!(area instanceof Dungeon || area instanceof Stronghold)) {
                return;
            }

            let badgeContainer = CombatAreasUIManager._badgeContainers.getContainer('CombatAreaMenuElement.setArea', { area: area });
            if (badgeContainer === undefined) {
                badgeContainer = CombatAreasUIManager._badgeContainers.createContainer('CombatAreaMenuElement.setArea', { area: area });
            }

            this.monsterCount.parentElement!.insertBefore(badgeContainer.element, this.monsterCount);
        });

        ctx.patch(ViewMonsterListTableRowElement, 'setRow').after(function (returnValue: void, monster: Monster, count: number) {
            let badgeContainer = CombatAreasUIManager._badgeContainers.getContainer('ViewMonsterListTableRowElement.setRow', { monster: monster });
            if (badgeContainer === undefined) {
                badgeContainer = CombatAreasUIManager._badgeContainers.createContainer('ViewMonsterListTableRowElement.setRow', { monster: monster });
            }

            this.monsterImg.parentElement!.parentElement!.parentElement!.insertBefore(badgeContainer.element, this.monsterImg.parentElement!.parentElement);
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
        CombatAreasUIManager._badgeContainers.toggleBadgesVisibility(visibilityConfig);
    }

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
}