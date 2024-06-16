import { CombatAreasUIHelper } from "../../helpers/CombatAreasUIHelper";
import { CombatAreasIndicatorBadgeContainer } from "./CombatAreasIndicatorBadgeContainer";
import { CombatAreasIndicatorBadgeContainerCreator } from "./CombatAreasIndicatorBadgeContainerCreator";
import { CombatAreasIndicatorBadgesVisibilityConfiguration } from "./CombatAreasIndicatorBadgesVisibilityConfiguration";
import { MonsterAndOrArea } from "./MonsterAndOrArea";

/** A utilility class to make working with the nested map of combat area indicator badges easier */
export class CombatAreasIndicatorBadgeContainerMap {
    /**
     * Map of all badge containers
     */
    private badgeContainers: Map<CombatAreasIndicatorBadgeContainerCreator, Map<MonsterAndOrArea, CombatAreasIndicatorBadgeContainer>>;

    constructor() {
        this.badgeContainers = new Map();
    }

    public getContainer(creator: CombatAreasIndicatorBadgeContainerCreator, monsterAndOrArea: MonsterAndOrArea): CombatAreasIndicatorBadgeContainer | undefined {
        const creatorMap = this.badgeContainers.get(creator);
        if (creatorMap === undefined) {
            return undefined;
        }

        return creatorMap.get(monsterAndOrArea);
    }

    /**
     *
     * @param creator with patched class is responsible for the creation of the container
     * @param areaOrMonster the area or monster in question, for which a corresponding badge container should be created
     */
    public createContainer(creator: CombatAreasIndicatorBadgeContainerCreator, monsterAndOrArea: MonsterAndOrArea): CombatAreasIndicatorBadgeContainer {
        if (!this.badgeContainers.has(creator)) {
            this.badgeContainers.set(creator, new Map());
        }

        const monsters = monsterAndOrArea.monster !== undefined
            ? [monsterAndOrArea.monster]
            : monsterAndOrArea.area !== undefined
                ? this.getMonstersFromArea(monsterAndOrArea.area)
                : [];
        const badgeContainer = new CombatAreasIndicatorBadgeContainer(
            CombatAreasUIHelper.createBadgeContainer(),
            monsters
        );

        this.badgeContainers.get(creator)!.set(monsterAndOrArea, badgeContainer);

        return badgeContainer;
    }

    /**
     * Updates visibility of all badges
     * @param visibilityConfig
     */
    public toggleBadgesVisibility(visibilityConfig: CombatAreasIndicatorBadgesVisibilityConfiguration): void {
        this.badgeContainers.forEach((map) => {
            map.forEach((badgeContainer) => {
                badgeContainer.toggleBadgesVisibility(visibilityConfig);
            })
        })
    }

    /**
     * Just a safety net, in case there is another combat area category in the future, and patched classes' methods end up a little wonky
     * @param area
     * @returns
     */
    private getMonstersFromArea(area: AnyCombatArea): Monster[] {
        if (area instanceof Dungeon || area instanceof Stronghold || area instanceof AbyssDepth) {
            return area.monsters;
        }

        return [];
    }

    /**
     * Currently not in use, but still here just in case
     * @param creator with patched class is responsible for the creation of the container
     * @param areaOrMonster the area or monster in question, for which a corresponding badge container is looked for
     * @returns
     */
    private hasContainer(creator: CombatAreasIndicatorBadgeContainerCreator, monsterAndOrArea: MonsterAndOrArea) {
        const creatorMap = this.badgeContainers.get(creator);
        if (creatorMap === undefined) {
            return false;
        }

        return creatorMap.has(monsterAndOrArea);
    }
}