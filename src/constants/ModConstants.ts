export class ModConstants {
    static readonly SCHEMA = "https://melvoridle.com/assets/schema/gameData.json";
    static readonly MOD_NAMESPACE = "customModifiersInMelvor";

    static readonly ERROR_ICON_MEDIA_PATH = "assets/media/main/error.svg";
    static readonly COMBAT_CONTAINER_ELEMENT_ID = "combat-container";

    static readonly COMBAT_MODIFIER_UI_IMPACT_INDICATOR_CONTAINER_CLASS = "customModifiersInMelvor__modifier-ui-impact-indicator";

    static readonly COMBAT_AREAS_INDICATOR_BADGE_CLASS = "customModifiersInMelvor__combat-areas-indicator-badge";
    static readonly COMBAT_AREAS_INDICATOR_BADGE_BR_CLASS = "customModifiersInMelvor__combat-areas-indicator-badge-br";

    // Based on the Typescript type "AttackType" which unfortunately isn't a usable enum
    static readonly ATTACK_TYPES_MELEE = "melee";
    static readonly ATTACK_TYPES_RANGED = "ranged";
    static readonly ATTACK_TYPES_MAGIC = "magic";
}