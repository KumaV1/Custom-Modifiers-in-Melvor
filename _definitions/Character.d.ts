// IMPORTANT: Only types actually set to be active will be set like this, so true/truthy checks can only succeed in that case
declare global {
    interface Character {
        isHuman: boolean,
        isDragon: boolean,
        isUndead: boolean
    }
}

export { };