import { MonsterTypeDefinition } from "../modifiers/monsterTyping/MonsterTypeDefinition";
import { MonsterTypeMappingManager } from "../modifiers/monsterTyping/MonsterTypeMappingManager"
import { TranslationManager } from "../translation/TranslationManager";

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
                //console.log(`monster name: ${monster.name} | _media: ${monster._media} | media: ${monster.media}`);
                matchingMonsters.push(monster);
            }
        });

        // Try to translate type name
        const name = TranslationManager.getTranslationOrFallback(
            `MONSTER_TYPE_PLURAL_${type.singularName}`,
            type.pluralName
        );

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