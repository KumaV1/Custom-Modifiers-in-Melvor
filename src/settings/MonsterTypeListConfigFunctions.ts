import { Constants } from "../Constants";
import { CmimUtils } from "../Utils";
import { MonsterTypeManager } from "../monsterTyping/MonsterTypeManager";
import { MonsterTypeIcon } from "./MonsterTypeIcon";
import { SettingsManager } from "./SettingsManager";
import { TranslationManager } from "../translation/TranslationManager";

/**
 * Group of static functions used in the config objects for settings.
 * Implementing the setting config interface and implementing it there oddly didn't make them accessible,
 * even with the public modifier...
 * May get back to it at some point, but for now the functionality for that type of field
 * has been defined through this class' functions
 */
export class MonsterTypeListConfigFunctions {
    public static render(name: string, onChange: () => void, config: Modding.Settings.SettingConfig): HTMLElement {
        // Initialize container
        const root = createElement('div', { classList: ['form-group', 'cmim-monster-type-list-setting'] });

        // Add label and hint, if provided
        if (config.label) {
            let label = createElement('label', {
                className: 'font-weight-normal',
                text: config.label
            });
            label.setAttribute('for', `${Constants.MOD_NAMESPACE}:${this.name}`);
            if (config.hint) {
                const forceWrapper = createElement('span', { className: 'ms__force-wrap' });
                const hint = createElement('small', {
                    className: 'd-block',
                    text: config.hint
                });
                label.appendChild(forceWrapper);
                label.appendChild(hint);
            }

            root.appendChild(label);
        }

        // Generate icons for monster types
        const types = MonsterTypeManager.getAllTypesAsArray();
        CmimUtils.orderAlphabetically(types, "singularName"); // TODO: Preferably ensure proper order regardless of language

        let typesContainer = createElement('div', {
            className: `row no-gutters justify-content-center`
        });
        types.forEach((type) => {
            let icon = new MonsterTypeIcon(type, typesContainer, 'no-bg', 40);
            icon.container.classList.add('monster-type-icon-container');
            icon.container.setAttribute('value', type.singularName);

            // Listener to toggle background and then call base onchange
            icon.container.addEventListener('click', () => {
                if (icon.container.classList.contains('monster-type-option-enabled')) {
                    icon.container.classList.remove('monster-type-option-enabled');
                } else {
                    icon.container.classList.add('monster-type-option-enabled');
                }
                onChange();
            });
        });

        root.appendChild(typesContainer);

        return root;
    }

    /**
     * Change hint and button to indicate the necessary reload for changes to take effect
     * @param value
     * @param previousValue
     */
    public static onChange(value: unknown, previousValue: unknown): string | boolean | void {
        SettingsManager.setButtonToReload();

        const hint = document.querySelector(`label[for="${Constants.MOD_NAMESPACE}:${this.name}"] > small`);
        if (hint) {
            hint.textContent = TranslationManager.getLangString("Settings_Hint_Save_Reload_Required", true);
            hint.classList.add("text-warning");
        }
    }

    /**
     * Returns, based on the state of the html, which monster types options are enabled
     * @param root
     * @returns
     */
    public static get(root: HTMLElement): string[] {
        const enabledIconContainers = root.querySelectorAll('div.monster-type-option-enabled');
        const value: string[] = [];
        enabledIconContainers.forEach((ic) => {
            value.push(ic.getAttribute('value') ?? 'unknown');
        });

        return value;
    }

    /**
     * Called presumably during e.g. initialization with save data, so value should be a string list of the monster type names enabled
     * Only used to set html to properly represent the list of enabled monster types
     * @param root
     * @param value
     */
    public static set(root: HTMLElement, value: string[]): void {
        if (!value || value.length === 0) {
            return;
        }

        const iconContainers = root.querySelectorAll('div.monster-type-icon-container');
        iconContainers.forEach((ic) => {
            const containerValue = ic.getAttribute('value');
            if (containerValue && value.includes(containerValue)) {
                ic.classList.add('monster-type-option-enabled');
            } else {
                ic.classList.remove('monster-type-option-enabled');
            }
        });
    }
}