import { Constants } from '../Constants';
import { Constants as ModifierConstants } from '../modifiers/Constants'
import { CustomModifiersManager } from '../modifiers/CustomModifiersManager';
import { ModContextMemoizer } from '../ModContextMemoizer';
import { MonsterType } from './MonsterType'
import { MonsterTypeHelper } from './MonsterTypeHelper';
import { MonsterTypeDefinition } from './MonsterTypeDefinition';
import { TinyIconsCompatibility } from '../compatibility/TinyIconsCompatibility';
import { TranslationManager } from '../translation/TranslationManager';

/**
 * Takes care of holding which types are allocated to which monsters,
 * including letting other mods add additional entries.
 *
 * Keep in mind that these arrays are simple strings,
 * so we don't have to worry about which expansions were actually purchased
 */
export class MonsterTypeManager {
    /** Types that have been determined to be active,
     *  meaning at least one loaded mod makes use of a type specific logic, modifiers, etc. */
    private static _activeTypes: { [key: string]: MonsterTypeDefinition } = {};

    /** Types which mods registered their monsters as,
     * but that end up not being taken advantage of by any loaded mod
     */
    private static _inactiveTypes: { [key: string]: MonsterTypeDefinition } = {};

    /**
     * Register mod types for which this mod already provides all configuration and translation
     */
    public static initNativeMonsterTypes(): void {
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Animal,
            "Animals",
            ModifierConstants.ANIMAL_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Animal),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Demon,
            "Demons",
            ModifierConstants.DEMON_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Demon),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Dragon,
            "Dragons",
            ModifierConstants.DRAGON_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Dragon),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Elemental,
            "Elementals",
            ModifierConstants.ELEMENTAL_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Elemental),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Human,
            "Humans",
            ModifierConstants.HUMAN_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Human),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.MythicalCreature,
            "MythicalCreatures",
            ModifierConstants.MYTHICAL_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.MythicalCreature),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.SeaCreature,
            "SeaCreatures",
            ModifierConstants.SEA_CREATURE_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.SeaCreature),
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Undead,
            "Undead",
            ModifierConstants.UNDEAD_MODIFIER_ICON_RESOURCE_URL,
            MonsterTypeHelper.getNonModMonsterIds(MonsterType.Undead),
            false
        );
    }

    /**
     * Registers (or updates) the given type. Do note, that some parameters may be ignored, if another mod has already provided data for the exact same data
     * REMARK: Data registration (such as modifiers) are handled later through a lifecycle hook
     * @param typeNameSingular
     * @param typeNamePlural
     * @param iconResourceUrl
     * @param monsterIds
     * @param active
     * @returns
     */
    public static registerOrUpdateType(typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean): void {
        // If the given type is already active, then monster allocation is the only thing we might want to do
        if (this._activeTypes[typeNameSingular]) {
            MonsterTypeManager.addMonstersToType(typeNameSingular, monsterIds);
            return;
        }

        // If it is not meant to become active, and inactive type already exists, we also want to just update monster allocation
        if (!active && this._inactiveTypes[typeNameSingular]) {
            MonsterTypeManager.addMonstersToType(typeNameSingular, monsterIds);
            return;
        }

        // If it is not meant to become active, and type does NOT already exist, then we want to prepare an "inactive" type definition and leave it at that
        if (!active && !this._inactiveTypes[typeNameSingular]) {
            const typeDefinition = new MonsterTypeDefinition(typeNameSingular, typeNamePlural, iconResourceUrl, monsterIds);
            this._inactiveTypes[typeNameSingular] = typeDefinition;

            MonsterTypeManager.ensureEarlyTempMonsterTypeModifierData(typeDefinition);

            return;
        }

        // Otherwise that means it's meant to become an active type.
        // In that case, we check for an inactive type to possibly extract previously defined monster allocation from.
        // before creating a new type definition from scratch and registering everything necessary for usage of it

        // Create type definition
        let concatMonsterIds: string[] = monsterIds;
        if (this._inactiveTypes[typeNameSingular]) {
            for (var i = 0; i < this._inactiveTypes[typeNameSingular].monsters.length; i++) {
                const mId = this._inactiveTypes[typeNameSingular].monsters[i];
                if (concatMonsterIds.indexOf(mId) !== -1) {
                    concatMonsterIds.push(mId);
                }
            }
        }
        const typeDefinition = new MonsterTypeDefinition(typeNameSingular, typeNamePlural, iconResourceUrl, concatMonsterIds);
        MonsterTypeManager.ensureEarlyTempMonsterTypeModifierData(typeDefinition);

        //console.log(`Processed registration of type ${typeDefinition.singularName} by other managers`);

        // Add to active list
        this._activeTypes[typeNameSingular] = typeDefinition;

        // Remove from inactive list, if existent
        delete this._inactiveTypes[typeNameSingular];
    }

    /**
     * Registers an unfinished list of modifier objects, so data-packages can already load no problem.
     * The entries are then later overwritten with a proper finalized object, see "registerMonsterTypeData"
     * @param type
     */
    public static ensureEarlyTempMonsterTypeModifierData(type: MonsterTypeDefinition) {
        const modifierManager = new CustomModifiersManager(ModContextMemoizer.ctx);
        modifierManager.registerMonsterTypeModifierData(type);
    }

    /**
     * Once the interface is available (3rd of 5 lifecycle hooks),
     * we expect all monster type definitions (not affected by mod settings)
     * to have been finished setting up and therefore now register the data needed (such as modifiers for example)
     * @param type
     */
    public static registerMonsterTypeData(ctx: Modding.ModContext): void {
        ctx.onInterfaceAvailable(() => {
            const types: MonsterTypeDefinition[] =
                MonsterTypeManager.getActiveTypesAsArray()
                    .concat(MonsterTypeManager.getInactiveTypesAsArray());

            const translationManager = new TranslationManager(ctx);
            translationManager.registerMonsterTypes(types);

            const modifierManager = new CustomModifiersManager(ctx);
            modifierManager.registerMonsterTypes(types);

            const tinyIconsCompatibility = new TinyIconsCompatibility(ctx);
            tinyIconsCompatibility.registerMonsterTypes(types);
        });
    }

    /**
     * Force types pre-configured by this base mod, setting them to active is as simply as toggling the flag via this method
     * @param type
     * @param iconResourceUrl - can be omitted, if it's a type created by this base mod, as that one generally defines a proper url for any types registered by it
     */
    public static forceBaseModTypeActive(type: MonsterType): void {
        if (this._inactiveTypes[type]) {
            this._activeTypes[type] = this._inactiveTypes[type];

            //console.log("forceBaseModTypeActive");
            //console.log(this._activeTypes[type]);
            delete this._inactiveTypes[type];
        }
    }

    /**
     * Sets the given type to inactive, if it can be found in the active list
     * @param type
     */
    public static trySetTypeInactive(type: string | MonsterType): void {
        if (this._activeTypes[type]) {
            this._inactiveTypes[type] = this._activeTypes[type];
            delete this._activeTypes[type];
        }
    }

    /**
     * Defines the given monster to be of the given type.
     * Will not create a new active type, though it may update a pre-existing one
     * @param type - singular name of type
     * @param monsterId - full id, including namespace
     */
    public static addMonster(type: string | MonsterType, monsterId: string): void {
        MonsterTypeManager.addMonsters(type, [monsterId]);
    }

    /**
     * Defines the given monsters to be of the given type.
     * Will not create a new active type, though it may update a pre-existing one
     * @param type
     * @param monsterIds
     */
    public static addMonsters(type: string | MonsterType, monsterIds: string[]) {
        if (!type || !monsterIds) {
            //console.log("addMonsters | Stopping because type or monster ids is undefined or empty")
            return;
        }

        MonsterTypeManager.registerOrUpdateType(type, type, ModifierConstants.GENERIC_MODIFIER_ICON_RESOURCE_PATH, monsterIds, false);
    }

    /**
     * Get the whole type definition for the given type, if it is registered
     * @param type
     */
    public static getType(type: string | MonsterType): MonsterTypeDefinition | undefined {
        if (!type) {
            return undefined;
        }

        return this._activeTypes[type];
    }

    /**
     * Get active type definitions of all registered types
     * @returns
     */
    public static getActiveTypes(): { [key: string]: MonsterTypeDefinition } {
        return this._activeTypes;
    }

    /**
     * Get inactive type definitions of all registered types
     * @returns
     */
    public static getInactiveTypes(): { [key: string]: MonsterTypeDefinition } {
        return this._inactiveTypes;
    }

    /**
     * Get type definitions of all registered type
     * @returns
     */
    public static getActiveTypesAsArray(): MonsterTypeDefinition[] {
        let array: MonsterTypeDefinition[] = [];
        Object.entries(this._activeTypes).forEach(([key, value]) => {
            array.push(value);
        });

        return array;
    }

    /**
     * Get type definitions of all registered type
     * @returns
     */
    public static getInactiveTypesAsArray(): MonsterTypeDefinition[] {
        let array: MonsterTypeDefinition[] = [];
        Object.entries(this._inactiveTypes).forEach(([key, value]) => {
            array.push(value);
        });

        return array;
    }

    /**
     * Checks whether the given enemy is defined to be of the given type
     * @param monster
     * @param type
     */
    public static monsterIsOfType(monster: Monster | undefined, type: string | MonsterType): boolean {
        if (!monster || !type) {
            return false;
        }

        const monsters = MonsterTypeManager.getMonstersOfType(type);

        return monsters.some(mId => mId === monster.id);
    }

    /**
     * Get list of monster ids which are allocated to the given type, regardless of whether they are found to be active or inactive
     * If no monsters were found, an empty array is returned
     * @param type
     */
    public static getMonstersOfType(type: string | MonsterType): string[] {
        if (!type) {
            return [];
        }

        if (MonsterTypeManager._activeTypes[type]) {
            return MonsterTypeManager._activeTypes[type].monsters;
        }

        if (MonsterTypeManager._inactiveTypes[type]) {
            return MonsterTypeManager._inactiveTypes[type].monsters;
        }

        return [];
    }

    /**
     * Add monster to given type, only if type is found and monster not already allocated
     * @param type
     * @param monsterId
     * @param active
     */
    private static addMonstersToType(type: string | MonsterType, monsterIds: string[]): void {
        //console.log(`addMonstersToType | Called with type: ${type} and monsterIds: ${monsterIds}`);
        if (this._activeTypes[type]) {
            this._activeTypes[type].addMonsters(monsterIds);
        }

        if (this._inactiveTypes[type]) {
            this._inactiveTypes[type].addMonsters(monsterIds);
        }
    }

    // #region Deprecated

    /**
    * Add monster to the list of humans
    * @param monsterIds
    * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
    */
    public static addHumans(monsterIds: string[]): void {
        MonsterTypeManager.addMonsters(MonsterType.Human, monsterIds);
    }

    /**
     * Return the current list of humans
     * @returns
     * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
     */
    public static getHumans() {
        return MonsterTypeManager.getActiveTypes()["Human"].monsters;
    }

    /**
     * Add monster to the list of dragons
     * @param monsterIds
     * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
     */
    public static addDragons(monsterIds: string[]): void {
        //console.log(`addDragons | Called with following monster ids: ${monsterIds}`);
        MonsterTypeManager.addMonsters(MonsterType.Dragon, monsterIds);
    }

    /**
     * Return the current list of dragons
     * @returns
     * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
     */
    public static getDragons() {
        return MonsterTypeManager.getActiveTypes()["Dragon"].monsters;
    }

    /**
     * Add monster to the list of undeads
     * @param monsterIds
     * @deprecated - due to dynamic type definition, "addMonster()" or "addMonsters()" should be used instead
     */
    public static addUndeads(monsterIds: string[]): void {
        MonsterTypeManager.addMonsters(MonsterType.Undead, monsterIds);
    }

    /**
     * Return the current list of undead
     * @returns
     * @deprecated - due to dynamic type definition, "getTypes()" should be used instead
     */
    public static getUndead() {
        return MonsterTypeManager.getActiveTypes()["Undead"].monsters;
    }

    /**
    * Previously used with hard-definition of types, to check a certain monster for whether they are allocated to the human type
    * @param monster
    * @returns
    * @deprecated
    */
    public static monsterIsHuman(monster: Monster): boolean {
        return MonsterTypeManager.monsterIsOfType(monster, MonsterType.Human);
    }

    /**
     * Previously used with hard-definition of types, to check a certain monster for whether they are allocated to the dragon type
     * @param monster
     * @returns
     * @deprecated
     */
    public static monsterIsDragon(monster: Monster): boolean {
        return MonsterTypeManager.monsterIsOfType(monster, MonsterType.Dragon);
    }

    /**
     * Previously used with hard-definition of types, to check a certain monster for whether they are allocated to the undead type
     * @param monster
     * @returns
     * @deprecated
     */
    public static monsterIsUndead(monster: Monster): boolean {
        return MonsterTypeManager.monsterIsOfType(monster, MonsterType.Undead);
    }

    // #endregion
}