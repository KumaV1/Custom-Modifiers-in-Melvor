import { Constants } from '../Constants'

/**
 * Patches a couple name/description getters, so they access our integrated localization
 *
 * IMPORTANT: For certain descriptions, they only run our custom logic, if a custom description has been defined,
 * as otherwise it's an auto generated descriütion (like modifier effects), which are handled by the game's own translations already
 */
export class Translation {
    constructor(private readonly context: Modding.ModContext) { }

    public init() {
        this.context.patch(Page, 'name').get(function (patch) {
            if (this.namespace === Constants.MOD_NAMESPACE) {
                return getLangString(`PAGE_NAME_${this.localID}`);
            }

            return patch();
        });
    }
}