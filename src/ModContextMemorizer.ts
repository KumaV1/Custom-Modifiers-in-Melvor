/**
 * After initial setup, the context object is memorized as a static variable,
 * for easy access on things like api calls
 */
export class ModContextMemorizer {
    private static _ctx: Modding.ModContext
    public static get ctx() {
        return ModContextMemorizer._ctx;
    }

    public static memorizeContext(ctx: Modding.ModContext) {
        this._ctx = ctx;
    }
}