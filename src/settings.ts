export class CmimSettings {
    constructor(private readonly context: Modding.ModContext) { }

    // TODO: Idea for additional/change mod setting/restriction to existing one:
    // * Checkbox list if active and or inactive indicators should be displayed
    // * Checkbox list whether the indicators should be displayed for combat areas, slayer areas and/or dungeons

    public init() {
        //let typeIndicatorHint = new HTMLSpanElement();
        //typeIndicatorHint.innerHTML. = 'Monsters/Dungeons will display when inherent monster types are allocated (colored based on whether they are <span class="font-w600 text-success">active</span> or <span class="font-w600 text-warning">inactive</span>)';

        this.context.settings.section('Monster Types').add([
            {
                type: 'switch',
                name: 'enable-type-indicators',
                label: 'Enable type indicators',
                hint: 'Monsters/Dungeons will display when inherent monster types are allocated (green if active, orange if inactive)',
                default: false
            } as Modding.Settings.SwitchConfig,
            {
                type: 'switch',
                name: 'disable-all-monster-type-calculations',
                label: 'Disable all monster type calculations',
                hint: 'Forces all monster types to be inactive, resulting in no calculations being made for them',
                default: false
            } as Modding.Settings.SwitchConfig,
            {
                type: 'text',
                name: 'force-monster-types-inactive',
                label: 'Force monster types inactive',
                hint: 'A semicolon-separated (;) list of monster type names. The monster type overview includes a tab that displays the technical words necessary. The Inactive tab will also display an info text, if the type is being set to inactive due to this setting',
                default: "",
                onChange(value: string, previousValue: string): string | boolean {
                    // Check whether the input only contains letters and semicolons
                    if (true) {
                        return "ERROR";
                    }

                    return true;
                }
            } as Modding.Settings.TextConfig
        ])
    }

    // TODO: OnInterfaceReady, inject buttons into settings, that will add the technical name of the corresponding type into the text field

    public get enableTypeIndicators(): boolean {
        return true;
    }

    public get disableAllMonsterTypeCalculations(): boolean {
        return false;
    }

    public get forceMonsterTypesInActive(): string[] {
        return [];
    }
}