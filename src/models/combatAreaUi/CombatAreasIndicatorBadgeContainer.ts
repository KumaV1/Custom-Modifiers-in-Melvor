import { CombatAreasUIHelper } from "../../helpers/CombatAreasUIHelper";
import { CombatAreasIndicatorBadge } from "./CombatAreasIndicatorBadge";
import { CombatAreasIndicatorBadgeType } from "./CombatAreasIndicatorBadgeType";
import { CombatAreasIndicatorBadgesVisibilityConfiguration } from "./CombatAreasIndicatorBadgesVisibilityConfiguration";

export class CombatAreasIndicatorBadgeContainer {
    private _badges: CombatAreasIndicatorBadge[];

    /** The container element itself */
    public element: HTMLElement;

    /** All monsters relevant for this container */
    public monsters: Monster[];

    constructor(container: HTMLElement, monsters: Monster[]) {
        this.element = container;
        this.monsters = monsters;
        this._badges = this.createBadges();
        this._badges.forEach((badge) => {
            container.appendChild(badge.element);
        })
    }

    /**
     * Creates or updates render badges (deliberately not called in constructor, due to availa)
     */
    private createBadges(): CombatAreasIndicatorBadge[] {
        if (this.monsters.length === 0) {
            return [];
        }

        if (this.monsters.length === 1) {
            return CombatAreasUIHelper.createIndicatorBadges(this.monsters[0]);
        }

        return CombatAreasUIHelper.createIndicatorBadgesForList(this.monsters);

    }

    /**
     *
     * @param visibilityConfig
     */
    public toggleBadgesVisibility(visibilityConfig: CombatAreasIndicatorBadgesVisibilityConfiguration): void {
        for (var i = 0; i < this._badges.length; i++) {
            const badge = this._badges[i];
            switch (badge.type) {
                case CombatAreasIndicatorBadgeType.Boss:
                    badge.toggleVisibility(visibilityConfig.showBoss);
                    break;
                case CombatAreasIndicatorBadgeType.ActiveMonsterType:
                    badge.toggleVisibility(visibilityConfig.showActiveMonsterTypes);
                    break;
                case CombatAreasIndicatorBadgeType.InactiveMonsterType:
                    badge.toggleVisibility(visibilityConfig.showInactiveMonsterTypes);
                    break;
                default:
                    break;
            }
        }

        // TODO: May have to enable this, if empty div ends up affecting the UI in unexpected ways
        //let hideContainer = true;
        //for (var i = 0; i < this._badges.length; i++) {
        //    const badge = this._badges[i];
        //    if (!(badge.element.classList.contains('d-none'))) {
        //        hideContainer = false;
        //        break; // break out of loop, at least one badge to display exists
        //    }
        //}

        //if (hideContainer) {
        //    hideElement(this.element);
        //} else {
        //    showElement(this.element);
        //}
    }
}