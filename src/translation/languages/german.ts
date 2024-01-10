export const de = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Cmim-Mod-Warnung',
    Combat_Modifier_UI_Impact_Indicator_Text: "Sie oder das Ziel profitieren derzeit von einem Modifikator, welcher die Chance verleiht den erhaltenen Schaden auf 0 zu reduzieren. Aufgrunddessen, wo/wie dieser Modifikator implementiert werden musste, kann es passieren, dass bestimmte Schadensinformationen (z.B. Maximalschaden) fälschlicherweise 0 anzeigen - selbst, wenn das Ziel so stark ist, dass dies nicht realistisch möglich sein sollte.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'Diese Warnung kann in den Mod-Einstellungen deaktiviert werden',
    Combat_Area_Boss_Indicator: 'Boss',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: 'Indikatoren in Kampfgebieten',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: 'Indikator, für den Fall, dass bestimmte Modifikatoren einen fälschlichen Einfluss auf die Kampf-Ansicht ausüben kann',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: 'Betrifft derzeit nur einen bestimmten Modifikator. Der angezeigte Indikator bietet genauere Informationen',

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Indikatoren für Bosse aktivieren',
    Settings_Setting_Hint_Enable_Boss_Indicators: "Normalerweise ist nur das letzte Monster eines Verlieses als Boss klassifiziert. Es kann jedoch Ausnahmen geben, bei welchen auch Monster im Kampf- oder Berserkergebieten als Boss klassifiziert sein können, welche durch diese Einstellung hervorgehoben werden",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Indikatoren für aktive Monsterarten aktivieren',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: 'Fügt der Monster-/Verlies-Auswahl grüne Erkennungszeichen hinzu, welche auf die native Monsterarten-Zuweisung hinweist',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Indikatoren für inaktive Monsterarten aktivieren',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Fügt der Monster-/Verlies-Auswahl orange Erkennungszeichen hinzu, welche auf die native Monsterarten-Zuweisung hinweist',

    // #### Disabling section
    Settings_Section_Disabling: 'Deaktivieren',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "Dieser Bereich dient dazu, bestimmte Funktionalitäten dieses Mods zu deaktivieren. Ein Grund dafür ist, dass man damit Inhalte absichtlich leichter/schwieriger machen kann. Ein anderer Grund ist, dass dieser Mod weitere Berechnungen erfordert, was zu einer spürbaren Erhöhung der Charakter-Ladezeit führen kann (insbesondere, wenn das Monsterarten-System auageschöpft wird). Bestimmte Berechnungen daran zu hindern überhaupt durchgeführt zu werden, kann dementsprechend zu einer bemerkbaren Verbesserung von Ladezeiten führen.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: 'Erscheinungs-Modifikatoren deaktivieren',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Deaktiviert alle Erscheinungs-Modifikatoren, welche von diesem Mod hinzugefügt werden',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Bestimmte Monsterarten inaktiv lassen',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: 'Erzwingt, dass die ausgewählten Monsterarten inaktiv bleiben, unabhängig davon, was andere Mods definieren. Für Monsterarten, welche von anderen Mods hinzugefügt wurden, geht die Nachhaltung des Kontroll-Kästchens verloren, wenn der Charakter ohne besagten Mod geladen wird',

    // #### Enabling section
    Settings_Section_Enabling: 'Aktivieren',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: "Dieser Bereich ist wahrscheinlich irrelevant als Benutzer. Je nach Mods könnte jedoch die Situation auftreten, dass bestimmte Funktionalitäten dieses Mod noch aktiviert werden müssen, da kein Mod diesen Wunsch kommuniziert hat. In dem Fall erlaubt diese Sektion sich selbst um die Aktivierung zu kümmern.",

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Erzwingen, dass bestimmte Monsterarten aktiv sind',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: 'Erzwingt, dass die ausgewählten Monsterarten aktiv sind (wird nach Inaktivitäts-Einstellung evaluiert), unabhängig davon, was andere Mods definieren. Für Monsterarten, welche von anderen Mods hinzugefügt wurden, geht die Nachhaltung des Kontroll-Kästchens verloren, wenn der Charakter ohne besagten Mod geladen wird',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Speichern und neu laden',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Neu laden erforderlich',
    Settings_Setting_Display_Save_Reload: 'Alles speichern und neu laden',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Monsterarten",

    Monster_Type_Overview_Remarks_Prefix: "Bitte beachtet die folgenden Punkte:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor hat keine eigene Implementation für Monsterart-Zuweisung. Diese sind stattdessen durch den Mod 'Custom Modifiers in Melvor' hinzugefügt worden",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "Diese Übersicht zeigt alle Monsterarten-Zuweisungen. Wenn ein Monster in einer Sektion nicht auftaucht, dann bedeutet das, dass das Monster diese Monsterart nicht zugewiesen hat. Es kann natürlich sein, dass Monsterart-Zuweisungen unakkurat sind. Zögert bitte nicht Feedback zu allem zu geben, was eurer Meinung nach angepasst werden sollte",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "Monster, welche durch andere Mods hinzugefügt werden, müssen von besagten Mods selbst mit der entsprechenden Monsterart-Zuweisung ausgestattet werden",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Spieler-Modifikatoren",
    Monster_Type_Overview_Player_Traits_Information: "Neben der organischen Artenzuweisung, kann eine Art auch durch die Verwendung des jeweiligen Modifikators erzwungen werden - in der Regel durch ausgerüstete Gegenstände, oder ggf. Einkäufe im Laden. Diese Übersicht zeigt alle Arten (und den Wert ihres jeweiligen Modifikators) an, welche den Charakter derzeit beeinflussen. DIESE ANZEIGE IST STATISCH, BASIEREND AUF DEM STAND ALS DER CHARAKTER GELADEN WURDE!",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Neben der organischen Artenzuweisung, kann eine Art auch durch die Verwendung des jeweiligen Modifikators erzwungen werden - in der Regel durch ausgerüstete Gegenstände, oder ggf. Einkäufe im Laden",
    Monster_Type_Overview_Player_Traits_Information_Display: 'Diese Übersicht zeigt alle Arten (und den Wert ihres jeweiligen Modifikators) an, welche den Charakter derzeit beeinflussen - genauere Info ist ggf. durch den "Show Skill Modifiers" herausfindbar',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "Diese Anzeige ist statisch, basierend auf dem Stand als der Charakter geladen wurde",
    Monster_Type_Overview_Player_Traits_No_Entries: "Der Charakter wird derzeit nicht von Artenzuweisung beeinflusst",

    Monster_Type_Overview_Active_Types_Tab_Header: "Aktive Arten",
    Monster_Type_Overview_Active_Types_Information: "Aktive Arten sind jene, welche von mindestens einem der geladenen Mods verwendet werden.",
    Monster_Type_Overview_Active_Types_No_Entries: "Derzeit gibt es keine aktiven Monsterarten",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Inaktive Arten",
    Monster_Type_Overview_Inactive_Types_Information: "Inaktive Arten sind jene, welche zwar definiert sind, jedoch von keinem Mod verwendet werden. Sie werden deshalb auch nicht während des Kampfes überprüft, was bedeutet, dass sie auch die Berechnungszeit nicht beeinflussen.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "Derzeit gibt es keine inaktiven Monsterarten",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Kann aufgrund von einer Auswahl in den Mod-Einstellungen nicht aktiv werden",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% Chance (MAX: 90%), dass der durch einen Angriff erlittene Schaden auf 0 reduziert wird (der Angriff wird immernoch als Treffer interpretiert und Kalkulationen wie Über-Zeit-Effekte sind unbetroffen von dieser Veränderung)',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% Chance (MAX: 90%), dass der durch einen Angriff erlittene Schaden auf 0 reduziert wird (der Angriff wird immernoch als Treffer interpretiert und Kalkulationen wie Über-Zeit-Effekte sind unbetroffen von dieser Veränderung)',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} Schaden, wenn das Ziel volle Lebenspunkte hat',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} Schaden, wenn das Ziel volle Lebenspunkte hat',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% Schaden, wenn das Ziel volle Lebenspunkte hat',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% Schaden, wenn das Ziel volle Lebenspunkte hat',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} Schaden, welcher die Schadensreduzierung des Ziels ignoriert",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} Schaden, welcher die Schadensreduzierung des Ziels ignoriert",

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass +25% Angriffsintervall für drei Runden auf das Ziel angewendet wird",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass +25% Angriffsintervall für drei Runden auf das Ziel angewendet wird",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel für eine Runde betäubt wird",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel für eine Runde betäubt wird",
    MODIFIER_DATA_applyStunOnSpawn: "Beim Erscheinen oder der Wiederbelebung, betäubt das Ziel für ${value} Runde",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, betäubt das Ziel für ${value} Runden",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass tödlicher Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass tödlicher Giftschaden beim Gegner verursacht wird",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass dem Ziel ein Stapel Leid zugefügt wird",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass dem Ziel ein Stapel Leid zugefügt wird",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Leid hinzu",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Leid hinzu",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel eine Blutung erleidet, welche, über 10s hinweg, 100% deines Maximalschaden an Schaden verursacht",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel eine Blutung erleidet, welche, über 10s hinweg, 100% deines Maximalschaden an Schaden verursacht",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel eine Verbrennung erleidet, welche, über 2,5s hinweg, 15% der derzeitigen Lebenspunkte des Gegners an Schaden verursacht",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel eine Verbrennung erleidet, welche, über 2,5s hinweg, 15% der derzeitigen Lebenspunkte des Gegners an Schaden verursacht",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel für eine Runde eingefroren wird",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel für eine Runde eingefroren wird",
    MODIFIER_DATA_applyFreezeOnSpawn: "Beim Erscheinen oder der Wiederbelebung, friert das Ziel für ${value} Runde ein",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, friert das Ziel für ${value} Runden ein",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel für drei Runden Frostbrand erleidet",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel für drei Runden Frostbrand erleidet",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass dem Ziel ein Stapel Schock hinzugefügt wird",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass dem Ziel ein Stapel Schock hinzugefügt wird",
    MODIFIER_DATA_applyShockOnSpawn: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Schock hinzu",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Schock hinzu",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Ziel für eine Runde eingeschläfert wird",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Ziel für eine Runde eingeschläfert wird",
    MODIFIER_DATA_applySleepOnSpawn: "Beim Erscheinen oder der Wiederbelebung, schläfert das Ziel für ${value} Runde ein",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, schläfert das Ziel für ${value} Runden ein",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% Chance, dass bei einem Treffer Blutungen verursacht werden, welche über 10s hinweg 100% deines Maximalschaden an Schaden zufügen",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% Chance, dass bei einem Treffer Blutungen verursacht werden, welche über 10s hinweg 100% deines Maximalschaden an Schaden zufügen",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "Du bist durch Todesurteil hingerichtet worden",
    COMBAT_MISC_Death_Mark_Effect: "Todesurteil",
    MODIFIER_DATA_deathMark: "Wenn der Prozentsatz der verbleibenden maximalen Lebenspunkte niedriger ist als die Anzahl der Stapel (MAX 20% / 5.000), werde sofort hingerichtet",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Todesurteil-Stapel, wenn ein Angriff trifft",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% Chance einen Stapel Todesurteil beim Gegner hinzuzufügen",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value} Chance, der Anwendung von Todesurteil-Stapeln zu widerstehen",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Todesurteil hinzu",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Beim Erscheinen oder der Wiederbelebung, fügt dem Ziel ${value} Stapel Todesurteil hinzu",

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
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '+${value}% Genauigkeit bei Berserker-Aufträgen',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '-${value}% Genauigkeit bei Berserker-Aufträgen',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% Schadensreduzierung bei Berserker-Aufträgen',

    // #### Trait application modifiers (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Markiert den Betroffenen als Mensch",
    MODIFIER_DATA_dragonTraitApplied: "Markiert den Betroffenen als Drachen",
    MODIFIER_DATA_undeadTraitApplied: "Markiert den Betroffenen als Untot",

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Tier",
    MONSTER_TYPE_PLURAL_Animal: "Tiere",
    MONSTER_TYPE_SINGULAR_Demon: "Dämon",
    MONSTER_TYPE_PLURAL_Demon: "Dämonen",
    MONSTER_TYPE_SINGULAR_Dragon: "Drache",
    MONSTER_TYPE_PLURAL_Dragon: "Drachen",
    MONSTER_TYPE_SINGULAR_Elemental: "Elementar",
    MONSTER_TYPE_PLURAL_Elemental: "Elementare",
    MONSTER_TYPE_SINGULAR_Human: "Mensch",
    MONSTER_TYPE_PLURAL_Human: "Menschen",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Fabelwesen",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Fabelwesen",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Meereslebewesen",
    MONSTER_TYPE_PLURAL_SeaCreature: "Meereslebewesen",
    MONSTER_TYPE_SINGULAR_Undead: "Untoter",
    MONSTER_TYPE_PLURAL_Undead: "Untote",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType}-Merkmal",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType}-Merkmal",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Markiert den Betroffenen als ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% Schaden gegen ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% Schaden gegen ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% mehr erlittener Schaden von ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% mehr erlittener Schaden von ${monsterType}",
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

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: 'Beim Erscheinen oder der Wiederbelebung, +${value}% Chance, dass das Merkmal ${monsterType} bis zum Ende des Kampf beim Gegner angewendet wird',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: 'Beim Erscheinen oder der Wiederbelebung, -${value}% Chance, dass das Merkmal ${monsterType} bis zum Ende des Kampf beim Gegner angewendet wird',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Beim Erscheinen oder der Wiederbelebung, wendet das Merkmal ${monsterType} für ${value} Runden des Gegners bei diesem an",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% Chance das Merkmal ${monsterType} für eine Runde des Gegners bei diesem anzuwenden",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% Chance das Merkmal ${monsterType} für eine Runde des Gegners bei diesem anzuwenden",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Wendet das Merkmal ${monsterType} für ${value} Runden des Gegners bei diesem an",

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