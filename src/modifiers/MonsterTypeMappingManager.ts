import { MonsterType } from './MonsterType'

/**
 * Takes care of holding which types are allocated to which monsters,
 * including letting other mods overwrite this.
 * Keep in mind that these arrays are simple strings, 
 * so we don't have to worry about which expansions were actually purchased
 */
export class MonsterTypeMappingManager {
	private static _humans: string[] = [
		"melvorD:BlackKnight",
		"melvorD:ConfusedPirate",
		"melvorD:FrozenArcher",
		"melvorD:Pirate",
		"melvorD:FirstMate",
		"melvorD:JuniorFarmer",
		"melvorD:AdultFarmer",
		"melvorD:MasterFarmer",
		"melvorD:Wizard",
		"melvorD:SteelKnight",
		"melvorD:MithrilKnight",
		"melvorD:AdamantKnight",
		"melvorD:RuneKnight",
		"melvorD:BanditTrainee",
		"melvorD:Bandit",
		"melvorD:BanditLeader",
		"melvorD:DarkWizard",
		"melvorD:MasterWizard",
		"melvorD:ElderWizard",
		"melvorF:Druid",
		"melvorF:Thief",
		"melvorF:Shaman",
		"melvorF:Necromancer",
		"melvorF:Elementalist",
		"melvorF:Paladin",
		"melvorF:Priest",
		"melvorF:WanderingBard",
		"melvorTotH:DarkKnight",
		"melvorAoD:BlindWarrior",
		"melvorAoD:BlindArcher",
		"melvorAoD:BlindMage"
	];

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

	private static _undead: string[] = [
		"melvorD:PirateCaptain",
		"melvorD:ZombieHand",
		"melvorD:Zombie",
		"melvorD:ZombieLeader",
		"melvorD:Ghost",
		"melvorD:Skeleton",
		"melvorF:UndeadWerewolf",
		"melvorF:CursedLich",
		"melvorF:GreaterSkeletalDragon",
		"melvorTotH:Phantom",
		"melvorTotH:Banshee",
		"melvorTotH:Spectre",
		"melvorTotH:CursedSkeletonWarrior",
		"melvorTotH:Fiozor"
	];

	/**
	 * Checks whether the given enemy is defined to be of the given type
	 * @param monster
	 * @param type
	 */
	public static monsterIsOfType(monster: Monster | undefined, type: MonsterType): boolean {
		if (!monster) {
			return false;
        }

		switch (type) {
			case MonsterType.Human:
				return MonsterTypeMappingManager._humans.some(id => id === monster.id)
			case MonsterType.Dragon:
				return MonsterTypeMappingManager._dragons.some(id => id === monster.id)
			case MonsterType.Undead:
				return MonsterTypeMappingManager._undead.some(id => id === monster.id)
			default:
				return false;
		}
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
			MonsterTypeMappingManager._humans.push(monsterIds[i]);
        }
	}

	public static getHumans() {
		return MonsterTypeMappingManager._humans;
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

	public static getDragons() {
		return MonsterTypeMappingManager._dragons;
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
			MonsterTypeMappingManager._undead.push(monsterIds[i]);
		}
	}

	public static getUndead() {
		return MonsterTypeMappingManager._undead;
	}
}