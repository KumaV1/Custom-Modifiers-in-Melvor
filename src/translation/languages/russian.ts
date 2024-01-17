export const ru = {
    "Combat_Modifier_UI_Impact_Indicator_Headline": "Предупреждение Cmim-Mod",
    "Combat_Modifier_UI_Impact_Indicator_Text": "По крайней мере один боец в настоящее время получает модификатор, который дает шанс снизить получаемый урон до 0. Из-за того, как/где этот модификатор был реализован, возможно, что показатели урона (например, максимальный удар) могут ошибочно отображаться как 0, даже для врагов, которые слишком сильны для того, чтобы это было реалистично возможно.",
    "Combat_Modifier_UI_Impact_Indicator_Hint": "Это предупреждение можно отключить в настройках мода",
    "Combat_Area_Boss_Indicator": "Босс",

    // ### Settings
    // #### Combat Areas Indicators section
    "Settings_Section_Indicators": "Индикаторы",

    // ##### Enable modifier ui impact indicator
    "Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator": "Индикатор включения, когда определенные модификаторы могут вызвать неправильное отображение в пользовательском интерфейсе",
    "Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator": "В настоящее время влияет только на один модификатор. Отображаемый индикатор предоставляет дополнительную информацию",

    // ##### Enable boss indicators
    "Settings_Setting_Label_Enable_Boss_Indicators": "Включить индикаторы босса",
    "Settings_Setting_Hint_Enable_Boss_Indicators": "Обычно только последний монстр подземелья классифицируется как босс. Однако из этого правила могут быть исключения, когда монстры в боевых или истребительных зонах также могут быть классифицированы как боссы, о чем и пойдет речь в этой настройке.",

    // ##### Enable active monster type indicators
    "Settings_Setting_Label_Enable_Active_Monster_Type_Indicators": "Включить активные индикаторы типа монстра",
    "Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators": "Добавляет зеленые значки в меню выбора монстров/подземелий, указывающие на распределение монстров по типам",

    // ##### Enable inactive monster type indicators
    "Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators": "Включить индикаторы неактивных типов монстров",
    "Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators": "Добавляет оранжевые значки в меню выбора монстров/подземелий, указывающие на распределение монстров по типам",

    // #### Disabling section
    "Settings_Section_Disabling": "Отключение",

    // ##### Info label
    "Settings_Setting_Label_Disabling_Info": "Этот раздел служит для отключения определенных частей функциональности этого мода. Помимо того, что вы можете специально облегчить или усложнить контент, другая основная причина, по которой вы можете захотеть это сделать, заключается в том, что этот мод может добавить значительное количество времени на вычисления, что приведет к заметному увеличению времени загрузки оффлайновых достижений (особенно, если используется система типов монстров). Поэтому запрет на выполнение некоторого кода может привести к заметному повышению производительности.",

    // ##### On-spawn modifiers
    "Settings_Setting_Label_Disable_All_On_Spawn_Modifiers": "Отключите модификаторы при спауне",
    "Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers": "Отключает все модификаторы, добавленные этим модом при спауне",

    // ##### Keep specific monster types inactive
    "Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive": "Сохраняйте определенные типы монстров неактивными",
    "Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive": "Заставляет выбранные типы монстров оставаться неактивными, независимо от того, что может сообщить любой мод. Типы монстров, добавленные другими модами, потеряют свой флажок, если вы случайно загрузите свое сохранение без этого мода.",

    // #### Enabling section
    "Settings_Section_Enabling": "Включение",

    // ##### Info label
    "Settings_Setting_Label_Enabling_Info": "Для пользователя этот раздел, скорее всего, не имеет значения. Однако, в зависимости от используемых модов, вы можете столкнуться с ситуацией, когда вам придется активировать определенный функционал самостоятельно, потому что ни один мод не сообщил о необходимости его использования, несмотря на то, что он используется. В этом случае данный раздел позволит вам самостоятельно позаботиться об активации.",

    // ##### Force specific monster types active
    "Settings_Setting_Label_Force_Specific_Monster_Types_Active": "Принудительно активировать определенные типы монстров",
    "Settings_Setting_Hint_Force_Specific_Monster_Types_Active": "Принуждает выбранные типы монстров быть активными (оценивается после установки неактивности), независимо от того, что может сообщить любой мод. Типы монстров, добавленные другими модами, потеряют свой флажок, если вы случайно загрузите свое сохранение без этого мода.",

    // #### Save & Reload section
    "Settings_Section_Save_And_Reload": "Сохранить все и перезагрузить",

    // ##### Save & Reload button
    "Settings_Hint_Save_Reload_Required": "Требуется перезагрузка",
    "Settings_Setting_Display_Save_Reload": "Сохранить все и перезагрузить",

    // ### Monster type overview
    "PAGE_NAME_Monster_Types_Overview": "Типы монстров",
    "Monster_Type_Overview_Remarks_Prefix": "Пожалуйста, обратите внимание на следующие моменты:",
    "Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types": "Melvor не содержит унаследованных определений типов. Вместо этого мод \"Пользовательские модификаторы в Мелворе\" заложил основу для модов, определяющих и распределяющих типы монстров",
    "Monster_Type_Overview_Remarks_Displayed_Type_Allocation": "В этом разделе отображаются все определенные типы. Если монстр не отображается в секции, значит, он не типизирован как таковой. При этом определения типов могут быть неточными. Не стесняйтесь оставлять отзывы о том, что, по вашему мнению, должно быть исправлено.",
    "Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation": "Для любых монстров, добавленных другими модами, эти моды должны сами установить определения типов для этих монстров",
    "Monster_Type_Overview_Player_Traits_Tab_Header": "Черты игрока",
    "Monster_Type_Overview_Player_Traits_Information_Type_Allocation": "Помимо органического распределения типов, тип также может быть принудительно применен с помощью соответствующего модификатора, обычно с помощью навыков, экипированных предметов или, возможно, покупки в магазине.",
    "Monster_Type_Overview_Player_Traits_Information_Display": "Этот обзор показывает все типы (и значение модификатора), влияющие на персонажа в данный момент - более подробная информация может быть определена с помощью мода \"Показать модификаторы умений\".",
    "Monster_Type_Overview_Player_Traits_Information_Data_Loaded": "Это статическое отображение, основанное на том, когда персонаж был загружен",
    "Monster_Type_Overview_Player_Traits_No_Entries": "На персонажа не влияют никакие модификаторы распределения типов",
    "Monster_Type_Overview_Active_Types_Tab_Header": "Активные типы",
    "Monster_Type_Overview_Active_Types_Information": "Активные типы - это те, которые действительно используются хотя бы одним из загруженных модов.",
    "Monster_Type_Overview_Active_Types_No_Entries": "В настоящее время нет активных типов",
    "Monster_Type_Overview_Inactive_Types_Tab_Header": "Неактивные типы",
    "Monster_Type_Overview_Inactive_Types_Information": "Неактивные типы - это те, которые были определены, но фактически не используются ни одним модом. Поэтому они также не проверяются во время боя, а значит, не влияют на время расчета.",
    "Monster_Type_Overview_Inactive_Types_No_Entries": "В настоящее время неактивных типов не существует",
    "Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings": "Не может стать активным из-за выбора в настройках мода",

    // ### Modifiers
    // #### Directly affecting damage dealt
    "MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero": "+ ${value}% шанс (MAX\": 90%) снизить урон, получаемый от атаки, до 0 (все равно считается, что вы попали в цель, и не влияет на расчет эффектов при попадании, таких как damage-over-time)",
    "MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero": "-${value}% шанс (MAX\": 90%) уменьшить урон, получаемый от атаки, до 0 (все равно считается, что вы попали в цель, и не влияет на расчет эффектов при попадании, таких как damage-over-time)",
    "MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP": "+ ${value} урона, пока цель имеет полное HP",
    "MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP": "-${value} урона, пока цель имеет полное HP",
    "MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP": "+${value}% урона, пока цель имеет полное HP",
    "MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP": "-${value}% урона, пока цель имеет полное HP",
    "MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction": "+ ${value} урона, на который не влияет снижение урона врагов",
    "MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction": "-${value} урона, на который не влияет снижение урона врагов",
    "MODIFIER_DATA_increasedGlobalDamagePreventionThreshold": "+ ${value} глобальный порог предотвращения урона (любой всплеск урона ниже порога уменьшается до 0)",
    "MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold": "-${value} глобальный порог предотвращения урона (любой всплеск урона ниже порога уменьшается до 0)",
    "MODIFIER_DATA_increasedDamagePreventionThreshold": "+ ${value} порог предотвращения урона (любой всплеск урона ниже порога уменьшается до 0)",
    "MODIFIER_DATA_decreasedDamagePreventionThreshold": "-${value} порог предотвращения урона (любой всплеск урона ниже порога уменьшается до 0)",
    "MODIFIER_DATA_increasedBarrierDamagePreventionThreshold": "+ ${value} порог предотвращения урона от барьера (любой урон, нанесенный барьеру ниже порога, уменьшается до 0)",
    "MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold": "-${value} порог предотвращения урона от барьера (любой урон, нанесенный барьеру ниже порога, уменьшается до 0)",

    // #### Spawn
    "MODIFIER_DATA_increasedChanceToApplySlowOnSpawn": "+${value}% шанс применить 25% увеличенный интервал атаки на три хода к цели при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn": "-${value}% шанс применить 25% увеличенный интервал атаки на три хода к цели при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyStunOnSpawn": "+${value}% шанс наложить оглушение на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn": "-${value}% шанс наложить оглушение на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_applyStunOnSpawn": "Наложите на цель ${value} ед. оглушения при спауне или возрождении",
    "MODIFIER_DATA_applyStunOnSpawn_Plural": "Наложите ${value} оборотов оглушения на цель при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn": "+${value}% шанс нанести яд цели при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn": "-${value}% шанс наложить яд на цель при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn": "+${value}% шанс нанести смертельный яд цели при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn": "-${value}% шанс нанести смертельный яд цели при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn": "+${value}% шанс наложить один стак аффекта на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn": "-${value}% шанс наложить один стак аффекта на цель при спауне или возрождении",
    "MODIFIER_DATA_applyAfflictionOnSpawn": "Наложите ${value} стаков поражения на цель при спауне или возрождении",
    "MODIFIER_DATA_applyAfflictionOnSpawn_Plural": "Наложите ${value} стаков поражения на цель при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn": "+${value}% шанс нанести кровотечение, наносящее 100% от максимального урона в течение 10 с, цели на порождении или при возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn": "- ${value}% шанс нанести кровотечение, наносящее 100% максимального урона в течение 10 с, цели при появлении или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn": "+${value}% шанс применить ожог, наносящий 15% текущего HP цели в течение 2,5 секунд, к цели при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn": "-${value}% шанс применить ожог, наносящий 15% текущего HP цели в течение 2,5 секунд, к цели при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn": "+${value}% шанс наложить заморозку на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn": "-${value}% шанс наложить заморозку на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_applyFreezeOnSpawn": "Наложите ${value} ед. заморозки на цель при спауне или возрождении",
    "MODIFIER_DATA_applyFreezeOnSpawn_Plural": "Наложите ${value} оборотов заморозки на цель при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn": "+${value}% шанс наложить морозный ожог на три хода на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn": "-${value}% шанс наложить морозный ожог на три хода на цель при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplyShockOnSpawn": "+${value}% шанс наложить один стак шока на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn": "-${value}% шанс наложить один стак шока на цель при спауне или возрождении",
    "MODIFIER_DATA_applyShockOnSpawn": "Применить ${value} стаков шока к цели при спауне или возрождении",
    "MODIFIER_DATA_applyShockOnSpawn_Plural": "Применить ${value} стаков шока к цели при спауне или возрождении",
    "MODIFIER_DATA_increasedChanceToApplySleepOnSpawn": "+${value}% шанс наложить сон на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn": "-${value}% шанс наложить сон на один ход на цель при спауне или возрождении",
    "MODIFIER_DATA_applySleepOnSpawn": "Наложите на цель ${value} ед. сна при спауне или возрождении",
    "MODIFIER_DATA_applySleepOnSpawn_Plural": "Наложите ${value} оборотов сна на цель при спауне или возрождении",

    // #### On hit
    "MODIFIER_DATA_increasedChanceToApplyBleed": "+${value}% шанс нанести кровотечение, которое наносит 100% максимального урона в течение 10 с, при попадании атакой",
    "MODIFIER_DATA_decreasedChanceToApplyBleed": "-${value}% шанс нанести кровотечение, которое наносит 100% максимального урона в течение 10 с, при попадании атакой",

    // #### Death mark (not to be confused with mark of death)
    "Death_Mark_Notification_Text": "Вы были казнены через знак смерти.",
    "COMBAT_MISC_Death_Mark_Effect": "Знак смерти",
    "MODIFIER_DATA_deathMark": "Если процент от максимального количества оставшихся HP меньше количества стаков (MAX 20% / 5,000), немедленно выполните задание",
    "MODIFIER_DATA_increasedDeathMarkOnHit": "+ ${value} Стаки Знака Смерти применяются при нанесении удара атакой",
    "MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark": "+ ${value}% шанс наложить на врага одну стопку метки смерти",
    "MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark": "-${value}% шанс наложить на врага одну стопку метки смерти",
    "MODIFIER_DATA_increasedDeathMarkImmunity": "+${value}% шанс противостоять применению стаков метки смерти",
    "MODIFIER_DATA_decreasedDeathMarkImmunity": "-${value}% шанс противостоять применению стаков метки смерти",
    "MODIFIER_DATA_applyDeathMarkOnSpawn": "Наложите ${value} стак \"Знака смерти\" на цель при спауне или возрождении",
    "MODIFIER_DATA_applyDeathMarkOnSpawn_Plural": "Наложите ${value} стаков \"Знака смерти\" на цель при спауне или возрождении",

    // #### Spell type
    "MODIFIER_DATA_increasedDamageTakenFromAirSpells": "+ ${value}% урона, получаемого от заклинаний воздуха",
    "MODIFIER_DATA_decreasedDamageTakenFromAirSpells": "-${value}% урона, получаемого от заклинаний воздуха",
    "MODIFIER_DATA_increasedDamageTakenFromWaterSpells": "+ ${value}% урона, получаемого от заклинаний воды",
    "MODIFIER_DATA_decreasedDamageTakenFromWaterSpells": "-${value}% урона, получаемого от заклинаний воды",
    "MODIFIER_DATA_increasedDamageTakenFromEarthSpells": "+ ${value}% урона, получаемого от заклинаний земли",
    "MODIFIER_DATA_decreasedDamageTakenFromEarthSpells": "-${value}% урона, получаемого от заклинаний земли",
    "MODIFIER_DATA_increasedDamageTakenFromFireSpells": "+ ${value}% урона, получаемого от огненных заклинаний",
    "MODIFIER_DATA_decreasedDamageTakenFromFireSpells": "-${value}% Урон, получаемый от огненных заклинаний",

    // #### Area type
    "MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters": "+ ${value}% Max Hit для борьбы с региональными монстрами",
    "MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters": "-${value}% Max Hit для борьбы с монстрами, находящимися в зоне поражения",
    "MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters": "+ ${value} Максимальное попадание для борьбы с региональными монстрами",
    "MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters": "-${value} Максимальное количество попаданий для борьбы с монстрами, находящимися в зоне поражения",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters": "+ ${value}% минимального попадания для борьбы с монстрами, обитающими в зоне поражения",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters": "-${value}% Минимальное количество попаданий для борьбы с монстрами, обитающими на территории",
    "MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters": "+ ${value} Минимальное попадание для борьбы с региональными монстрами",
    "MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters": "- ${value} Минимальное количество попаданий для борьбы с монстрами, обитающими на территории",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters": "+${value}% рейтинга точности против монстров боевой зоны",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters": "-${value}% рейтинга точности против монстров боевой зоны",
    "MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters": "+ ${value}% снижения урона против монстров боевой зоны",
    "MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters": "-${value}% снижения урона против монстров боевой зоны",

    "MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters": "+${value}% Максимальное количество ударов, наносимых монстрам в зоне поражения",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters": "-${value}% Максимальное количество ударов, наносимых монстрам в зоне поражения",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters": "+ ${value} Максимальное количество ударов, наносимых монстрам в зоне поражения",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters": "- ${value} Максимальное попадание в истребителя зональных монстров",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "+ ${value}% Минимальное количество ударов для уничтожения монстров в зоне поражения",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "-${value}% Минимальное количество попаданий для уничтожения монстров в зоне",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters": "+ ${value} Минимальное попадание в истребляемых монстров",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters": "- ${value} Минимальное количество ударов для уничтожения монстров в зоне",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters": "+ ${value}% рейтинга точности против монстров зоны поражения",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters": "-${value}% рейтинга точности против монстров зоны истребления",
    "MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters": "+ ${value}% снижения урона против монстров зоны поражения",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters": "-${value}% снижения урона против монстров зоны поражения",

    "MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters": "+${value}% Максимальное попадание в монстров подземелья",
    "MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters": "-${value}% Максимальное попадание в монстров подземелья",
    "MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters": "+ ${value} Максимальное попадание в монстров подземелья",
    "MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters": "-${value} Максимальное попадание в монстров подземелья",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters": "+ ${value}% Минимальное попадание в монстров подземелья",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters": "-${value}% Минимальное попадание в монстров подземелья",
    "MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters": "+ ${value} Минимальное попадание в монстров подземелья",
    "MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters": "-${value} Минимальное попадание в монстров подземелья",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters": "+${value}% рейтинга точности против монстров подземелья",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters": "-${value}% рейтинга точности против монстров подземелья",
    "MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters": "+ ${value}% снижения урона против монстров подземелий",
    "MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters": "-${value}% снижения урона против монстров подземелий",

    // #### Slayer task
    "MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks": "+ ${value}% Макс. хит к заданиям Истребителя",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks": "-${value}% Максимальный удар к заданиям Истребителя",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks": "+ ${value} Максимальный хит к заданиям Истребителя",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks": "-${value} Максимальное попадание в задания Истребителя",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks": "+ ${value}% Минимальный хит к заданиям Истребителя",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks": "-${value}% Минимальный хит к заданиям Истребителя",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerTasks": "+ ${value} Минимальный хит к заданиям Истребителя",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks": "-${value} Минимальный удар по заданиям истребителя",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks": "+${value}% рейтинга точности против заданий Истребителя",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks": "-${value}% рейтинга точности против заданий Истребителя",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks": "-${value}% снижения урона против заданий Истребителя",

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    "MONSTER_TYPE_SINGULAR_Animal": "Животные",
    "MONSTER_TYPE_PLURAL_Animal": "Животные",
    "MONSTER_TYPE_SINGULAR_Demon": "Демон",
    "MONSTER_TYPE_PLURAL_Demon": "Демоны",
    "MONSTER_TYPE_SINGULAR_Dragon": "Дракон",
    "MONSTER_TYPE_PLURAL_Dragon": "Драконы",
    "MONSTER_TYPE_SINGULAR_Elemental": "Элементарный",
    "MONSTER_TYPE_PLURAL_Elemental": "Элементали",
    "MONSTER_TYPE_SINGULAR_Human": "Человек",
    "MONSTER_TYPE_PLURAL_Human": "Люди",
    "MONSTER_TYPE_SINGULAR_MythicalCreature": "Мифическое существо",
    "MONSTER_TYPE_PLURAL_MythicalCreature": "Мифические существа",
    "MONSTER_TYPE_SINGULAR_SeaCreature": "Морское существо",
    "MONSTER_TYPE_PLURAL_SeaCreature": "Морские существа",
    "MONSTER_TYPE_SINGULAR_Undead": "Нежить",
    "MONSTER_TYPE_PLURAL_Undead": "Нежить",

    "COMBAT_MISC_Monster_Type_Trait_Modifier_Effect": "Черта ${monsterType}",
    "COMBAT_MISC_Monster_Type_Trait_Stacking_Effect": "Черта ${monsterType}",

    "MODIFIER_DATA_MonsterTypeTraitApplied": "Помечает пострадавшего как ${monsterType}",
    "MODIFIER_DATA_increasedDamageAgainstMonsterType": "+${value}% Damage To ${monsterType}",
    "MODIFIER_DATA_decreasedDamageAgainstMonsterType": "-${value}% Damage To ${monsterType}",
    "MODIFIER_DATA_increasedDamageTakenFromMonsterType": "+${value}% урона, получаемого от ${monsterType}",
    "MODIFIER_DATA_decreasedDamageTakenFromMonsterType": "-${value}% Урон, полученный от ${monsterType}",
    "MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType": "+${value}% Max Hit при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType": "-${value}% Max Hit при сражении с ${monsterType}",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType": "+${value} Максимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType": "-${value} Максимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType": "+${value}% Минимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType": "-${value}% Минимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType": "+${value} Минимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType": "-${value} Минимальное попадание при сражении с ${monsterType}",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType": "+${value}% рейтинга точности при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType": "-${value}% рейтинга точности при сражении с ${monsterType}",
    "MODIFIER_DATA_increasedDamageReductionAgainstMonsterType": "+${value}% снижения урона при сражении с ${monsterType}",
    "MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType": "-${value}% снижения урона при сражении с ${monsterType}",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "+${value}% шанс применить свойство ${monsterType} на весь бой при спавне или возрождении",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "-${value}% шанс применить свойство ${monsterType} на весь бой при спауне или возрождении",
    "MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn": "Наложите на врага признак ${monsterType} на ${value} всех ходов врага при спауне или возрождении",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait": "+${value}% шанс применить черту ${monsterType} на один из ходов врага",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait": "-${value}% шанс применить признак ${monsterType} на один из ходов врага",
    "MODIFIER_DATA_applyMonsterTypeTraitTurns": "Наложите на врага признак ${monsterType} на ${value} ходов врага",

    // #### Bosses
    "MODIFIER_DATA_increasedMaxHitPercentAgainstBosses": "+ ${value}% Max Hit при сражении с боссами",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses": "-${value}% Max Hit при сражении с боссами",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstBosses": "+ ${value} Максимальное попадание при сражении с боссами",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses": "- ${value} Максимальное попадание при сражении с боссами",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses": "+ ${value}% Минимальное попадание при сражении с боссами",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses": "-${value}% Минимальное попадание при сражении с боссами",
    "MODIFIER_DATA_increasedFlatMinHitAgainstBosses": "+ ${value} Минимальное попадание при сражении с боссами",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstBosses": "- ${value} Минимальное попадание при сражении с боссами",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses": "+ ${value}% рейтинга точности при сражении с боссами",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses": "-${value}% рейтинга точности при сражении с боссами",

    // #### Skilling
    "MODIFIER_DATA_increasedThievingDamagePreventionThreshold": "+ ${value} порог предотвращения воровского урона (любой всплеск урона ниже порога снижается до 0)",
    "MODIFIER_DATA_decreasedThievingDamagePreventionThreshold": "-${value} порог предотвращения воровского урона (любой всплеск урона ниже порога снижается до 0)",
    "MODIFIER_DATA_increasedGlobalSkillXPPerLevel": "+ ${value}% Global Skill XP за уровень в текущем навыке",
    "MODIFIER_DATA_decreasedGlobalSkillXPPerLevel": "-${value}% Global Skill XP за уровень в текущем навыке",
    "MODIFIER_DATA_increasedSkillXPPerSkillLevel": "+${value}% ${skillName} Skill XP за уровень в ${skillName}",
    "MODIFIER_DATA_decreasedSkillXPPerSkillLevel": "-${value}% ${skillName} Навык XP за уровень в ${skillName}",
    "MODIFIER_DATA_increasedFlatGlobalSkillXP": "+ ${value} Global Skill XP (добавляется после % модификаторов)",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXP": "-${value} Глобальный навык XP (добавляется после % модификаторов)",
    "MODIFIER_DATA_increasedFlatSkillXP": "+${value} ${skillName} Skill XP (добавляется после % модификаторов)",
    "MODIFIER_DATA_decreasedFlatSkillXP": "-${value} ${skillName} Skill XP (добавляется после % модификаторов)",
    "MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel": "+ ${value} Global Skill XP за уровень в текущем навыке (добавляется после модификаторов %)",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel": "-${value} Global Skill XP за уровень в текущем навыке (добавляется после модификаторов %)",
    "MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel": "+${value} ${skillName} Skill XP за уровень в ${skillName} (добавляется после % модификаторов)",
    "MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel": "-${value} ${skillName} XP за уровень навыка в ${skillName} (добавляется после модификаторов %)"
};