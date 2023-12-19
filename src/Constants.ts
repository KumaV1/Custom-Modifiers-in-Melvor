export class Constants {
    static readonly SCHEMA = "https://melvoridle.com/assets/schema/gameData.json";
    static readonly MOD_NAMESPACE = "customModifiersInMelvor";

    static readonly ERROR_ICON_MEDIA_PATH = "assets/media/main/error.svg";

    static readonly MISSING_ARTWORK_URL = "https://cdn.melvor.net/core/v018/assets/media/main/missing_artwork.png";

    static readonly MONSTER_TYPE_INDICATOR_BADGE_CLASS = "customModifiersInMelvor__monster-type-indicator-badge";
    static readonly MONSTER_TYPE_INDICATOR_BADGE_BR_CLASS = "customModifiersInMelvor__monster-type-indicator-badge-br";

    // Based on the Typescript type "AttackType" which unfortunately isn't a usable enum
    static readonly ATTACK_TYPES_MELEE = "melee";
    static readonly ATTACK_TYPES_RANGED = "ranged";
    static readonly ATTACK_TYPES_MAGIC = "magic";
}