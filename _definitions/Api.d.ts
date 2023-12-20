/** Defines api endpoints, helping with intellisense when accessing "mod.api" */
declare global {
    interface MonsterTypeDefinitionCollection {
        [key: string]: MonsterTypeDefinition
    }
}

declare namespace Modding {
    interface ModApi {
        customModifiersInMelvor: {
            /**
             * Allocates the list of monsters to the given type.
             * Whether the type is active, or even exists in the first place, is not relevant to the caller
             * @param type identifier of the type you want to allocate monsters to
             * @param monsterIds which monsters to allocate the type to (full name, including mod-namespace)
             * @returns
             */
            addMonsters: (type: string | MonsterType, monsterIds: string[]) => void

            /**
             * Ensures that the given type will be "active", therefore registering modifiers, language data, etc.
             * @param type which type to ensure activation of
             * @returns
             */
            forceBaseModTypeActive: (type: MonsterType) => void

            /**
             * Retrieve an object, containing information about all types currently marked as active
             * @returns
             */
            getActiveTypes: () => MonsterTypeDefinitionCollection

            /**
             * Retrieve an object, containing information about all types currently marked as inactive
             * @returns
             */
            getInactiveTypes: () => MonsterTypeDefinitionCollection

            /**
             * Checks the monster's type allocation for the provided type
             * @param monster the monster to check
             * @param monsterType what type to check the allocation of
             * @returns
             */
            monsterIsOfType: (monster: Monster, monsterType: string | MonsterType) => Boolean

            /**
             * The main endpoint, if you want to ensure an active type, for which this base mod does not provide any pre-configuration.
             * If you want to support multi-language, it's also important that you load two language-entries (see "Translation of new monster type")
             * @param typeNameSingular - the main identifier of the type. Affects modifier name(s)
             * @param typeNamePlural - the english plural variant of the type's name. Affects modifier name(s)
             * @param iconResourceUrl - a usable full URL to an image that will be used as icon for anything related to this type (e.g. "StackingEffects" or "Tiny Icon Mod Support")
             * @param monsterIds - a list of monster ids. If you are defining a type not covered by the base mod, you should include any Melvor monsters that may fit
             * @param active - whether the type should be set to active (if omitted, will be set to "true") - as a mod consuming the api, this is basically always going to be true, but can technically be set to false as well
             * @returns
             */
            registerOrUpdateType: (typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean = true) => void
        }
    }
}

//export { };