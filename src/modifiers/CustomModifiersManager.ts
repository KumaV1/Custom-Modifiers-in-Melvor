import { MonsterTypeMappingManager } from './MonsterTypeMappingManager'
import { MonsterType } from './MonsterType'

/** For typescript intellisense and not throwing errors */
declare global {
	interface CombatModifierObject<Standard> {
		humanTraitApplied: Standard,
		increasedMaxHitPercentAgainstHumans: Standard,
		decreasedMaxHitPercentAgainstHumans: Standard,
		dragonTraitApplied: Standard,
		increasedMaxHitPercentAgainstDragons: Standard,
		decreasedMaxHitPercentAgainstDragons: Standard,
		undeadTraitApplied: Standard,
		increasedMaxHitPercentAgainstUndead: Standard,
		decreasedMaxHitPercentAgainstUndead: Standard,
		increasedMaxHitPercentAgainstBosses: Standard,
		decreasedMaxHitPercentAgainstBosses: Standard,
	}

	interface CombatModifiers {
		humanTraitApplied: number,
		increasedMaxHitPercentAgainstHumans: number,
		decreasedMaxHitPercentAgainstHumans: number,
		dragonTraitApplied: number,
		increasedMaxHitPercentAgainstDragons: number,
		decreasedMaxHitPercentAgainstDragons: number,
		undeadTraitApplied: number,
		increasedMaxHitPercentAgainstUndead: number,
		decreasedMaxHitPercentAgainstUndead: number,
		increasedMaxHitPercentAgainstBosses: number,
		decreasedMaxHitPercentAgainstBosses: number,
	}

	//interface PlayerModifiers {

	//}

	interface Character {
		isHuman: boolean,
		isDragon: boolean,
		isUndead: boolean
	}
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
		this.registerHumanModifiers();
		this.registerDragonModifiers();
		this.registerUndeadModifiers();
		this.registerBossModifiers();
	}

	/**
	 * Patch pre existing logic, to also take our custom modifiers into account
	 */
	public patchMethods() {
		/**
		 * Apply type flags to the enemy on spawn, so modifier checks don't have to check the array constantly.
		 * Remark: We do not have to patch this property onto the player, as not setting it will just trigger a "falsey" match, resulting in the same outcome
		 */
		this.context.patch(Enemy, "setStatsFromMonster").after(function (monster: any): void {
			this.isHuman = MonsterTypeMappingManager.enemyIsOfType(this, MonsterType.Human);
			this.isDragon = MonsterTypeMappingManager.enemyIsOfType(this, MonsterType.Dragon);
			this.isUndead = MonsterTypeMappingManager.enemyIsOfType(this, MonsterType.Undead);
		});

		/**
		 * Patches new max hit percentage increasing modifiers into base logic.
		 * Presumably two patches, as the base class "Character" is abstract and therefore cannot be patched
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
			if (entity.manager.enemy.isHuman || entity.modifiers.humanTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstHumans - entity.modifiers.decreasedMaxHitPercentAgainstHumans;
			}
			if (entity.manager.enemy.isDragon || entity.modifiers.dragonTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstDragons - entity.modifiers.decreasedMaxHitPercentAgainstDragons;
			}
			if (entity.manager.enemy.isUndead || entity.modifiers.undeadTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstUndead - entity.modifiers.decreasedMaxHitPercentAgainstUndead;
			}
			if (entity.manager.enemy.isBoss) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstBosses - entity.modifiers.decreasedMaxHitPercentAgainstBosses;
			}
		}

		return maxHitModifier;
	}

	private registerHumanModifiers() {
		modifierData.humanTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_humanTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.increasedMaxHitPercentAgainstHumans = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstHumans');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.decreasedMaxHitPercentAgainstHumans = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		}
	}

	private registerDragonModifiers() {
		modifierData.dragonTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_dragonTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.increasedMaxHitPercentAgainstDragons = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstDragons');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.decreasedMaxHitPercentAgainstDragons = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		}
	}

	private registerUndeadModifiers() {
		modifierData.undeadTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_undeadTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.increasedMaxHitPercentAgainstUndead = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstUndead');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.decreasedMaxHitPercentAgainstUndead = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		}
	}

	private registerBossModifiers() {
		modifierData.increasedMaxHitPercentAgainstBosses = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstBosses');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		}
		modifierData.decreasedMaxHitPercentAgainstBosses = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		}
	}
}