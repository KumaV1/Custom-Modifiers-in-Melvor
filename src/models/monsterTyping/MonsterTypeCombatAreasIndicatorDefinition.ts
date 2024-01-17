import { MonsterTypeDefinition } from "./MonsterTypeDefinition";
import { TranslationManager } from "../../managers/TranslationManager";

/**
 * Represents the data structure used to create badges in the Combat UI,
 * which indicate a specific monster type related to the monster it is located on
 */
export class MonsterTypeCombatAreasIndicatorDefinition {
    public type: MonsterTypeDefinition

    public translatedTypeSingularName: string

    public active: boolean

    constructor(type: MonsterTypeDefinition, active: boolean) {
        this.type = type;
        this.active = active;

        // Get translated type of name, so later processes can use it for ordering by name
        this.translatedTypeSingularName = TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName);
    }
}