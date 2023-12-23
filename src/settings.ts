import { CmimUtils } from "./Utils";
import { CombatAreasIndicatorsManager } from "./CombatAreasIndicatorsManager";
import { Constants } from "./Constants";
import { ModContextMemoizer } from "./ModContextMemoizer";
import { MonsterTypeManager } from "./monsterTyping/MonsterTypeManager";
import { TranslationManager } from "./translation/TranslationManager";

export class SettingsManager {
    public static init(ctx: Modding.ModContext) {
        // Create static-defined settings
        ctx.settings.section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true)).add([
            {
                type: 'switch',
                name: 'enable-boss-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Boss_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Boss_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasIndicatorsManager.rebuildCombatAreaMonsterTypeIndicators(
                        value,
                        SettingsManager.getEnableActiveMonsterTypeIndicators,
                        SettingsManager.getEnableInactiveMonsterTypeIndicators
                    );
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-active-monster-type-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Active_Monster_Type_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasIndicatorsManager.rebuildCombatAreaMonsterTypeIndicators(
                        SettingsManager.getEnableBossIndicators,
                        value,
                        SettingsManager.getEnableInactiveMonsterTypeIndicators
                    );
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-inactive-monster-type-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasIndicatorsManager.rebuildCombatAreaMonsterTypeIndicators(
                        SettingsManager.getEnableBossIndicators,
                        SettingsManager.getEnableActiveMonsterTypeIndicators,
                        value
                    );
                }
            } as Modding.Settings.SwitchConfig,
        ]);

        ctx.settings.section(TranslationManager.getLangString("Settings_Section_Disabling", true)).add([
            {
                type: 'label',
                name: 'disabling-info',
                label: TranslationManager.getLangString("Settings_Setting_Label_Disabling_Info", true),
            } as Modding.Settings.SettingConfig,
        ]);

        // On lifetime hook 3 (the one before the run that will actually read settings from save), run the delayed creation of the monster type (de-)activation checkbox lists
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
            ctx.settings.section(TranslationManager.getLangString("Settings_Section_Disabling", true)).add([
                {
                    type: 'checkbox-group',
                    name: 'keep-specific-monster-types-inactive',
                    label: TranslationManager.getLangString("Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive", true),
                    hint: TranslationManager.getLangString("Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive", true),
                    options: options,
                    onChange(value: string, previousValue: string): void {
                        SettingsManager.setButtonToReload();

                        const hint = document.querySelector('label[for="customModifiersInMelvor:keep-specific-monster-types-inactive"] > small');
                        if (hint) {
                            hint.textContent = TranslationManager.getLangString("Settings_Hint_Save_Reload_Required", true);
                            hint.classList.add("text-warning");
                        }
                    }
                } as Modding.Settings.CheckboxGroupConfig,
                {
                    type: 'checkbox-group',
                    name: 'force-specific-monster-types-active',
                    label: TranslationManager.getLangString("Settings_Setting_Label_Force_Specific_Monster_Types_Active", true),
                    hint: TranslationManager.getLangString("Settings_Setting_Hint_Force_Specific_Monster_Types_Active", true),
                    options: options,
                    onChange(value: string, previousValue: string): void {
                        SettingsManager.setButtonToReload();

                        const hint = document.querySelector('label[for="customModifiersInMelvor:force-specific-monster-types-active"] > small');
                        if (hint) {
                            hint.textContent = TranslationManager.getLangString("Settings_Hint_Save_Reload_Required", true);
                            hint.classList.add("text-warning");
                        }
                    }
                } as Modding.Settings.CheckboxGroupConfig,
                {
                    type: "button",
                    name: "save-reload",
                    display: TranslationManager.getLangString("Settings_Setting_Display_Save_Reload", true),
                    color: "primary",
                    onClick: () => {
                        saveData();
                        window.location.reload();
                    }
                } as Modding.Settings.ButtonConfig // added here, so it's placed after the checkbox list
            ]);
        });

        // On character load, use settings to potentially disable/enable certain types that would otherwise be active
        ctx.onCharacterLoaded(function () {
            SettingsManager.getDisableSpecificMonsterTypes.forEach(function (value: string) {
                MonsterTypeManager.trySetTypeInactive(value);
            });

            SettingsManager.getEnableSpecificMonsterTypes.forEach(function (value: string) {
                MonsterTypeManager.trySetTypeActive(value);
            });
        });
    }

    /**
     *
     */
    public static get getEnableBossIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-boss-indicators') as boolean;
    }

    /**
     *
     */
    public static get getEnableActiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-active-monster-type-indicators') as boolean;
    }

    /**
     *
     */
    public static get getEnableInactiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-inactive-monster-type-indicators') as boolean;
    }

    /**
     *
     */
    public static get getDisableSpecificMonsterTypes(): string[] {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Disabling", true))
            .get('keep-specific-monster-types-inactive') as string[] ?? [];
    }

    /**
     *
     */
    public static get getEnableSpecificMonsterTypes(): string[] {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Disabling", true))
            .get('force-specific-monster-types-active') as string[] ?? [];
    }

    /**
     * Change color of save button from primary to danger
     */
    private static setButtonToReload(): void {
        const btn = document.getElementById(`${Constants.MOD_NAMESPACE}:save-reload`);
        if (btn && btn.classList.contains("btn-primary")) {
            btn.classList.replace("btn-primary", "btn-danger");
        }
    }
}