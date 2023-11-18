import { MonsterType } from "../modifiers/monsterTyping/MonsterType"
import { MonsterTypeMappingManager } from "../modifiers/monsterTyping/MonsterTypeMappingManager"

interface MonsterTypeOverviewProps {
    humans: Monster[],
    dragons: Monster[],
    undead: Monster[],
}

// @ts-ignore: 'Component' is unknown for some reason
export function MonsterTypeOverview(): Component<MonsterTypeOverviewProps> {
    let props: MonsterTypeOverviewProps = {
        humans: [],
        dragons: [],
        undead: []
    };

    const monsters = game.monsters.allObjects;
    for (var i = 0; i < monsters.length; i++) {
        const monster = monsters[i];
        if (MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Human)) {
            props.humans.push(monster);
        }
        if (MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Dragon)) {
            props.dragons.push(monster);
        }
        if (MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Undead)) {
            props.undead.push(monster);
        }
    }

    return {
        $template: '#custom-Modifiers-in-Melvor__monster-type-overview-container-template',
        humans: props.humans,
        dragons: props.dragons,
        undead: props.undead
    };
}