import { Constants as ModifierConstants } from '../Constants'
import { CustomModifiersManager } from '../CustomModifiersManager';
import { ModContextMemorizer } from '../../ModContextMemorizer';
import { MonsterType } from './MonsterType'
import { MonsterTypeDefinition } from './MonsterTypeDefinition';
import { TinyIconsCompatibility } from '../../compatibility/TinyIconsCompatibility';
import { TranslationManager } from '../../translation/TranslationManager';

/**
 * Takes care of holding which types are allocated to which monsters,
 * including letting other mods add additional entries.
 *
 * Keep in mind that these arrays are simple strings,
 * so we don't have to worry about which expansions were actually purchased
 */
export class MonsterTypeMappingManager {
	/** The source of all type definitions */
	private static _types: { [key: string]: MonsterTypeDefinition } = {	};

	public static initNativeMonsterTypes() {
		MonsterTypeMappingManager.registerTypeIfNotExist(
			MonsterType.Human,
			"Humans",
			ModifierConstants.HUMAN_MODIFIER_TINY_ICON_URL,
			[
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
				"melvorAoD:BlindMage",
				"melvorAoD:SoulTakerWitch"
			]);
		MonsterTypeMappingManager.registerTypeIfNotExist(
			MonsterType.Dragon,
			"Dragons",
			ModifierConstants.DRAGON_MODIFIER_TINY_ICON_URL,
			[
				"melvorD:PratTheProtectorOfSecrets",
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
			]);
		MonsterTypeMappingManager.registerTypeIfNotExist(
			MonsterType.Undead,
			"Undead",
			ModifierConstants.UNDEAD_MODIFIER_TINY_ICON_URL,
			[
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
				"melvorTotH:Fiozor",
				"melvorAoD:BlindGhost",
				"melvorAoD:Lich",
				"melvorAoD:GhostSailor",
				"melvorAoD:GhostMercenary",
				"melvorAoD:CursedPirateCaptain"
			]);
	}

	/**
	 * Registers the given type, if a type with the same name doesn't already exist.
	 * If a type already exists, the monsters will simply be added to the already existing definition
	 * @param typeNameSingular
	 * @param typeNamePlural
	 * @param iconResourceUrl
	 * @param monsterIds
	 * @returns
	 */
	public static registerTypeIfNotExist(typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[]) {
		// If the type already exists, see to potentially adding additional monsters
		if (this._types[typeNameSingular]) {
			MonsterTypeMappingManager.addMonsters(typeNameSingular, monsterIds);
			return;
		}

		// Otherwise, do all the stuff necessary to register a new type
		else {
			// Create definition
			const typeDefinition = new MonsterTypeDefinition(typeNameSingular, typeNamePlural, iconResourceUrl, monsterIds);
			this._types[typeNameSingular] = typeDefinition;

			// Register dynamic data based on definition (modifiers, corresponding translations, corresponding tiny icon support)
			const modifierManager = new CustomModifiersManager(ModContextMemorizer.ctx);
			modifierManager.registerMonsterType(typeDefinition);

			const translationManager = new TranslationManager(ModContextMemorizer.ctx);
			translationManager.registerMonsterType(typeDefinition);

			const tinyIconCompatibility = new TinyIconsCompatibility(ModContextMemorizer.ctx);
			tinyIconCompatibility.registerMonsterType(typeDefinition);
			//console.log(`Processed registration of type ${typeDefinition.singularName} by other managers`);
		}
	}

	/**
	 * Defines the given monster to be of the given type
	 * @param type - singular name of type
	 * @param monsterId - full id, including namespace
	 */
	public static addMonster(type: string | MonsterType, monsterId: string) {
		// If type doesn't already exist, skip (type has to be registered properly beforehand)
		if (!this._types[type]) {
			return;
        }

		// If monster is already allocated, avoid duplicate
		if (this._types[type].monsters.some(mId => mId === monsterId)) {
			return;
		}

		this._types[type].monsters.push(monsterId);
	}

	/**
	 * Defines the given monsters to be of the given type
	 * @param type
	 * @param monsterIds
	 */
	public static addMonsters(type: string | MonsterType, monsterIds: string[]) {
		if (!monsterIds) {
			return;
		}

		for (var i = 0; i < length; i++) {
			MonsterTypeMappingManager.addMonster(type, monsterIds[i]);
        }
	}

	/**
	 * Get the whole type definition for the given type, if it is registered
	 * @param type
	 */
	public static getType(type: string | MonsterType): MonsterTypeDefinition | undefined {
		if (!type) {
			return undefined;
        }
		return this._types[type];
	}

	/**
	 * Get type definitions of all registered type
	 * @returns
	 */
	public static getTypes() {
		return this._types;
	}

	/**
	 * Get type definitions of all registered type
	 * @returns
	 */
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
	 * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
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
	 * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
	 */
	public static getHumans() {
		return MonsterTypeMappingManager.getTypes()["Human"].monsters;
	}

	/**
	 * Add monster to the list of dragons
	 * @param monsterIds
	 * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
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
	 * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
	 */
	public static getDragons() {
		return MonsterTypeMappingManager.getTypes()["Dragon"].monsters;
	}

	/**
	 * Add monster to the list of undeads
	 * @param monsterIds
	 * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
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
	 * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
	 */
	public static getUndead() {
		return MonsterTypeMappingManager.getTypes()["Undead"].monsters;
	}
}