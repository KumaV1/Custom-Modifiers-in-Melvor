import { MonsterTypeHelper } from '../../helpers/MonsterTypeHelper';
import { MonsterTypeModifierPropertyNames } from './MonsterTypeModifierPropertyNames'

export class MonsterTypeDefinition {
    /** Monster collection */
    private _monsters: string[]
    public get monsters(): string[] {
        return this._monsters;
    }

    /** Manually provided naming for type */
    public name: string

    /**
     * plural variant of type name
     * @deprecated only still exists, because of its usage in old modifier names, which are therefore wanted to be preserved as aliases
     */
    public pluralName: string | undefined | null

    /** Used for effects and tiny icon support | As of now only supports full url */
    public iconResourceUrl: string // TODO: "Only supports full url" outdated, presumably

    /** Dynamically built */
    public isTypePropertyName: string
    public modifierPropertyNames: MonsterTypeModifierPropertyNames

    /**
     * Create a new instance of a monster type definition
     * @param name - plural variant of type name
     * @param iconResourceUrl - Url to an icon, that will be used for various things, such as effects and tiny icon mod support
     * @param monsters - optionally already provide some monsters; duplicates are NOT filtered out
     */
    constructor(name: string, pluralName: string | undefined | null, iconResourceUrl: string, monsters?: string[]) {
        this.name = name;
        this.pluralName = pluralName;
        this.iconResourceUrl = iconResourceUrl;
        this._monsters = monsters ??= [];

        this.isTypePropertyName = MonsterTypeHelper.createIsTypePropertyName(name);
        this.modifierPropertyNames = MonsterTypeHelper.createModifierPropertyNames(name);
    }

    /**
     * Adds the provided monsters to the list of monsters. Duplicates are automatically filtered out
     * @param monsters List of full ids (so including mod name) to add
     */
    public addMonsters(monsters: string[]) {
        if (!monsters || monsters.length <= 0) {
            return;
        }

        for (var i = 0; i < monsters.length; i++) {
            if (!this._monsters.some(m => m === monsters[i])) {
                this._monsters.push(monsters[i]);
            }
        }
    }
}