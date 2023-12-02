/**
 * In order to have a clear overview of data added to the game-object for quick-access,
 * said data is all wrapped up into a self-explaining object structure.
 *
 * Said object structure has to be initialized though, which is done by this class.
 * It's therefore important, that this is among the first processes triggered during initialization of the mod
 */
export class GameObjectDataWrapperInitializer {
    public static process() {
        game.customModifiersInMelvor = {
            stackingEffects: {},
            customModifierEffects: {},
            specialAttacks: {}
        };
    }
}