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
    static readonly ANIMAL_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/frozen_mammoth.png";
    static readonly DEMON_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/fierce_devil.png";
    static readonly DRAGON_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/dragon_green.png";
    static readonly ELEMENTAL_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/fire_spirit.png";
    static readonly ELF_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/elder_wizard.png";
    static readonly HUMAN_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/skills/thieving/man.svg";
    static readonly MYTHICAL_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/griffin.png";
    static readonly SEA_CREATURE_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/large_crab.png";
    static readonly UNDEAD_MODIFIER_ICON_RESOURCE_URL = "melvor:assets/media/monsters/skeleton.png";

    static readonly IDS = {
        PLAYER: {
            // Skilling
            skillXPPerLevel: CmimModifierIds.skillXPPerLevel,
            flatSkillXPPerLevel: CmimModifierIds.flatSkillXPPerLevel,
            flatSkillXP: CmimModifierIds.flatSkillXP,
            damagePreventionThresholdThieving: CmimModifierIds.damagePreventionThresholdThieving,

            // Combat Area
            maxHitAgainstCombatAreaMonsters: CmimModifierIds.maxHitAgainstCombatAreaMonsters,
            flatMaxHitAgainstCombatAreaMonsters: CmimModifierIds.flatMaxHitAgainstCombatAreaMonsters,
            flatMinHitAgainstCombatAreaMonsters: CmimModifierIds.flatMinHitAgainstCombatAreaMonsters,
            minHitBasedOnMaxHitToCombatAreaMonsters: CmimModifierIds.minHitBasedOnMaxHitToCombatAreaMonsters,
            accuracyRatingAgainstCombatAreaMonsters: CmimModifierIds.accuracyRatingAgainstCombatAreaMonsters,
            flatResistanceAgainstCombatAreaMonsters: CmimModifierIds.flatResistanceAgainstCombatAreaMonsters,

            // Slayer Area
            maxHitAgainstSlayerAreaMonsters: CmimModifierIds.maxHitAgainstSlayerAreaMonsters,
            flatMaxHitAgainstSlayerAreaMonsters: CmimModifierIds.flatMaxHitAgainstSlayerAreaMonsters,
            flatMinHitAgainstSlayerAreaMonsters: CmimModifierIds.flatMinHitAgainstSlayerAreaMonsters,
            minHitBasedOnMaxHitToSlayerAreaMonsters: CmimModifierIds.minHitBasedOnMaxHitToSlayerAreaMonsters,
            accuracyRatingAgainstSlayerAreaMonsters: CmimModifierIds.accuracyRatingAgainstSlayerAreaMonsters,
            flatResistanceAgainstSlayerAreaMonsters: CmimModifierIds.flatResistanceAgainstSlayerAreaMonsters,

            // Dungeon
            maxHitAgainstDungeonMonsters: CmimModifierIds.maxHitAgainstDungeonMonsters,
            flatMaxHitAgainstDungeonMonsters: CmimModifierIds.flatMaxHitAgainstDungeonMonsters,
            flatMinHitAgainstDungeonMonsters: CmimModifierIds.flatMinHitAgainstDungeonMonsters,
            minHitBasedOnMaxHitToDungeonMonsters: CmimModifierIds.minHitBasedOnMaxHitToDungeonMonsters,
            accuracyRatingAgainstDungeonMonsters: CmimModifierIds.accuracyRatingAgainstDungeonMonsters,
            flatResistanceAgainstDungeonMonsters: CmimModifierIds.flatResistanceAgainstDungeonMonsters,

            // Slayer Tas
            maxHitSlayerTask: CmimModifierIds.maxHitSlayerTask,
            flatMaxHitSlayerTask: CmimModifierIds.flatMaxHitSlayerTask,
            flatMinHitSlayerTask: CmimModifierIds.flatMinHitSlayerTask,
            minHitBasedOnMaxHitSlayerTask: CmimModifierIds.minHitBasedOnMaxHitSlayerTask,
            accuracyRatingSlayerTask: CmimModifierIds.accuracyRatingSlayerTask,

            // Boss
            maxHitAgainstBosses: CmimModifierIds.maxHitAgainstBosses,
            flatMaxHitAgainstBosses: CmimModifierIds.flatMaxHitAgainstBosses,
            flatMinHitAgainstBosses: CmimModifierIds.flatMinHitAgainstBosses,
            minHitBasedOnMaxHitAgainstBosses: CmimModifierIds.minHitBasedOnMaxHitAgainstBosses,
            accuracyRatingAgainstBosses: CmimModifierIds.accuracyRatingAgainstBosses,

            // General Combat
            damagePreventionThresholdBarrier: CmimModifierIds.damagePreventionThresholdBarrier,
        },
        CHARACTER: {
            // General Combat
            chanceToReduceAttackDamageToZero: CmimModifierIds.chanceToReduceAttackDamageToZero,
            damageFlatWhileTargetHasMaxHP: CmimModifierIds.damageFlatWhileTargetHasMaxHP,
            damagePercentWhileTargetHasMaxHP: CmimModifierIds.damagePercentWhileTargetHasMaxHP,
            damageFlatIgnoringResistance: CmimModifierIds.damageFlatIgnoringResistance,
            damagePreventionThresholdCombat: CmimModifierIds.damagePreventionThresholdCombat,

            // General Combat and Thieving
            damagePreventionThreshold: CmimModifierIds.damagePreventionThreshold
        },

        backwardsCompatibility: `${ModConstants.MOD_NAMESPACE_NAME}:backwardsCompatibility`
    }
}