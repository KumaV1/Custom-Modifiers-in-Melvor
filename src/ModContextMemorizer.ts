/**
 * After initial setup, the context object is memoized as a static variable,
 * for easy access on things like api calls
 */
export class ModContextMemoizer {
    private static _ctx: Modding.ModContext
    public static get ctx() {
        return ModContextMemoizer._ctx;
    }

    public static memoizeContext(ctx: Modding.ModContext) {
        this._ctx = ctx;
    }
}