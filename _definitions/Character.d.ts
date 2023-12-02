// IMPORTANT: Only types actually set to be active will be set like this, so true/truthy checks can only succeed in that case
declare global {
    interface Character {
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