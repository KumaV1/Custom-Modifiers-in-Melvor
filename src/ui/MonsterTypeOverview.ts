import { CmimUtils } from "../Utils";
import { MonsterTypeDefinition } from "../models/monsterTyping/MonsterTypeDefinition";
import { MonsterTypeManager } from "../managers/MonsterTypeManager"
import { SettingsManager } from "../managers/SettingsManager";
import { TranslationManager } from "../managers/TranslationManager";

interface MonsterTypeOverviewPlayerTraitEntry {
    name: string,
    value: number
}

interface MonsterTypeOverviewMonsterType {
    name: string,
    monsters: Monster[],
    iconResourceUrl: string
}

interface MonsterTypeOverviewInactiveMonsterType extends MonsterTypeOverviewMonsterType {
    keptInactiveByModSettings: boolean
}

interface MonsterTypeOverviewProps {
    traitsOnPlayer: MonsterTypeOverviewPlayerTraitEntry[]
    activeTypes: MonsterTypeOverviewMonsterType[],
    inactiveTypes: MonsterTypeOverviewInactiveMonsterType[]
}

// @ts-ignore: 'Component' is unknown for some reason
export function MonsterTypeOverview(): Component<MonsterTypeOverviewProps> {
    let props: MonsterTypeOverviewProps = {
        traitsOnPlayer: [],
        activeTypes: [],
        inactiveTypes: []
    };

    // Prepare data for processing
    const activeMonsterTypes: MonsterTypeDefinition[] = MonsterTypeManager.getActiveTypesAsArray();
    const inactiveMonsterTypes: MonsterTypeDefinition[] = MonsterTypeManager.getInactiveTypesAsArray();
    const monsters = game.monsters.allObjects;

    // Process
    activeMonsterTypes.forEach(function (type) {
        processType(type, true);
    });
    inactiveMonsterTypes.forEach(function (type) {
        processType(type, false);
    });

    // Order type lists alphabetically
    CmimUtils.orderAlphabetically(props.activeTypes, "name");
    CmimUtils.orderAlphabetically(props.inactiveTypes, "name");

    // == Helper Functions ==
    function processType(type: MonsterTypeDefinition, active: Boolean) {
        // Get matching monsters
        let matchingMonsters: Monster[] = [];
        monsters.forEach(function (monster) {
            if (MonsterTypeManager.monsterIsOfType(monster, type.singularName)) {
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
            monsters: matchingMonsters,
            iconResourceUrl: type.iconResourceUrl
        };
        if (active) {
            props.activeTypes.push(obj);
        } else {
            props.inactiveTypes.push({
                ...obj,
                keptInactiveByModSettings: SettingsManager.getDisableSpecificMonsterTypes.some(t => t === type.singularName)
            });
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
        const playerTraitsTab = document.getElementById("monster-type-overview__player-traits-tab")!;
        const playerTraitsContainer = document.getElementById("monster-type-overview__player-traits-container")!;
        const activeTypesTab = document.getElementById("monster-type-overview__active-types-tab")!;
        const activeTypesContainer = document.getElementById("monster-type-overview__active-types-container")!;
        const inactiveTypesTab = document.getElementById("monster-type-overview__inactive-types-tab")!;
        const inactiveTypesContainer = document.getElementById("monster-type-overview__inactive-types-container")!;
        switch (tab) {
            case 'playerTraits':
                playerTraitsTab.classList.add("border-success");
                playerTraitsContainer.classList.remove("d-none");
                activeTypesTab.classList.remove("border-success");
                activeTypesContainer.classList.add("d-none");
                inactiveTypesTab.classList.remove("border-success");
                inactiveTypesContainer.classList.add("d-none");
                return;
            case 'activeTypes':
                playerTraitsTab.classList.remove("border-success");
                playerTraitsContainer.classList.add("d-none");
                activeTypesTab.classList.add("border-success");
                activeTypesContainer.classList.remove("d-none");
                inactiveTypesTab.classList.remove("border-success");
                inactiveTypesContainer.classList.add("d-none");
                return;
            case 'inactiveTypes':
                playerTraitsTab.classList.remove("border-success");
                playerTraitsContainer.classList.add("d-none");
                activeTypesTab.classList.remove("border-success");
                activeTypesContainer.classList.add("d-none");
                inactiveTypesTab.classList.add("border-success");
                inactiveTypesContainer.classList.remove("d-none");
                return;
        }
    }

    return {
        $template: '#custom-Modifiers-in-Melvor__monster-type-overview-container-template',
        props: props,
        changeTab: changeTab
    };
}