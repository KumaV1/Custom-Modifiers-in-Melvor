import { ModConstants } from "../constants/ModConstants";
import { MonsterTypeDefinition } from "../models/monsterTyping/MonsterTypeDefinition";
import { TranslationManager } from "../managers/TranslationManager";

export class CombatAreasUIHelper {

    /**
     * Create a badge html element to communicate info regarding allocation of the given monster type
     * @param type the monster type
     * @param typeActive whether the type is active
     * @param count how many monsters are currently relevant for this method call
     * @param displayCount whether the count should be included in the text returned
     */
    public static createCombatAreaIndicatorBadge(type: MonsterTypeDefinition, typeActive: boolean, count: number, displayCount: boolean): HTMLElement {
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
            ? TranslationManager.getMonsterTypePluralNameTranslation(type.singularName, type.pluralName)
            : TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName);

        return badgeEl;
    }
    /**
     * Creates a br with class(es), which are used before/after badges at times and should also be targetable through defined classes
     * @returns
     */
    public static createCombatAreaBossIndicatorBadge(): HTMLElement {
        let badgeEl = document.createElement('span');
        badgeEl.classList.add('badge', 'bage-pill', 'mr-1', 'badge-success', ModConstants.COMBAT_AREAS_INDICATOR_BADGE_CLASS);

        badgeEl.innerHTML = TranslationManager.getTranslationOrFallback(
            'Combat_Area_Boss_Indicator',
            'Boss',
            true
        );

        return badgeEl;
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
}