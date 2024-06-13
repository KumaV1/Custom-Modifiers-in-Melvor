import { ModConstants } from '../constants/ModConstants';
import { ModifierType } from '../models/enums/ModifierType';
import { MonsterTypeHelper } from '../helpers/MonsterTypeHelper';
import { MonsterTypeManager } from '../managers/MonsterTypeManager';
import { ModifierConstants } from '../constants/ModifierConstants';
import { MonsterTypeModifierPropertyNames } from '../models/monsterTyping/MonsterTypeModifierPropertyNames';

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
export class CustomModifiersCalculationHelper {
    // #region XP

    // #region Percentage - XP

    /**
     * Calculates percentage-based change of xp to grant
     * @param skill
     */
    public static getPercentagetXpModification(skill: Skill<BaseSkillData>, action?: NamedObject): number {
        let modifier = skill.level
            * skill.game.modifiers.getValue(ModifierConstants.IDS.PLAYER.skillXPPerLevel, skill.getActionModifierQuery(action));

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
    public static getFlatXpModification(skill: Skill<BaseSkillData>, action?: NamedObject): number {
        let flatXp = skill.game.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatSkillXP, skill.getActionModifierQuery(action))
            + (skill.level * skill.game.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatSkillXPPerLevel, skill.getActionModifierQuery(action)));

        flatXp = Math.max(0, flatXp);

        return skill.game.modifiers.halveSkillXP
            ? flatXp / 2
            : flatXp;
    }

    // #endregion

    // #endregion

    // #region Min hit

    // #region Percentage - Min Hit

    /**
     * Calculate total percentage modification of min hit, from those based on max hit specifically
     * @param entity
     */
    public static getPlayerMinHitFromMaxHitPercentModification(entity: Player): number {
        let modification = 0;

        if (entity.manager.fightInProgress) {
            if (entity.target.isBoss) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.minHitBasedOnMaxHitAgainstBosses, ModifierQuery.EMPTY);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.minHitBasedOnMaxHitToCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.minHitBasedOnMaxHitToSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.minHitBasedOnMaxHitToDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
                    break;
            }

            if (entity.manager.onSlayerTask) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.minHitBasedOnMaxHitSlayerTask, ModifierQuery.EMPTY);
            }

            modification += CustomModifiersCalculationHelper.getCharacterMinHitFromMaxHitPercentModification(entity);
        }

        return modification;
    }

    /**
     * Calculate total percentage modification of min hit, from those based on max hit specifically
     * @param entity
     */
    public static getEnemyMinHitFromMaxHitPercentModification(entity: Enemy): number {
        let modififcation = 0;

        if (entity.manager.fightInProgress) {
            modififcation += CustomModifiersCalculationHelper.getCharacterMinHitFromMaxHitPercentModification(entity);
        }

        return modififcation;
    }

    /**
     * Calculate total percentage modification of min hit, from those based on max hit specifically
     * @param entity
     */
    private static getCharacterMinHitFromMaxHitPercentModification(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'minHitBasedOnMaxHit');
    }

    // #endregion

    // #region Flat - Min hit

    /**
     * Calculate change to min hit, both flat and percentage
     * @param entity
     */
    public static getPlayerMinHitFlatModification(entity: Player) {
        let flatModification = 0;

        if (entity.manager.fightInProgress) {
            if (entity.manager.enemy.isBoss) {
                flatModification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMinHitAgainstBosses, ModifierQuery.EMPTY);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    flatModification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMinHitAgainstCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    flatModification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMinHitAgainstSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    flatModification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMinHitAgainstDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                flatModification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMinHitSlayerTask, ModifierQuery.EMPTY);
            }

            flatModification += CustomModifiersCalculationHelper.getCharacterMinHitFlatModification(entity);
        }

        return numberMultiplier * flatModification;
    }

    /**
     * Calculate change to min hit, both flat and percentage
     * @param entity
     */
    public static getEnemyMinHitFlatModification(entity: Enemy): number {
        let flatModification = 0;
        if (entity.manager.fightInProgress) {
            flatModification += CustomModifiersCalculationHelper.getCharacterMinHitFlatModification(entity);
        }

        return numberMultiplier * flatModification;
    }

    /**
     * Calculate change to min hit, both flat and percentage (the logic shared between both player and enemy)
     * @param entity
     * @returns
     */
    private static getCharacterMinHitFlatModification(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'flatMinHit');
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
            if (entity.manager.enemy.isBoss) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.maxHitAgainstBosses, ModifierQuery.EMPTY);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.maxHitAgainstCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.maxHitAgainstSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.maxHitAgainstDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.maxHitSlayerTask, ModifierQuery.EMPTY);
            }

            modification += CustomModifiersCalculationHelper.getCharacterMaxHitPercentageModification(entity);
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
            modification += CustomModifiersCalculationHelper.getCharacterMaxHitPercentageModification(entity);
        }

        return modification;
    }

    /**
     * Calculates percentage-based change to max hit (logic shared between player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitPercentageModification(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'maxHit');
    }

    // #endregion

    // #region Flat - Max hit

    /**
     * Calculates flat change to max hit
     * @param entity
     * @returns
     */
    public static getPlayerMaxHitFlatModification(entity: Player): number {
        let modification = 0;

        if (entity.manager.fightInProgress) {
            if (entity.manager.enemy.isBoss) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMaxHitAgainstBosses, ModifierQuery.EMPTY);
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMaxHitAgainstCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMaxHitAgainstSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMaxHitAgainstDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatMaxHitSlayerTask, ModifierQuery.EMPTY);
            }

            modification += CustomModifiersCalculationHelper.getCharacterMaxHitFlatModification(entity);
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
            modification += CustomModifiersCalculationHelper.getCharacterMaxHitFlatModification(entity);
        }

        return modification;
    }

    /**
     * Calculates flat change to max hit (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterMaxHitFlatModification(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'flatMaxHit');
    }

    // #endregion

    // #endregion

    // #region Attack Damage

    // #region Flat attack damage additions

    /**
     * Calculates change to flat attack damage (that is still affected by things like DR later)
     * @param attacker
     * @param target
     * @returns
     */
    public static getPlayerFlatAttackDamageBonusModification(attacker: Player, target: Character): number {
        return CustomModifiersCalculationHelper.getCharacterFlatAttackDamageBonusModification(attacker, target);
    }

    /**
     * Calculates change to flat attack damage (that is still affected by things like DR later)
     * @param attacker
     * @param target
     * @returns
     */
    public static getEnemyFlatAttackDamageBonusModification(attacker: Enemy, target: Character): number {
        return CustomModifiersCalculationHelper.getCharacterFlatAttackDamageBonusModification(attacker, target);
    }

    /**
     * Calculates change to flat attack damage (that is still affected by things like DR later; logic shared across both player and enemy)
     * @param attacker
     * @param target
     * @returns
     */
    private static getCharacterFlatAttackDamageBonusModification(attacker: Character, target: Character): number {
        return target.hitpointsPercent === 100
            ? numberMultiplier * attacker.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damageFlatWhileTargetHasMaxHP, ModifierQuery.EMPTY)
            : 0;
    }

    // #endregion

    // #region Modification of calculated attack damage

    /**
     * Calculates modification to attack damage (original method does changed based on things like DR and dragonfire at this point)
     * @param attacker
     * @param target
     * @param attack
     * @param damage - the damage originally provided, before the patched method ran
     * @param currentDamage - the damage as calculated after the patched method ran
     * @returns
     */
    public static getPlayerDamageModification(attacker: Player, target: Character, attack: SpecialAttack, damage: number, currentDamage: number): number {
        return CustomModifiersCalculationHelper.getCharacterDamageModification(attacker, target, attack, damage, currentDamage);
    }

    /**
     * Calculates modification to attack damage (original method does changed based on things like DR and dragonfire at this point)
     * @param attacker
     * @param target
     * @param attack
     * @param damage - the damage originally provided, before the patched method ran
     * @param currentDamage - the damage as calculated after the patched method ran
     * @returns
     */
    public static getEnemyDamageModification(attacker: Enemy, target: Character, attack: SpecialAttack, damage: number, currentDamage: number): number {
        return CustomModifiersCalculationHelper.getCharacterDamageModification(attacker, target, attack, damage, currentDamage);
    }

    /**
     * Calculates modification to attack damage (original method does changed based on things like DR and dragonfire at this point; logic shared between both player and enemy)
     * @param attacker
     * @param target
     * @param attack
     * @param damage - the damage originally provided, before the patched method ran
     * @param currentDamage - the damage as calculated after the patched method ran
     * @returns
     */
    private static getCharacterDamageModification(attacker: Character, target: Character, attack: SpecialAttack, damage: number, currentDamage: number): number {
        // First, we mimic the original method's restrictions
        if (target.isBarrierActive || attacker.modifiers.disableAttackDamage > 0) {
            return 0;
        }

        // If there are no restrictions, we can check whether to nullify the damage,
        // in which case we actually return the negative current damage, so it equals out to 0
        const chanceToReduceDamageToZero = target.modifiers.getValue(ModifierConstants.IDS.CHARACTER.chanceToReduceAttackDamageToZero, ModifierQuery.EMPTY);
        if (rollPercentage(Math.min(90, chanceToReduceDamageToZero))) {
            return -currentDamage;
        }

        // Otherwise, we check whether the character has a dr-ignoring bonus,
        // in which case we add that, while also re-applying percentage modifications like the patched method does
        const flatDamageIgnoringReduction = numberMultiplier * attacker.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damageFlatIgnoringResistance, ModifierQuery.EMPTY);
        return flatDamageIgnoringReduction > 0
            ? attack.isDragonbreath
                ? Math.floor(attacker.applyDamageModifiers(target, flatDamageIgnoringReduction) * (1 + target.modifiers.dragonBreathDamage / 100))
                : Math.floor(attacker.applyDamageModifiers(target, flatDamageIgnoringReduction))
            : 0;
    }

    // #endregion

    // #endregion

    // #region (Total) Damage

    // #region Percentage - (Total) Damage Percent

    // #region Percentage - (Total) Damage Percent - Damage Dealt

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     * @returns
     */
    public static getPlayerDamageDealtPercentageModification(entity: Player): number {
        return CustomModifiersCalculationHelper.getCharacterDamageDealtPercentageModifiers(entity);
    }

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     * @returns
     */
    public static getEnemyDamageDealtPercentageModification(entity: Enemy): number {
        return CustomModifiersCalculationHelper.getCharacterDamageDealtPercentageModifiers(entity);
    }

    /**
     * Calculates change to percentage-based (total) damage value (logic shared across both player and enemy)
     *
     * REMARK: "damage" and "damage taken" run during the same calculation. Therefore:
     * * increasedDamage -> Based on what THE TARGET is/uses and whether the THE ATTACKER has the corresponding modifiers (e.g. "increased slayer area damage" increases damage, if the attacker has the corresponding modifier and the target is in slayer area)
     * * increasedDamageTaken -> Based on what THE ATTACKER is/uses and whether the THE TARGET has the corresponding modifiers (e.g. "icreased fire spell damage taken" increases damage, if the attacker uses a fire spell, and the target has the modifier)
     * @param entity the character attacking
     */
    private static getCharacterDamageDealtPercentageModifiers(entity: Character): number {
        return CustomModifiersCalculationHelper.getDamagePercentageModificationForStats(entity)
            + CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'damageDealt');
    }

    /**
     * Calculates change to percentage-based (total) damage value,
     * specifically based on stats of either characters, and ongoing changes during battle (e.g., based on hp lost)
     * @param entity the character attacking
     */
    private static getDamagePercentageModificationForStats(entity: Character): number {
        return entity.target.hitpointsPercent === 100
            ? entity.modifiers.getValue(ModifierConstants.IDS.CHARACTER.damagePercentWhileTargetHasMaxHP, ModifierQuery.EMPTY)
            : 0;
    }

    // #endregion

    // #region Percentage - (Total) Damage Percent - Damage Dealt

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity
     * @returns
     */
    public static getPlayerDamageTakenPercentageModification(entity: Player): number {
        return CustomModifiersCalculationHelper.getCharacterDamageTakenPercentageModifiers(entity);
    }

    /**
     * Calculates change to percentage-based (total) damage value
     * @param entity the character being attacked
     * @returns
     */
    public static getEnemyDamageTakenPercentageModification(entity: Enemy): number {
        return CustomModifiersCalculationHelper.getCharacterDamageTakenPercentageModifiers(entity);
    }

    /**
     * Calculates change to percentage-based (total) damage value (logic shared across both player and enemy)
     *
     * REMARK: "damage" and "damage taken" run during the same calculation. Therefore:
     * * increasedDamage -> Based on what THE TARGET is/uses and whether the THE ATTACKER has the corresponding modifiers (e.g. "increased slayer area damage" increases damage, if the attacker has the corresponding modifier and the target is in slayer area)
     * * increasedDamageTaken -> Based on what THE ATTACKER is/uses and whether the THE TARGET has the corresponding modifiers (e.g. "icreased fire spell damage taken" increases damage, if the attacker uses a fire spell, and the target has the modifier)
     * @param entity the character being attacked
     */
    private static getCharacterDamageTakenPercentageModifiers(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'damageTaken');
    }

    // #endregion

    /**
     * Calculates change to percentage-based (total) damage value,
     * specifically based on the type of spell being used
     * @param attacker
     * @param target
     */
    //private static getDamagePercentageModificationForSpellTypes(attacker: Character, target: Character): number {
    //    let modification = 0;

    //    if (attacker.attackType === ModConstants.ATTACK_TYPES_MAGIC) {
    //        switch (attacker.spellSelection.standard?.spellType) {
    //            case undefined:
    //                break;
    //            case SpellTypes.Air:
    //                modification += target.modifiers.increasedDamageTakenFromAirSpells - target.modifiers.decreasedDamageTakenFromAirSpells;
    //                break;
    //            case SpellTypes.Water:
    //                modification += target.modifiers.increasedDamageTakenFromWaterSpells - target.modifiers.decreasedDamageTakenFromWaterSpells;
    //                break;
    //            case SpellTypes.Earth:
    //                modification += target.modifiers.increasedDamageTakenFromEarthSpells - target.modifiers.decreasedDamageTakenFromEarthSpells;
    //                break;
    //            case SpellTypes.Fire:
    //                modification += target.modifiers.increasedDamageTakenFromFireSpells - target.modifiers.decreasedDamageTakenFromFireSpells;
    //                break;
    //            default:
    //        }
    //    }

    //    return modification;
    //}

    // #endregion

    // #endregion

    // #region Accuracy

    // #region Percentage - Accuracy

    /**
     * Calculates the change to accuracy, based on the originally provided accuracy value
     * @param entity
     * @param accuracy flat value, as was originally provided to the unpatched method
     * @returns flat value
     */
    public static getPlayerAccuracyPercentModification(entity: Player): number {
        // Calculate percentage-based modifier
        let modification = 0;

        if (entity.manager.fightInProgress) {
            if (entity.manager.enemy.isBoss) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.accuracyRatingAgainstBosses, ModifierQuery.EMPTY);
                //accuracyModifier += entity.modifiers.increasedGlobalAccuracyAgainstBosses - entity.modifiers.decreasedGlobalAccuracyAgainstBosses;
            }

            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.accuracyRatingAgainstCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.accuracyRatingAgainstSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.accuracyRatingAgainstDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
            }

            if (entity.manager.onSlayerTask) {
                modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.accuracyRatingSlayerTask, ModifierQuery.EMPTY);
            }

            modification += CustomModifiersCalculationHelper.getCharacterAccuracyPercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculates flat change to accuracy, based on the originally provided flat accuracy value
     * @param entity
     * @param accuracy flat value, as was originally provided to the unpatched method
     * @returns flat value
     */
    public static getEnemyAccuracyPercentModification(entity: Enemy): number {
        let modification = 0;

        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculationHelper.getCharacterAccuracyPercentageModifiers(entity);
        }

        return modification;
    }

    /**
     * Calculates accuracy percentage bonus to apply (logic shared across both player and enemy)
     * @param entity
     */
    private static getCharacterAccuracyPercentageModifiers(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'accuracyRating');
    }

    // #endregion

    // #endregion

    // #region DR%

    // #region Flat - DR%

    /**
     * Calculate the flat change in DR%
     * @param entity
     * @param damageType
     */
    public static getPlayerDamageReductionFlatModification(entity: Player, damageType: DamageType): number {
        // First, run general logic
        let modification = 0;

        if (entity.manager.fightInProgress) {
            switch (entity.manager.areaType) {
                case CombatAreaType.Combat:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatResistanceAgainstCombatAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Slayer:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatResistanceAgainstSlayerAreaMonsters, ModifierQuery.EMPTY);
                    break;
                case CombatAreaType.Dungeon:
                    modification += entity.modifiers.getValue(ModifierConstants.IDS.PLAYER.flatResistanceAgainstDungeonMonsters, ModifierQuery.EMPTY);
                    break;
                default:
            }

            modification += CustomModifiersCalculationHelper.getCharacterDamageReductionFlatModification(entity);
        }

        return modification;
    }

    /**
     * Calculate the flat change in DR%
     * @param entity
     * @param damageType
     */
    public static getEnemyDamageReductionFlatModification(entity: Enemy, damageType: DamageType): number {
        let modification = 0;

        if (entity.manager.fightInProgress) {
            modification += CustomModifiersCalculationHelper.getCharacterDamageReductionFlatModification(entity);
        }

        return modification;
    }

    /**
     * Calculate the flat change in DR%
     * @param entity
     */
    private static getCharacterDamageReductionFlatModification(entity: Character): number {
        return CustomModifiersCalculationHelper.getTotalModificationForMonsterTypes(entity, 'flatResistance');
    }

    // #endregion

    // #endregion

    /**
     * Get total modification value for the given modifier, across all active monster types set on relevent entity
     *
     * IMPORTANT: Right now, the only modifier that would possibly change whether the type has to be checked on the entity with the modifier or its target, is the "damageTaken" modifier.
     * However, the method patch is specifically called on the target, so even there the monster type has to be checked on the enemy.
     * Just keep this special condition in mind, in case this behaviour, like a different method being patched, may end up not being consistent anymore
     * @param entity the entity with the modifier
     * @param typeModifierPropertyName property name of the specific the modifier name giving the bonus we want to retrieve
     * @returns
     */
    private static getTotalModificationForMonsterTypes(entity: Character, typeModifierPropertyName: keyof(MonsterTypeModifierPropertyNames)) {
        let modification = 0;

        const types = MonsterTypeManager.getActiveTypesAsArray();
        for (var i = 0; i < types.length; i++) {
            const type = types[i];

            if (MonsterTypeHelper.entityIsTreatedAsType(entity.target, type)) {
                modification += entity.modifiers.getValue(`${ModConstants.MOD_NAMESPACE_NAME}:${type.modifierPropertyNames[typeModifierPropertyName]}`, ModifierQuery.EMPTY);
            }
        }

        return modification;
    }
}