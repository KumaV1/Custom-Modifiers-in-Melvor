import { Constants } from '../Constants';
import { ModifierType } from './ModifierType';
import { MonsterTypeHelper } from '../monsterTyping/MonsterTypeHelper';
import { MonsterTypeModifierGroup } from '../monsterTyping/MonsterTypeModifierGroup';

/**
 * While the main patching is defined by the manager,
 * the value changing calculations have been moved to this separate class.
 *
 * The implementations generally follow the practice of these methods calculating
 * THE CHANGE that should be applied to the original value, based specifically on the new custom modifiers.
 *
 * For combat related calculations, there is usually two public methods for the same modifying context, one for the player and one for the enemy.
 * Both call a base method, which in turn splits its calculation into topic specific sub methods (e.g. calculations based on Monster types)
 *
 * NOTE: Rather than following the usual order of "public methods, then private methods",
 * the methods have instead been grouped and wrapped with a region, based on what they are modifying
 */
export class CustomModifiersCalculator {
    // #region XP

    // #region Percentage - XP

    /**
     * Calculates percentage-based change of xp to grant
     * @param skill
     */
    public static getPercentagetXpModification(skill: Skill<BaseSkillData>): number {
        let modifier = (skill.game.modifiers.increasedGlobalSkillXPPerLevel * skill.level)
            - (skill.game.modifiers.decreasedGlobalSkillXPPerLevel * skill.level)
            + (skill.game.modifiers.getSkillModifierValue('increasedSkillXPPerSkillLevel', skill) * skill.level)
            - (skill.game.modifiers.getSkillModifierValue('decreasedSkillXPPerSkillLevel', skill) * skill.level);

        return Math.max(0, modifier);
    }

    // #endregion

    // #region Flat - XP

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
            - (skill.game.modifiers.getSkillModifierValue('decreasedFlatSkillXPPerSkillLevel', skill) * skill.level);

        flatXp = Math.max(0, flatXp);

        return skill.game.modifiers.halfSkillXP
            ? flatXp / 2
            : flatXp;
    }

    // #endregion

    // #endregion

    // #region Min hit

    // #region Percentage and Flat - Min hit

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
     * Calculate change to min hit, both flat and percentage (the logic shared between both player and enemy)
     * @param entity
     * @returns
     */
    private static getCharacterMinHitModification(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.MinHitBasedOnMaxHit)
            + CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.FlatMinHit);
    }

    // #endregion

    // #endregion

    // #region Max hit

    // #region Percentage - Max hit

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
     * Calculates percentage-based change to max hit (logic shared between player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitPercentageModification(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.MaxHitPercent);
    }

    // #endregion

    // #region Flat - Max hit

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
     * Calculates flat change to max hit (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitFlatModification(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.MaxHitFlat);
    }

    // #endregion

    // #endregion

    // #region (Total) Damage

    // #region Percentage - (Total) Damage Percent

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     * @returns
     */
    public static getPlayerDamagePercentageModification(entity: Player): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamagePercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     * @returns
     */
    public static getEnemyDamagePercentageModification(entity: Enemy): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamagePercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculates change to percentage-based (total) damage value (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterDamagePercentageModifiers(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.DamagePercent)
            + CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.DamageTakenPercent)
            + CustomModifiersCalculator.getDamagePercentageModificationForSpellTypes(entity);
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

    // #endregion

    // #endregion

    // #region Accuracy

    // #region Flat - Accuracy

    /**
     * Calculates the change to accuracy, based on the originally provided accuracy value
     * @param entity
     * @param accuracy flat value, as was originally provided to the unpatched method
     * @returns flat value
     */
    public static getPlayerAccuracyFlatModification(entity: Player, accuracy: number): number {
        // Calculate percentage-based modifier
        let accuracyModifier = 0;
        if (entity.manager.fightInProgress) {
            accuracyModifier += CustomModifiersCalculator.getCharacterAccuracyPercentageModifiers(entity);

            if (entity.manager.enemy.isBoss) {
                accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstBosses - entity.modifiers.decreasedGlobalAccuracyAgainstBosses;
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstCombatAreaMonsters - entity.modifiers.decreasedGlobalAccuracyAgainstCombatAreaMonsters;
                    break;
                case CombatAreaType.Slayer:
                    accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstSlayerAreaMonsters - entity.modifiers.decreasedGlobalAccuracyAgainstSlayerAreaMonsters;
                    break;
                case CombatAreaType.Dungeon:
                    accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstDungeonMonsters - entity.modifiers.decreasedGlobalAccuracyAgainstDungeonMonsters;
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstSlayerTasks - entity.modifiers.decreasedGlobalAccuracyAgainstSlayerTasks;
            }
        }

        // Get flat bonus, based on original value and percentage-bonus calculated
        let accuracyModification = applyModifier(accuracy, accuracyModifier, ModifierType.MultiplyBaseByPercentageWithFlooring);

        // Just like with the base game calculation, we have to keep the "globalAccuracyHPScaling" modifier in mind
        return CustomModifiersCalculator.applyGlobalAccuracyHpScaling(entity, accuracyModification);
    }

    /**
     * Calculates flat change to accuracy, based on the originally provided flat accuracy value
     * @param entity
     * @param accuracy flat value, as was originally provided to the unpatched method
     * @returns flat value
     */
    public static getEnemyAccuracyFlatModification(entity: Enemy, accuracy: number): number {
        let accuracyModifier = 0;
        if (entity.manager.fightInProgress) {
            accuracyModifier += CustomModifiersCalculator.getCharacterAccuracyPercentageModifiers(entity);
        }

        // Get flat bonus, based on original value and percentage-bonus calculated
        const accuracyModification = applyModifier(accuracy, accuracyModifier, ModifierType.MultiplyBaseByPercentageWithFlooring);

        // Just like with the base game calculation, we have to keep the "globalAccuracyHPScaling" modifier in mind
        return CustomModifiersCalculator.applyGlobalAccuracyHpScaling(entity, accuracyModification);
    }

    /**
     * Calculates accuracy percentage bonus to apply (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterAccuracyPercentageModifiers(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.GlobalAccuracy);
    }

    /**
     * Apply "globalAccuracyHPScaling" to our calculated accuracy,
     * just like how the original method finishes off adjusting the final accuracy value with that modifier
     * @param entity
     * @param accuracy
     */
    private static applyGlobalAccuracyHpScaling(entity: Character, accuracy: number): number {
        if (entity.modifiers.globalAccuracyHPScaling > 0) {
            const modifier = (entity.modifiers.globalAccuracyHPScaling * entity.hitpointsPercent) / 100;
            return Math.floor(accuracy * modifier);
        } else {
            return accuracy;
        }
    }

    // #endregion

    // #endregion

    // #region DR%

    // #region Flat - DR%

    /**
     * Calculate the flat change in DR%
     * @param entity
     */
    public static getPlayerDamageReductionFlatModification(entity: Player): number {
        // First, run general logic
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamageReductionFlatModification(entity);

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.increasedDamageReductionAgainstCombatAreaMonsters - entity.modifiers.decreasedDamageReductionAgainstCombatAreaMonsters;
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.increasedDamageReductionAgainstSlayerAreaMonsters - entity.modifiers.decreasedDamageReductionAgainstSlayerAreaMonsters;
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.increasedDamageReductionAgainstDungeonMonsters - entity.modifiers.decreasedDamageReductionAgainstDungeonMonsters;
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                // The game already comes with its own positive variant
                modification -= entity.modifiers.decreasedDamageReductionAgainstSlayerTasks;
            }

            // Then, we have to mimic multiplications based on a few conditions,
            // based on the total change we calculated up to this point
            modification = CustomModifiersCalculator.applyCharacterDamageReductionPercentModification(entity, modification);

            // The player specifically also has one more multiplicative calculation to do
            if (entity.manager.fightInProgress) {
                modification *= entity.activeTriangle.reductionModifier[entity.attackType][entity.target.attackType];
            }
        }

        return modification;
    }

    /**
     * Calculate the flat change in DR%
     * @param entity
     */
    public static getEnemyDamageReductionFlatModification(entity: Enemy): number {
        let modification = 0;
        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculator.getCharacterDamageReductionFlatModification(entity);
        }

        // Then, we have to mimic multiplications based on a few conditions,
        // based on the total change we calculated up to this point
        return CustomModifiersCalculator.applyCharacterDamageReductionPercentModification(entity, modification);
    }

    /**
     * Calculate the flat change in DR%
     * @param entity
     */
    private static getCharacterDamageReductionFlatModification(entity: Character): number {
        return CustomModifiersCalculator.getModificationValueForMonsterTypes(entity, MonsterTypeModifierGroup.DamageReduction);
    }

    /**
     * Applies multiplicative changes of the base game to our calculated DR%
     * @param entity
     * @param damageReduction
     * @returns
     */
    private static applyCharacterDamageReductionPercentModification(entity: Character, damageReduction: number): number {
        damageReduction *= 1 + (entity.modifiers.increasedDamageReductionPercent - entity.modifiers.decreasedDamageReductionPercent) / 100;
        if (entity.modifiers.halveDamageReduction > 0) {
            damageReduction *= 0.5;
        }

        return damageReduction;
    }

    // #endregion

    // #endregion

    /**
     *
     * @param entity
     * @param modifierGroup
     * @returns
     */
    private static getModificationValueForMonsterTypes(entity: Character, modifierGroup: MonsterTypeModifierGroup) {
        return MonsterTypeHelper.getModificationValue(entity, modifierGroup);
    }
}