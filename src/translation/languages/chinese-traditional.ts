export const zhTW = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Cmim-Mod 警告',
    Combat_Modifier_UI_Impact_Indicator_Text: "目前至少有一名戰鬥員受益於一個修改器，該修改器有機會將受到的傷害減少到 0。由於該修改器的實施方式/地點，傷害顯示（例如最大命中）可能會錯誤地呈現為 0，即使敵人太強大，這實際上是不可能的。",
    Combat_Modifier_UI_Impact_Indicator_Hint: '可以在模組設定中關閉此警告',
    Combat_Area_Boss_Indicator: '老闆',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Indicators: '指標',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: '啟用指示器，當某些修飾符可能導致使用者介面顯示錯誤時',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: '目前僅影響一項修改器。 顯示的指示器提供更多信息',

    // ##### Enable boss indicators
    Settings_Setting_Label_Enable_Boss_Indicators: '啟用老闆指標',
    Settings_Setting_Hint_Enable_Boss_Indicators: "通常，只有地下城的最後一個怪物才會被歸類為 老闆。 不過，此規則可能有例外，戰鬥區域或殺手區域中的怪物也可能被歸類為 老闆，此設定將突出顯示這一點",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: '啟用活躍怪物類型指示器',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: '在怪物/地下城選擇選單中新增綠色徽章，指示本地怪物類型分配',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: '啟用非活動怪物類型指示器',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: '在怪物/地牢選擇選單中添加橙色徽章，指示本地怪物類型分配',

    // #### Disabling section
    Settings_Section_Disabling: '停用',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "此部分用作停用此 mod 功能的某些部分的方法。 除了有目的地讓內容變得更容易/更難之外，您可能想要這樣做的另一個主要原因是因為這個模組最終可能會增加大量的計算時間，導致離線增益的載入時間顯著增加（特別是，如果正在使用怪物類型系統）。 因此，完全禁用某些程式碼的運行可能會帶來顯著的效能改進。",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: '禁用生成時修改器',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: '停用此 mod 新增的所有生成修改器',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: '保持特定怪物類型不活動',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: '強制選定的怪物類型保持不活動狀態，無論任何模組可能進行何種通訊。 如果您碰巧在沒有所述模組的情況下加載您的保存，則其他模組添加的怪物類型將失去其複選框狀態',

    // #### Enabling section
    Settings_Section_Enabling: '啟用',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: '本節很可能與使用者無關。 然而，根據所使用的模組，您可能會遇到必須自己啟動某些功能的情況，因為儘管被使用，但沒有模組傳達其必要性。 在這種情況下，此部分可讓您自行處理啟動。',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: '強制啟動特定怪物類型',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: '強制選定的怪物類型處於活動狀態（在不活動設定後評估），無論任何 mod 可能進行何種通訊。 如果您碰巧在沒有所述模組的情況下加載您的保存，則其他模組添加的怪物類型將失去其複選框狀態',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: '全部保存並重新加載',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: '需要重新加載',
    Settings_Setting_Display_Save_Reload: '全部保存並重新加載',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "怪物類型",

    Monster_Type_Overview_Remarks_Prefix: "請注意以下幾點：",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor 本身並不包含類型定義。 相反，\"Custom Modifiers in Melvor\"mod 為 mod 定義和分配怪物類型奠定了基礎",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "此顯示顯示所有已定義的類型分配。 如果怪物沒有顯示在某個部分中，那麼它們就不會這樣輸入。 話雖這麼說，類型定義可能不準確。 請隨時就您認為應該調整的任何內容提供回饋",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "對於透過其他模組添加的任何怪物，所述模組必須自行為這些怪物設定類型定義",

    Monster_Type_Overview_Player_Traits_Tab_Header: "球員特質",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "除了有機類型分配之外，還可以透過使用相應的修飾符來強制應用類型，通常是透過裝備的物品或可能的商店購買",
    Monster_Type_Overview_Player_Traits_Information_Display: '此概述顯示當前影響角色的所有類型（以及修改器的值） - 使用“Show Skill Modifiers”模組可以確定更多信息',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "此顯示是靜態的，基於角色載入的時間",
    Monster_Type_Overview_Player_Traits_No_Entries: "該字元不受任何類型分配修飾符的影響",

    Monster_Type_Overview_Active_Types_Tab_Header: "活躍類型",
    Monster_Type_Overview_Active_Types_Information: "活動類型是那些實際上被至少一個載入的 mods 使用的類型。",
    Monster_Type_Overview_Active_Types_No_Entries: "目前沒有活躍類型",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "不活躍類型",
    Monster_Type_Overview_Inactive_Types_Information: "非活動類型是那些已定義但實際上未被任何 mod 使用的類型。 因此，它們在戰鬥中也不會實際檢查，這意味著它們不會影響計算時間。",
    Monster_Type_Overview_Inactive_Types_No_Entries: "目前沒有不活動的類型",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "由於模組設定中的選擇而無法激活",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% 幾率（最大：90%）將攻擊造成的傷害降至 0（仍視為被擊中，且不影響持續傷害等擊中效果的計算）',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% 幾率（最大：90%）將攻擊造成的傷害降至 0（仍視為被擊中，且不影響持續傷害等擊中效果的計算）',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '當目標生命值滿時，+${value} 傷害',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '當目標生命值滿時，-${value} 傷害',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '當目標生命值滿時，+${value}% 傷害',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '當目標生命值滿時，-${value}% 傷害',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} 傷害，不受敵人傷害減免影響",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} 傷害，不受敵人傷害減免影響",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} 全域傷害預防閾值（任何低於閾值的傷害都會減少到 0）',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} 全域傷害預防閾值（任何低於閾值的傷害都會減少到 0）',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} 傷害預防閾值（任何低於閾值的傷害都會減少到 0）',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} 傷害預防閾值（任何低於閾值的傷害都會減少到 0）',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} 屏障損壞預防閾值（對低於閾值的屏障造成的任何損壞都會減少到 0）',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} 屏障損壞預防閾值（對低於閾值的屏障造成的任何損壞都會減少到 0）',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% 幾率在生成或復活時對目標施加 25% 增加的攻擊間隔三回合",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% 幾率在生成或復活時對目標施加 25% 增加的攻擊間隔三回合",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% 幾率在生成或復活時對目標施加眩暈一回合",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% 幾率在生成或復活時對目標施加眩暈一回合",
    MODIFIER_DATA_applyStunOnSpawn: "在生成或復活時對目標施加 ${value} 回合的眩暈",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "在生成或復活時對目標施加 ${value} 輪眩暈",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% 幾率在生成或復活時對目標施加毒藥",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% 幾率在生成或復活時對目標施加毒藥",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% 幾率在生成或復活時對目標施加致命毒藥",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% 幾率在生成或復活時對目標施加致命毒藥",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% 幾率在生成或復活時對目標施加一層痛苦",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% 幾率在生成或復活時對目標施加一層痛苦",
    MODIFIER_DATA_applyAfflictionOnSpawn: "在生成或復活時將 ${value} 堆疊的痛苦應用於目標",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "在生成或復活時對目標施加 ${value} 層痛苦",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% 幾率在生成或復活時對目標施加出血，在 10 秒內對目標造成 100% 的最大命中傷害",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% 幾率在生成或復活時對目標施加出血，在 10 秒內對目標造成 100% 的最大命中傷害",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% 幾率在生成或復活時對目標施加燃燒，在 2.5 秒內對目標造成 15% 的當前生命值",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% 幾率在生成或復活時對目標施加燃燒，在 2.5 秒內對目標造成 15% 的當前生命值",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% 幾率在生成或復活時對目標應用凍結一回合",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% 幾率在生成或復活時對目標應用凍結一回合",
    MODIFIER_DATA_applyFreezeOnSpawn: "在生成或復活時對目標套用 ${value} 凍結回合",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "在生成或復活時對目標施加 ${value} 輪凍結",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% 幾率在生成或復活時對目標施加霜凍三回合",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% 幾率在生成或復活時對目標施加霜凍三回合",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% 幾率在生成或復活時對目標施加一層衝擊",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% 幾率在生成或復活時對目標施加一層衝擊",
    MODIFIER_DATA_applyShockOnSpawn: "在生成或復活時向目標施加 ${value} 層電擊",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "在生成或復活時向目標施加 ${value} 層電擊",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% 幾率在生成或復活時對目標施加睡眠一回合",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% 幾率在生成或復活時對目標施加睡眠一回合",
    MODIFIER_DATA_applySleepOnSpawn: "在生成或復活時對目標施加 ${value} 輪睡眠",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "在生成或復活時對目標施加 ${value} 輪睡眠",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% 幾率造成出血，攻擊時造成 100% 最大傷害，持續 10 秒",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% 幾率造成出血，攻擊時造成 100% 最大傷害，持續 10 秒",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "你已經被死亡標記處決了",
    COMBAT_MISC_Death_Mark_Effect: "死亡印記",
    MODIFIER_DATA_deathMark: "如果剩餘最大HP百分比低於堆疊數量（MAX 20% / 5,000），則立即執行",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} 攻擊命中時疊加死亡印記",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% 幾率對敵人施加一層死亡印記",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% 幾率對敵人施加一層死亡印記",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% 抵抗死亡印記疊加的幾率",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% 抵抗死亡印記疊加的幾率",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "在生成或復活時將 ${value} 層死亡標記套用到目標",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "在生成或復活時向目標應用 ${value} 層死亡印記",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% 空氣法術造成的傷害",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% 空氣法術造成的傷害",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% 水係法術造成的傷害",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% 水係法術造成的傷害",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% 受到土係法術傷害",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% 受到土係法術傷害",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% 火焰法術造成的傷害",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% 火焰法術造成的傷害",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% 對抗區域怪獸的最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% 對抗區域怪獸的最大命中",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} 對抗區域怪獸的最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} 對抗區域怪獸的最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% 對抗區域怪獸的最低命中",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% 對抗區域怪獸的最低命中",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} 對抗區域怪獸的最低命中",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} 對抗區域怪獸的最低命中",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% 針對戰鬥區域怪物的準確度',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% 針對戰鬥區域怪物的準確度',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% 對戰鬥區域怪物的傷害減少',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% 對戰鬥區域怪物的傷害減少',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% 殺死區域怪物的最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% 殺死區域怪物的最大命中",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} 殺死區域怪物的最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} 殺死區域怪物的最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% 消滅區域怪獸的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% 消滅區域怪獸的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} 消滅區域怪獸的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} 消滅區域怪獸的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% 針對殺戮區域怪物的準確率',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% 針對殺戮區域怪物的準確率',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% 對殺戮區域怪物的傷害減免',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% 對殺戮區域怪物的傷害減免',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% 對地下城怪物的最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% 對地下城怪物的最大命中",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} 對地下城怪物的最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} 對地下城怪物的最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% 對地下城怪物的最低命中",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% 對地下城怪物的最低命中",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} 對地下城怪物的最低命中",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} 對地下城怪物的最低命中",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% 針對地下城怪物的準確度',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% 針對地下城怪物的準確度',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% 對地下城怪物的傷害減少',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% 對地下城怪物的傷害減少',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% 殺手任務最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% 殺手任務最大命中",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} 殺手任務最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} 殺手任務最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% 殺死殺手任務的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% 殺死殺手任務的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} 殺死殺手任務的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} 殺死殺手任務的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '+${value}% 針對 Slayer 任務的準確率',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '-${value}% 針對 Slayer 任務的準確率',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-針對 Slayer 任務的 ${value}% 傷害減少',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "動物",
    MONSTER_TYPE_PLURAL_Animal: "動物",
    MONSTER_TYPE_SINGULAR_Demon: "惡魔",
    MONSTER_TYPE_PLURAL_Demon: "惡魔",
    MONSTER_TYPE_SINGULAR_Dragon: "龍",
    MONSTER_TYPE_PLURAL_Dragon: "龍",
    MONSTER_TYPE_SINGULAR_Elemental: "元素",
    MONSTER_TYPE_PLURAL_Elemental: "元素生物",
    MONSTER_TYPE_SINGULAR_Human: "人類",
    MONSTER_TYPE_PLURAL_Human: "人類",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "蜮",
    MONSTER_TYPE_PLURAL_MythicalCreature: "神秘生物",
    MONSTER_TYPE_SINGULAR_SeaCreature: "海洋生物",
    MONSTER_TYPE_PLURAL_SeaCreature: "海洋生物",
    MONSTER_TYPE_SINGULAR_Undead: "亡靈",
    MONSTER_TYPE_PLURAL_Undead: "亡靈",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType} 特徵",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType} 特徵",

    MODIFIER_DATA_MonsterTypeTraitApplied: "將受影響的物件標記為 ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% 對 ${monsterType} 造成的傷害",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% 對 ${monsterType} 造成的傷害",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% 從 ${monsterType} 受到的傷害",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% 從 ${monsterType} 受到的傷害",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% 與 ${monsterType} 戰鬥時的最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% 與 ${monsterType} 戰鬥時的最大命中",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} 與 ${monsterType} 戰鬥時的最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} 與 ${monsterType} 戰鬥時的最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% 與 ${monsterType} 戰鬥時的最低命中",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% 與 ${monsterType} 戰鬥時的最低命中",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} 與 ${monsterType} 戰鬥時的最低命中",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} 與 ${monsterType} 戰鬥時的最低命中",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% 與 ${monsterType} 戰鬥時的準確度',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% 與 ${monsterType} 戰鬥時的準確度',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% 與 ${monsterType} 戰鬥時傷害減少',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% 與 ${monsterType} 戰鬥時傷害減少',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '+${value}% 幾率在生成或復活時在整場戰鬥中應用 ${monsterType} 特質',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '-${value}% 幾率在生成或復活時在整場戰鬥中應用 ${monsterType} 特質',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "對敵人施加 ${monsterType} 特徵，使敵人在生成或復活時的回合數為 ${value}",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% 幾率為敵人的一個回合應用 ${monsterType} 特質",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% 幾率為敵人的一個回合應用 ${monsterType} 特質",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "對敵人應用 ${monsterType} 特徵，持續 ${value} 的敵人回合",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% 與 老闆 戰鬥時的最大命中",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% 與 老闆 戰鬥時的最大命中",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} 與 老闆 戰鬥時的最大命中",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} 與 老闆 戰鬥時的最大命中",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% 與 老闆 戰鬥時的最低命中",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% 與 老闆 戰鬥時的最低命中",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} 與 老闆 戰鬥時的最低命中",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} 與 老闆 戰鬥時的最低命中",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% 與 老闆 戰鬥時的準確度',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% 與 老闆 戰鬥時的準確度',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} 竊盜損害預防閾值（任何低於閾值的損害都會減少到 0）',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} 竊盜損害預防閾值（任何低於閾值的損害都會減少到 0）',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "目前訓練技能中每等級 +${value}% 全域技能經驗值",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "目前訓練技能中每等級 -${value}% 全域技能經驗值",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} ${skillName} 中每個等級的技能經驗值",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} ${skillName} 中每個等級的技能經驗值",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} 全域技能 XP（在 % 修飾符後面新增）",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} 全域技能 XP（在 % 修飾符後面新增）",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} 技能 XP（加在 % 修飾符之後）",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} 技能 XP（加在 % 修飾符之後）",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} 目前訓練技能中每等級的全域技能經驗值（在%修飾符後新增）",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} 目前訓練技能中每等級的全域技能經驗值（在%修飾符後新增）",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} ${skillName} 中每個等級的技能經驗值（加在 % 修飾符之後）",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} ${skillName} 中每個等級的技能經驗值（加在 % 修飾符之後）"
};