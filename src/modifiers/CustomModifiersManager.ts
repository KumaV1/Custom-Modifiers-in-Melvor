import { MonsterTypeMappingManager } from './MonsterTypeMappingManager'
import { MonsterType } from './MonsterType'

/** For typescript intellisense and not throwing errors */
declare global {
	interface CombatModifierObject<Standard> {
		increasedMaxHitPercentAgainstDragons: Standard
	}

	interface CombatModifiers {
		increasedMaxHitPercentAgainstDragons: number
	}

	//interface PlayerModifiers {

	//}
}

/**
 * Patches different sections of the code, in order to integrate custom modifiers
 */
export class CustomModifiersManager {
	constructor(private readonly context: Modding.ModContext) { }

	/**
	 * Registers all custom modifers, so they are known by the game
	 */
	public registerModifiers() {
		modifierData.increasedMaxHitPercentAgainstDragons = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstDragons');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}		
	}

	/**
	 * Patch pre existing logic, to also take our custom modifiers into account
	 */
	public patchMethods() {
		/**
		 * Patches some max hit percentage increasing modifiers into base logic.
		 * Presumably two patches, as the base class "Character" is abstract and therefore cannot be patched (that said, it's not like the player itself could be a dragon anyway)
		 */
		this.context.patch(Player, "getMaxHitModifier").after(function (maxHitModifier: number): number {
			return CustomModifiersManager.customGetMaxHitModifier(this, maxHitModifier);
		});
		this.context.patch(Enemy, "getMaxHitModifier").after(function (maxHitModifier: number): number {
			return CustomModifiersManager.customGetMaxHitModifier(this, maxHitModifier);
		});
	}	

	/**
	 * 
	 * @param entity The player or the enemy the player is fighting
	 * @param maxHitModifier Current value of the max hit modifier, before custom logic
	 * @returns
	 */
	private static customGetMaxHitModifier(entity: Character, maxHitModifier: number): number {
		if (entity.manager.fightInProgress) {
			if (entity.modifiers.increasedMaxHitPercentAgainstDragons > 0) {
				if (MonsterTypeMappingManager.enemyIsOfType(entity.manager.enemy, MonsterType.Dragon)) {
					maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstDragons;
				}
			}
		}

		return maxHitModifier;
	}
}