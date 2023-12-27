import { MonsterTypeDefinition } from "../monsterTyping/MonsterTypeDefinition";
import { TranslationManager } from "../translation/TranslationManager";

/** A class to build a monster type info icon */
export class MonsterTypeIcon extends InfoIcon {
    public type: MonsterTypeDefinition

    constructor(type: MonsterTypeDefinition, parent: HTMLElement, pillClass: string, size: Resize) {
        // Run base class
        super(parent, pillClass, size);

        // Adjust some default styling
        this.container.classList.replace('m-2', 'm-1');
        this.image.classList.replace('p-2', 'p-1');
        this.text.parentElement?.remove();

        // Do monster-type-dependent stuff
        this.type = type;
        this.setImage(type.iconResourceUrl);
        this.localize();
    }

    localize(): void {
        this.setTooltip(this.getTooltipContent());
    }

    getTooltipContent() {
        return TranslationManager.getMonsterTypeSingularNameTranslation(this.type.singularName);
    }
}