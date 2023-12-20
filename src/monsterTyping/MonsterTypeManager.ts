import { Constants } from '../Constants';
import { Constants as ModifierConstants } from '../modifiers/Constants'
import { CustomModifiersManager } from '../modifiers/CustomModifiersManager';
import { ModContextMemoizer } from '../ModContextMemoizer';
import { MonsterType } from './MonsterType'
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

    public static initNativeMonsterTypes() {
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Animal,
            "Animals",
            ModifierConstants.ANIMAL_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorD:Leech",
                "melvorD:Bat",
                "melvorD:BigBat",
                "melvorD:ViciousSerpent",
                "melvorD:Spider",
                "melvorD:Seagull",
                "melvorD:FrozenMammoth",
                "melvorF:LegaranWurm",
                "melvorTotH:PolarBear"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Demon,
            "Demons",
            ModifierConstants.DEMON_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorF:FierceDevil",
                "melvorTotH:MagicFireDemon",
                "melvorTotH:GuardianoftheHerald",
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Dragon,
            "Dragons",
            ModifierConstants.DRAGON_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorD:PratTheProtectorOfSecrets",
                "melvorD:GreenDragon",
                "melvorD:BlueDragon",
                "melvorD:RedDragon",
                "melvorD:BlackDragon",
                "melvorD:MalcsTheGuardianOfMelvor",
                "melvorF:ElderDragon",
                "melvorF:ChaoticGreaterDragon",
                "melvorF:HuntingGreaterDragon",
                "melvorF:WickedGreaterDragon",
                "melvorF:MalcsTheLeaderOfDragons",
                "melvorF:GreaterSkeletalDragon",
                "melvorTotH:TwinSeaDragonSerpent"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Elemental,
            "Elementals",
            ModifierConstants.ELEMENTAL_MODIFIER_ICON_RESOURCE_URL,
            [
                "MelvorD:FireSpirit",
                "melvorF:WaterGuard",
                "melvorF:WaterGolem",
                "melvorF:Glacia",
                "melvorTotH:InfernalGolem",
                "melvorTotH:LightningSpirit"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Human,
            "Humans",
            ModifierConstants.HUMAN_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorD:BlackKnight",
                "melvorD:ConfusedPirate",
                "melvorD:FrozenArcher",
                "melvorD:Pirate",
                "melvorD:FirstMate",
                "melvorD:JuniorFarmer",
                "melvorD:AdultFarmer",
                "melvorD:MasterFarmer",
                "melvorD:Wizard",
                "melvorD:SteelKnight",
                "melvorD:MithrilKnight",
                "melvorD:AdamantKnight",
                "melvorD:RuneKnight",
                "melvorD:BanditTrainee",
                "melvorD:Bandit",
                "melvorD:BanditLeader",
                "melvorD:DarkWizard",
                "melvorD:MasterWizard",
                "melvorD:ElderWizard",
                "melvorF:Druid",
                "melvorF:Thief",
                "melvorF:Shaman",
                "melvorF:Necromancer",
                "melvorF:Elementalist",
                "melvorF:Paladin",
                "melvorF:Priest",
                "melvorF:WanderingBard",
                "melvorTotH:DarkKnight",
                "melvorAoD:BlindWarrior",
                "melvorAoD:BlindArcher",
                "melvorAoD:BlindMage",
                "melvorAoD:SoulTakerWitch"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.MythicalCreature,
            "MythicalCreatures",
            ModifierConstants.MYTHICAL_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorTotH:Manticore",
                "melvorF:Phoenix",
                "melvorF:Griffin",
                "melvorD:ElerineMage",
                "melvorD:ElerineArcher"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.SeaCreature,
            "SeaCreatures",
            ModifierConstants.SEA_CREATURE_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorD:GiantCrab",
                "melvorD:Tentacle",
                "melvorD:TheKraken",
                "melvorF:Rokken",
                "melvorF:Lissia",
                "melvorF:Murtia",
                "melvorF:MioliteWarden",
                "melvorAoD:Merman"
            ],
            false
        );
        MonsterTypeManager.registerOrUpdateType(
            MonsterType.Undead,
            "Undead",
            ModifierConstants.UNDEAD_MODIFIER_ICON_RESOURCE_URL,
            [
                "melvorD:PirateCaptain",
                "melvorD:ZombieHand",
                "melvorD:Zombie",
                "melvorD:ZombieLeader",
                "melvorD:Ghost",
                "melvorD:Skeleton",
                "melvorF:UndeadWerewolf",
                "melvorF:CursedLich",
                "melvorF:GreaterSkeletalDragon",
                "melvorTotH:Phantom",
                "melvorTotH:Banshee",
                "melvorTotH:Spectre",
                "melvorTotH:CursedSkeletonWarrior",
                "melvorTotH:Fiozor",
                "melvorAoD:BlindGhost",
                "melvorAoD:Lich",
                "melvorAoD:GhostSailor",
                "melvorAoD:GhostMercenary",
                "melvorAoD:CursedPirateCaptain"
            ],
            false
        );
    }

    /**
     * Registers (or updates) the given type. Do note, that some parameters may be ignored, if another mod has already provided data for the exact same data
     * @param typeNameSingular
     * @param typeNamePlural
     * @param iconResourceUrl
     * @param monsterIds
     * @param active
     * @returns
     */
    public static registerOrUpdateType(typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean) {
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

        // Register dynamic data based on definition (modifiers, corresponding translations, corresponding tiny icon support)
        MonsterTypeManager.registerData(typeDefinition);

        //console.log(`Processed registration of type ${typeDefinition.singularName} by other managers`);

        // Add to active list
        this._activeTypes[typeNameSingular] = typeDefinition;

        // Remove from inactive list, if existent
        delete this._inactiveTypes[typeNameSingular];
    }

    /**
     * Runs the data registration processes for the given type
     * @param type
     */
    public static registerData(type: MonsterTypeDefinition) {
        const modifierManager = new CustomModifiersManager(ModContextMemoizer.ctx);
        modifierManager.registerMonsterType(type);

        const translationManager = new TranslationManager(ModContextMemoizer.ctx);
        translationManager.registerMonsterType(type);

        const tinyIconCompatibility = new TinyIconsCompatibility(ModContextMemoizer.ctx);
        tinyIconCompatibility.registerMonsterType(type);
    }

    /**
     * Force types pre-configured by this base mod, setting them to active is as simply as toggling the flag via this method
     * @param type
     * @param iconResourceUrl - can be omitted, if it's a type created by this base mod, as that one generally defines a proper url for any types registered by it
     */
    public static forceBaseModTypeActive(type: MonsterType) {
        if (this._inactiveTypes[type]) {
            this._activeTypes[type] = this._inactiveTypes[type];

            //console.log("forceBaseModTypeActive");
            //console.log(this._activeTypes[type]);
            MonsterTypeManager.registerData(this._activeTypes[type]);
            delete this._inactiveTypes[type];
        }
    }

    /**
     * Sets the given type to inactive, if it can be found in the active list
     * @param type
     */
    public static trySetTypeInactive(type: string | MonsterType) {
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
    public static addMonster(type: string | MonsterType, monsterId: string) {
        MonsterTypeManager.addMonsters(type, [monsterId]);

        // If type doesn't already exist, skip (type has to be registered properly beforehand)
        //if (!this._activeTypes[type]) {
        //    return;
        //}

        //// If monster is already allocated, avoid duplicate
        //if (this._activeTypes[type].monsters.some(mId => mId === monsterId)) {
        //    return;
        //}

        //this._activeTypes[type].monsters.push(monsterId);
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

        MonsterTypeManager.registerOrUpdateType(type, type, Constants.MISSING_ARTWORK_URL, monsterIds, false);

        //for (var i = 0; i < monsterIds.length; i++) {
        //    MonsterTypeManager.addMonster(type, monsterIds[i]);
        //}
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
    public static getActiveTypes() {
        return this._activeTypes;
    }

    /**
     * Get inactive type definitions of all registered types
     * @returns
     */
    public static getInactiveTypes() {
        return this._inactiveTypes;
    }

    /**
     * Get type definitions of all registered type
     * @returns
     */
    public static getActiveTypesAsArray() {
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
    public static getInactiveTypesAsArray() {
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

        if (MonsterTypeManager._activeTypes[type] &&
            MonsterTypeManager._activeTypes[type].monsters.some(mId => mId === monster.id)) {
            return true;
        }

        if (MonsterTypeManager._inactiveTypes[type] &&
            MonsterTypeManager._inactiveTypes[type].monsters.some(mId => mId === monster.id)) {
            return true;
        }

        return false;
    }

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
}