import { MonsterTypeHelper } from './MonsterTypeHelper';
import { MonsterTypeModifierPropertyNames } from './MonsterTypeModifierPropertyNames'
import { TinyIconConfiguration } from './TinyIconConfiguration';

export class MonsterTypeDefinition {
    /** Monster collection */
    private _monsters: string[]
    public get monsters(): string[] {
        return this._monsters;
    }

    /** Manually provided naming for type */
    public singularName: string
    public pluralName: string

    /** Tiny icon support (as of now, only call to "context.getResourceUrl(url)" is supported */
    public tinyIconConfig: TinyIconConfiguration | undefined

    /** Dynamically built */
    public isTypePropertyName: string
    public modifierPropertyNames: MonsterTypeModifierPropertyNames


    /**
     * Create a new instance of a monster type definition
     * @param singularName - the main name for the type
     * @param pluralName - the plural variation, used for things like modifier names
     * @param monsters - optionally already provide some monsters; duplicates are NOT filtered out
     * @param tinyIconPrimaryTagName - if provided, the name of the tag to use with the "Tiny Icons" mod
     * @param tinyIconTagUrl - if provided (should always be provided if tag name is provided), the url to the icon to use
     */
    constructor(singularName: string, pluralName: string, monsters?: string[], tinyIconConfig?: TinyIconConfiguration) {
        this.singularName = singularName;
        this.pluralName = pluralName;
        this._monsters = monsters ??= [];

        this.tinyIconConfig = tinyIconConfig;

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