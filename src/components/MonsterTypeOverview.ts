import { MonsterTypeDefinition } from "../modifiers/monsterTyping/MonsterTypeDefinition";
import { MonsterTypeMappingManager } from "../modifiers/monsterTyping/MonsterTypeMappingManager"
import { TranslationManager } from "../translation/TranslationManager";

interface MonsterTypeOverviewPlayerTraitEntry {
    name: string,
    value: number
}

interface MonsterTypeOverviewMonsterType {
    name: string,
    monsters: Monster[]
}

interface MonsterTypeOverviewProps {
    traitsOnPlayer: MonsterTypeOverviewPlayerTraitEntry[]
    activeTypes: MonsterTypeOverviewMonsterType[],
    inactiveTypes: MonsterTypeOverviewMonsterType[]
}

// @ts-ignore: 'Component' is unknown for some reason
export function MonsterTypeOverview(): Component<MonsterTypeOverviewProps> {
    let props: MonsterTypeOverviewProps = {
        traitsOnPlayer: [],
        activeTypes: [],
        inactiveTypes: []
    };

    // Prepare data for processing
    const activeMonsterTypes: MonsterTypeDefinition[] = MonsterTypeMappingManager.getActiveTypesAsArray();
    const inactiveMonsterTypes: MonsterTypeDefinition[] = MonsterTypeMappingManager.getInactiveTypesAsArray();
    const monsters = game.monsters.allObjects;

    // Process
    activeMonsterTypes.forEach(function (type) {
        processType(type, true);
    });
    inactiveMonsterTypes.forEach(function (type) {
        processType(type, false);
    });

    function processType(type: MonsterTypeDefinition, active: Boolean) {
        // Get matching monsters
        let matchingMonsters: Monster[] = [];
        monsters.forEach(function (monster) {
            if (MonsterTypeMappingManager.monsterIsOfType(monster, type.singularName)) {
                //console.log(`monster name: ${monster.name} | _media: ${monster._media} | media: ${monster.media}`);
                matchingMonsters.push(monster);
            }
        });

        // Try to translate type name
        const name = TranslationManager.getMonsterTypePluralNameTranslation(
            type.singularName,
            type.pluralName
        );

        // Register
        const obj: MonsterTypeOverviewMonsterType = {
            name: name,
            monsters: matchingMonsters
        };
        if (active) {
            props.activeTypes.push(obj);
        } else {
            props.inactiveTypes.push(obj);
        }

        // @ts-ignore
        if (game.combat.player.modifiers[type.modifierPropertyNames.traitApplied] > 0) {
            const name = TranslationManager.getMonsterTypeSingularNameTranslation(
                type.singularName
            );
            // @ts-ignore
            const value: number = game.combat.player.modifiers[type.modifierPropertyNames.traitApplied];
            const obj: MonsterTypeOverviewPlayerTraitEntry = {
                name: name,
                value: value
            };
            props.traitsOnPlayer.push(obj);
        }
    }

    /**
     * Change the information tab to display
     * @param tab
     */
    function changeTab(tab: 'playerTraits' | 'activeTypes' | 'inactiveTypes') {
        const playerTraitsContainer = document.getElementById("monster-type-overview__player-traits-container");
        const activeTypesContainer = document.getElementById("monster-type-overview__active-types-container");
        const inactiveTypesContainer = document.getElementById("monster-type-overview__inactive-types-container");
        switch (tab) {
            case 'playerTraits':
                playerTraitsContainer?.classList.remove("d-none");
                activeTypesContainer?.classList.add("d-none");
                inactiveTypesContainer?.classList.add("d-none");
                return;
            case 'activeTypes':
                playerTraitsContainer?.classList.add("d-none");
                activeTypesContainer?.classList.remove("d-none");
                inactiveTypesContainer?.classList.add("d-none");
                return;
            case 'inactiveTypes':
                playerTraitsContainer?.classList.add("d-none");
                activeTypesContainer?.classList.add("d-none");
                inactiveTypesContainer?.classList.remove("d-none");
                return;
        }
    }

    return {
        $template: '#custom-Modifiers-in-Melvor__monster-type-overview-container-template',
        props: props,
        changeTab: changeTab
    };
}