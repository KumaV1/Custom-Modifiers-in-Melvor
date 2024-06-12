import { ModConstants } from "./ModConstants";

export class ModifierConstants {
    static readonly DEATH_MARK_EFFECT_FULL_ID = "customModifiersInMelvor:Death_Mark_Effect";
    static readonly DEATH_MARK_MAX_PERCENT = 20;
    static readonly DEATH_MARK_MAX_FLAT_HP = 5000;
    static readonly DEATH_MARK_NOTIFICATION_ID = "DEATH_MARK_TRIGGERED";
    static readonly DEATH_MARK_NOTIFICATION_TEXT_LANGUAGE_ID = "customModifiersInMelvor_Death_Mark_Notification_Text";

    // Names and descriptions are irrelevant, as those are defined through translation files
    static readonly TRAIT_STACKING_EFFECT_ID_SUFFIX = "_Trait_Stacking_Effect";
    static readonly TRAIT_STACKING_EFFECT_NAME_SUFFIX = " Trait";
    static readonly TRAIT_STACKING_EFFECT_LANGUAGE_CATEGORY = "COMBAT_MISC";
    static readonly TRAIT_CUSTOM_EFFECT_NAME_SUFFIX = " Trait";
    static readonly TRAIT_CUSTOM_EFFECT_LANGUAGE_CATEGORY = "COMBAT_MISC";
    static readonly TRAIT_CUSTOM_EFFECT_ATTACK_ID_SUFFIX = "_Trait_Application_Attack";

    // Path instead of URL as the image is specific to this mod and can therefore be retrieced by "modContext.getResourceUrl"
    static readonly GENERIC_MODIFIER_ICON_RESOURCE_PATH = "assets/customModifiersInMelvor/Generic_Monster_Type_Icon.png";

    // (Non-mod) Images can just be referenced using their path (which preferably checks the game directory and falls back to cdn)
    static readonly ANIMAL_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/frozen_mammoth.png";
    static readonly DEMON_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/fierce_devil.png";
    static readonly DRAGON_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/dragon_green.png";
    static readonly ELEMENTAL_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/fire_spirit.png";
    static readonly ELF_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/elder_wizard.png";
    static readonly HUMAN_MODIFIER_ICON_RESOURCE_URL = "assets/media/skills/thieving/man.svg";
    static readonly MYTHICAL_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/griffin.png";
    static readonly SEA_CREATURE_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/large_crab.png";
    static readonly UNDEAD_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/skeleton.png";

    static readonly KEYS = {
        PLAYER: {
            // Skilling
            skillXPPerLevel: 'skillXPPerLevel',
            flatSkillXPPerLevel: 'flatSkillXPPerLevel',
            flatSkillXP: 'flatSkillXP',
            thievingDamagePreventionThreshold: 'thievingDamagePreventionThreshold',

            // Combat Area
            maxHitPercentToCombatAreaMonsters: 'maxHitPercentToCombatAreaMonsters',
            maxHitFlatToCombatAreaMonsters: 'maxHitFlatToCombatAreaMonsters',
            flatMinHitToCombatAreaMonsters: 'flatMinHitToCombatAreaMonsters',
            minHitBasedOnMaxHitToCombatAreaMonsters: 'minHitBasedOnMaxHitToCombatAreaMonsters',
            accuracyRatingAgainstCombatAreaMonsters: 'accuracyRatingAgainstCombatAreaMonsters',
            flatResistanceAgainstCombatAreaMonsters: 'flatResistanceAgainstCombatAreaMonsters',

            // Slayer Area
            maxHitPercentToSlayerAreaMonsters: 'maxHitPercentToSlayerAreaMonsters',
            maxHitFlatToSlayerAreaMonsters: 'maxHitFlatToSlayerAreaMonsters',
            flatMinHitToSlayerAreaMonsters: 'flatMinHitToSlayerAreaMonsters',
            minHitBasedOnMaxHitToSlayerAreaMonsters: 'minHitBasedOnMaxHitToSlayerAreaMonsters',
            accuracyRatingAgainstSlayerAreaMonsters: 'accuracyRatingAgainstSlayerAreaMonsters',
            flatResistanceAgainstSlayerAreaMonsters: 'flatResistanceAgainstSlayerAreaMonsters',

            // Dungeon
            maxHitPercentToDungeonMonsters: 'maxHitPercentToDungeonMonsters',
            maxHitFlatToDungeonMonsters: 'maxHitFlatToDungeonMonsters',
            flatMinHitToDungeonMonsters: 'flatMinHitToDungeonMonsters',
            minHitBasedOnMaxHitToDungeonMonsters: 'minHitBasedOnMaxHitToDungeonMonsters',
            accuracyRatingAgainstDungeonMonsters: 'accuracyRatingAgainstDungeonMonsters',
            flatResistanceAgainstDungeonMonsters: 'flatResistanceAgainstDungeonMonsters',

            // Slayer Task
            maxHitPercentToSlayerTasks: 'maxHitPercentToSlayerTasks',
            maxHitFlatToSlayerTasks: 'maxHitFlatToSlayerTasks',
            minHitBasedOnMaxHitToSlayerTasks: 'minHitBasedOnMaxHitToSlayerTasks',
            flatMinHitToSlayerTasks: 'flatMinHitToSlayerTasks',
            accuracyRatingAgainstSlayerTasks: 'accuracyRatingAgainstSlayerTasks',

            // Boss
            maxHitPercentAgainstBosses: 'maxHitPercentAgainstBosses',
            maxHitFlatAgainstBosses: 'maxHitFlatAgainstBosses',
            flatMinHitAgainstBosses: 'flatMinHitAgainstBosses',
            minHitBasedOnMaxHitAgainstBosses: 'minHitBasedOnMaxHitAgainstBosses',
            accuracyRatingAgainstBosses: 'accuracyRatingAgainstBosses',

            // General Combat
            combatBarrierDamagePreventionThreshold: 'combatBarrierDamagePreventionThreshold',
        },
        CHARACTER: {
            // General Combat
            chanceToReduceAttackDamageToZero: 'chanceToReduceAttackDamageToZero',
            damageFlatWhileTargetHasMaxHP: 'damageFlatWhileTargetHasMaxHP',
            damagePercentWhileTargetHasMaxHP: 'damagePercentWhileTargetHasMaxHP',
            damageFlatIgnoringResistance: 'damageFlatIgnoringResistance',
            combatDamagePreventionThreshold: 'combatDamagePreventionThreshold',

            // General Combat and Thieving
            damagePreventionThreshold: 'damagePreventionThreshold'
        }

    };

    static readonly IDS = {
        PLAYER: {
            // Skilling
            skillXPPerLevel: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.skillXPPerLevel}`,
            flatSkillXPPerLevel: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatSkillXPPerLevel}`,
            flatSkillXP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatSkillXP}`,
            thievingDamagePreventionThreshold: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.thievingDamagePreventionThreshold}`,

            // Combat Area
            maxHitPercentToCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitPercentToCombatAreaMonsters}`,
            maxHitFlatToCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitFlatToCombatAreaMonsters}`,
            flatMinHitToCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitToCombatAreaMonsters}`,
            minHitBasedOnMaxHitToCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToCombatAreaMonsters}`,
            accuracyRatingAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstCombatAreaMonsters}`,
            flatResistanceAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstCombatAreaMonsters}`,

            // Slayer Area
            maxHitPercentToSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitPercentToSlayerAreaMonsters}`,
            maxHitFlatToSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitFlatToSlayerAreaMonsters}`,
            flatMinHitToSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitToSlayerAreaMonsters}`,
            minHitBasedOnMaxHitToSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToSlayerAreaMonsters}`,
            accuracyRatingAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstSlayerAreaMonsters}`,
            flatResistanceAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstSlayerAreaMonsters}`,

            // Dungeon
            maxHitPercentToDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitPercentToDungeonMonsters}`,
            maxHitFlatToDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitFlatToDungeonMonsters}`,
            flatMinHitToDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitToDungeonMonsters}`,
            minHitBasedOnMaxHitToDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToDungeonMonsters}`,
            accuracyRatingAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstDungeonMonsters}`,
            flatResistanceAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstDungeonMonsters}`,

            // Slayer Task
            maxHitPercentToSlayerTasks: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitPercentToSlayerTasks}`,
            maxHitFlatToSlayerTasks: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitFlatToSlayerTasks}`,
            minHitBasedOnMaxHitToSlayerTasks: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToSlayerTasks}`,
            flatMinHitToSlayerTasks: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitToSlayerTasks}`,
            accuracyRatingAgainstSlayerTasks: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstSlayerTasks}`,

            // Boss
            maxHitPercentAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitPercentAgainstBosses}`,
            maxHitFlatAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitFlatAgainstBosses}`,
            flatMinHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitAgainstBosses}`,
            minHitBasedOnMaxHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitAgainstBosses}`,
            accuracyRatingAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstBosses}`,

            // General Combat
            combatBarrierDamagePreventionThreshold: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.combatBarrierDamagePreventionThreshold}`,
        },
        CHARACTER: {
            // General Combat
            chanceToReduceAttackDamageToZero: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.chanceToReduceAttackDamageToZero}`,
            damageFlatWhileTargetHasMaxHP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damageFlatWhileTargetHasMaxHP}`,
            damagePercentWhileTargetHasMaxHP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damagePercentWhileTargetHasMaxHP}`,
            damageFlatIgnoringResistance: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damageFlatIgnoringResistance}`,
            combatDamagePreventionThreshold: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.combatDamagePreventionThreshold}`,

            // General Combat and Thieving
            damagePreventionThreshold: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damagePreventionThreshold}`
        }
    }
}