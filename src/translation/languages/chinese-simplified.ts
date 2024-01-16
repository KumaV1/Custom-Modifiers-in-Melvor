export const zhCN = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Cmim-Mod 警告',
    Combat_Modifier_UI_Impact_Indicator_Text: "至少有一名战斗员目前正受益于一个修改器，该修改器有机会将受到的伤害减至 0。由于该修改器的实施方式/位置，伤害显示（例如最大命中）可能会错误地显示为 0，即使是对于强大到现实中不可能做到这一点的敌人也是如此。",
    Combat_Modifier_UI_Impact_Indicator_Hint: '可以在模式设置中关闭该警告',
    Combat_Area_Boss_Indicator: '老板',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Combat_Areas_Indicator: '作战地区指标',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: '启用指示器，用于显示某些修改器可能导致用户界面显示错误的情况',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: '目前只影响一个修改器。显示的指示器可提供更多信息',

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Boss_Indicators: '启用老板指示器',
    Settings_Setting_Hint_Enable_Boss_Indicators: "通常情况下，只有地牢的最终怪物才会被归类为 BOSS。但也可能有例外情况，战斗区或杀手区的怪物也可能被归类为 BOSS，本设置将强调这一点",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: '启用活动怪物类型指示器',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: '在怪物/地下城选择菜单中添加绿色徽章，显示原生怪物类型分配情况',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: '启用非活动怪物类型指示器',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: '在怪物/地下城选择菜单中添加橙色徽章，显示原生怪物类型分配情况',

    // #### Disabling section
    Settings_Section_Disabling: '禁用',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "本部分用于禁用本模块的某些功能。除了有目的地使内容变得更容易/更困难之外，您可能想这样做的另一个主要原因是，本修改器最终可能会增加大量计算时间，导致离线收益的加载时间明显增加（尤其是在使用怪物类型系统的情况下）。因此，完全禁止某些代码运行可能会带来显著的性能提升。",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: '禁用出生时修改器',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: '禁用此修改器添加的所有重生修改器',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: '保持特定怪物类型不活动',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: '强制所选怪物类型保持非激活状态，无论任何修改器如何传达。如果您在加载保存时碰巧没有使用其他模式，那么其他模式添加的怪物类型将失去其复选框状态。',

    // #### Enabling section
    Settings_Section_Enabling: '启用',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: '作为用户，这部分内容很可能无关紧要。不过，根据所使用 mod 的不同，您可能会遇到不得不自己激活某些功能的情况，因为尽管使用了这些功能，但没有任何 mod 通知您有必要这样做。在这种情况下，本节允许您自行激活。',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: '强制激活特定怪物类型',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: '强制选定的怪物类型处于活动状态（在非活动状态设置后进行评估），无论任何 MOD 是否会发出通知。如果您在加载保存时没有使用其他模式，那么其他模式添加的怪物类型将失去其复选框状态。',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: '全部保存并重新加载',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: '需要重新加载',
    Settings_Setting_Display_Save_Reload: '全部保存并重新加载',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "怪物类型",

    Monster_Type_Overview_Remarks_Prefix: "请注意以下几点：",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor 本身并不包含类型定义。相反，\"Custom Modifiers in Melvor\" mod 为 mod 定义和分配怪物类型奠定了基础",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "该显示屏会显示所有已定义的类型分配。如果怪物没有显示在某个部分中，那么它们就没有被类型化。尽管如此，类型定义可能并不准确。如果您认为有任何需要调整的地方，请随时提出反馈意见",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "对于通过其他修改器添加的任何怪物，这些修改器必须自己为这些怪物设置类型定义",

    Monster_Type_Overview_Player_Traits_Tab_Header: "球员特征",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "除有机类型分配外，类型还可通过使用相应的修改器强制应用，通常是通过技能、装备物品或可能的商店购买来实现",
    Monster_Type_Overview_Player_Traits_Information_Display: '该概览显示当前影响字符的所有类型（以及修改器的值）。使用 "Show Skill Modifiers" 修改器可以确定更多信息',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "该显示是静态的，基于字符的加载时间",
    Monster_Type_Overview_Player_Traits_No_Entries: "该字符不受任何类型分配修改器的影响",

    Monster_Type_Overview_Active_Types_Tab_Header: "活动类型",
    Monster_Type_Overview_Active_Types_Information: "活动类型是指至少有一个已加载的模式正在使用的类型。",
    Monster_Type_Overview_Active_Types_No_Entries: "目前没有活动类型",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "非活动类型",
    Monster_Type_Overview_Inactive_Types_Information: "非活动类型是指已定义但任何模式都未实际使用的类型。因此它们在战斗中也不会被实际检查，这意味着它们不会影响计算时间。",
    Monster_Type_Overview_Inactive_Types_No_Entries: "目前没有非活动类型",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "由于 MOD 设置中的选择而无法激活",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}%几率（最大值：90%）将攻击造成的伤害减至 0（仍被视为命中，且不影响计算命中效果（如超时伤害））。',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}%几率（最大值：90%）将攻击造成的伤害减至 0（仍被视为命中，且不影响计算命中效果（如超时伤害））。',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} 伤害，同时目标满 HP',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} 伤害，同时目标满 HP',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% 伤害，同时目标满 HP',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% 伤害，同时目标满 HP',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} 伤害，不受敌人伤害减免的影响",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} 伤害，不受敌人伤害减免的影响",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} 全局伤害预防阈值（低于阈值的任何伤害溅射都会降为 0）',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} 全局伤害预防阈值（低于阈值的任何伤害溅射都会降为 0）',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} 伤害预防阈值（低于阈值的任何伤害溅射都会减为 0）',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} 伤害预防阈值（低于阈值的任何伤害溅射都会减为 0）',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} 障碍物伤害预防阈值（对低于阈值的障碍物溅射的任何伤害都会减为 0）',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} 障碍物伤害预防阈值（对低于阈值的障碍物溅射的任何伤害都会减为 0）',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}%的几率在目标重生或复活时为其增加 25% 的攻击间隔，持续三回合",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}%的几率在目标重生或复活时为其增加 25% 的攻击间隔，持续三回合",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}%几率在目标出现或复活时将其眩晕一回合",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}%几率在目标出现或复活时将其眩晕一回合",
    MODIFIER_DATA_applyStunOnSpawn: "在目标生成或复活时为其施加 ${value} 轮眩晕",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "在目标出现或复活时为其施加 ${value} 轮眩晕效果",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "有 +${value}% 的几率在目标出现或复活时对其施毒",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "有 -${value}% 的几率在目标出现或复活时对其施毒",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "有 +${value}% 的几率在目标出生或复活时对其施放致命毒药",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "有 -${value}% 的几率在目标出生或复活时对其施放致命毒药",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "有 +${value}% 的几率在目标出现或复活时为其叠加一次折磨效果",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "有 -${value}% 的几率在目标出现或复活时为其叠加一次折磨效果",
    MODIFIER_DATA_applyAfflictionOnSpawn: "在目标出现或复活时为其施加 ${value} 叠加伤害",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "在目标出生或复活时为其施加 ${value} 叠加的痛苦效果",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% 的几率对目标造成流血效果，在 10 秒内造成最大命中率 100% 的伤害，并在目标重生或复活时造成伤害",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% 的几率对目标造成流血效果，在 10 秒内造成最大命中率 100% 的伤害，并在目标重生或复活时造成伤害",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "有+${value}%的几率对目标造成灼伤，在 2.5 秒内造成目标当前生命值 15%的伤害，持续时间超过 2.5 秒。",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "有-${value}%的几率对目标造成灼伤，在 2.5 秒内造成目标当前生命值 15%的伤害，持续时间超过 2.5 秒。",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}%几率在目标出现或复活时将其冰冻一回合",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}%几率在目标生成或复活时将其冰冻一回合",
    MODIFIER_DATA_applyFreezeOnSpawn: "在目标生成或复活时为其施加 ${value} 轮冰冻效果",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "在目标生成或复活时为其施加 ${value} 轮数的冰冻效果",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}%几率在目标生成或复活时对其施加持续三回合的冰霜灼伤",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}%几率在目标生成或复活时对其施加持续三回合的冰霜灼伤",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "有 +${value}% 的几率在目标出现或复活时为其叠加一次震击",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "有 -${value}% 的几率在目标出现或复活时为其叠加一次震击",
    MODIFIER_DATA_applyShockOnSpawn: "在目标生成或复活时对其施加 ${value} 叠加震击",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "在目标生成或复活时对其施加 ${value} 叠加震击",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}%几率在目标出现或复活时使其沉睡一回合",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}%几率在目标出现或复活时使其沉睡一回合",
    MODIFIER_DATA_applySleepOnSpawn: "在目标生成或复活时为其施加 ${value} 轮睡眠效果",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "在目标生成或复活时为其施加 ${value} 轮数的睡眠效果",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "攻击时有 +${value}% 的几率造成流血，在 10 秒内造成最大命中率 100% 的伤害",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "攻击时有 -${value}% 的几率造成流血，在 10 秒内造成最大命中率 100% 的伤害",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "你已被处以死刑",
    COMBAT_MISC_Death_Mark_Effect: "死亡标记",
    MODIFIER_DATA_deathMark: "如果剩余最大 HP 的百分比低于堆叠数（最大 20% / 5,000），会立即被执行死刑",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} 攻击时叠加死亡标记",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "有 +${value}% 的几率为敌人叠加一层死亡印记",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "有 -${value}% 的几率为敌人叠加一层死亡印记",
    MODIFIER_DATA_increasedDeathMarkImmunity: "抵御死亡标记叠加的几率+${value}%。",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "抵御死亡标记叠加的几率-${value}%。",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "在目标出现或复活时为其叠加 ${value} 死亡标记",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "在目标出现或复活时为其叠加 ${value} 死亡标记",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% 空气法术造成的伤害",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% 空气法术造成的伤害",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% 水系法术造成的伤害",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% 水系法术造成的伤害",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% 土系法术造成的伤害",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% 土系法术造成的伤害",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% 火系法术造成的伤害",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% 火系法术造成的伤害",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% 攻击区域怪物的最大命中率",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% 攻击区域怪物的最大命中率",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} 与区域怪物战斗的最大命中率",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} 与区域怪物战斗的最大命中率",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% 与区域怪物战斗的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% 与区域怪物战斗的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} 与区域怪物战斗的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} 与区域怪物战斗的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% 对战区域怪物的精确度等级',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% 对战斗区域怪物的精确度等级',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '对战斗区域怪物的伤害减免+${value}%。',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '对战斗区域怪物的伤害减免-${value}%。',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% 击杀区域怪物的最大命中率",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% 击杀区域怪物的最大命中率",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} 击杀区域怪物的最大命中率",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} 击杀区域怪物的最大命中率",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% 击杀区域怪物的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% 击杀区域怪物的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} 击杀区域怪物的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} 击杀区域怪物的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '对杀手区域怪物的精准度+${value}%。',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '对杀手区域怪物的精准度-${value}%。',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '对杀手区域怪物的伤害减免+${value}%。',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '对杀手区域怪物的伤害减免-${value}%。',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% 地牢怪物最大命中率",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% 地牢怪物最大命中率",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} 对地下城怪物的最大攻击力",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} 对地下城怪物的最大攻击力",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% 地牢怪物最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% 地下城怪物最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} 地牢怪物最小攻击力",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} 地牢怪物最小攻击力",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}%对地下城怪物的准确度评级',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}%对地下城怪物的准确度评级',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '对地下城怪物的伤害减免+${value}%。',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '对地下城怪物的伤害减免-${value}%。',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}%杀手任务最大命中率",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}%杀手任务最大命中率",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} 对杀手任务的最大命中率",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} 对杀手任务的最大命中率",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}%杀手任务最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}%杀手任务最低命中率",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} 对杀手任务的最低打击",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} 对杀手任务的最低打击",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '对杀手任务的准确率+${value}%。',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '对杀手任务的准确率-${value}%。',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}%对杀手任务的伤害减免',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "动物",
    MONSTER_TYPE_PLURAL_Animal: "动物",
    MONSTER_TYPE_SINGULAR_Demon: "恶魔",
    MONSTER_TYPE_PLURAL_Demon: "恶魔",
    MONSTER_TYPE_SINGULAR_Dragon: "龙",
    MONSTER_TYPE_PLURAL_Dragon: "龙",
    MONSTER_TYPE_SINGULAR_Elemental: "元素",
    MONSTER_TYPE_PLURAL_Elemental: "元素",
    MONSTER_TYPE_SINGULAR_Human: "人类",
    MONSTER_TYPE_PLURAL_Human: "人类",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "神话生物",
    MONSTER_TYPE_PLURAL_MythicalCreature: "神话生物",
    MONSTER_TYPE_SINGULAR_SeaCreature: "海洋生物",
    MONSTER_TYPE_PLURAL_SeaCreature: "海洋生物",
    MONSTER_TYPE_SINGULAR_Undead: "亡灵",
    MONSTER_TYPE_PLURAL_Undead: "亡灵",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType}特质",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType}特质",

    MODIFIER_DATA_MonsterTypeTraitApplied: "将受影响对象标记为 ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% 对 ${monsterType} 造成的伤害",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% 对 ${monsterType} 造成的伤害",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% 从 ${monsterType} 造成的伤害",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% 从 ${monsterType} 造成的伤害",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% 与 ${monsterType} 战斗时的最大命中率",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% 与 ${monsterType} 战斗时的最大命中率",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} 与 ${monsterType} 战斗时的最大命中率",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} 与 ${monsterType} 战斗时的最大命中率",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% 与 ${monsterType} 战斗时的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% 与 ${monsterType} 战斗时的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} 与 ${monsterType} 战斗时的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} 与 ${monsterType} 战斗时的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% 与 ${monsterType} 战斗时的精准度等级',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% 与 ${monsterType} 战斗时的精准度等级',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '与 ${monsterType} 战斗时，+${value}% 伤害减免',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '与 ${monsterType} 战斗时，-${value}% 伤害减免',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '+${value}%几率在出生或复活时的整场战斗中应用 ${monsterType} 特质',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '-${value}%几率在出生或复活时的整场战斗中应用 ${monsterType} 特质',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "在敌人出生或复活的 ${value} 个回合中，对敌人应用 ${monsterType} 特质",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "有 +${value}% 的几率在敌人的一个回合中应用 ${monsterType} 特质",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "有 -${value}% 的几率在敌人的一个回合中应用 ${monsterType} 特质",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "在敌人的 ${value} 个回合中，对敌人应用 ${monsterType} 特质",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "与 BOSS 战斗时，最大命中率+${value}%。",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "与 BOSS 战斗时，最大命中率-${value}%。",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} 与 BOSS 战斗时的最大命中率",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} 与 BOSS 战斗时的最大命中率",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% 与 BOSS 战斗时的最低命中率",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}%与 BOSS 战斗时的最低命中率",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} 与 BOSS 战斗时的最低命中率",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} 与 BOSS 战斗时的最低命中率",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '与 Boss 搏斗时的精确度等级 +${value}%',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '与 Boss 搏斗时的精确度等级 -${value}%',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value}盗贼伤害预防阈值（低于阈值的任何伤害溅射都会降低为 0）',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value}盗贼伤害预防阈值（低于阈值的任何伤害溅射都会降低为 0）',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% 当前训练技能每级的全局技能 XP",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% 当前训练技能每级的全局技能 XP",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} 每级的 ${skillName} 技能 XP",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} 每级的 ${skillName} 技能 XP",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} 全局技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} 全局技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} 技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} 技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} 当前训练技能的每一级全局技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} 当前训练技能的每一级全局技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} ${skillName} 每级技能 XP（在 % 修改器后添加）",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} ${skillName} 每级技能 XP（在 % 修改器后添加）"
};