import { MonsterTypeHelper } from './MonsterTypeHelper';
import { MonsterTypeModifierPropertyNames } from './MonsterTypeModifierPropertyNames'

export class MonsterTypeDefinition {
    /** Monster collection */
    private _monsters: string[]
    public get monsters(): string[] {
        return this._monsters;
    }

    /** Manually provided naming for type */
    public singularName: string
    public pluralName: string

    /** Used for effects and tiny icon support | Should generally allow both a full url, or an "assets/" path */
    public iconResourceUrl: string
    /** Tiny icon support (as of now, only call to "context.getResourceUrl(url)" is supported */
    //public tinyIconConfig: TinyIconConfiguration | undefined

    /** Dynamically built */
    public isTypePropertyName: string
    public modifierPropertyNames: MonsterTypeModifierPropertyNames


    /**
     * Create a new instance of a monster type definition
     * @param singularName - the main name for the type
     * @param pluralName - the plural variation, used for things like modifier names
     * @param iconResourceUrl - Url to an icon, that will be used for various things, such as effects and tiny icon mod support
     * @param monsters - optionally already provide some monsters; duplicates are NOT filtered out
     */
    constructor(singularName: string, pluralName: string, iconResourceUrl: string, monsters?: string[]) {
        this.singularName = singularName;
        this.pluralName = pluralName;
        this.iconResourceUrl = iconResourceUrl;
        this._monsters = monsters ??= [];

        this.isTypePropertyName = MonsterTypeHelper.createIsTypePropertyName(singularName);
        this.modifierPropertyNames = MonsterTypeHelper.createModifierPropertyNames(singularName, pluralName);
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