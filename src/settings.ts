import { CmimUtils } from "./utils";
import { Constants } from "./Constants";
import { ModContextMemoizer } from "./ModContextMemoizer";
import { MonsterTypeManager } from "./monsterTyping/MonsterTypeManager";
import { TranslationManager } from "./translation/TranslationManager";

export class SettingsManager {
    // TODO: Check what happens with checkboxlist-settings, if one of the entries goes missing between two saves. Considering that that will probably rarely happen, a checkboxlist would probably be more user friendly than the text input, even if that means more space and the possibility of checkboxes-set being removed because a mod wasn't loaded once, but later again

    // TODO: As of now, none of the settings actually require a reload, even the combat indicators, as they only need to have the logic rerun (and use a shared class to destroy all at the beginning)

    public static init(ctx: Modding.ModContext) {
        //let typeIndicatorHint = new HTMLSpanElement();
        //typeIndicatorHint.innerHTML. = 'Monsters/Dungeons will display when inherent monster types are allocated (colored based on whether they are <span class="font-w600 text-success">active</span> or <span class="font-w600 text-warning">inactive</span>)';

        ctx.settings.section("Combat Areas Indicators").add([
            {
                type: 'switch',
                name: 'enable-active-monster-type-indicators',
                label: 'Enable active monster type indicators',
                hint: 'Adds green badges to monster/dungeon selection menus, indicating native monster type allocations',
                default: false,
                onChange(value: boolean, previousValue: boolean): void {
                    MonsterTypeManager.rebuildCombatAreaMonsterTypeIndicators(value, SettingsManager.getEnableInactiveMonsterTypeIndicators);
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-inactive-monster-type-indicators',
                label: 'Enable inactive monster type indicators',
                hint: 'Adds orange badges to monster/dungeon selection menus, indicating native monster type allocations',
                default: false,
                onChange(value: boolean, previousValue: boolean): void {
                    MonsterTypeManager.rebuildCombatAreaMonsterTypeIndicators(SettingsManager.getEnableActiveMonsterTypeIndicators, value);
                }
            } as Modding.Settings.SwitchConfig,
        ]);

        ctx.settings.section('Disabling').add([
            {
                type: 'label',
                name: 'disabling-info',
                label: "This section serves as a way of disabling certain parts of this mod's functionality. Aside from making content purposefully easier/harder, the other main reason you may want to do this, is because this mod might end up adding a noteworthy amount of calculation time, leading to a noticeable increase in loading time of offline gains (especially, if the monster type system is being made use of). Disabling some code from running at all may therefore result in a noteworthy performance improvement."
            } as Modding.Settings.SettingConfig,
        ]);

        ctx.settings.section('Save changes').add([
            {
                type: "button",
                name: "save-reload",
                display: "Save all & Reload",
                color: "primary",
                onClick: () => {
                    saveData();
                    window.location.reload();
                }
            } as Modding.Settings.ButtonConfig
        ]);

        // On lifetime hook 3 (the one before the run that will actually read settings from save), run the delayed creation of the monster type deactivation checkbox list
        ctx.onInterfaceAvailable(function () {
            // Create options
            const activeTypes = MonsterTypeManager.getActiveTypesAsArray();
            const inactiveTypes = MonsterTypeManager.getInactiveTypesAsArray();

            let options: Modding.Settings.CheckboxOption[] = [];
            for (var i = 0; i < activeTypes.length; i++) {
                const type = activeTypes[i];
                options.push({
                    value: type.singularName,
                    label: TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName)
                } as Modding.Settings.CheckboxOption);
            }
            for (var i = 0; i < inactiveTypes.length; i++) {
                const type = inactiveTypes[i];
                options.push({
                    value: type.singularName,
                    label: TranslationManager.getMonsterTypeSingularNameTranslation(type.singularName)
                } as Modding.Settings.CheckboxOption);
            }

            // Order options alphabetically
            CmimUtils.orderAlphabetically(options, "label");

            // Create setting
            ctx.settings.section('Disabling').add([
                {
                    type: 'checkbox-group',
                    name: 'keep-specific-monster-types-inactive',
                    label: 'Keep specific monster types inactive',
                    hint: 'Forces the selected monster types to stay inactive, regardless of what any mod may communicate. Monster types added by other mods will lose their checkbox state, if you happen to load your save without said mod',
                    options: options,
                    onChange(value: string, previousValue: string): void {
                        SettingsManager.setButtonToReload();

                        const hint = document.querySelector('label[for="customModifiersInMelvor:keep-specific-monster-types-inactive"] > small');
                        if (hint) {
                            hint.textContent = "Reload required";
                            hint.classList.add("text-warning");
                        }
                    }
                } as Modding.Settings.CheckboxGroupConfig
            ]);
        });

        // On character load, use settings to potentially disable certain types that would otherwise be active
        ctx.onCharacterLoaded(function () {
            SettingsManager.getDisableSpecificMonsterTypes.forEach(function (value: string) {
                MonsterTypeManager.trySetTypeInactive(value);
            });
        });
    }

    /**
     *
     */
    public static get getEnableActiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section("Combat Areas Indicators")
            .get('enable-active-monster-type-indicators') as boolean;
    }

    /**
     *
     */
    public static get getEnableInactiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section("Combat Areas Indicators")
            .get('enable-inactive-monster-type-indicators') as boolean;
    }

    /**
     *
     */
    public static get getDisableSpecificMonsterTypes(): string[] {
        return ModContextMemoizer.ctx.settings
            .section("Disabling")
            .get('keep-specific-monster-types-inactive') as string[] ?? [];
    }

    /** Change color of save button from primary to danger */
    private static setButtonToReload() {
        const btn = document.getElementById(`${Constants.MOD_NAMESPACE}:save-reload`);
        if (btn && btn.classList.contains("btn-primary")) {
            btn.classList.replace("btn-primary", "btn-danger");
        }
    }
}