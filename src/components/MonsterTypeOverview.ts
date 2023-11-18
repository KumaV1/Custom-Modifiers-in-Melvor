import { Constants } from "../Constants";
import { MonsterTypeDefinition } from "../modifiers/monsterTyping/MonsterTypeDefinition";
import { MonsterTypeMappingManager } from "../modifiers/monsterTyping/MonsterTypeMappingManager"

interface MonsterTypeOverviewMonsterType {
    name: string,
    monsters: Monster[]
}

interface MonsterTypeOverviewProps {
    types: MonsterTypeOverviewMonsterType[]
}

// @ts-ignore: 'Component' is unknown for some reason
export function MonsterTypeOverview(): Component<MonsterTypeOverviewProps> {
    let types: MonsterTypeOverviewMonsterType[] = [];

    // Prepare data for processing
    const monsterTypes: MonsterTypeDefinition[] = MonsterTypeMappingManager.getTypesAsArray();
    const monsters = game.monsters.allObjects;

    // Process
    monsterTypes.forEach(function (type) {
        // Get matching monsters
        let matchingMonsters: Monster[] = [];
        monsters.forEach(function (monster) {
            if (MonsterTypeMappingManager.monsterIsOfType(monster, type.singularName)) {
                matchingMonsters.push(monster);
            }
        });

        // Try to translate type name
        let name = type.pluralName;
        const translation = loadedLangJson[`${Constants.MOD_NAMESPACE}:Monster_Type_Plural_${type.singularName}`];
        if (translation !== undefined && translation !== '') {
            name = translation;
        }

        // Register
        const obj: MonsterTypeOverviewMonsterType = {
            name: name,
            monsters: matchingMonsters
        };
        types.push(obj);
    });

    return {
        $template: '#custom-Modifiers-in-Melvor__monster-type-overview-container-template',
        types: types
    };
}