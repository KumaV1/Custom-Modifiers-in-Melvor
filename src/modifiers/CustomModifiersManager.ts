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
		isUndead: boolean,
		isBoss: boolean // as player doesn't have this property (understandably); just intellisense and compiler error prevention as mentioned before
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
		 * This method is called during initialization of both player and enemies, as quick safety measure for a "clean state" before setting everything up. (to avoid undefined/null/nan)
		 * However, as we do not actually add our properties to Melvor's definition of the class, the dynamic build up doesn't include our properties,
		 * so we handle those ourselves. Should in theory take care of all instances, so including cases such as area modifiers
		 */
		this.context.patch(CombatModifiers, "reset").after(function () {
			this.humanTraitApplied ??= 0;
			this.increasedMaxHitPercentAgainstHumans ??= 0;
			this.decreasedMaxHitPercentAgainstHumans ??= 0;
			this.dragonTraitApplied ??= 0;
			this.increasedMaxHitPercentAgainstDragons ??= 0;
			this.decreasedMaxHitPercentAgainstDragons ??= 0;
			this.undeadTraitApplied ??= 0;
			this.increasedMaxHitPercentAgainstUndead ??= 0;
			this.decreasedMaxHitPercentAgainstUndead ??= 0;
			this.increasedMaxHitPercentAgainstBosses ??= 0;
			this.decreasedMaxHitPercentAgainstBosses ??= 0;
		});

		/**
		 * Apply type flags to the enemy on spawn, so modifier checks don't have to check the array constantly.
		 * Remark: We do not have to patch this property onto the player, as not setting it will just trigger a "falsey" match, resulting in the same outcome
		 */
		this.context.patch(Enemy, "setStatsFromMonster").after(function (monster: any): void {
			this.isHuman = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Human);
			this.isDragon = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Dragon);
			this.isUndead = MonsterTypeMappingManager.monsterIsOfType(monster, MonsterType.Undead);
		});

		/**
		 * Well, the player is a human, right?
		 */
		this.context.patch(Player, "initializeForCombat").after(function () {
			this.isHuman = true;
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
			if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstHumans - entity.modifiers.decreasedMaxHitPercentAgainstHumans;
			}
			if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstDragons - entity.modifiers.decreasedMaxHitPercentAgainstDragons;
			}
			if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
				maxHitModifier += entity.modifiers.increasedMaxHitPercentAgainstUndead - entity.modifiers.decreasedMaxHitPercentAgainstUndead;
			}
			if (entity.target.isBoss) {
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