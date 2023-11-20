export const de = {
    PAGE_NAME_Monster_Types_Overview: "Monsterarten",

    // ### Monster type translation for type overview page
    Monster_Type_Singular_Human: "Mensch",
    Monster_Type_Plural_Human: "Menschen",
    Monster_Type_Singular_Dragon: "Drache",
    Monster_Type_Plural_Dragon: "Drachen",
    Monster_Type_Singular_Undead: "Untoter",
    Monster_Type_Plural_Undead: "Untote",

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
    MODIFIER_DATA_deathMark: "Wenn der Prozentsatz der verbleibenden maximalen HP niedriger ist als die Anzahl der Stapel (MAX 20% / 5.000), werde sofort hingerichtet",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Todesurteil-Stapel, wenn ein Angriff trifft",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% mehr erlittener Schaden von Luftzaubern",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% mehr erlittener Schaden von Luftzaubern",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% mehr erlittener Schaden von Wasserzaubern",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% mehr erlittener Schaden von Wasserzaubern",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% mehr erlittener Schaden von Erdzaubern",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% mehr erlittener Schaden von Erdzaubern",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% mehr erlittener Schaden von Feuerzaubern",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% mehr erlittener Schaden von Feuerzaubern",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} Maximalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} Minimalschaden gegen Kampfgebiet-Monster",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% Genauigkeit gegen Kampfgebiet-Monster',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% Genauigkeit gegen Kampfgebiet-Monster',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% Schadensreduzierung gegen Kampfgebiet-Monster',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% Schadensreduzierung gegen Kampfgebiet-Monster',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Maximalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Minimalschaden gegen Berserkergebiet-Monster",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% Genauigkeit gegen Berserkergebiet-Monster',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% Genauigkeit gegen Berserkergebiet-Monster',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% Schadensreduzierung gegen Berserkergebiet-Monster',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% Schadensreduzierung gegen Berserkergebiet-Monster',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Maximalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Minimalschaden gegen Verlies-Monster",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% Genauigkeit gegen Verlies-Monster',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% Genauigkeit gegen Verlies-Monster',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% Schadensreduzierung gegen Verlies-Monster',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% Schadensreduzierung gegen Verlies-Monster',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} Maximalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Minimalschaden bei Berserker-Aufträgen",
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% Schadensreduzierung bei Berserker-Aufträgen',

    // #### Trait application modifiers (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Markiert den Betroffenen als Mensch",
    MODIFIER_DATA_dragonTraitApplied: "Markiert den Betroffenen als Drachen",
    MODIFIER_DATA_undeadTraitApplied: "Markiert den Betroffenen als Untot",

    // #### Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MODIFIER_DATA_MonsterTypeTraitApplied: "Markiert den Betroffenen als ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% Schaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% Schaden gegen ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% Maximalschaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% Maximalschaden gegen ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} Maximalschaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} Maximalschaden gegen ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% Minimalschaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% Minimalschaden gegen ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} Minimalschaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} Minimalschaden gegen ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% Genauigkeit gegen ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% Genauigkeit gegen ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% Schadensreduzierung gegen ${monsterType}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% Schadensreduzierung gegen ${monsterType}',

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Maximalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Maximalschaden gegen Bosse",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Maximalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Maximalschaden gegen Bosse",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% Minimalschaden gegen Bosse",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% Minimalschaden gegen Bosse",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Minimalschaden gegen Bosse",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Minimalschaden gegen Bosse",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% Genauigkeit gegen Bosse',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% Genauigkeit gegen Bosse',

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