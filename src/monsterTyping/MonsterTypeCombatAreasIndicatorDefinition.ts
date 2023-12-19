import { TranslationManager } from "../translation/TranslationManager";
import { MonsterTypeDefinition } from "./MonsterTypeDefinition";

/**
 * TODO: Explain
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