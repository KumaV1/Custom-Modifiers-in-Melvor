import { Constants as ModifierConstants } from '../modifiers/Constants'
import { MonsterTypeMappingManager } from '../modifiers/monsterTyping/MonsterTypeMappingManager';

export class TinyIconsCompatibility {
    private tinyIconCustomModifierTags = {
        increasedMaxHitPercentToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMaxHitPercentToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedMaxHitFlatToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMaxHitFlatToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedFlatMinHitToCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedFlatMinHitToCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedGlobalAccuracyAgainstCombatAreaMonsters: ['combat', 'ti_combat_up'],
        decreasedGlobalAccuracyAgainstCombatAreaMonsters: ['combat', 'ti_combat_dn'],
        increasedDamageReductionAgainstCombatAreaMonsters: ['combat', 'ti_dr_up'],
        decreasedDamageReductionAgainstCombatAreaMonsters: ['combat', 'ti_dr_dn'],

        increasedMaxHitPercentToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMaxHitPercentToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedMaxHitFlatToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMaxHitFlatToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedFlatMinHitToSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedFlatMinHitToSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedGlobalAccuracyAgainstSlayerAreaMonsters: ['slayer', 'ti_combat_up'],
        decreasedGlobalAccuracyAgainstSlayerAreaMonsters: ['slayer', 'ti_combat_dn'],
        increasedDamageReductionAgainstSlayerAreaMonsters: ['slayer', 'ti_dr_up'],
        decreasedDamageReductionAgainstSlayerAreaMonsters: ['slayer', 'ti_dr_dn'],

        increasedMaxHitPercentToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitPercentToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedMaxHitFlatToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitFlatToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedFlatMinHitToDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedFlatMinHitToDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedGlobalAccuracyAgainstDungeonMonsters: ['dungeon', 'ti_combat_up'],
        decreasedGlobalAccuracyAgainstDungeonMonsters: ['dungeon', 'ti_combat_dn'],
        increasedDamageReductionAgainstDungeonMonsters: ['dungeon', 'ti_dr_up'],
        decreasedDamageReductionAgainstDungeonMonsters: ['dungeon', 'ti_dr_dn'],

        increasedMaxHitPercentToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMaxHitPercentToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedMaxHitFlatToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMaxHitFlatToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedFlatMinHitToSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedFlatMinHitToSlayerTasks: ['slayer', 'ti_combat_dn'],
        increasedGlobalAccuracyAgainstSlayerTasks: ['slayer', 'ti_combat_up'],
        decreasedGlobalAccuracyAgainstSlayerTasks: ['slayer', 'ti_combat_dn'],
        decreasedDamageReductionAgainstSlayerTasks: ['slayer', 'ti_dr_dn'],

        increasedMaxHitPercentAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitPercentAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedMaxHitFlatAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMaxHitFlatAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedMinHitBasedOnMaxHitAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedMinHitBasedOnMaxHitAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedFlatMinHitAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedFlatMinHitAgainstBosses: ['dungeon', 'ti_combat_dn'],
        increasedGlobalAccuracyAgainstBosses: ['dungeon', 'ti_combat_up'],
        decreasedGlobalAccuracyAgainstBosses: ['dungeon', 'ti_combat_dn'],

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

        increasedDamageTakenFromAirSpells: ["ti_magic_dn", "air_strike"],
        decreasedDamageTakenFromAirSpells: ["ti_magic_up", "air_strike"],
        increasedDamageTakenFromWaterSpells: ["ti_magic_dn", "water_strike"],
        decreasedDamageTakenFromWaterSpells: ["ti_magic_up", "water_strike"],
        increasedDamageTakenFromEarthSpells: ["ti_magic_dn", "earth_strike"],
        decreasedDamageTakenFromEarthSpells: ["ti_magic_up", "earth_strike"],
        increasedDamageTakenFromFireSpells: ["ti_magic_dn", "fire_strike"],
        decreasedDamageTakenFromFireSpells: ["ti_magic_up", "fire_strike"]
    };

    constructor(private readonly context: Modding.ModContext) { }

    public patch() {
        this.context.onModsLoaded(() => {
            if (!this.isLoaded()) {
                return;
            }

            const tinyIcons = mod.api.tinyIcons;
            if (!tinyIcons) {
                return;
            }

            // Build up tag sources
            const cmimTagSources: Record<string, string> = {
                cmim_death_mark: this.context.getResourceUrl('assets/customModifiersInMelvor/Invoke_Death.png'),
                //cmim_human: tinyIcons.getIconResourcePath('skills', 'thieving', 'man'),
                //cmim_dragon: this.context.getResourceUrl(ModifierConstants.DRAGON_MODIFIER_TINY_ICON_URL),
                //cmim_undead: this.context.getResourceUrl(ModifierConstants.UNDEAD_MODIFIER_TINY_ICON_URL)
            };

            const types = MonsterTypeMappingManager.getTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                const type = types[i];
                if (type.tinyIconConfig && type.tinyIconConfig.primaryTagName && type.tinyIconConfig.resourceUrl) {
                    // Add dynamic tag source for monster type
                    cmimTagSources[type.tinyIconConfig.primaryTagName] = this.context.getResourceUrl(type.tinyIconConfig.resourceUrl);

                    // Also add dynamic modifier entries based on tag
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.traitApplied}`] = [`${type.tinyIconConfig.primaryTagName}`, 'combat'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedDamage}`] = [`${type.tinyIconConfig.primaryTagName}`, 'combat'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedDamage}`] = [`${type.tinyIconConfig.primaryTagName}`, 'combat'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedMaxHitPercent}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedMaxHitPercent}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_dn'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedMaxHitFlat}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedMaxHitFlat}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_dn'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedMinHitBasedOnMaxHit}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_dn'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedFlatMinHit}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedFlatMinHit}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_dn'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedGlobalAccuracy}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedGlobalAccuracy}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_combat_dn'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.increasedDamageReduction}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_dr_up'];
                    // @ts-ignore
                    this.tinyIconCustomModifierTags[`${type.modifierPropertyNames.decreasedDamageReduction}`] = [`${type.tinyIconConfig.primaryTagName}`, 'ti_dr_dn'];

                }
            }

            tinyIcons.addTagSources(cmimTagSources);
            tinyIcons.addCustomModifiers(this.tinyIconCustomModifierTags);
        });
    }

    private isLoaded() {
        return mod.manager.getLoadedModList().includes('Tiny Icons');
    }
}