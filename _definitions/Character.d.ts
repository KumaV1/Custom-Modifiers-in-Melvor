/** IMPORTANT: Only types actually set to be active will have those properties set during spawn, so true/truthy checks can only succeed for active monster types */
declare global {
    interface Enemy {
        isAnimal: boolean,
        isDemon: boolean,
        isDragon: boolean,
        isElemental: boolean,
        isHuman: boolean,
        isMythicalCreature: boolean,
        isUndead: boolean,
        isSeaCreature: boolean
    }
}

export { };