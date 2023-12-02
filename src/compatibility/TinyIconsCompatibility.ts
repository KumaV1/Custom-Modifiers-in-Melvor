import { MonsterTypeDefinition } from '../modifiers/monsterTyping/MonsterTypeDefinition';
import { MonsterTypeMappingManager } from '../modifiers/monsterTyping/MonsterTypeMappingManager';

export class TinyIconsCompatibility {
    /** Non-dynamic modifiers */
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

    /** Register non-dynamic custom modifiers */
    public register(): void {
        this.context.onModsLoaded(() => {
            if (!this.isLoaded()) {
                return;
            }

            const tinyIcons = mod.api.tinyIcons;
            if (!tinyIcons) {
                return;
            }

            // Build up non-dynamic tag sources
            const cmimTagSources: Record<string, string> = {
                cmim_death_mark: this.context.getResourceUrl('assets/customModifiersInMelvor/Invoke_Death.png'),
            };

            tinyIcons.addTagSources(cmimTagSources);
            tinyIcons.addCustomModifiers(this.tinyIconCustomModifierTags);

            const types = MonsterTypeMappingManager.getActiveTypesAsArray();
            for (var i = 0; i < types.length; i++) {
                this.registerMonsterType(types[i]);
            }
        });
    }

    /**
     * Registers primary icons for modifiers corresponding to the given type
     * @param type
     */
    public registerMonsterType(type: MonsterTypeDefinition): void {
        if (!this.isLoaded()) {
            return;
        }

        const tinyIcons = mod.api.tinyIcons;
        if (!tinyIcons) {
            return;
        }

        if (type && type.iconResourceUrl) {
            // Add dynamic tag source for monster type
            let cmimTagSources: Record<string, string> = {};
            const tagName = `cmim_${type.singularName}`;
            cmimTagSources[tagName] = this.context.getResourceUrl(type.iconResourceUrl);

            let modifiers: Record<string, string> = {};

            // Also add dynamic modifier entries based on tag
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.traitApplied}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedDamage}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedDamage}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedDamageTaken}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedDamageTaken}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedMaxHitPercent}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedMaxHitPercent}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedMaxHitFlat}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedMaxHitFlat}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedMinHitBasedOnMaxHit}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedMinHitBasedOnMaxHit}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedFlatMinHit}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedFlatMinHit}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedGlobalAccuracy}`] = [`${tagName}`, 'ti_combat_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedGlobalAccuracy}`] = [`${tagName}`, 'ti_combat_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedDamageReduction}`] = [`${tagName}`, 'ti_dr_up'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedDamageReduction}`] = [`${tagName}`, 'ti_dr_dn'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedChanceToApplyTraitInfiniteOnSpawn}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedChanceToApplyTraitInfiniteOnSpawn}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.applyTraitTurnsOnSpawn}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.increasedChanceToApplyTrait}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.decreasedChanceToApplyTrait}`] = [`${tagName}`, 'combat'];
            // @ts-ignore
            modifiers[`${type.modifierPropertyNames.applyTraitTurns}`] = [`${tagName}`, 'combat'];

            tinyIcons.addTagSources(cmimTagSources);
            tinyIcons.addCustomModifiers(modifiers);
        }
    }

    private isLoaded(): Boolean {
        return mod.manager.getLoadedModList().includes('Tiny Icons');
    }
}