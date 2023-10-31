import { MonsterType } from './MonsterType'

/**
 * Takes care of holding which types are allocated to which monsters,
 * including letting other mods overwrite this
 */
export class MonsterTypeMappingManager {
	private static _dragons: string[] = [
		"melvorD:GreenDragon",
		"melvorD:BlueDragon",
		"melvorD:RedDragon",
		"melvorD:BlackDragon",
		"melvorF:ElderDragon",
		"melvorF:ChaoticGreaterDragon",
		"melvorF:HuntingGreaterDragon",
		"melvorF:WickedGreaterDragon",
		"melvorF:MalcsTheLeaderOfDragons",
		"melvorF:GreaterSkeletalDragon",
		"melvorTotH:TwinSeaDragonSerpent"
	];

	/**
	 * Checks whether the given enemy is defined to be of the given type
	 * @param enemy
	 * @param type
	 */
	public static enemyIsOfType(enemy: Enemy, type: MonsterType): boolean {
		if (!enemy) {
			return false;
        }

		switch (type) {
			case MonsterType.Dragon:
				return MonsterTypeMappingManager.getDragons().some(id => id === enemy.monster?.id)
			default:
				return false;
		}
	}

	/**
	 * Get all monsters currently defined to be a dragon
	 */
	public static getDragons(): string[] {
		return MonsterTypeMappingManager._dragons;
	}

	/**
	 * Add monster to the list of dragons
	 * @param monsterIds
	 */
	public static addDragons(monsterIds: string[]): void {
		if (!monsterIds) {
			return;
        }

		for (var i = 0; i < monsterIds.length; i++) {
			MonsterTypeMappingManager._dragons.push(monsterIds[i]);
        }
	}
}