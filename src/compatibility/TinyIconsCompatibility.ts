import { Constants as ModifierConstants } from '../modifiers/Constants'

export class TinyIconsCompatibility {
    private readonly tinyIconCustomModifierTags = {
        increasedMaxHitPercentToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMaxHitPercentToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedMaxHitFlatToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMaxHitFlatToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedFlatMinHitToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedFlatMinHitToCombatAreaMonsters: ['combat', 'ti_combat_dn'],

        increasedMaxHitPercentToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMaxHitPercentToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedMaxHitFlatToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMaxHitFlatToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedFlatMinHitToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedFlatMinHitToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],

        increasedMaxHitPercentToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitPercentToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedMaxHitFlatToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitFlatToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedFlatMinHitToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedFlatMinHitToDungeonMonsters: ['dungeon', 'ti_combat_dn'],

        increasedMaxHitPercentToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMaxHitPercentToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedMaxHitFlatToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMaxHitFlatToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedFlatMinHitToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedFlatMinHitToSlayerTasks: ['slayer', 'ti_combat_dn'],

        increasedMaxHitPercentAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitPercentAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedMaxHitFlatAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitFlatAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedFlatMinHitAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedFlatMinHitAgainstBosses: ['dungeon', 'ti_combat_dn'],
        
        increasedGlobalSkillXPPerLevel: ['skill'],
        decreasedGlobalSkillXPPerLevel: ['skill'],
        increasedFlatGlobalSkillXP: ['skill'],
        decreasedFlatGlobalSkillXP: ['skill'],
        increasedFlatGlobalSkillXPPerSkillLevel: ['skill'],
        decreasedFlatGlobalSkillXPPerSkillLevel: ['skill'],
        increasedSkillXPPerSkillLevel: ['skill'],
        decreasedSkillXPPerSkillLevel: ['skill'],
        increasedFlatSkillXP: ['skill'],
        decreasedFlatSkillXP: ['skill'],
        increasedFlatSkillXPPerSkillLevel: ['skill'],
        decreasedFlatSkillXPPerSkillLevel: ['skill'],

        increasedChanceToApplySlowOnSpawn: ['slowed'],
        decreasedChanceToApplySlowOnSpawn: ['slowed'],
        increasedChanceToApplyStunOnSpawn: ['stun'],
        decreasedChanceToApplyStunOnSpawn: ['stun'],
        increasedChanceToApplyPoisonOnSpawn: ['poison'],
        decreasedChanceToApplyPoisonOnSpawn: ['poison'],
        increasedChanceToApplyDeadlyPoisonOnSpawn: ['deadly_poison'],
        decreasedChanceToApplyDeadlyPoisonOnSpawn: ['deadly_poison'],

        deathMark: ['cmim_death_mark', 'combat'],
        increasedDeathMarkOnHit: ['cmim_death_mark', 'combat'],
        increasedChanceToApplyStackOfDeathMark: ['cmim_death_mark', 'combat'],
        decreasedChanceToApplyStackOfDeathMark: ['cmim_death_mark', 'combat'],
        increasedDeathMarkImmunity: ['cmim_death_mark', 'combat'],
        decreasedDeathMarkImmunity: ['cmim_death_mark', 'combat'],

        humanTraitApplied: ['cmim_human', 'combat'],
        dragonTraitApplied: ['cmim_dragon', 'combat'],
        undeadTraitApplied: ['cmim_undead', 'combat'],

        increasedDamageToHumans: ['cmim_human', 'combat'],
        decreasedDamageToHumans: ['cmim_human', 'combat'],
        increasedMaxHitPercentAgainstHumans: ['cmim_human', 'ti_combat_up'],
        decreasedMaxHitPercentAgainstHumans: ['cmim_human', 'ti_combat_dn'],
        increasedMaxHitFlatAgainstHumans: ['cmim_human', 'ti_combat_up'],
        decreasedMaxHitFlatAgainstHumans: ['cmim_human', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitAgainstHumans: ['cmim_human', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitAgainstHumans: ['cmim_human', 'ti_combat_dn'],
        increasedFlatMinHitAgainstHumans: ['cmim_human', 'ti_combat_up'],
        decreasedFlatMinHitAgainstHumans: ['cmim_human', 'ti_combat_dn'],

        increasedDamageToDragons: ['cmim_dragon', 'combat'],
        decreasedDamageToDragons: ['cmim_dragon', 'combat'],
        increasedMaxHitPercentAgainstDragons: ['cmim_dragon', 'ti_combat_up'],
        decreasedMaxHitPercentAgainstDragons: ['cmim_dragon', 'ti_combat_dn'],
        increasedMaxHitFlatAgainstDragons: ['cmim_dragon', 'ti_combat_up'],
        decreasedMaxHitFlatAgainstDragons: ['cmim_dragon', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitAgainstDragons: ['cmim_dragon', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitAgainstDragons: ['cmim_dragon', 'ti_combat_dn'],
        increasedFlatMinHitAgainstDragons: ['cmim_dragon', 'ti_combat_up'],
        decreasedFlatMinHitAgainstDragons: ['cmim_dragon', 'ti_combat_dn'],

        increasedDamageToUndead: ['cmim_undead', 'combat'],
        decreasedDamageToUndead: ['cmim_undead', 'combat'],
        increasedMaxHitPercentAgainstUndead: ['cmim_undead', 'ti_combat_up'],
        decreasedMaxHitPercentAgainstUndead: ['cmim_undead', 'ti_combat_dn'],
        increasedMaxHitFlatAgainstUndead: ['cmim_undead', 'ti_combat_up'],
        decreasedMaxHitFlatAgainstUndead: ['cmim_undead', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitAgainstUndead: ['cmim_undead', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitAgainstUndead: ['cmim_undead', 'ti_combat_dn'],
        increasedFlatMinHitAgainstUndead: ['cmim_undead', 'ti_combat_up'],
        decreasedFlatMinHitAgainstUndead: ['cmim_undead', 'ti_combat_dn']
    };

    constructor(private readonly context: Modding.ModContext) { }

    public patch() {
        this.context.onModsLoaded(() => {
            if (!this.isLoaded()) {
                return;
            }

            const tinyIcons = mod.api.tinyIcons;

            const cmimTagSources: Record<string, string> = {
                cmim_death_mark: this.context.getResourceUrl('assets/customModifiersInMelvor/Invoke_Death.png'),
                cmim_human: tinyIcons.getIconResourcePath('skills', 'thieving', 'man'),
                cmim_dragon: this.context.getResourceUrl(ModifierConstants.DRAGON_MODIFIER_TINY_ICON_URL),
                cmim_undead: this.context.getResourceUrl(ModifierConstants.UNDEAD_MODIFIER_TINY_ICON_URL)
            };

            tinyIcons.addTagSources(cmimTagSources);
            tinyIcons.addCustomModifiers(this.tinyIconCustomModifierTags);
        });
    }

    private isLoaded() {
        return mod.manager.getLoadedModList().includes('Tiny Icons');
    }
}