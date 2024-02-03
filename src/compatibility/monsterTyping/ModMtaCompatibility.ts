import { CmimUtils } from "../../Utils";

export abstract class ModMtaCompatibility {
    /** Version the current state of the compatibility is based on (e.g. '1.0.0') */
    protected abstract _version: string;

    /** Namespaces by which monsters can be retrieved (e.g. 'customModifiersInMelvor') */
    protected abstract _namespace: string;

    /** Name by which it can be checked whether the mod is loaded (e.g. 'Custom Modifiers in Melvor') */
    protected abstract _name: string;

    /** The actual allocations */
    protected abstract _allocations: Map<MonsterType, string[]>;

    constructor(private readonly context: Modding.ModContext) { }

    /** Allocate monster types as defined by the class */
    public allocateMonsterTypes() {
        this.context.onModsLoaded(() => {
            if (!this.isLoaded()) {
                return;
            }

            // Avoid 'this' ambigiousness
            const modNamespace = this._namespace;
            const modName = this._name;
            const modVersion = this._version;

            // Process map of allocations
            this._allocations.forEach(function (localIds: string[], type: MonsterType) {
                let monsterIds: string[] = [];

                localIds.forEach(function (localId) {
                    const fullId = `${modNamespace}:${localId}`;
                    const obj = game.monsters.getObjectByID(fullId);
                    if (obj === undefined) {
                        CmimUtils.warn(`Mod: ${modName} | Last mod version checked: ${modVersion} | Type: ${type} | No monster found for id '${fullId}'`);
                    } else {
                        monsterIds.push(fullId);
                    }
                });

                mod.api.customModifiersInMelvor.addMonsters(type, monsterIds);
                CmimUtils.log(`Mod: ${modName} | Type: ${type} | ${monsterIds.length} monsters registered`);
            });
        });
    }

    /**
     * Checks whether the given mod is loaded
     * @returns
     */
    protected isLoaded(): boolean {
        return mod.manager.getLoadedModList().includes(this._name);
    }
}