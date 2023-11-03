export const de = {
    PAGE_NAME_Monster_Types_Overview: "Monsterarten",

    // ### Monster type translation for type overview page
    Monster_Type_Human_Plural: "Menschen",
    Monster_Type_Dragon_Plural: "Drachen",
    Monster_Type_Undead_Plural: "Untote",

    // ### Type overview page remarks
    Monster_Type_Overview_Remarks_Prefix: "Bitte beachtet die folgenden Punkte:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor hat keine eigene Implementation für Monsterart-Zuweisung. Diese sind stattdessen durch den Mod 'Custom Modifiers in Melvor' hinzugefügt worden",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Diese Übersicht zeigt alle Monsterarten-Zuweisungen. Wenn ein Monster in einer Sektion nicht auftaucht, dann bedeutet das, dass das Monster diese Monsterart nicht zugewiesen hat",
    Monster_Type_Overview_Remarks_Type_Allocation_Inaccuracy: "Es kann natürlich sein, dass Monsterart-Zuweisungen unakkurat sind. Zögert in dem Fall bitte nicht den Ersteller des Mod 'Custom Modifiers in Melvor' zu kontaktieren und über Fehler zu informieren",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Monster, welche durch andere Mods hinzugefügt werden, müssen von besagten Mods selbst mit der entsprechenden Monsterart-Zuweisung ausgestattet werden. Wenn ein Mod den Basis-Mod nicht als Anforderung konfiguriert hat, dann bedeutet das grundsätzlich, dass keines der Monster in irgendeinerweise von dieser Monsterart-Zuweisung beeinflusst sind",

    // ### Modifiers
    // #### Spawn modifiers (TODO: Possibly make equivalent increased/decreased chance to self-apply?)
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass +25% Angriffsintervall für drei Runden auf das Ziel angewendet wird",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass +25% Angriffsintervall für drei Runden auf das Ziel angewendet wird",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel für eine Runde betäubt wird",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel für eine Runde betäubt wird",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass tödlicher Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass tödlicher Giftschaden beim Gegner verursacht wird",

    // #### Trait application modifiers (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Markiert den Betroffenen als Mensch",
    MODIFIER_DATA_dragonTraitApplied: "Markiert den Betroffenen als Drachen",
    MODIFIER_DATA_undeadTraitApplied: "Markiert den Betroffenen als Untot",

    // #### Type modifiers
    MODIFIER_DATA_increasedMaxHitPercentAgainstHumans: "+${value}% Maximalschaden gegen Menschen",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans: "-${value}% Maximalschaden gegen Menschen",
    MODIFIER_DATA_increasedMaxHitPercentAgainstDragons: "+${value}% Maximalschaden gegen Drachen",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons: "-${value}% Maximalschaden gegen Drachen",
    MODIFIER_DATA_increasedMaxHitPercentAgainstUndead: "+${value}% Maximalschaden gegen Untote",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead: "-${value}% Maximalschaden gegen Untote",
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Maximalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Maximalschaden gegen Bosse",
};