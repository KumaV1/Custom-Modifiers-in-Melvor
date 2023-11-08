/** CURRENTLY NO TRANSLATION AVAILABLE - FEEL FREE TO UPDATE THIS FILE */
export const es = {
    // ### Monster type overview
    PAGE_NAME_Monster_Types_Overview: "Monster types",

    Monster_Type_Human_Plural: "Humans",
    Monster_Type_Dragon_Plural: "Dragons",
    Monster_Type_Undead_Plural: "Undead",

    Monster_Type_Overview_Remarks_Prefix: "Please be aware of the following points:",
    Monster_Type_Overview_Remarks_Not_Inherit_Monster_Types: "Melvor does not inherintly include type definitions. Instead, they have been added by the 'Custom Modifiers in Melvor' mod",
    Monster_Type_Overview_Remarks_Displayed_Type_Allocation: "This display shows all defined type allocations. If a monster isn't displayed in a section, then they are not typed as such",
    Monster_Type_Overview_Remarks_Type_Allocation_Inaccuracy: "That being said, type definitions may be inaccurate. Please feel free to contact the 'Custom Modifiers in Melvor' mod creator, if you think a monster isn't typed correctly",
    Monster_Type_Overview_Remarks_Custom_Mods_Monster_Type_Allocation: "For any monsters added through other mods, said mods have to set type definitions themselves for those monsters. If a mod doesn't have this mod as dependency, it generally means that none of their monsters are affected by this type definition",

    // ### Modifiers
    // #### Spawn (TODO: Possibly make equivalent increased/decreased chance to self-apply?)
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% chance to apply poison to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% chance to apply poison to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% chance to apply deadly poison to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% chance to apply deadly poison to the Target on spawn or revive",

    // #### Death mark (not to be confused with mark of death)
    Death_Mark_Notification_Text: "You have been executed by death mark",
    COMBAT_MISC_Death_Mark_Effect: "Death mark",
    MODIFIER_DATA_deathMark: "If percentage of max HP left is lower than the amount of stacks (MAX 20% / 5,000), get executed immediately",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Death Mark stacks applied when hitting with an attack",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value} chance to resist application of death mark stacks",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value} chance to resist application of death mark stacks",

    // #### Area type
    MODIFIER_DATA_increasedMaxHitPercentToCombatAreaMonsters: "+${value}% Max Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToCombatAreaMonsters: "-${value}% Max Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToCombatAreaMonsters: "+${value} Max Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToCombatAreaMonsters: "-${value} Max Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToCombatAreaMonsters: "+${value}% Minium Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: "-${value}% Minium Hit To Combat Area Monsters",
    MODIFIER_DATA_increasedFlatMinHitToCombatAreaMonsters: "+${value} Minium Hit To Combat Area Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToCombatAreaMonsters: "-${value} Minium Hit To Combat Area Monsters",

    MODIFIER_DATA_increasedMaxHitPercentToSlayerAreaMonsters: "+${value}% Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerAreaMonsters: "-${value}% Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerAreaMonsters: "+${value} Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerAreaMonsters: "-${value} Max Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "+${value}% Minium Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: "-${value}% Minium Hit To Slayer Area Monsters",
    MODIFIER_DATA_increasedFlatMinHitToSlayerAreaMonsters: "+${value} Minium Hit To Slayer Area Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerAreaMonsters: "-${value} Minium Hit To Slayer Area Monsters",

    MODIFIER_DATA_increasedMaxHitPercentToDungeonMonsters: "+${value}% Max Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMaxHitPercentToDungeonMonsters: "-${value}% Max Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedMaxHitFlatToDungeonMonsters: "+${value} Max Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMaxHitFlatToDungeonMonsters: "-${value} Max Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToDungeonMonsters: "+${value}% Minium Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToDungeonMonsters: "-${value}% Minium Hit To Dungeon Monsters",
    MODIFIER_DATA_increasedFlatMinHitToDungeonMonsters: "+${value} Minium Hit To Dungeon Monsters",
    MODIFIER_DATA_decreasedFlatMinHitToDungeonMonsters: "-${value} Minium Hit To Dungeon Monsters",

    // #### Slayer task
    MODIFIER_DATA_increasedMaxHitPercentToSlayerTasks: "+${value}% Max Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMaxHitPercentToSlayerTasks: "-${value}% Max Hit To Slayer Tasks",
    MODIFIER_DATA_increasedMaxHitFlatToSlayerTasks: "+${value} Max Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMaxHitFlatToSlayerTasks: "-${value} Max Hit To Slayer Tasks",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitToSlayerTasks: "+${value}% Minium Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitToSlayerTasks: "-${value}% Minium Hit To Slayer Tasks",
    MODIFIER_DATA_increasedFlatMinHitToSlayerTasks: "+${value} Minium Hit To Slayer Tasks",
    MODIFIER_DATA_decreasedFlatMinHitToSlayerTasks: "-${value} Minium Hit To Slayer Tasks",

    // #### Trait application (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Marks the affected as human",
    MODIFIER_DATA_dragonTraitApplied: "Marks the affected as dragon",
    MODIFIER_DATA_undeadTraitApplied: "Marks the affected as undead",

    // #### Type
    // ##### Humans
    MODIFIER_DATA_increasedDamageToHumans: "+${value}% Damage To Humans",
    MODIFIER_DATA_decreasedDamageToHumans: "-${value}% Damage To Humans",
    MODIFIER_DATA_increasedMaxHitPercentAgainstHumans: "+${value}% Max Hit when fighting humans",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans: "-${value}% Max Hit when fighting humans",
    MODIFIER_DATA_increasedMaxHitFlatAgainstHumans: "+${value} Max Hit when fighting humans",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstHumans: "-${value} Max Hit when fighting humans",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstHumans: "+${value}% Minium Hit when fighting humans",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstHumans: "-${value}% Minium Hit when fighting humans",
    MODIFIER_DATA_increasedFlatMinHitAgainstHumans: "+${value} Minium Hit when fighting humans",
    MODIFIER_DATA_decreasedFlatMinHitAgainstHumans: "-${value} Minium Hit when fighting humans",

    // ##### Dragons
    MODIFIER_DATA_increasedDamageToDragons: "+${value}% Damage To Dragons",
    MODIFIER_DATA_decreasedDamageToDragons: "-${value}% Damage To Dragons",
    MODIFIER_DATA_increasedMaxHitPercentAgainstDragons: "+${value}% Max Hit when fighting dragons",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons: "-${value}% Max Hit when fighting dragons",
    MODIFIER_DATA_increasedMaxHitFlatAgainstDragons: "+${value} Max Hit when fighting dragons",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstDragons: "-${value} Max Hit when fighting dragons",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstDragons: "+${value}% Minium Hit when fighting dragons",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstDragons: "-${value}% Minium Hit when fighting dragons",
    MODIFIER_DATA_increasedFlatMinHitAgainstDragons: "+${value} Minium Hit when fighting dragons",
    MODIFIER_DATA_decreasedFlatMinHitAgainstDragons: "-${value} Minium Hit when fighting dragons",

    // ##### Undead
    MODIFIER_DATA_increasedDamageToUndead: "+${value}% Damage To Undead",
    MODIFIER_DATA_decreasedDamageToUndead: "-${value}% Damage To Undead",
    MODIFIER_DATA_increasedMaxHitPercentAgainstUndead: "+${value}% Max Hit when fighting undead",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead: "-${value}% Max Hit when fighting undead",
    MODIFIER_DATA_increasedMaxHitFlatAgainstUndead: "+${value} Max Hit when fighting undead",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstUndead: "-${value} Max Hit when fighting undead",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstUndead: "+${value}% Minium Hit when fighting undead",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstUndead: "-${value}% Minium Hit when fighting undead",
    MODIFIER_DATA_increasedFlatMinHitAgainstUndead: "+${value} Minium Hit when fighting undead",
    MODIFIER_DATA_decreasedFlatMinHitAgainstUndead: "-${value} Minium Hit when fighting undead",

    // #### Bosses
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Max Hit when fighting bosses",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Max Hit when fighting bosses",
    MODIFIER_DATA_increasedMaxHitFlatAgainstBosses: "+${value} Max Hit when fighting bosses",
    MODIFIER_DATA_decreasedMaxHitFlatAgainstBosses: "-${value} Max Hit when fighting bosses",
    MODIFIER_DATA_increasedMinHitBasedOnMaxHitAgainstBosses: "+${value}% Minium Hit when fighting bosses",
    MODIFIER_DATA_decreasedMinHitBasedOnMaxHitAgainstBosses: "-${value}% Minium Hit when fighting bosses",
    MODIFIER_DATA_increasedFlatMinHitAgainstBosses: "+${value} Minium Hit when fighting bosses",
    MODIFIER_DATA_decreasedFlatMinHitAgainstBosses: "-${value} Minium Hit when fighting bosses",

    // #### Skilling
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