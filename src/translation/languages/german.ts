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

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Du bist durch Todesurteil hingerichtet worden",
    COMBAT_MISC_Death_Mark_Effect: "Todesurteil",
    MODIFIER_DATA_deathMark: "Wenn Lebenspunkte unter ${value}/${stacks}/${stack}/${count}% (MAX ${maxStacks}% / 5,000) der maximalen Lebenspunkte fallen, werde sofort hingerichtet",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Todesurteil-Stapel, wenn ein Angriff trifft",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} Minimalschaden gegen Kampfgebiet-Monster",

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Minimalschaden gegen Berserkergebiet-Monster",

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Minimalschaden gegen Verlies-Monster",

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Minimalschaden bei Berserker-Aufträgen",

    // #### Trait application modifiers (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Markiert den Betroffenen als Mensch",
    MODIFIER_DATA_dragonTraitApplied: "Markiert den Betroffenen als Drachen",
    MODIFIER_DATA_undeadTraitApplied: "Markiert den Betroffenen als Untot",

    // #### Type
    // ##### Humans
    MODIFIER_DATA_increasedDamageToHumans: "+${value}% Schaden gegen Menschen",
    MODIFIER_DATA_decreasedDamageToHumans: "-${value}% Schaden gegen Menschen",
    MODIFIER_DATA_increasedMaxHitPercentAgainstHumans: "+${value}% Maximalschaden gegen Menschen",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans: "-${value}% Maximalschaden gegen Menschen",
    MODIFIER_DATA_increasedMaxHitFlatAgainstHumans: "+${value} Maximalschaden gegen Menschen",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstHumans: "-${value} Maximalschaden gegen Menschen",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstHumans: "+${value}% Minimalschaden gegen Menschen",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstHumans: "-${value}% Minimalschaden gegen Menschen",
    MODIFIER_DATA_increasedFlatMinHitAgainstHumans: "+${value} Minimalschaden gegen Menschen",
    MODIFIER_DATA_decreasedFlatMinHitAgainstHumans: "-${value} Minimalschaden gegen Menschen",

    // ##### Dragons
    MODIFIER_DATA_increasedDamageToDragons: "+${value}% Schaden gegen Drachen",
    MODIFIER_DATA_decreasedDamageToDragons: "-${value}% Schaden gegen Drachen",
    MODIFIER_DATA_increasedMaxHitPercentAgainstDragons: "+${value}% Maximalschaden gegen Drachen",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons: "-${value}% Maximalschaden gegen Drachen",
    MODIFIER_DATA_increasedMaxHitFlatAgainstDragons: "+${value} Maximalschaden gegen Drachen",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstDragons: "-${value} Maximalschaden gegen Drachen",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstDragons: "+${value}% Minimalschaden gegen Drachen",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstDragons: "-${value}% Minimalschaden gegen Drachen",
    MODIFIER_DATA_increasedFlatMinHitAgainstDragons: "+${value} Minimalschaden gegen Drachen",
    MODIFIER_DATA_decreasedFlatMinHitAgainstDragons: "-${value} Minimalschaden gegen Drachen",

    // ##### Undead
    MODIFIER_DATA_increasedDamageToUndead: "+${value}% Schaden gegen Untote",
    MODIFIER_DATA_decreasedDamageToUndead: "-${value}% Schaden gegen Untote",
    MODIFIER_DATA_increasedMaxHitPercentAgainstUndead: "+${value}% Maximalschaden gegen Untote",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead: "-${value}% Maximalschaden gegen Untote",
    MODIFIER_DATA_increasedMaxHitFlatAgainstUndead: "+${value} Maximalschaden gegen Untote",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstUndead: "-${value} Maximalschaden gegen Untote",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstUndead: "+${value}% Minimalschaden gegen Untote",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstUndead: "-${value}% Minimalschaden gegen Untote",
    MODIFIER_DATA_increasedFlatMinHitAgainstUndead: "+${value} Minimalschaden gegen Untote",
    MODIFIER_DATA_decreasedFlatMinHitAgainstUndead: "-${value} Minimalschaden gegen Untote",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Maximalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Maximalschaden gegen Bosse",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Maximalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Maximalschaden gegen Bosse",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% Minimalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% Minimalschaden gegen Bosse",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Minimalschaden gegen Bosse",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Minimalschaden gegen Bosse",

    // #### Skilling
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% Fertigkeits-EP pro Level in der derzeit trainierten Fertigkeit",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% Fertigkeits-EP pro Level in der derzeit trainierten Fertigkeit",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% Fertigkeits-EP in ${skillName} pro Level in ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% Fertigkeits-EP in ${skillName} pro Level in ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} Fertigkeits-EP (Nach %-ualen Bonusen)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} Fertigkeits-EP (Nach %-ualen Bonusen)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} Fertigkeits-EP in ${skillName} (Nach %-ualen Bonusen)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} Fertigkeits-EP in ${skillName} (Nach %-ualen Bonusen)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} Fertigkeits-EP pro Level in der derzeit trainierten Fertigkeit (Nach %-ualen Bonusen)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} Fertigkeits-EP pro Level in der derzeit trainierten Fertigkeit (Nach %-ualen Bonusen)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} Fertigkeits-EP in ${skillName} pro Level in ${skillName} (Nach %-ualen Bonusen)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} Fertigkeits-EP in ${skillName} pro Level in ${skillName} (Nach %-ualen Bonusen)"
};