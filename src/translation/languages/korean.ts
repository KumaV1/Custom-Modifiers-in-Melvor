/** CURRENTLY NO TRANSLATION AVAILABLE - FEEL FREE TO UPDATE THIS FILE */
export const ko = {
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
    // #### Spawn modifiers (TODO: Possibly make equivalent increased/decreased chance to self-apply?)
    MODIFIER_DATA_increasedChanceToApplySlowOnSpawn: "+${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplySlowOnSpawn: "-${value}% chance to apply 25% increased attack interval for three turns to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyStunOnSpawn: "+${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyStunOnSpawn: "-${value}% chance to apply stun for one turn to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyPoisonOnSpawn: "+${value}% chance to apply poison for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyPoisonOnSpawn: "-${value}% chance to apply poison for one turn to the Target on spawn or revive",
    MODIFIER_DATA_increasedChanceToApplyDeadlyPoisonOnSpawn: "+${value}% chance to apply deadly poison for one turn to the Target on spawn or revive",
    MODIFIER_DATA_decreasedChanceToApplyDeadlyPoisonOnSpawn: "-${value}% chance to apply deadly poison for one turn to the Target on spawn or revive",

    // #### Trait application modifiers (aka "treated as type")
    MODIFIER_DATA_humanTraitApplied: "Marks the affected as humans",
    MODIFIER_DATA_dragonTraitApplied: "Marks the affected as dragon",
    MODIFIER_DATA_undeadTraitApplied: "Marks the affected as undead",

    // #### Type modifiers
    MODIFIER_DATA_increasedMaxHitPercentAgainstHumans: "+${value}% Max Hit when fighting humans",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstHumans: "-${value}% Max Hit when fighting humans",
    MODIFIER_DATA_increasedMaxHitPercentAgainstDragons: "+${value}% Max Hit when fighting dragons",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstDragons: "-${value}% Max Hit when fighting dragons",
    MODIFIER_DATA_increasedMaxHitPercentAgainstUndead: "+${value}% Max Hit when fighting undead",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstUndead: "-${value}% Max Hit when fighting undead",
    MODIFIER_DATA_increasedMaxHitPercentAgainstBosses: "+${value}% Max Hit when fighting bosses",
    MODIFIER_DATA_decreasedMaxHitPercentAgainstBosses: "-${value}% Max Hit when fighting bosses",

    // #### Death mark (not to be confused with mark of death)
    COMBAT_MISC_Death_Mark_Effect: "Death mark",
    MODIFIER_DATA_deathMark: "If HP fall under ${count}% (MAX 20% / 5,000) of max HP, get executed immediately",
    MODIFIER_DATA_increasedDeathMarkOnHit: "+${value} Death Mark stacks applied when hitting with an attack",
    MODIFIER_DATA_increasedChanceToApplyStackOfDeathMark: "+${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_decreasedChanceToApplyStackOfDeathMark: "-${value}% chance to apply one stack of death mark on the enemy",
    MODIFIER_DATA_increasedDeathMarkImmunity: "+${value} chance to resist application of death mark stacks",
    MODIFIER_DATA_decreasedDeathMarkImmunity: "-${value} chance to resist application of death mark stacks",
};