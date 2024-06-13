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
            damagePreventionThresholdThieving: 'damagePreventionThresholdThieving',

            // Combat Area
            maxHitAgainstCombatAreaMonsters: 'maxHitAgainstCombatAreaMonsters',
            flatMaxHitAgainstCombatAreaMonsters: 'flatMaxHitAgainstCombatAreaMonsters',
            flatMinHitAgainstCombatAreaMonsters: 'flatMinHitAgainstCombatAreaMonsters',
            minHitBasedOnMaxHitToCombatAreaMonsters: 'minHitBasedOnMaxHitToCombatAreaMonsters',
            accuracyRatingAgainstCombatAreaMonsters: 'accuracyRatingAgainstCombatAreaMonsters',
            flatResistanceAgainstCombatAreaMonsters: 'flatResistanceAgainstCombatAreaMonsters',

            // Slayer Area
            maxHitAgainstSlayerAreaMonsters: 'maxHitAgainstSlayerAreaMonsters',
            flatMaxHitAgainstSlayerAreaMonsters: 'flatMaxHitAgainstSlayerAreaMonsters',
            flatMinHitAgainstSlayerAreaMonsters: 'flatMinHitAgainstSlayerAreaMonsters',
            minHitBasedOnMaxHitToSlayerAreaMonsters: 'minHitBasedOnMaxHitToSlayerAreaMonsters',
            accuracyRatingAgainstSlayerAreaMonsters: 'accuracyRatingAgainstSlayerAreaMonsters',
            flatResistanceAgainstSlayerAreaMonsters: 'flatResistanceAgainstSlayerAreaMonsters',

            // Dungeon
            maxHitAgainstDungeonMonsters: 'maxHitAgainstDungeonMonsters',
            flatMaxHitAgainstDungeonMonsters: 'flatMaxHitAgainstDungeonMonsters',
            flatMinHitAgainstDungeonMonsters: 'flatMinHitAgainstDungeonMonsters',
            minHitBasedOnMaxHitToDungeonMonsters: 'minHitBasedOnMaxHitToDungeonMonsters',
            accuracyRatingAgainstDungeonMonsters: 'accuracyRatingAgainstDungeonMonsters',
            flatResistanceAgainstDungeonMonsters: 'flatResistanceAgainstDungeonMonsters',

            // Slayer Task
            maxHitSlayerTask: 'maxHitSlayerTask',
            flatMaxHitSlayerTask: 'flatMaxHitSlayerTask',
            flatMinHitSlayerTask: 'flatMinHitSlayerTask',
            minHitBasedOnMaxHitSlayerTask: 'minHitBasedOnMaxHitSlayerTask',
            accuracyRatingSlayerTask: 'accuracyRatingSlayerTask',

            // Boss
            maxHitAgainstBosses: 'maxHitAgainstBosses',
            flatMaxHitAgainstBosses: 'flatMaxHitAgainstBosses',
            flatMinHitAgainstBosses: 'flatMinHitAgainstBosses',
            minHitBasedOnMaxHitAgainstBosses: 'minHitBasedOnMaxHitAgainstBosses',
            accuracyRatingAgainstBosses: 'accuracyRatingAgainstBosses',

            // General Combat
            damagePreventionThresholdBarrier: 'damagePreventionThresholdBarrier',
        },
        CHARACTER: {
            // General Combat
            chanceToReduceAttackDamageToZero: 'chanceToReduceAttackDamageToZero',
            damageFlatWhileTargetHasMaxHP: 'damageFlatWhileTargetHasMaxHP',
            damagePercentWhileTargetHasMaxHP: 'damagePercentWhileTargetHasMaxHP',
            damageFlatIgnoringResistance: 'damageFlatIgnoringResistance',
            damagePreventionThresholdCombat: 'damagePreventionThresholdCombat',

            // General Combat and Thieving
            damagePreventionThreshold: 'damagePreventionThreshold'
        },
        backwardsCompatibility: 'backwardsCompatibility'
    };

    static readonly IDS = {
        PLAYER: {
            // Skilling
            skillXPPerLevel: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.skillXPPerLevel}`,
            flatSkillXPPerLevel: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatSkillXPPerLevel}`,
            flatSkillXP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatSkillXP}`,
            damagePreventionThresholdThieving: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.damagePreventionThresholdThieving}`,

            // Combat Area
            maxHitAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitAgainstCombatAreaMonsters}`,
            flatMaxHitAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMaxHitAgainstCombatAreaMonsters}`,
            flatMinHitAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitAgainstCombatAreaMonsters}`,
            minHitBasedOnMaxHitToCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToCombatAreaMonsters}`,
            accuracyRatingAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstCombatAreaMonsters}`,
            flatResistanceAgainstCombatAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstCombatAreaMonsters}`,

            // Slayer Area
            maxHitAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitAgainstSlayerAreaMonsters}`,
            flatMaxHitAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMaxHitAgainstSlayerAreaMonsters}`,
            flatMinHitAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitAgainstSlayerAreaMonsters}`,
            minHitBasedOnMaxHitToSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToSlayerAreaMonsters}`,
            accuracyRatingAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstSlayerAreaMonsters}`,
            flatResistanceAgainstSlayerAreaMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstSlayerAreaMonsters}`,

            // Dungeon
            maxHitAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitAgainstDungeonMonsters}`,
            flatMaxHitAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMaxHitAgainstDungeonMonsters}`,
            flatMinHitAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitAgainstDungeonMonsters}`,
            minHitBasedOnMaxHitToDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitToDungeonMonsters}`,
            accuracyRatingAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstDungeonMonsters}`,
            flatResistanceAgainstDungeonMonsters: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatResistanceAgainstDungeonMonsters}`,

            // Slayer Task
            maxHitSlayerTask: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitSlayerTask}`,
            flatMaxHitSlayerTask: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMaxHitSlayerTask}`,
            flatMinHitSlayerTask: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitSlayerTask}`,
            minHitBasedOnMaxHitSlayerTask: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitSlayerTask}`,
            accuracyRatingSlayerTask: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingSlayerTask}`,

            // Boss
            maxHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.maxHitAgainstBosses}`,
            flatMaxHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMaxHitAgainstBosses}`,
            flatMinHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.flatMinHitAgainstBosses}`,
            minHitBasedOnMaxHitAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.minHitBasedOnMaxHitAgainstBosses}`,
            accuracyRatingAgainstBosses: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.accuracyRatingAgainstBosses}`,

            // General Combat
            damagePreventionThresholdBarrier: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.PLAYER.damagePreventionThresholdBarrier}`,
        },
        CHARACTER: {
            // General Combat
            chanceToReduceAttackDamageToZero: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.chanceToReduceAttackDamageToZero}`,
            damageFlatWhileTargetHasMaxHP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damageFlatWhileTargetHasMaxHP}`,
            damagePercentWhileTargetHasMaxHP: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damagePercentWhileTargetHasMaxHP}`,
            damageFlatIgnoringResistance: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damageFlatIgnoringResistance}`,
            damagePreventionThresholdCombat: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damagePreventionThresholdCombat}`,

            // General Combat and Thieving
            damagePreventionThreshold: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.CHARACTER.damagePreventionThreshold}`
        },
        backwardsCompatibility: `${ModConstants.MOD_NAMESPACE_NAME}:${this.KEYS.backwardsCompatibility}`
    }
}