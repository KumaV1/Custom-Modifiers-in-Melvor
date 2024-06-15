import { ModConstants } from "../constants/ModConstants";
import { MonsterTypeDefinition } from "../models/monsterTyping/MonsterTypeDefinition";
import { TranslationManager } from "../managers/TranslationManager";
import { SettingsManager } from "../managers/SettingsManager";
import { MonsterTypeManager } from "../managers/MonsterTypeManager";
import { MonsterTypeCombatAreasIndicatorDefinition } from "../models/monsterTyping/MonsterTypeCombatAreasIndicatorDefinition";
import { CmimUtils } from "../Utils";
import { CombatAreasIndicatorBadge } from "../models/combatAreaUi/CombatAreasIndicatorBadge";
import { CombatAreasIndicatorBadgeType } from "../models/combatAreaUi/CombatAreasIndicatorBadgeType";

export class CombatAreasUIHelper {

    public static createBadgeContainer(): HTMLDivElement {
        let el = document.createElement('div');
        el.classList.add(ModConstants.COMBAT_AREAS_BADGE_CONTAINER_CLASS);

        return el;
    }

    public static createIndicatorBadges(monster: Monster): CombatAreasIndicatorBadge[] {
        let badges = [] as CombatAreasIndicatorBadge[];

        // Build and add boss indicator
        if (monster.isBoss) {
            if (SettingsManager.getEnableBossIndicators) {
                badges.push(CombatAreasUIHelper.createCombatAreaBossIndicatorBadge());
            }
        }

        // Evaluate monster types
        let indicatorDefinitions = CombatAreasUIHelper.getMonsterTypeIndicatorDefinitions();

        // Create indicators for monster types
        for (var i = 0; i < indicatorDefinitions.length; i++) {
            const definition = indicatorDefinitions[i];
            if (MonsterTypeManager.monsterIsOfType(monster, definition.type.name)) {
                badges.push(CombatAreasUIHelper.createCombatAreaIndicatorBadge(definition.type, definition.active, 1, false));
            }
        }

        return badges;
    }

    /**
     * Creates a collection of indicator badges, with the number of matching entries added to the badge
     * @param monsters
     */
    public static createIndicatorBadgesForList(monsters: Monster[]): CombatAreasIndicatorBadge[] {
        let badges = [] as CombatAreasIndicatorBadge[];

        if (SettingsManager.getEnableBossIndicators) {
            let bossCount = 0;
            monsters.forEach(function (value: Monster) {
                if (value.isBoss) {
                    bossCount++;
                }
            });
            if (bossCount > 0) {
                badges.push(CombatAreasUIHelper.createCombatAreaBossIndicatorBadge(bossCount));
            }
        }

        let indicatorDefinitions = CombatAreasUIHelper.getMonsterTypeIndicatorDefinitions();
        for (var i = 0; i < indicatorDefinitions.length; i++) {
            const definition = indicatorDefinitions[i];
            let count = 0;

            monsters.forEach(function (value: Monster) {
                if (MonsterTypeManager.monsterIsOfType(value, definition.type.name)) {
                    count++;
                }
            });

            if (count > 0) {
                badges.push(CombatAreasUIHelper.createCombatAreaIndicatorBadge(definition.type, definition.active, count, true));
            }
        }

        return badges;
    }

    /**
     * Create a badge html element to communicate info regarding allocation of the given monster type
     * @param type the monster type
     * @param typeActive whether the type is active
     * @param count how many monsters are currently relevant for this method call
     * @param displayCount whether the count should be included in the text returned
     */
    public static createCombatAreaIndicatorBadge(type: MonsterTypeDefinition, typeActive: boolean, count: number, displayCount: boolean): CombatAreasIndicatorBadge {
        let badgeEl = document.createElement('span');
        badgeEl.classList.add('badge');
        badgeEl.classList.add('bage-pill');
        badgeEl.classList.add('mr-1');
        badgeEl.classList.add(typeActive ? 'badge-success' : 'badge-warning');
        badgeEl.classList.add(ModConstants.COMBAT_AREAS_INDICATOR_BADGE_CLASS);

        badgeEl.innerHTML = displayCount
            ? `${count} `
            : '';
        badgeEl.innerHTML += count > 1
            ? TranslationManager.getMonsterTypePluralNameTranslation(type.name)
            : TranslationManager.getMonsterTypeSingularNameTranslation(type.name);

        return new CombatAreasIndicatorBadge(badgeEl, typeActive ? CombatAreasIndicatorBadgeType.ActiveMonsterType : CombatAreasIndicatorBadgeType.InactiveMonsterType);
    }
    /**
     * Creates a br with class(es), which are used before/after badges at times and should also be targetable through defined classes
     * @param optionally provide an information about how many bosses the text should mention
     * @returns
     */
    public static createCombatAreaBossIndicatorBadge(count?: number): CombatAreasIndicatorBadge {
        let badgeEl = document.createElement('span');
        badgeEl.classList.add('badge', 'bage-pill', 'mr-1', 'badge-success', ModConstants.COMBAT_AREAS_INDICATOR_BADGE_CLASS);

        if (count !== undefined && count > 1) {
            badgeEl.innerHTML = TranslationManager.getTemplateTranslationOrFallback(
                'Combat_Area_Bosses_Indicator',
                { count: formatNumber(count) },
                `${count} Bosses`,
                true
            );
            templateLangString
        }

        else {
            badgeEl.innerHTML = TranslationManager.getTranslationOrFallback(
                'Combat_Area_Boss_Indicator',
                'Boss',
                true
            );
        }

        return new CombatAreasIndicatorBadge(badgeEl, CombatAreasIndicatorBadgeType.Boss);
    }

    /**
     * Creates a br with class(es), which are used before/after badges at times and should also be targetable through defined classes
     * @returns
     */
    public static createCombatAreaIndicatorBadgeBr(): HTMLElement {
        let br = document.createElement("br");
        br.classList.add(ModConstants.COMBAT_AREAS_INDICATOR_BADGE_BR_CLASS);

        return br;
    }

    /**
     * Creates container displaying a warn message about possibly falty information in the combat UI
     * @returns
     */
    public static createModifierUIImpactIndicator(): HTMLElement {
        let containerEl = document.createElement("div");
        containerEl.classList.add('d-none', 'text-warning', 'row', 'row-deck', 'gutters-tiny', ModConstants.COMBAT_MODIFIER_UI_IMPACT_INDICATOR_CONTAINER_CLASS);

        const headline = TranslationManager.getLangString("Combat_Modifier_UI_Impact_Indicator_Headline", true);
        const text = TranslationManager.getLangString("Combat_Modifier_UI_Impact_Indicator_Text", true);
        const hint = TranslationManager.getLangString("Combat_Modifier_UI_Impact_Indicator_Hint", true);
        containerEl.innerHTML = `<div class="col-12"><div class="block block-rounded block-link-pop border-top border-warning border-4x bg-combat-dark p-3"><h5 class="mb-1">${headline}</h5><span class="font-w400">${text}</span><br><span class="font-w400 text-info">${hint}</span></div></div>`;

        return containerEl;
    }

    /**
     * Creates a list of relevant monster type indicator definitions
     * @returns
     */
    private static getMonsterTypeIndicatorDefinitions(): MonsterTypeCombatAreasIndicatorDefinition[]  {
        let indicatorDefinitions: MonsterTypeCombatAreasIndicatorDefinition[] = [];

        if (SettingsManager.getEnableActiveMonsterTypeIndicators) {
            const activeTypes = MonsterTypeManager.getActiveTypesAsArray();
            for (var i = 0; i < activeTypes.length; i++) {
                indicatorDefinitions.push(new MonsterTypeCombatAreasIndicatorDefinition(activeTypes[i], true));
            }
        }

        if (SettingsManager.getEnableInactiveMonsterTypeIndicators) {
            const inactiveTypes = MonsterTypeManager.getInactiveTypesAsArray();
            for (var i = 0; i < inactiveTypes.length; i++) {
                indicatorDefinitions.push(new MonsterTypeCombatAreasIndicatorDefinition(inactiveTypes[i], false));
            }
        }

        CmimUtils.orderAlphabetically(indicatorDefinitions, "typeNameTranslation"); // Order them alphabetically

        return indicatorDefinitions;
    }
}