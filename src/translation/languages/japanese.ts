export const ja = {
    "Combat_Modifier_UI_Impact_Indicator_Headline": "Cmim-Modの警告",
    "Combat_Modifier_UI_Impact_Indicator_Text": "現在、少なくとも1人の戦闘員が、被ダメージを0にするモディファイアの恩恵を受けています。このモディファイアの実装方法/場所により、ダメージ表示（最大命中率など）が、現実的にはありえないほど強い敵であっても、誤って0と表示される可能性があります。",
    "Combat_Modifier_UI_Impact_Indicator_Hint": "この警告はMODの設定でオフにすることができる。",
    "Combat_Area_Boss_Indicator": "ボス",

    // ### Settings
    // #### Combat Areas Indicators section
    "Settings_Section_Indicators": "指標",

    // ##### Enable modifier ui impact indicator
    "Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator": "特定のモディファイアがUIの表示に不具合を生じさせる可能性がある場合に、インジケータを有効にする。",
    "Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator": "現在のところ、1つのモディファイアにのみ影響する。表示されるインジケータは、より詳細な情報を提供します。",

    // ##### Enable boss indicators
    "Settings_Setting_Label_Enable_Boss_Indicators": "ボスのインジケーターを有効にする",
    "Settings_Setting_Hint_Enable_Boss_Indicators": "通常、ダンジョンの最後のモンスターだけがボスに分類される。しかし、このルールには例外があり、戦闘エリアやスレイヤー・エリアにいるモンスターもボスに分類されることがあります。",

    // ##### Enable active monster type indicators
    "Settings_Setting_Label_Enable_Active_Monster_Type_Indicators": "アクティブモンスターのタイプ表示を有効にする",
    "Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators": "モンスター／ダンジョンの選択メニューに、ネイティブ・モンスター・タイプの割り当てを示す緑色のバッジを追加",

    // ##### Enable inactive monster type indicators
    "Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators": "アクティブでないモンスタータイプのインジケーターを有効にする",
    "Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators": "モンスター／ダンジョン選択メニューに、ネイティブ・モンスター・タイプの割り当てを示すオレンジ色のバッジを追加",

    // #### Disabling section
    "Settings_Section_Disabling": "無効化",

    // ##### Info label
    "Settings_Setting_Label_Disabling_Info": "このセクションは、このMODの機能の特定の部分を無効にする方法として機能します。コンテンツを意図的に簡単にしたり難しくしたりすることはさておき、このMODを実行したくなるもう一つの主な理由は、このMODがかなりの量の計算時間を追加することになり、オフラインゲインのロード時間の顕著な増加につながるかもしれないからです（特に、モンスタータイプのシステムが利用されている場合）。そのため、いくつかのコードを実行できないようにすることで、顕著なパフォーマンスの向上が期待できます。",

    // ##### On-spawn modifiers
    "Settings_Setting_Label_Disable_All_On_Spawn_Modifiers": "オンスポーン・モディファイアを無効にする",
    "Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers": "このMODによって追加されたすべてのon-spawnモディファイアを無効にする。",

    // ##### Keep specific monster types inactive
    "Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive": "特定のモンスターを非アクティブにする",
    "Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive": "選択されたモンスタータイプは、どのMODが何を伝えようとも、強制的に非アクティブになります。他のMODによって追加されたモンスタータイプは、そのMODなしでセーブをロードした場合、チェックボックスの状態を失います。",

    // #### Enabling section
    "Settings_Section_Enabling": "使用可能",

    // ##### Info label
    "Settings_Setting_Label_Enabling_Info": "このセクションは、ユーザーとしては関係ないことがほとんどでしょう。しかし、使用しているMODによっては、ある機能を利用しているにもかかわらず、その必要性をどのMODも伝えていないために、自分でアクティベートしなければならない状況に遭遇することがあります。その場合、このセクションを利用することで、自分でアクティベーションを行うことができます。",

    // ##### Force specific monster types active
    "Settings_Setting_Label_Force_Specific_Monster_Types_Active": "特定のモンスターを強制的にアクティブにする",
    "Settings_Setting_Hint_Force_Specific_Monster_Types_Active": "選択されたモンスタータイプは、MODの通信に関係なく、強制的にアクティブになります。他のMODによって追加されたモンスタータイプはチェックボックスの状態を失います。",

    // #### Save & Reload section
    "Settings_Section_Save_And_Reload": "すべて保存してリロード",

    // ##### Save & Reload button
    "Settings_Hint_Save_Reload_Required": "リロードが必要",
    "Settings_Setting_Display_Save_Reload": "すべて保存してリロード",

    // ### Monster type overview
    "PAGE_NAME_Monster_Types_Overview": "モンスターの種類",
    "Monster_Type_Overview_Remarks_Prefix": "以下の点にご注意ください：",
    "Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types": "Melvorはタイプ定義を継承していない。その代わりに、\"Custom Modifiers in Melvor\" MODがモンスターのタイプを定義し、割り当てるためのMODの基礎を築いた。",
    "Monster_Type_Overview_Remarks_Displayed_Type_Allocation": "この表示では、定義されたすべてのタイプ・アロケーションが表示される。もしモンスターがセクションに表示されていなければ、そのような型は定義されていないことになる。つまり、タイプ定義は不正確かもしれません。調整すべきと思うことがあれば、遠慮なくフィードバックしてください。",
    "Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation": "他のMODによって追加されたモンスターは、そのMODが自分でタイプ定義を設定しなければならない。",
    "Monster_Type_Overview_Player_Traits_Tab_Header": "選手の特徴",
    "Monster_Type_Overview_Player_Traits_Information_Type_Allocation": "有機的なタイプの割り当てとは別に、タイプはそれぞれのモディファイアの使用によって強制的に適用することもできる。",
    "Monster_Type_Overview_Player_Traits_Information_Display": "この概要では、現在キャラクターに影響を及ぼしているすべてのタイプ（および修正値）が表示されます。",
    "Monster_Type_Overview_Player_Traits_Information_Data_Loaded": "この表示は静的で、キャラクターがロードされた時に基づいている。",
    "Monster_Type_Overview_Player_Traits_No_Entries": "そのキャラクターは、どのタイプ配分修正にも影響されない。",
    "Monster_Type_Overview_Active_Types_Tab_Header": "アクティブタイプ",
    "Monster_Type_Overview_Active_Types_Information": "アクティブなタイプとは、ロードされているMODの少なくとも1つによって実際に使用されているものです。",
    "Monster_Type_Overview_Active_Types_No_Entries": "現在、アクティブなタイプはない",
    "Monster_Type_Overview_Inactive_Types_Tab_Header": "非アクティブ・タイプ",
    "Monster_Type_Overview_Inactive_Types_Information": "非アクティブタイプとは、定義されてはいるが実際にはどのMODでも使用されていないタイプのことである。そのため、戦闘中にチェックされることもなく、計算時間にも影響しない。",
    "Monster_Type_Overview_Inactive_Types_No_Entries": "現在、活動休止中のタイプはない",
    "Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings": "MOD設定での選択によりアクティブになれない",

    // ### Modifiers
    // #### Directly affecting damage dealt
    "MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero": "+確率(MAX: 90%)で、攻撃から受けるダメージを0にする(命中したものとして扱われ、ダメージオーバータイムなどの命中時効果の計算には影響しない)",
    "MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero": "-${value}%の確率(MAX\": 90%)で、攻撃から受けるダメージを0にする(それでも命中したものとして扱われ、ダメージ・オーバー・タイムなどの命中時効果の計算には影響しない)",
    "MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP": "対象のHPが満タンの間、+${value}ダメージ",
    "MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP": "対象のHPが満タンの間、-${value}ダメージ",
    "MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP": "対象のHPが満タンの間、+${value}%ダメージ",
    "MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP": "対象のHPが満タンの間、-${value}%ダメージ",
    "MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction": "敵のダメージ軽減の影響を受けない+${value}ダメージ。",
    "MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction": "敵のダメージ軽減の影響を受けない-${value}ダメージ。",
    "MODIFIER_DATA_increasedGlobalDamagePreventionThreshold": "+${value} グローバルダメージ防止しきい値 (しきい値以下のダメージは 0 になる)",
    "MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold": "-${value} グローバルダメージ防止しきい値 (しきい値以下のダメージは 0 になる)",
    "MODIFIER_DATA_increasedDamagePreventionThreshold": "+${value} ダメージ防止しきい値 (しきい値以下のダメージは 0 になる)",
    "MODIFIER_DATA_decreasedDamagePreventionThreshold": "-${value}ダメージ防止しきい値 (しきい値以下のダメージは 0 になる)",
    "MODIFIER_DATA_increasedBarrierDamagePreventionThreshold": "+${value} バリアダメージ防止しきい値 (しきい値以下のバリアに対するダメージは 0 になる)",
    "MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold": "-${value} バリアダメージ防止しきい値 (しきい値以下のバリアに対するダメージはすべて 0 になる)",

    // #### Spawn
    "MODIFIER_DATA_increasedChanceToApplySlowOnSpawn": "+${value}%の確率で、スポーンまたは蘇生時に対象に3ターンの間、攻撃間隔を25%増加させる。",
    "MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に3ターンの間、攻撃間隔を25%増加させる。",
    "MODIFIER_DATA_increasedChanceToApplyStunOnSpawn": "+${value}%の確率で、スポーンまたは復活時に対象に1ターンの間スタンを適用する。",
    "MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に1ターンの間スタンを適用する。",
    "MODIFIER_DATA_applyStunOnSpawn": "スポーンまたは復活時に対象に${value}ターンのスタンを与える。",
    "MODIFIER_DATA_applyStunOnSpawn_Plural": "スポーンまたは復活時に対象に${value}ターンのスタンを与える。",
    "MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn": "スポーン時か復活時に+${value}%の確率で対象に毒を付与する。",
    "MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に毒を適用する。",
    "MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn": "+${value}%の確率で、スポーン時か復活時に対象に猛毒を付与する。",
    "MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn": "-${value}%の確率で、スポーン時か復活時に対象に猛毒を塗る。",
    "MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn": "+${value}%の確率で、スポーン時か復活時に対象に苦悩を1スタック与える。",
    "MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn": "-${value}%の確率で、スポーン時か復活時に対象に苦悩を1スタック与える。",
    "MODIFIER_DATA_applyAfflictionOnSpawn": "スポーンまたは復活時に${value}スタックのAfflictionを対象に与える。",
    "MODIFIER_DATA_applyAfflictionOnSpawn_Plural": "スポーンまたは復活時に${value}スタックのAfflictionを対象に与える。",
    "MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn": "+${value}%の確率で出血を与え、スポーン時か復活時に対象に10秒間、最大命中の100%のダメージを与える。",
    "MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn": "-${value}%の確率で出血を与え、スポーン時か蘇生時に対象に10秒間、最大命中の100%のダメージを与える。",
    "MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn": "+${value}%の確率で、スポーン時か復活時に、対象に2.5秒かけて現在のHPの15%の火傷を与える。",
    "MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn": "-${value}%の確率で、スポーン時か復活時に、対象に2.5秒かけて現在のHPの15%の火傷を与える。",
    "MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn": "+${value}%の確率で、スポーンまたは復活時に対象に1ターンの間凍結を適用する。",
    "MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に1ターンの間凍結を適用する。",
    "MODIFIER_DATA_applyFreezeOnSpawn": "スポーンまたは復活時に${value}ターンの凍結を適用する。",
    "MODIFIER_DATA_applyFreezeOnSpawn_Plural": "スポーンまたは復活時に${value}ターンの凍結を適用する。",
    "MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn": "+${value}%の確率で、スポーンまたは復活時に対象に3ターンの間フロストバーンを適用する。",
    "MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に3ターンの間フロストバーンを適用する。",
    "MODIFIER_DATA_increasedChanceToApplyShockOnSpawn": "+${value}%の確率で、スポーンまたは復活時に対象に1スタックのショックを与える。",
    "MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に1スタックのショックを与える。",
    "MODIFIER_DATA_applyShockOnSpawn": "スポーンまたは蘇生時に${value}スタックのShockを対象に与える。",
    "MODIFIER_DATA_applyShockOnSpawn_Plural": "スポーンまたは蘇生時に${value}スタックのShockを対象に与える。",
    "MODIFIER_DATA_increasedChanceToApplySleepOnSpawn": "+${value}%の確率で、スポーンまたは蘇生時に対象に1ターンの間睡眠を与える。",
    "MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn": "-${value}%の確率で、スポーンまたは復活時に対象に1ターンの間睡眠を与える。",
    "MODIFIER_DATA_applySleepOnSpawn": "スポーンまたは蘇生時に対象に${value}ターンの睡眠を与える。",
    "MODIFIER_DATA_applySleepOnSpawn_Plural": "スポーンまたは蘇生時に対象に${value}ターンの睡眠を与える。",

    // #### On hit
    "MODIFIER_DATA_increasedChanceToApplyBleed": "+攻撃命中時、${value}%の確率で10秒間、最大命中の100%のダメージを与えるBleedを与える。",
    "MODIFIER_DATA_decreasedChanceToApplyBleed": "-攻撃命中時、${value}%の確率で10秒間、最大命中の100%のダメージを与えるBleedを与える。",

    // #### Death mark (not to be confused with mark of death)
    "Death_Mark_Notification_Text": "あなたはデスマークによって処刑された",
    "COMBAT_MISC_Death_Mark_Effect": "デスマーク",
    "MODIFIER_DATA_deathMark": "最大HPの残り割合がスタック数（最大20% / 5,000）を下回った場合、即座に実行される。",
    "MODIFIER_DATA_increasedDeathMarkOnHit": "+値}。攻撃命中時にデスマークのスタックが適用される",
    "MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark": "敵に+${value}%の確率でデスマークを1スタックつける。",
    "MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark": "-敵に${value}%の確率でデスマークを1スタックつける。",
    "MODIFIER_DATA_increasedDeathMarkImmunity": "デスマークのスタックに抵抗する確率+${value}%。",
    "MODIFIER_DATA_decreasedDeathMarkImmunity": "-${value}%の確率でデスマークのスタックに抵抗する。",
    "MODIFIER_DATA_applyDeathMarkOnSpawn": "スポーンまたは蘇生時に${value}スタックのDeath Markを対象に適用する。",
    "MODIFIER_DATA_applyDeathMarkOnSpawn_Plural": "スポーン時または復活時に、対象に${value}スタックのDeath Markを適用する。",

    // #### Spell type
    "MODIFIER_DATA_increasedDamageTakenFromAirSpells": "+空中呪文から受けるダメージの$${value}%を増加させる。",
    "MODIFIER_DATA_decreasedDamageTakenFromAirSpells": "-${value}%空中呪文から受けるダメージ",
    "MODIFIER_DATA_increasedDamageTakenFromWaterSpells": "+水の呪文から受けるダメージの$${value}%を増加させる。",
    "MODIFIER_DATA_decreasedDamageTakenFromWaterSpells": "-${value}%水の呪文から受けるダメージ",
    "MODIFIER_DATA_increasedDamageTakenFromEarthSpells": "+大地の呪文から受けるダメージの${value}%を増加させる。",
    "MODIFIER_DATA_decreasedDamageTakenFromEarthSpells": "-大地の呪文から受けるダメージは${value}%です。",
    "MODIFIER_DATA_increasedDamageTakenFromFireSpells": "+火属性の呪文から受けるダメージの${value}%を増加させる。",
    "MODIFIER_DATA_decreasedDamageTakenFromFireSpells": "-${value}%火の呪文から受けるダメージ",

    // #### Area type
    "MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters": "エリア内モンスターとの戦闘に対する命中率+${value}%。",
    "MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters": "-${value}%エリアモンスターと戦闘するための最大命中率",
    "MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters": "エリアモンスターと戦闘するための命中最大値+${value}。",
    "MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters": "-${value}エリアモンスターと戦闘するための命中最大値",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters": "エリアモンスターと戦うための最低命中率 +${value｝",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters": "-${value}%エリアモンスターと戦闘するための最低命中率",
    "MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters": "エリア・モンスターと戦闘するための最低命中+${value}。",
    "MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters": "-${value}エリアモンスターと戦闘するための最低命中率",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters": "戦闘エリアモンスターに対する命中率+${value}%。",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters": "戦闘エリアモンスターに対する命中率-${value}%。",
    "MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters": "戦闘範囲モンスターに対するダメージ軽減+${value}%。",
    "MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters": "戦闘範囲モンスターに対するダメージを-${value}%軽減する。",

    "MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters": "スレイヤー・エリア・モンスターへの命中最大値+${value}%。",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters": "-${value}%エリアモンスターをスレイヤーする最大命中率",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters": "最大命中+${value} エリアモンスターをスレイヤーする。",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters": "-${value}エリアモンスターをスレイヤーするための最大ヒット数",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "スレイヤー・エリア・モンスターへの最低命中率 +${value｝",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters": "-${value}%エリアモンスターをスレイヤーするための最低命中率",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters": "+value}エリア・モンスターをスレイヤーするための最低命中率。",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters": "-${value}エリアモンスターをスレイヤーするための最低命中率",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters": "スレイヤー・エリアモンスターに対する命中率+${value}%。",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters": "スレイヤー・エリアモンスターに対する命中率-${value}%。",
    "MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters": "スレイヤーエリアモンスターに対するダメージ軽減+${value}%。",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters": "スレイヤー・エリアモンスターに対するダメージを-${value}%軽減する。",

    "MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters": "+${value}% ダンジョンモンスターへの最大命中率",
    "MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters": "-${value}%ダンジョンモンスターへの最大命中率",
    "MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters": "+${value} ダンジョンモンスターへの最大命中率",
    "MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters": "-${value}ダンジョンモンスターへの最大命中率",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters": "+${value}% ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters": "-${value}%ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters": "+${value} ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters": "+${value} ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters": "+${value} ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters": "+${value} ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters": "+${value} ダンジョンモンスターへの最低命中率",
    "MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters": "ダンジョンモンスターに対して-${value}%ダメージ軽減。",

    // #### Slayer task
    "MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks": "+${value}% スレイヤータスクの最大ヒット数",
    "MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks": "-${value}%スレイヤータスクの最大ヒット数",
    "MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks": "+値} スレイヤータスクの最大ヒット数",
    "MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks": "-${value}スレイヤータスクの最大ヒット数",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks": "+${value}% スレイヤータスクの最低命中率",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks": "-${value}%スレイヤータスクの最小ヒット数",
    "MODIFIER_DATA_increasedFlatMinHitToSlayerTasks": "+値} スレイヤータスクの最小ヒット数",
    "MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks": "-${value}スレイヤータスクの最小ヒット数",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks": "スレイヤータスクに対する精度評価+${value}%。",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks": "-${value}%スレイヤータスクに対する精度評価",
    "MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks": "スレイヤータスクに対するダメージを-${value}%軽減する。",

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    "MONSTER_TYPE_SINGULAR_Animal": "動物",
    "MONSTER_TYPE_PLURAL_Animal": "動物",
    "MONSTER_TYPE_SINGULAR_Demon": "デーモン",
    "MONSTER_TYPE_PLURAL_Demon": "悪魔",
    "MONSTER_TYPE_SINGULAR_Dragon": "ドラゴン",
    "MONSTER_TYPE_PLURAL_Dragon": "ドラゴン",
    "MONSTER_TYPE_SINGULAR_Elemental": "エレメンタル",
    "MONSTER_TYPE_PLURAL_Elemental": "エレメンタル",
    "MONSTER_TYPE_SINGULAR_Human": "人間",
    "MONSTER_TYPE_PLURAL_Human": "人間",
    "MONSTER_TYPE_SINGULAR_MythicalCreature": "神話上の生き物",
    "MONSTER_TYPE_PLURAL_MythicalCreature": "神話の生き物",
    "MONSTER_TYPE_SINGULAR_SeaCreature": "海の生き物",
    "MONSTER_TYPE_PLURAL_SeaCreature": "海の生き物",
    "MONSTER_TYPE_SINGULAR_Undead": "アンデッド",
    "MONSTER_TYPE_PLURAL_Undead": "アンデッド",

    "COMBAT_MISC_Monster_Type_Trait_Modifier_Effect": "${monsterType}。特性",
    "COMBAT_MISC_Monster_Type_Trait_Stacking_Effect": "${monsterType}。特性",

    "MODIFIER_DATA_MonsterTypeTraitApplied": "影響を受けるものを${monsterType}としてマークします。",
    "MODIFIER_DATA_increasedDamageAgainstMonsterType": "+${value}%ダメージを${monsterType}に与える。",
    "MODIFIER_DATA_decreasedDamageAgainstMonsterType": "-${value}%ダメージを${monsterType}に与える。",
    "MODIFIER_DATA_increasedDamageTakenFromMonsterType": "+${value}% ${monsterType}から受けるダメージ。",
    "MODIFIER_DATA_decreasedDamageTakenFromMonsterType": "-${value}% ${monsterType}から受けるダメージ。",
    "MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType": "モンスタータイプ}と戦闘したときの命中率+${value}%。",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType": "-${value}%最大命中 ${monsterType}との戦闘時",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType": "+monsterType}と戦うときの命中最大値。",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType": "-${value} ${monsterType}と戦うときの最大命中。",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType": "モンスタータイプ}と戦闘したときの最低命中率 +${value",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType": "-value}% ${monsterType}と戦うときの最低命中率。",
    "MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType": "${monsterType}と戦うときの最低命中率 +${value",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType": "-${value} ${monsterType}と戦うときの最低命中率。",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType": "${monsterType}との戦闘時、命中率+${value}%。",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType": "-${value}%精度は${monsterType}と戦うときに評価されます。",
    "MODIFIER_DATA_increasedDamageReductionAgainstMonsterType": "${monsterType}との戦闘時、+${value}%ダメージ軽減。",
    "MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType": "-${value}%ダメージ軽減（${monsterType}との戦闘時",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "+${value}%の確率で、スポーンまたは復活時に戦闘全体に${monsterType}の特性を適用する。",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn": "-${value}%の確率で、スポーンまたは復活時に戦闘全体に${monsterType}の特性を適用する。",
    "MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn": "敵に${monsterType}の特性を${value}ターンの間適用する。",

    "MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait": "敵の1ターンの間、+${value}%の確率で${monsterType}の特性を適用する。",
    "MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait": "-敵の1ターンの間、${value}%の確率で${monsterType}の特性を適用する。",
    "MODIFIER_DATA_applyMonsterTypeTraitTurns": "敵の${value}ターンの間、敵に${monsterType}の特性を適用する。",

    // #### Bosses
    "MODIFIER_DATA_increasedMaxHitPercentAgainstBosses": "ボス戦時の命中率+${value}%。",
    "MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses": "ボス戦時の命中率-${value}%。",
    "MODIFIER_DATA_increasedMaxHitFlatAgainstBosses": "ボス戦時の最大命中+${value}。",
    "MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses": "-${value}ボス戦時の最大命中率",
    "MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses": "ボス戦時の最低命中+${value}%。",
    "MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses": "-${value}%ボス戦時の最低命中率",
    "MODIFIER_DATA_increasedFlatMinHitAgainstBosses": "+${value} ボス戦の最低命中率",
    "MODIFIER_DATA_decreasedFlatMinHitAgainstBosses": "-${value}ボスと戦うときの最低命中率",
    "MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses": "ボスとの戦闘時、+${value}%の精度を得る。",
    "MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses": "-${value}%ボス戦時の精度評価",

    // #### Skilling
    "MODIFIER_DATA_increasedThievingDamagePreventionThreshold": "+${value} 泥棒ダメージ防止しきい値 (しきい値以下のダメージは0になる)",
    "MODIFIER_DATA_decreasedThievingDamagePreventionThreshold": "-${value}泥棒ダメージ防止しきい値 (しきい値以下のダメージは0になる)",
    "MODIFIER_DATA_increasedGlobalSkillXPPerLevel": "+現在トレーニング中のスキルのレベルにつき${value}%のグローバルスキルXPを獲得する。",
    "MODIFIER_DATA_decreasedGlobalSkillXPPerLevel": "-${value}%現在トレーニング中のスキルのレベルごとのグローバルスキルXP",
    "MODIFIER_DATA_increasedSkillXPPerSkillLevel": "+${value}% ${skillName}のレベルごとのスキルXP。",
    "MODIFIER_DATA_decreasedSkillXPPerSkillLevel": "-${value}% ${skillName}のレベルごとのスキルXP。",
    "MODIFIER_DATA_increasedFlatGlobalSkillXP": "+${value} グローバル・スキルXP (%修正後に追加)",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXP": "-${value}グローバル・スキルXP（%修正の後に追加される）",
    "MODIFIER_DATA_increasedFlatSkillXP": "+${value} ${skillName}スキルXP (%修飾の後に追加)",
    "MODIFIER_DATA_decreasedFlatSkillXP": "-${value} ${skillName} スキル XP (% 修飾の後に追加)",
    "MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel": "+現在トレーニングしているスキルのレベルごとに、${value}グローバルスキルXPを追加する。",
    "MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel": "-${value} 現在訓練しているスキルのレベルごとのグローバルスキルXP (% 修飾の後に追加される)",
    "MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel": "+${value} ${skillName}のレベルごとのスキルXP (%修正の後に追加)",
    "MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel": "-${value} ${skillName} のレベルごとのスキル XP (% 修飾の後に追加)"
};