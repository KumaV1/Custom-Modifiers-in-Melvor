import { MonsterType } from './MonsterType'
import { MonsterTypeDefinition } from './MonsterTypeDefinition';

/**
 * Takes care of holding which types are allocated to which monsters,
 * including letting other mods add additional entries.
 *
 * Keep in mind that these arrays are simple strings,
 * so we don't have to worry about which expansions were actually purchased
 */
export class MonsterTypeMappingManager {
	/** TODO: Some explanation */
	private static _types: { [key: string]: MonsterTypeDefinition } = {	};

	/**
	 * TODO: Explain
	 * @param typeNameSingular
	 * @param typeNamePlural
	 * @param monsterIds
	 */
	public static addType(typeNameSingular: string, typeNamePlural: string, monsterIds: string[]) {
		const typeDefinition = new MonsterTypeDefinition(typeNameSingular, typeNamePlural, monsterIds);
		this._types[typeNameSingular] = typeDefinition;
	}

	/**
	 *
	 * @returns
	 */
	public static getTypes() {
		return this._types;
	}

	public static getTypesAsArray() {
		let array: MonsterTypeDefinition[] = [];
		Object.entries(this._types).forEach(([key, value]) => {
			array.push(value);
		});

		return array;
	}

	/**
	 * Checks whether the given enemy is defined to be of the given type
	 * @param monster
	 * @param type
	 */
	public static monsterIsOfType(monster: Monster | undefined, type: string | MonsterType): boolean {
		if (!monster || !type) {
			return false;
		}

		return MonsterTypeMappingManager._types[type].monsters.some(mId => mId === monster.id);
	}

	/**
	 * Add monster to the list of humans
	 * @param monsterIds
	 */
	public static addHumans(monsterIds: string[]): void {
		if (!monsterIds) {
			return;
        }

		for (var i = 0; i < monsterIds.length; i++) {
			MonsterTypeMappingManager._types["Human"].monsters.push(monsterIds[i]);
        }
	}

	/**
	 * Return the current list of humans
	 * @returns
	 */
	public static getHumans() {
		return MonsterTypeMappingManager.getTypes()["Human"].monsters;
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
			MonsterTypeMappingManager._types["Dragon"].monsters.push(monsterIds[i]);
		}
	}

	/**
	 * Return the current list of dragons
	 * @returns
	 */
	public static getDragons() {
		return MonsterTypeMappingManager.getTypes()["Dragon"].monsters;
	}

	/**
	 * Add monster to the list of undeads
	 * @param monsterIds
	 */
	public static addUndeads(monsterIds: string[]): void {
		if (!monsterIds) {
			return;
		}

		for (var i = 0; i < monsterIds.length; i++) {
			MonsterTypeMappingManager._types["Undead"].monsters.push(monsterIds[i]);
		}
	}

	/**
	 * Return the current list of undead
	 * @returns
	 */
	public static getUndead() {
		return MonsterTypeMappingManager.getTypes()["Undead"].monsters;
	}
}