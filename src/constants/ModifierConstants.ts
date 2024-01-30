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
    static readonly HUMAN_MODIFIER_ICON_RESOURCE_URL = "assets/media/skills/thieving/man.svg";
    static readonly MYTHICAL_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/griffin.png";
    static readonly SEA_CREATURE_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/large_crab.png";
    static readonly UNDEAD_MODIFIER_ICON_RESOURCE_URL = "assets/media/monsters/skeleton.png";
}