import { CombatAreasIndicatorBadgeType } from "./CombatAreasIndicatorBadgeType";

export class CombatAreasIndicatorBadge {

    /** The badge element itself */
    public element: HTMLElement;

    public type: CombatAreasIndicatorBadgeType;

    constructor(element: HTMLElement, type: CombatAreasIndicatorBadgeType) {
        this.element = element;
        this.type = type;
    }

    public toggleVisibility(show: boolean) {
        if (show) {
            showElement(this.element);
        } else {
            hideElement(this.element);
        }
    }
}