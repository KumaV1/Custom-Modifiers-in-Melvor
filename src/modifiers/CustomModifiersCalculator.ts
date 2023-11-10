import { Constants } from '../Constants';

/**
 * While the main patching is defined by the manager,
 * the value changing calculations have been moved to this separate class.
 *
 * The implementations generally follow the practice of these methods calculating
 * THE CHANGE that should be applied to the original value, based specifically on the new custom modifiers.
 *
 * For combat related calculations, there is always two public methods per topic, one for the player and one for the enemy.
 * Both call a base method, which in turn splits its calculation into topic specific sub methods (e.g. calculations based on Monster types)
 */
export class CustomModifiersCalculator {
    /**
     * Calculates percentage-based change of xp to grant
     * @param skill
     */
    public static getPercentagetXpModification(skill: Skill<BaseSkillData>): number {
        let modifier = (skill.game.modifiers.increasedGlobalSkillXPPerLevel * skill.level)
            - (skill.game.modifiers.decreasedGlobalSkillXPPerLevel * skill.level)
            + skill.game.modifiers.getSkillModifierValue('increasedSkillXPPerSkillLevel', skill)
            - skill.game.modifiers.getSkillModifierValue('decreasedSkillXPPerSkillLevel', skill);

        return Math.max(0, modifier);
    }

    /**
     * Calculates flat change of xp to grant
     *
     * The original method already checked "halfSkillXp" for provided value,
     * but we have to check ourselves for our new modifiers
     * @param skill
     * @returns
     */
    public static getFlatXpModification(skill: Skill<BaseSkillData>): number {
        let flatXp = skill.game.modifiers.increasedFlatGlobalSkillXP
            - skill.game.modifiers.decreasedFlatGlobalSkillXP
            + (skill.game.modifiers.increasedFlatGlobalSkillXPPerSkillLevel * skill.level)
            - (skill.game.modifiers.decreasedFlatGlobalSkillXPPerSkillLevel * skill.level)
            + skill.game.modifiers.getSkillModifierValue('increasedFlatSkillXP', skill)
            - skill.game.modifiers.getSkillModifierValue('decreasedFlatSkillXP', skill)
            + (skill.game.modifiers.getSkillModifierValue('increasedFlatSkillXPPerSkillLevel', skill) * skill.level)
            - ((skill.game.modifiers.getSkillModifierValue('decreasedFlatSkillXPPerSkillLevel', skill) * skill.level));

        flatXp = Math.max(0, flatXp);

        return skill.game.modifiers.halfSkillXP
            ? flatXp / 2
            : flatXp;
    }

    /**
     * Calculate change to min hit, both flat and percentage
     * @param entity
     */
    public static getPlayerMinHitModification(entity: Player) {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMinHitModification(entity);

            if (entity.manager.enemy.isBoss) {
                modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstBosses - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstBosses)) / 100);
                modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstBosses - entity.modifiers.decreasedFlatMinHitAgainstBosses);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitToCombatAreaMonsters - entity.modifiers.decreasedMinHitBasedOnMaxHitToCombatAreaMonsters)) / 100);
                    modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitToCombatAreaMonsters - entity.modifiers.decreasedFlatMinHitToCombatAreaMonsters);
                    break;
                case CombatAreaType.Slayer:
                    modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitToSlayerAreaMonsters - entity.modifiers.decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters)) / 100);
                    modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitToSlayerAreaMonsters - entity.modifiers.decreasedFlatMinHitToSlayerAreaMonsters);
                    break;
                case CombatAreaType.Dungeon:
                    modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitToDungeonMonsters - entity.modifiers.decreasedMinHitBasedOnMaxHitToDungeonMonsters)) / 100);
                    modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitToDungeonMonsters - entity.modifiers.decreasedFlatMinHitToDungeonMonsters);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitToSlayerTasks - entity.modifiers.decreasedMinHitBasedOnMaxHitToSlayerTasks)) / 100);
                modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitToSlayerTasks - entity.modifiers.decreasedFlatMinHitToSlayerTasks);
            }
        }

        return modification;
    }

    /**
     * Calculate change to min hit, both flat and percentage
     * @param entity
     */
    public static getEnemyMinHitModification(entity: Enemy): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMinHitModification(entity);
        }

        return modification;
    }

    /**
     * Calculates percentage-based change to max hit
     * @param entity
     */
    public static getPlayerMaxHitPercentageModification(entity: Player) {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMaxHitPercentageModification(entity);

            if (entity.manager.enemy.isBoss) {
                modification += entity.modifiers.increasedMaxHitPercentAgainstBosses - entity.modifiers.decreasedMaxHitPercentAgainstBosses;
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.increasedMaxHitPercentToCombatAreaMonsters - entity.modifiers.decreasedMaxHitPercentToCombatAreaMonsters;
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.increasedMaxHitPercentToSlayerAreaMonsters - entity.modifiers.decreasedMaxHitPercentToSlayerAreaMonsters;
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.increasedMaxHitPercentToDungeonMonsters - entity.modifiers.decreasedMaxHitPercentToDungeonMonsters;
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += entity.modifiers.increasedMaxHitPercentToSlayerTasks - entity.modifiers.decreasedMaxHitPercentToSlayerTasks;
            }
        }

        return modification;
    }

    /**
     * Calculates percentage-based change to max hit
     * @param entity
     */
    public static getEnemyMaxHitPercentageModification(entity: Enemy) {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMaxHitPercentageModification(entity);
        }

        return modification;
    }

    /**
     * Calculates flat change to max hit
     * @param entity
     * @returns
     */
    public static getPlayerMaxHitFlatModification(entity: Player): number {
        if (entity.usingAncient) {
            return 0;
        }

        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMaxHitFlatModification(entity);

            if (entity.manager.enemy.isBoss) {
                modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstBosses - entity.modifiers.decreasedMaxHitFlatAgainstBosses);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatToCombatAreaMonsters - entity.modifiers.decreasedMaxHitFlatToCombatAreaMonsters);
                    break;
                case CombatAreaType.Slayer:
                    modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatToSlayerAreaMonsters - entity.modifiers.decreasedMaxHitFlatToSlayerAreaMonsters);
                    break;
                case CombatAreaType.Dungeon:
                    modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatToDungeonMonsters - entity.modifiers.decreasedMaxHitFlatToDungeonMonsters);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatToSlayerTasks - entity.modifiers.decreasedMaxHitFlatToSlayerTasks);
            }
        }

        return modification;
    }

    /**
     * Calculates flat change to max hit
     * @param entity
     * @returns
     */
    public static getEnemyMaxHitFlatModification(entity: Enemy): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterMaxHitFlatModification(entity);
        }

        return modification;
    }

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     */
    public static getPlayerDamagePercentageModifiers(entity: Player): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamagePercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     */
    public static getEnemyDamagePercentageModifiers(entity: Enemy): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamagePercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculate change to min hit, both flat and percentage (the logic shared between both player and enemy)
     * @param entity
     * @returns
     */
    private static getCharacterMinHitModification(entity: Character): number {
        return CustomModifiersCalculator.getMinHitModificationForMonsterTypes(entity);
    }

    /**
     * Calculate change to min hit, specifically based on the type of target being fought
     * @param entity
     * @returns
     */
    private static getMinHitModificationForMonsterTypes(entity: Character): number {
        let modification = 0;

        // Percentage and Flat modifiers
        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstHumans - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstHumans)) / 100);
            modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstHumans - entity.modifiers.decreasedFlatMinHitAgainstHumans);
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstDragons - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstDragons)) / 100);
            modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstDragons - entity.modifiers.decreasedFlatMinHitAgainstDragons);
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            modification += Math.floor((entity.stats.maxHit * (entity.modifiers.increasedMinHitBasedOnMaxHitAgainstUndead - entity.modifiers.decreasedMinHitBasedOnMaxHitAgainstUndead)) / 100);
            modification += numberMultiplier * (entity.modifiers.increasedFlatMinHitAgainstUndead - entity.modifiers.decreasedFlatMinHitAgainstUndead);
        }

        return modification;
    }

    /**
     * Calculates percentage-based change to max hit (logic shared between player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitPercentageModification(entity: Character): number {
        return CustomModifiersCalculator.getMaxHitPercentageModificationForMonsterTypes(entity);
    }

    /**
     * Calculates percentage-based change to max hit, specifically based on the type of target being fought
     * @param entity
     */
    private static getMaxHitPercentageModificationForMonsterTypes(entity: Character): number {
        let modification = 0;

        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            modification += entity.modifiers.increasedMaxHitPercentAgainstHumans - entity.modifiers.decreasedMaxHitPercentAgainstHumans;
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            modification += entity.modifiers.increasedMaxHitPercentAgainstDragons - entity.modifiers.decreasedMaxHitPercentAgainstDragons;
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            modification += entity.modifiers.increasedMaxHitPercentAgainstUndead - entity.modifiers.decreasedMaxHitPercentAgainstUndead;
        }

        return modification;
    }

    /**
     * Calculates flat change to max hit (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitFlatModification(entity: Character): number {
        return CustomModifiersCalculator.getMaxHitFlatModificationForMonsterTypes(entity);
    }

    /**
     * Calculates flat change to max hit, specifically based on the type of target being fought
     * @param entity
     * @returns
     */
    private static getMaxHitFlatModificationForMonsterTypes(entity: Character): number {
        let modification = 0;

        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstHumans - entity.modifiers.decreasedMaxHitFlatAgainstHumans);
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstDragons - entity.modifiers.decreasedMaxHitFlatAgainstDragons);
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            modification += numberMultiplier * (entity.modifiers.increasedMaxHitFlatAgainstUndead - entity.modifiers.decreasedMaxHitFlatAgainstUndead);
        }

        return modification;
    }

    /**
     * Calculates change to percentage-based (total) damage value (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterDamagePercentageModifiers(entity: Character): number {
        return CustomModifiersCalculator.getDamagePercentageModificationForMonsterTypes(entity)
            + CustomModifiersCalculator.getDamagePercentageModificationForSpellTypes(entity);
    }

    /**
     * alculates change to percentage-based (total) damage value,
     * specifically based on the type of target being fought
     * @param entity
     */
    private static getDamagePercentageModificationForMonsterTypes(entity: Character): number {
        let modification = 0;

        if (entity.target.isHuman || entity.target.modifiers.humanTraitApplied > 0) {
            modification += entity.modifiers.increasedDamageAgainstHumans - entity.modifiers.decreasedDamageAgainstHumans;
        }
        if (entity.target.isDragon || entity.target.modifiers.dragonTraitApplied > 0) {
            modification += entity.modifiers.increasedDamageAgainstDragons - entity.modifiers.decreasedDamageAgainstDragons;
        }
        if (entity.target.isUndead || entity.target.modifiers.undeadTraitApplied > 0) {
            modification += entity.modifiers.increasedDamageAgainstUndead - entity.modifiers.decreasedDamageAgainstUndead;
        }

        return modification;
    }

    /**
     * alculates change to percentage-based (total) damage value,
     * specifically based on the type of spell being used
     * @param entity
     */
    private static getDamagePercentageModificationForSpellTypes(entity: Character): number {
        let modification = 0;

        if (entity.attackType === Constants.ATTACK_TYPES_MAGIC) {
            switch (entity.spellSelection.standard?.spellType) {
                case SpellTypes.Air:
                    modification += entity.target.modifiers.increasedDamageTakenFromAirSpells - entity.target.modifiers.decreasedDamageTakenFromAirSpells;
                    break;
                case SpellTypes.Water:
                    modification += entity.target.modifiers.increasedDamageTakenFromWaterSpells - entity.target.modifiers.decreasedDamageTakenFromWaterSpells;
                    break;
                case SpellTypes.Earth:
                    modification += entity.target.modifiers.increasedDamageTakenFromEarthSpells - entity.target.modifiers.decreasedDamageTakenFromEarthSpells;
                    break;
                case SpellTypes.Fire:
                    modification += entity.target.modifiers.increasedDamageTakenFromFireSpells - entity.target.modifiers.decreasedDamageTakenFromFireSpells;
                    break;
                default:
            }
        }

        return modification;
    }
}