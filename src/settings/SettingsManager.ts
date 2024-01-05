import { Constants } from "../Constants";
import { CombatAreasIndicatorsManager } from "../CombatAreasIndicatorsManager";
import { ModContextMemoizer } from "../ModContextMemoizer";
import { MonsterTypeListConfigFunctions } from "./MonsterTypeListConfigFunctions";
import { MonsterTypeManager } from "../monsterTyping/MonsterTypeManager";
import { TranslationManager } from "../translation/TranslationManager";

export class SettingsManager {
    /** Because this is slightly quicker than constantly checking the html-element's value attribute */
    private static _onSpawnModifiersDisabled: boolean = false;

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
            {
                type: 'switch',
                name: 'disable-all-on-spawn-modifiers',
                label: 'Disable on-spawn modifiers',
                hint: 'Disables all on spawn modifiers added by this mod',
                onChange(value: boolean, previousValue: boolean): void {
                    SettingsManager._onSpawnModifiersDisabled = value;
                }
            } as Modding.Settings.SwitchConfig
        ]);

        ctx.settings.section(TranslationManager.getLangString("Settings_Section_Enabling", true)).add([
            {
                type: 'label',
                name: 'enabling-info',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enabling_Info", true),
            } as Modding.Settings.SettingConfig,
        ]);

        ctx.settings.section(TranslationManager.getLangString("Settings_Section_Save_And_Reload", true)).add([
            {
                type: "button",
                name: "save-reload",
                display: TranslationManager.getLangString("Settings_Setting_Display_Save_Reload", true),
                color: "primary",
                onClick: () => {
                    saveData();
                    window.location.reload();
                }
            } as Modding.Settings.ButtonConfig
        ]);

        // On lifetime hook 3 (the one before the run that will actually read settings from save), run the delayed creation of the monster type (de-)activation checkbox lists
        ctx.onInterfaceAvailable(function () {
            // Create setting
            ctx.settings.section(TranslationManager.getLangString("Settings_Section_Disabling", true)).add([
                {
                    type: 'custom',
                    name: 'keep-specific-monster-types-inactive',
                    label: TranslationManager.getLangString("Settings_Setting_Label_Keep_Specific_Monster_Types_Inactive", true),
                    hint: TranslationManager.getLangString("Settings_Setting_Hint_Keep_Specific_Monster_Types_Inactive", true),
                    render: MonsterTypeListConfigFunctions.render,
                    onChange: MonsterTypeListConfigFunctions.onChange,
                    get: MonsterTypeListConfigFunctions.get,
                    set: MonsterTypeListConfigFunctions.set
                } as Modding.Settings.CheckboxGroupConfig
            ]);

            ctx.settings.section(TranslationManager.getLangString("Settings_Section_Enabling", true)).add([
                {
                    type: 'custom',
                    name: 'force-specific-monster-types-active',
                    label: TranslationManager.getLangString("Settings_Setting_Label_Force_Specific_Monster_Types_Active", true),
                    hint: TranslationManager.getLangString("Settings_Setting_Hint_Force_Specific_Monster_Types_Active", true),
                    render: MonsterTypeListConfigFunctions.render,
                    onChange: MonsterTypeListConfigFunctions.onChange,
                    get: MonsterTypeListConfigFunctions.get,
                    set: MonsterTypeListConfigFunctions.set
                } as Modding.Settings.CheckboxGroupConfig
            ]);
        });

        // On character load, use settings to potentially disable/enable certain types that would otherwise be active
        // Also cache one setting's value, as it is accessed very often compared to most other settings, which are not checked much per character load
        ctx.onCharacterLoaded(function () {
            SettingsManager.getDisableSpecificMonsterTypes.forEach(function (value: string) {
                MonsterTypeManager.trySetTypeInactive(value);
            });

            SettingsManager.getEnableSpecificMonsterTypes.forEach(function (value: string) {
                MonsterTypeManager.trySetTypeActive(value);
            });

            SettingsManager._onSpawnModifiersDisabled = ctx.settings
                .section(TranslationManager.getLangString("Settings_Section_Disabling", true))
                .get('disable-all-on-spawn-modifiers') as boolean ?? false;
        });
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableBossIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-boss-indicators') as boolean;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableActiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-active-monster-type-indicators') as boolean;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableInactiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Combat_Areas_Indicator", true))
            .get('enable-inactive-monster-type-indicators') as boolean;
    }

    /**
     * Get CACHED VALUE of setting field
     * @returns
     */
    public static getDisableAllOnSpawnModifiers(): boolean {
        return SettingsManager._onSpawnModifiersDisabled;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getDisableSpecificMonsterTypes(): string[] {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Disabling", true))
            .get('keep-specific-monster-types-inactive') as string[] ?? [];
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableSpecificMonsterTypes(): string[] {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Enabling", true))
            .get('force-specific-monster-types-active') as string[] ?? [];
    }

    /**
     * Change color of save button from primary to danger
     */
    public static setButtonToReload(): void {
        const btn = document.getElementById(`${Constants.MOD_NAMESPACE}:save-reload`);
        if (btn && btn.classList.contains("btn-primary")) {
            btn.classList.replace("btn-primary", "btn-danger");
        }
    }
}