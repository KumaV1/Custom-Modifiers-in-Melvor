﻿export const en = {
    Combat_Modifier_UI_Impact_Indicator_Headline: 'Cmim-Mod warning',
    Combat_Modifier_UI_Impact_Indicator_Text: "At least one combatant is currently benefitting from a modifier that provides a chance to reduce the damage taken to 0. Due to how/where that modifier had to be implemented, it's possible that damage displays (e.g. max hit) may wrongly render as 0, even for enemies that are too strong for that to be realistically possible.",
    Combat_Modifier_UI_Impact_Indicator_Hint: 'This warning can be toggled off in the mod settings',
    Combat_Area_Boss_Indicator: 'Boss',

    // ### Settings
    // #### Combat Areas Indicators section
    Settings_Section_Indicators: 'Combat Areas Indicators',

    // ##### Enable modifier ui impact indicator
    Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator: 'Enable indicator, for when certain modifiers may cause a faulty display in the UI',
    Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator: 'Currently affects only one modifier. The displayed indicator provides more info',

    // ##### Enable boss indicators
    Settings_Setting_Label_Enable_Boss_Indicators: 'Enable boss indicators',
    Settings_Setting_Hint_Enable_Boss_Indicators: "Usually, only the final monster of a dungeon is classified as a boss. There may be exceptions to this rule, though, where monsters in Combat- or Slayer Areas may also be classified as a boss, which this setting will highlight",

    // ##### Enable active monster type indicators
    Settings_Setting_Label_Enable_Active_Monster_Type_Indicators: 'Enable active monster type indicators',
    Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators: 'Adds green badges to monster/dungeon selection menus, indicating native monster type allocations',

    // ##### Enable inactive monster type indicators
    Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators: 'Enable inactive monster type indicators',
    Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators: 'Adds orange badges to monster/dungeon selection menus, indicating native monster type allocations',

    // #### Disabling section
    Settings_Section_Disabling: 'Disabling',

    // ##### Info label
    Settings_Setting_Label_Disabling_Info: "This section serves as a way of disabling certain parts of this mod's functionality. Aside from making content purposefully easier/harder, the other main reason you may want to do this, is because this mod might end up adding a noteworthy amount of calculation time, leading to a noticeable increase in loading time of offline gains (especially, if the monster type system is being made use of). Disabling some code from running at all may therefore result in a noteworthy performance improvement.",

    // ##### On-spawn modifiers
    Settings_Setting_Label_Disable_All_On_Spawn_Modifiers: 'Disable on-spawn modifiers',
    Settings_Setting_Hint_Disable_All_On_Spawn_Modifiers: 'Disables all on-spawn modifiers added by this mod',

    // ##### Keep specific monster types inactive
    Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive: 'Keep specific monster types inactive',
    Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive: 'Forces the selected monster types to stay inactive, regardless of what any mod may communicate. Monster types added by other mods will lose their checkbox state, if you happen to load your save without said mod',

    // #### Enabling section
    Settings_Section_Enabling: 'Enabling',

    // ##### Info label
    Settings_Setting_Label_Enabling_Info: 'This section is most likely irrelevant as a user. However, depending on the mods used, you may run into the situation of having to activate certain functionality yourself, because no mod communicated the necessity for it, despite being utilized. In that case, this section allows you to take care of the activation yourself.',

    // ##### Force specific monster types active
    Settings_Setting_Label_Force_Specific_Monster_Types_Active: 'Force specific monster types active',
    Settings_Setting_Hint_Force_Specific_Monster_Types_Active: 'Forces the selected monster types to be active (evaluated after the inactivity setting), regardless of what any mod may communicate. Monster types added by other mods will lose their checkbox state, if you happen to load your save without said mod',

    // #### Save & Reload section
    Settings_Section_Save_And_Reload: 'Save all & Reload',

    // ##### Save & Reload button
    Settings_Hint_Save_Reload_Required: 'Reload required',
    Settings_Setting_Display_Save_Reload: 'Save all & Reload',

    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Monster types",

    Monster_Type_Overview_Remarks_Prefix: "Please be aware of the following points:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor does not inherently include type definitions. Instead, the \"Custom Modifiers in Melvor\" mod has laid the foundation for mods to define and allocate monster types",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "This display shows all defined type allocations. If a monster isn't displayed in a section, then they are not typed as such. That being said, type definitions may be inaccurate. Feel free to give feedback on anything you think should be adjusted",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "For any monsters added through other mods, said mods have to set type definitions themselves for those monsters",

    Monster_Type_Overview_Player_Traits_Tab_Header: "Player traits",
    Monster_Type_Overview_Player_Traits_Information_Type_Allocation: "Aside from organic type allocation, a type can also be forcefully applied by usage of the respective modifier, usually through skills, equipped items or possibly shop purchase(s)",
    Monster_Type_Overview_Player_Traits_Information_Display: 'This overview displays all types (and the value of the modifier) currently affecting the Character - more info may be determinable using the "Show Skill Modifiers" mod',
    Monster_Type_Overview_Player_Traits_Information_Data_Loaded: "This display is static, based on when the character was loaded",
    Monster_Type_Overview_Player_Traits_No_Entries: "The character is not affected by any type allocation modifiers",

    Monster_Type_Overview_Active_Types_Tab_Header: "Active types",
    Monster_Type_Overview_Active_Types_Information: "Active types are those, which are actually being utilized by at least one of the mods loaded.",
    Monster_Type_Overview_Active_Types_No_Entries: "There are no active types currently",

    Monster_Type_Overview_Inactive_Types_Tab_Header: "Inactive types",
    Monster_Type_Overview_Inactive_Types_Information: "Inactive types are those, that have been defined but are not actually utilized by any mod. They are therefore also not actually checked during combat, meaning they do not affect calculation time.",
    Monster_Type_Overview_Inactive_Types_No_Entries: "There are no inactive types currently",
    Monster_Type_Overview_Inactive_Types_Affected_By_Mod_Settings: "Can't become active due to selection in mod settings",

    // ### Modifiers
    // #### Directly affecting damage dealt
    MODIFIER_DATA_increasedChanceToReduceAttackDamageToZero: '+${value}% chance (MAX: 90%) to reduce damage taken from an attack to 0 (still treated as being hit and does not affect calculation of on-hit-effects like damage-over-time)',
    MODIFIER_DATA_decreasedChanceToReduceAttackDamageToZero: '-${value}% chance (MAX: 90%) to reduce damage taken from an attack to 0 (still treated as being hit and does not affect calculation of on-hit-effects like damage-over-time)',
    MODIFIER_DATA_increasedDamageFlatWhileTargetHasMaxHP: '+${value} damage while target has full HP',
    MODIFIER_DATA_decreasedDamageFlatWhileTargetHasMaxHP: '-${value} damage while target has full HP',
    MODIFIER_DATA_increasedDamagePercentWhileTargetHasMaxHP: '+${value}% damage while target has full HP',
    MODIFIER_DATA_decreasedDamagePercentWhileTargetHasMaxHP: '-${value}% damage while target has full HP',
    MODIFIER_DATA_increasedDamageFlatIgnoringDamageReduction: "+${value} damage, which is unaffected by the enemies' damage reduction",
    MODIFIER_DATA_decreasedDamageFlatIgnoringDamageReduction: "-${value} damage, which is unaffected by the enemies' damage reduction",
    MODIFIER_DATA_increasedGlobalDamagePreventionThreshold: '+${value} global damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_decreasedGlobalDamagePreventionThreshold: '-${value} global damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_increasedDamagePreventionThreshold: '+${value} damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_decreasedDamagePreventionThreshold: '-${value} damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_increasedBarrierDamagePreventionThreshold: '+${value} barrier damage prevention threshold (any damage splat against a barrier below the threshold is reduced to 0)',
    MODIFIER_DATA_decreasedBarrierDamagePreventionThreshold: '-${value} barrier damage prevention threshold (any damage splat against a barrier below the threshold is reduced to 0)',

    // #### Spawn
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_applyStunOnSpawn: "Apply ${value} turn of Stun to the Target on spawn or revive",
    MODIFIER_DATA_applyStunOnSpawn_Plural: "Apply ${value} turns of Stun to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% chance to apply poison to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% chance to apply poison to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% chance to apply deadly poison to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% chance to apply deadly poison to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyAfflictionOnSpawn: "+${value}% chance to apply one stack of affliction to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyAfflictionOnSpawn: "-${value}% chance to apply one stack of affliction to the Target on spawn or revive",
    MODIFIER_DATA_applyAfflictionOnSpawn: "Apply ${value} stack of Affliction to the Target on spawn or revive",
    MODIFIER_DATA_applyAfflictionOnSpawn_Plural: "Apply ${value} stacks of Affliction to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyBleedOnSpawn: "+${value}% chance to apply bleed, dealing 100% of your maximum hit as damage over 10s, to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyBleedOnSpawn: "-${value}% chance to apply bleed, dealing 100% of your maximum hit as damage over 10s, to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyBurnOnSpawn: "+${value}% chance to apply burn, dealing 15% of the target's current HP over 2.5 seconds, to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyBurnOnSpawn: "-${value}% chance to apply burn, dealing 15% of the target's current HP over 2.5 seconds, to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyFreezeOnSpawn: "+${value}% chance to apply freeze for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyFreezeOnSpawn: "-${value}% chance to apply freeze for one turn to the Target on spawn or revive",
    MODIFIER_DATA_applyFreezeOnSpawn: "Apply ${value} turn of Freeze to the Target on spawn or revive",
    MODIFIER_DATA_applyFreezeOnSpawn_Plural: "Apply ${value} turns of Freeze to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyFrostburnOnSpawn: "+${value}% chance to apply frostburn for three turns to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyFrostburnOnSpawn: "-${value}% chance to apply frostburn for three turns to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyShockOnSpawn: "+${value}% chance to apply one stack of shock to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyShockOnSpawn: "-${value}% chance to apply one stack of shock to the Target on spawn or revive",
    MODIFIER_DATA_applyShockOnSpawn: "Apply ${value} stack of Shock to the Target on spawn or revive",
    MODIFIER_DATA_applyShockOnSpawn_Plural: "Apply ${value} stack of Shock to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplySleepOnSpawn: "+${value}% chance to apply sleep for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplySleepOnSpawn: "-${value}% chance to apply sleep for one turn to the Target on spawn or revive",
    MODIFIER_DATA_applySleepOnSpawn: "Apply ${value} turn of Sleep to the Target on spawn or revive",
    MODIFIER_DATA_applySleepOnSpawn_Plural: "Apply ${value} turns of Sleep to the Target on spawn or revive",

    // #### On hit
    MODIFIER_DATA_increasedChanceToApplyBleed: "+${value}% chance to inflict Bleed, that deals 100% of your maximum hit as damage over 10s, when hitting with an attack",
    MODIFIER_DATA_decreasedChanceToApplyBleed: "-${value}% chance to inflict Bleed, that deals 100% of your maximum hit as damage over 10s, when hitting with an attack",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "You have been executed by death mark",
    COMBAT_MISC_Death_Mark_Effect: "Death mark",
    MODIFIER_DATA_deathMark: "If percentage of max HP left is lower than the amount of stacks (MAX 20% / 5,000), get executed immediately",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Death Mark stacks applied when hitting with an attack",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value}% chance to resist application of death mark stacks",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value}% chance to resist application of death mark stacks",
    MODIFIER_DATA_applyDeathMarkOnSpawn: "Apply ${value} stack of Death Mark to the Target on spawn or revive",
    MODIFIER_DATA_applyDeathMarkOnSpawn_Plural: "Apply ${value} stacks of Death Mark to the Target on spawn or revive",

    // #### Spell type
    MODIFIER_DATA_increasedDamageTakenFromAirSpells: "+${value}% Damage taken from air spells",
    MODIFIER_DATA_decreasedDamageTakenFromAirSpells: "-${value}% Damage taken from air spells",
    MODIFIER_DATA_increasedDamageTakenFromWaterSpells: "+${value}% Damage taken from water spells",
    MODIFIER_DATA_decreasedDamageTakenFromWaterSpells: "-${value}% Damage taken from water spells",
    MODIFIER_DATA_increasedDamageTakenFromEarthSpells: "+${value}% Damage taken from earth spells",
    MODIFIER_DATA_decreasedDamageTakenFromEarthSpells: "-${value}% Damage taken from earth spells",
    MODIFIER_DATA_increasedDamageTakenFromFireSpells: "+${value}% Damage taken from fire spells",
    MODIFIER_DATA_decreasedDamageTakenFromFireSpells: "-${value}% Damage taken from fire spells",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% Max Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% Max Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} Max Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} Max Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% Minimum Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% Minimum Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} Minimum Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} Minimum Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstCombatAreaMonsters: '+${value}% Accuracy Rating against Combat Area Monsters',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstCombatAreaMonsters: '-${value}% Accuracy Rating against Combat Area Monsters',
    MODIFIER_DATA_increasedDamageReductionAgainstCombatAreaMonsters: '+${value}% Damage Reduction against Combat Area Monsters',
    MODIFIER_DATA_decreasedDamageReductionAgainstCombatAreaMonsters: '-${value}% Damage Reduction against Combat Area Monsters',

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Minimum Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Minimum Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Minimum Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Minimum Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerAreaMonsters: '+${value}% Accuracy Rating against Slayer Area Monsters',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerAreaMonsters: '-${value}% Accuracy Rating against Slayer Area Monsters',
    MODIFIER_DATA_increasedDamageReductionAgainstSlayerAreaMonsters: '+${value}% Damage Reduction against Slayer Area Monsters',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerAreaMonsters: '-${value}% Damage Reduction against Slayer Area Monsters',

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% Max Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% Max Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Max Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Max Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% Minimum Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% Minimum Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Minimum Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Minimum Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstDungeonMonsters: '+${value}% Accuracy Rating against Dungeon Monsters',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstDungeonMonsters: '-${value}% Accuracy Rating against Dungeon Monsters',
    MODIFIER_DATA_increasedDamageReductionAgainstDungeonMonsters: '+${value}% Damage Reduction against Dungeon Monsters',
    MODIFIER_DATA_decreasedDamageReductionAgainstDungeonMonsters: '-${value}% Damage Reduction against Dungeon Monsters',

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% Max Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% Max Hit To Slayer Tasks",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} Max Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} Max Hit To Slayer Tasks",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Minimum Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Minimum Hit To Slayer Tasks",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Minimum Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Minimum Hit To Slayer Tasks",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstSlayerTasks: '+${value}% Accuracy Rating against Slayer Tasks',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstSlayerTasks: '-${value}% Accuracy Rating against Slayer Tasks',
    MODIFIER_DATA_decreasedDamageReductionAgainstSlayerTasks: '-${value}% Damage Reduction against Slayer Tasks',

    // #### Monster Type
    // ##### Generic; these will be used to dynamically build the ones further down below, as those also have to be dynamically built
    MONSTER_TYPE_SINGULAR_Animal: "Animal",
    MONSTER_TYPE_PLURAL_Animal: "Animals",
    MONSTER_TYPE_SINGULAR_Demon: "Demon",
    MONSTER_TYPE_PLURAL_Demon: "Demons",
    MONSTER_TYPE_SINGULAR_Dragon: "Dragon",
    MONSTER_TYPE_PLURAL_Dragon: "Dragons",
    MONSTER_TYPE_SINGULAR_Elemental: "Elemental",
    MONSTER_TYPE_PLURAL_Elemental: "Elementals",
    MONSTER_TYPE_SINGULAR_Human: "Human",
    MONSTER_TYPE_PLURAL_Human: "Humans",
    MONSTER_TYPE_SINGULAR_MythicalCreature: "Mythical Creature",
    MONSTER_TYPE_PLURAL_MythicalCreature: "Mythical Creatures",
    MONSTER_TYPE_SINGULAR_SeaCreature: "Sea Creature",
    MONSTER_TYPE_PLURAL_SeaCreature: "Sea Creatures",
    MONSTER_TYPE_SINGULAR_Undead: "Undead",
    MONSTER_TYPE_PLURAL_Undead: "Undead",

    COMBAT_MISC_Monster_Type_Trait_Modifier_Effect: "${monsterType} Trait",
    COMBAT_MISC_Monster_Type_Trait_Stacking_Effect: "${monsterType} Trait",

    MODIFIER_DATA_MonsterTypeTraitApplied: "Marks the affected as ${monsterType}",
    MODIFIER_DATA_increasedDamageAgainstMonsterType: "+${value}% Damage To ${monsterType}",
    MODIFIER_DATA_decreasedDamageAgainstMonsterType: "-${value}% Damage To ${monsterType}",
    MODIFIER_DATA_increasedDamageTakenFromMonsterType: "+${value}% Damage taken from ${monsterType}",
    MODIFIER_DATA_decreasedDamageTakenFromMonsterType: "-${value}% Damage taken from ${monsterType}",
    MODIFIER_DATA_increasedMaxHitPercentAgainstMonsterType: "+${value}% Max Hit when fighting ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstMonsterType: "-${value}% Max Hit when fighting ${monsterType}",
    MODIFIER_DATA_increasedMaxHitFlatAgainstMonsterType: "+${value} Max Hit when fighting ${monsterType}",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstMonsterType: "-${value} Max Hit when fighting ${monsterType}",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstMonsterType: "+${value}% Minimum Hit when fighting ${monsterType}",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstMonsterType: "-${value}% Minimum Hit when fighting ${monsterType}",
    MODIFIER_DATA_increasedFlatMinHitAgainstMonsterType: "+${value} Minimum Hit when fighting ${monsterType}",
    MODIFIER_DATA_decreasedFlatMinHitAgainstMonsterType: "-${value} Minimum Hit when fighting ${monsterType}",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstMonsterType: '+${value}% Accuracy Rating when fighting ${monsterType}',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstMonsterType: '-${value}% Accuracy Rating when fighting ${monsterType}',
    MODIFIER_DATA_increasedDamageReductionAgainstMonsterType: '+${value}% Damage Reduction when fighting ${monsterType}',
    MODIFIER_DATA_decreasedDamageReductionAgainstMonsterType: '-${value}% Damage Reduction when fighting ${monsterType}',

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '+${value}% chance to apply ${monsterType} trait for the whole fight on spawn or revive',
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTraitInfiniteOnSpawn: '-${value}% chance to apply ${monsterType} trait for the whole fight on spawn or revive',
    MODIFIER_DATA_applyMonserTypeTraitTurnsOnSpawn: "Apply ${monsterType} trait on enemy for ${value} of the enemies' turns on spawn or revive",

    MODIFIER_DATA_increasedChanceToApplyMonsterTypeTrait: "+${value}% chance to apply ${monsterType} trait for one of the enemies' turns",
    MODIFIER_DATA_decreasedChanceToApplyMonsterTypeTrait: "-${value}% chance to apply ${monsterType} trait for one of the enemies' turns",
    MODIFIER_DATA_applyMonsterTypeTraitTurns: "Apply ${monsterType} trait on enemy for ${value} of the enemies' turns",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Max Hit when fighting bosses",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Max Hit when fighting bosses",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Max Hit when fighting bosses",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Max Hit when fighting bosses",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% Minimum Hit when fighting bosses",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% Minimum Hit when fighting bosses",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Minimum Hit when fighting bosses",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Minimum Hit when fighting bosses",
    MODIFIER_DATA_increasedGlobalAccuracyAgainstBosses: '+${value}% Accuracy Rating when fighting bosses',
    MODIFIER_DATA_decreasedGlobalAccuracyAgainstBosses: '-${value}% Accuracy Rating when fighting bosses',

    // #### Skilling
    MODIFIER_DATA_increasedThievingDamagePreventionThreshold: '+${value} thieving damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_decreasedThievingDamagePreventionThreshold: '-${value} thieving damage prevention threshold (any damage splat below the threshold is reduced to 0)',
    MODIFIER_DATA_increasedGlobalSkillXPPerLevel: "+${value}% Global Skill XP per level in currently training skill",
    MODIFIER_DATA_decreasedGlobalSkillXPPerLevel: "-${value}% Global Skill XP per level in currently training skill",
    MODIFIER_DATA_increasedSkillXPPerSkillLevel: "+${value}% ${skillName} Skill XP per level in ${skillName}",
    MODIFIER_DATA_decreasedSkillXPPerSkillLevel: "-${value}% ${skillName} Skill XP per level in ${skillName}",
    MODIFIER_DATA_increasedFlatGlobalSkillXP: "+${value} Global Skill XP (added after % modifiers)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXP: "-${value} Global Skill XP (added after % modifiers)",
    MODIFIER_DATA_increasedFlatSkillXP: "+${value} ${skillName} Skill XP (added after % modifiers)",
    MODIFIER_DATA_decreasedFlatSkillXP: "-${value} ${skillName} Skill XP (added after % modifiers)",
    MODIFIER_DATA_increasedFlatGlobalSkillXPPerSkillLevel: "+${value} Global Skill XP per level in currently training skill (added after % modifiers)",
    MODIFIER_DATA_decreasedFlatGlobalSkillXPPerSkillLevel: "-${value} Global Skill XP per level in currently training skill (added after % modifiers)",
    MODIFIER_DATA_increasedFlatSkillXPPerSkillLevel: "+${value} ${skillName} Skill XP per level in ${skillName} (added after % modifiers)",
    MODIFIER_DATA_decreasedFlatSkillXPPerSkillLevel: "-${value} ${skillName} Skill XP per level in ${skillName} (added after % modifiers)"
};