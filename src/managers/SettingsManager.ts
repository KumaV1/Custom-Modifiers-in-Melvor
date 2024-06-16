import { CombatAreasUIManager } from "../managers/CombatAreasUIManager";
import { ModContextMemoizer } from "../ModContextMemoizer";
import { ModConstants } from "../constants/ModConstants";
import { TranslationManager } from "../managers/TranslationManager";

export class SettingsManager {
    /** Because this is slightly quicker than constantly checking the html-element's value attribute */
    private static _onSpawnModifiersDisabled: boolean = false;

    public static init(ctx: Modding.ModContext) {
        // Create static-defined settings
        ctx.settings.section(TranslationManager.getLangString("Settings_Section_Indicators", true)).add([
            {
                type: 'switch',
                name: 'enable-modifier-ui-impact-indicator',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Modifier_UI_Impact_Indicator", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Modifier_UI_Impact_Indicator", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    SettingsManager.setButtonToReload();

                    const hint = document.querySelector(`label[for="${ModConstants.MOD_NAMESPACE_NAME}:enable-modifier-ui-impact-indicator"] > small`);
                    if (hint) {
                        hint.textContent = TranslationManager.getLangString("Settings_Hint_Save_Reload_Required", true);
                        hint.classList.add("text-warning");
                    }
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-boss-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Boss_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Boss_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasUIManager.toggleCombatAreaMonsterTypeIndicators({
                        showBoss: value,
                        showActiveMonsterTypes: SettingsManager.getEnableActiveMonsterTypeIndicators,
                        showInactiveMonsterTypes: SettingsManager.getEnableInactiveMonsterTypeIndicators
                    });
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-active-monster-type-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Active_Monster_Type_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Active_Monster_Type_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasUIManager.toggleCombatAreaMonsterTypeIndicators({
                        showBoss: SettingsManager.getEnableBossIndicators,
                        showActiveMonsterTypes: value,
                        showInactiveMonsterTypes: SettingsManager.getEnableInactiveMonsterTypeIndicators
                    });
                }
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'enable-inactive-monster-type-indicators',
                label: TranslationManager.getLangString("Settings_Setting_Label_Enable_Inactive_Monster_Type_Indicators", true),
                hint: TranslationManager.getLangString("Settings_Setting_Hint_Enable_Inactive_Monster_Type_Indicators", true),
                default: true,
                onChange(value: boolean, previousValue: boolean): void {
                    CombatAreasUIManager.toggleCombatAreaMonsterTypeIndicators({
                        showBoss: SettingsManager.getEnableBossIndicators,
                        showActiveMonsterTypes: SettingsManager.getEnableActiveMonsterTypeIndicators,
                        showInactiveMonsterTypes: value
                    });
                }
            } as Modding.Settings.SwitchConfig,
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
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableModifierUIImpactIndicator(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Indicators", true))
            .get('enable-modifier-ui-impact-indicator') as boolean;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableBossIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Indicators", true))
            .get('enable-boss-indicators') as boolean;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableActiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Indicators", true))
            .get('enable-active-monster-type-indicators') as boolean;
    }

    /**
     * Get corresponding setting field's value
     */
    public static get getEnableInactiveMonsterTypeIndicators(): boolean {
        return ModContextMemoizer.ctx.settings
            .section(TranslationManager.getLangString("Settings_Section_Indicators", true))
            .get('enable-inactive-monster-type-indicators') as boolean;
    }

    /**
     * Change color of save button from primary to danger
     */
    public static setButtonToReload(): void {
        const btn = document.getElementById(`${ModConstants.MOD_NAMESPACE_NAME}:save-reload`);
        if (btn && btn.classList.contains("btn-primary")) {
            btn.classList.replace("btn-primary", "btn-danger");
        }
    }
}