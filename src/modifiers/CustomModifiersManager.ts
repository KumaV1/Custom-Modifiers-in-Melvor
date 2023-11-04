import { MonsterTypeMappingManager } from './MonsterTypeMappingManager'
import { MonsterType } from './MonsterType'
import { Constants } from './Constants';

/** For typescript intellisense and not throwing errors */
declare global {
	interface CombatModifierObject<Standard> {
		increasedChanceToApplySlowOnSpawn: Standard,
		decreasedChanceToApplySlowOnSpawn: Standard,
		increasedChanceToApplyStunOnSpawn: Standard,
		decreasedChanceToApplyStunOnSpawn: Standard,
		increasedChanceToApplyPoisonOnSpawn: Standard,
		decreasedChanceToApplyPoisonOnSpawn: Standard,
		increasedChanceToApplyDeadlyPoisonOnSpawn: Standard,
		decreasedChanceToApplyDeadlyPoisonOnSpawn: Standard,
		deathMark: Standard,
		increasedDeathMarkOnHit: Standard,
		increasedChanceToApplyStackOfDeathMark: Standard,
		decreasedChanceToApplyStackOfDeathMark: Standard,
		increasedDeathMarkImmunity: Standard,
		decreasedDeathMarkImmunity: Standard,
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
		increasedChanceToApplySlowOnSpawn: number,
		decreasedChanceToApplySlowOnSpawn: number,
		increasedChanceToApplyStunOnSpawn: number,
		decreasedChanceToApplyStunOnSpawn: number,
		increasedChanceToApplyPoisonOnSpawn: number,
		decreasedChanceToApplyPoisonOnSpawn: number,
		increasedChanceToApplyDeadlyPoisonOnSpawn: number,
		decreasedChanceToApplyDeadlyPoisonOnSpawn: number,
		deathMark: number,
		increasedDeathMarkOnHit: number,
		increasedChanceToApplyStackOfDeathMark: number,
		decreasedChanceToApplyStackOfDeathMark: number,
		increasedDeathMarkImmunity: number,
		decreasedDeathMarkImmunity: number,
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

	interface Game {
		deathMarkEffect: StackingEffect
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
		this.registerSpawnModifiers();
		this.registerDeathMarkModifiers();
		this.registerTraitApplicationModifiers();
		this.registerHumanModifiers();
		this.registerDragonModifiers();
		this.registerUndeadModifiers();
		this.registerBossModifiers();
	}

	/**
	 * Patch pre existing logic, to also take our custom modifiers into account
	 */
	public patchMethods() {
		this.patchGame();
		this.patchAddHitpoints();
		this.patchCombatModifiersReset();
		this.patchMonsterTypeAllocation();
		this.patchApplyUniqueSpawnEffects();
		this.patchApplyOnHitEffects();
		this.patchGetMaxHitModifier();
	}
	

	// #region Modifier Registration

	/**
	 * 
	 */
	private registerSpawnModifiers() {
		modifierData.increasedChanceToApplySlowOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedChanceToApplySlowOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedChanceToApplySlowOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
		modifierData.increasedChanceToApplyStunOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedChanceToApplyStunOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedChanceToApplyStunOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
		modifierData.increasedChanceToApplyPoisonOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedChanceToApplyPoisonOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
		modifierData.increasedChanceToApplyDeadlyPoisonOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedChanceToApplyDeadlyPoisonOnSpawn = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerDeathMarkModifiers() {
		modifierData.deathMark = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_deathMark');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
		modifierData.increasedDeathMarkOnHit = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedDeathMarkOnHit');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.increasedChanceToApplyStackOfDeathMark = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedChanceToApplyStackOfDeathMark = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
		modifierData.increasedDeathMarkImmunity = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedDeathMarkImmunity');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedDeathMarkImmunity = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedDeathMarkImmunity');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerTraitApplicationModifiers() {
		modifierData.humanTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_humanTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.dragonTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_dragonTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.undeadTraitApplied = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_undeadTraitApplied');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerHumanModifiers() {		
		modifierData.increasedMaxHitPercentAgainstHumans = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstHumans');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedMaxHitPercentAgainstHumans = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerDragonModifiers() {
		modifierData.increasedMaxHitPercentAgainstDragons = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstDragons');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedMaxHitPercentAgainstDragons = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerUndeadModifiers() {
		modifierData.increasedMaxHitPercentAgainstUndead = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstUndead');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedMaxHitPercentAgainstUndead = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
	}

	/**
	 * 
	 */
	private registerBossModifiers() {
		modifierData.increasedMaxHitPercentAgainstBosses = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_increasedMaxHitPercentAgainstBosses');
			},
			description: '',
			isSkill: false,
			isNegative: false,
			tags: ['combat']
		};
		modifierData.decreasedMaxHitPercentAgainstBosses = {
			get langDescription() {
				return getLangString('MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses');
			},
			description: '',
			isSkill: false,
			isNegative: true,
			tags: ['combat']
		};
	}

	// #endregion

	// #region Method patching

	private patchGame() {
		/**
		 * Register custom effects as properties on the Game object (akin to e.g. "unholyMarkEffect") 
		 */
		this.context.patch(Game, "postDataRegistration").after(function () {
			const effect = this.stackingEffects.getObjectByID(Constants.DEATH_MARK_EFFECT_FULL_ID);
			if (effect) {
				this.deathMarkEffect = effect;
            }
		});
	}

	/**
	 * 
	 */
	private patchCombatModifiersReset() {
		/**
		 * This method is called during initialization of both player and enemies, as quick safety measure for a "clean state" before setting everything up. (to avoid undefined/null/nan)
		 * However, as we do not actually add our properties to Melvor's definition of the class, the dynamic build up doesn't include our properties,
		 * so we handle those ourselves. Should in theory take care of all instances, so including cases such as area modifiers
		 */
		this.context.patch(CombatModifiers, "reset").after(function () {
			this.increasedChanceToApplySlowOnSpawn ??= 0;
			this.decreasedChanceToApplySlowOnSpawn ??= 0;
			this.increasedChanceToApplyStunOnSpawn ??= 0;
			this.decreasedChanceToApplyStunOnSpawn ??= 0;
			this.increasedChanceToApplyPoisonOnSpawn ??= 0;
			this.decreasedChanceToApplyPoisonOnSpawn ??= 0;
			this.increasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
			this.decreasedChanceToApplyDeadlyPoisonOnSpawn ??= 0;
			this.deathMark ??= 0;
			this.increasedDeathMarkOnHit ??= 0;
			this.increasedChanceToApplyStackOfDeathMark ??= 0;
			this.decreasedChanceToApplyStackOfDeathMark ??= 0;
			this.increasedDeathMarkImmunity ??= 0;
			this.decreasedDeathMarkImmunity ??= 0;
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
	}

	/**
	 * 
	 */
	private patchMonsterTypeAllocation() {
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
	}

	/**
	 * 
	 */
	private patchApplyUniqueSpawnEffects() {
		this.context.patch(Player, "applyUniqueSpawnEffects").after(function () {
			CustomModifiersManager.customApplyUniqueSpawnEffects(this);
		});
		this.context.patch(Enemy, "applyUniqueSpawnEffects").after(function () {
			CustomModifiersManager.customApplyUniqueSpawnEffects(this);
		});
	}

	/**
	 * Whenever the amount of HP changes, check the death mark threshold.
	 * The original function doesn't really do anything aside from changing hp, only setting some "rerender/recompute" flags,
	 * so it's pretty much perfect
	 */
	private patchAddHitpoints() {
		this.context.patch(Player, "addHitpoints").after(function () {
			CustomModifiersManager.customPatchAddHitpoints(this);
		});
		this.context.patch(Enemy, "addHitpoints").after(function () {
			CustomModifiersManager.customPatchAddHitpoints(this);
		});
	}	

	/**
	 * "On hit effect" means both literal "on hit modifiers" but also stuff like "roll to poison, only because you actually hit the enemy".
	 * REMARK: We patch 'clampDamageValue' because it is only ever called in ONE location. We don't patch to modify its functionality,
	 * we actually patch it as a means of injecting our code into the process we want to (there is no natural method to beforé/after patch).
	 * 
	 * More specifically, the patched method is called only when the entity's target has been rolled to hit,
	 * which is the condition for which we want to implement some more stuff
	 */
	private patchApplyOnHitEffects() {
		this.context.patch(Player, "clampDamageValue").after(function (returnedDamage) {
			// do some custom stuff
			CustomModifiersManager.customApplyOnHitEffects(this);

			// run original stuff
			return returnedDamage;
		});
		this.context.patch(Enemy, "clampDamageValue").after(function (returnedDamage) {
			// do some custom stuff
			CustomModifiersManager.customApplyOnHitEffects(this);

			// run original stuff
			return returnedDamage;
		});
	}

	/**
	 * 
	 */
	private patchGetMaxHitModifier() {
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
	 * @param entity
	 */
	private static customApplyUniqueSpawnEffects(entity: Character): void {
		if (rollPercentage(entity.modifiers.increasedChanceToApplySlowOnSpawn - entity.modifiers.decreasedChanceToApplySlowOnSpawn)) {
			entity.applyModifierEffect(new SlowEffect(25, 3), entity.target, entity.game.normalAttack);
		}
		if (rollPercentage(entity.modifiers.increasedChanceToApplyStunOnSpawn - entity.modifiers.decreasedChanceToApplyStunOnSpawn)) {
			entity.applyStun({ chance: 100, turns: 1, type: 'Stun', flavour: 'Stun' }, entity.target);
		}
		if (rollPercentage(entity.modifiers.increasedChanceToApplyPoisonOnSpawn - entity.modifiers.decreasedChanceToApplyPoisonOnSpawn)) {
			entity.applyDOT(poisonEffect, entity.target, 0);
		}
		if (rollPercentage(entity.modifiers.increasedChanceToApplyDeadlyPoisonOnSpawn - entity.modifiers.decreasedChanceToApplyDeadlyPoisonOnSpawn)) {
			entity.applyDOT(deadlyPoisonEffect, entity.target, 0);
		}
	}

	/**
	 * 
	 * @param entity
	 */
	private static customPatchAddHitpoints(entity: Character) {
		// If death marks are applied and hitpoints are under certain threshold, execute character
		if (entity.modifiers.deathMark > 0 && entity.hitpoints <= Constants.DEATH_MARK_MAX_FLAT_HP) {
			const maxHpPercentage = (entity.hitpoints / entity.stats.maxHitpoints) * 100;
			const effect = entity.stackingEffect.get(entity.game.deathMarkEffect);
			if (effect === undefined) {
				console.log("effect not found on game object");
			}
			else {
				if (maxHpPercentage < effect.stacks) {
					// If the one who got death mark triggered on them was the player, 
					// then build a notification for them, so they know it was death mark that killed them
					if (entity instanceof Player) {
						const notification: NotificationData = {
							media: "assets/media/main/error.svg",
							quantity: 1,
							text: "Oh dear, you have been executed",
							isImportant: true,
							isError: false
						};
						entity.game.notifications.addNotification(
							new ErrorNotification("DEATH_MARK_TRIGGERED"),
							notification
						);
                    }

					// Flat out set hp to zero
					entity.hitpoints = 0;
				}
            }

			if (maxHpPercentage < entity.modifiers.deathMark) {
				entity.hitpoints = 0;
            }
        }
	}

	/**
	 * 
	 * @param entity
	 */
	private static customApplyOnHitEffects(entity: Character): void {
		if (entity.target.barrier <= 0 && entity.game.deathMarkEffect !== undefined) {
			if (entity.modifiers.increasedDeathMarkOnHit > 0) {
				if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
					entity.applyStackingEffect(entity.game.deathMarkEffect, entity.target, entity.modifiers.increasedDeathMarkOnHit);
					entity.target.rendersRequired.effects = true;
				}
			}

			if (rollPercentage(entity.modifiers.increasedChanceToApplyStackOfDeathMark - entity.modifiers.decreasedChanceToApplyStackOfDeathMark)) {
				if (rollPercentage(100 - (entity.target.modifiers.increasedDeathMarkImmunity - entity.target.modifiers.decreasedDeathMarkImmunity))) {
					entity.applyStackingEffect(entity.game.deathMarkEffect, entity.target, 1);
					entity.target.rendersRequired.effects = true;
				}
			}
        }		
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

	// #endregion
}