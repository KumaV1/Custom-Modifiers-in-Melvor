# Prefice
With this being a base mod, the purpose is obviously to be taken advantage of by other mods.

As of now, and based on its name also in the future, this is "limited" to the modifiers (and effects) this mod provides. 
The following will therefore give a quick explanation how to utilize those modifiers 
and how they should be implemented to avoid errors as much as possible.

# Getting started
First of all, feel free to have a look at any of the files under `./translations`. Those files naturally contain a list of "all" (more on that later) modifiers and what they do.
That's all there really is to it, you can just use them as you would any other modifier.

But should you do it the usual way?

## Intellisense
If you are planning on not just creating data packages, but also write custom code that is run based on implementations of this mod, 
then you may benefit from the type definitions in the `_definitions` folder.

Assuming you have set up your mod with typescript, 
you can get Intellisense by copying the directory into your repository, and referencing it in your `tsconfig.json` file.

It should look something like this. It's important, by the way, that the base game definitions are placed before this mod's defintions.
Also, you may have to restart your IDE, in order for it to work properly.
```json
{
  "include": [
    "src/**/*",
    "node_modules/melvor-types",
    "_cmimDefinitions/**/*"
  ]
}
```


# How to use modifiers
Let me prefice this with the statement that the following is **technically optional**. 
You can also use the modifiers the same way you use to.

Now, with mods and dependendies, there is always the possibility that someone, accidentally or not,
loads your mod, which at this point takes advantage of this mod, 
without actually using this mod - or maybe while having it later in the mod list.

While this shouldn't be the case, and can be expected to not be the case most of the time, 
we should preferably avoid any error from happening because of it. 

Because of that, you should preferably implement this mod in a way that "only" disables functionalies, rather than throwing errors.

## Monster Types
Unlike the rest of the modifiers, monster types have been implemented in a way that they can be expanded on dynamically. 
Be it by this mod itself, or by other mods, that want to add their own types.

Because of it, a lot of the data is built and registered dynamically. 
That being said, you can still have a look at a translation file and check the "generic" type section to get an idea of which modifiers are possible.

*Example*
```js
MODIFIER_DATA_MonsterTypeTraitApplied: "Marks the affected as ${monsterType}"
```
becomes
```js
MODIFIER_DATA_humanTraitApplied: "Marks the affected as Human"
```

You can make use of the endpoints `mod.api.customModifiersInMelvor.getActiveTypes()`/`mod.api.customModifiersInMelvor.getInactiveTypes()`, to have a closer look at the names of the modifiers created.
The translation entries then generally follow the pattern `MODIFIER_DATA_Name of Modifier`.

## Data files
***IMPORTANT**: Please also have a look at the "API calls" section, as you are gonna require the usage of at least one API-endpoint, 
if you want to add monster-type based modifiers or effects to your data file(s)!*

The main topic to talk about. Let's say you were to add a modifier of this mod to one of your items.
If your mod is now loaded without this mod, the mapping/creation of the items and its data will run into an error.
This, in turn, will effectively delete all of said item the user might have had.

In order to avoid this, you should preferably add all modifiers of this mod through a separate game package (as "modifications"),
and do a check if this mod has been loaded - only adding the other game package, if the base mod has in fact being loaded.
By doing that, items, monsters, etc. will "only" lose those modifiers, but not run into the issue of being deleted.

*Original*
```js
import ModData from './data/data.json'

[...]

ctx.gameData.addPackage(ModData);
```
```json
[...]
{
  "id": "Salve_Amulet",
  "name": "Salve Amulet",
  "category": "Combat",
  "type": "Armour",
  "media": "assets/runescapeEncountersInMelvor/Salve_Amulet.png",
  "ignoreCompletion": true,
  "obtainFromItemLog": false,
  "golbinRaidExclusive": false,
  "sellsFor": 50000,
  "itemType": "Equipment",
  "tier": "none",
  "validSlots": [ "Amulet" ],
  "occupiesSlots": [...],
  "equipRequirements": [...],
  "equipmentStats": [...],
  "modifiers": {
    "increasedDamageAgainstUndead": 15,
    "increasedGlobalAccuracyAgainstUndead": 15
  }
},

[...]
```

*Split up*
```js
import ModData from './data/data.json'
import CmimModData from './data/cmim-data.json'

[...]

ctx.gameData.addPackage(ModData);

const cmimLoaded = mod.manager.getLoadedModList().includes('Custom Modifiers in Melvor');
if (cmimLoaded) {
  ctx.gameData.addPackage(CmimModData);
}
```
```json
{
  "id": "Salve_Amulet",
  "name": "Salve Amulet",
  "category": "Combat",
  "type": "Armour",
  "media": "assets/runescapeEncountersInMelvor/Salve_Amulet.png",
  "ignoreCompletion": true,
  "obtainFromItemLog": false,
  "golbinRaidExclusive": false,
  "sellsFor": 50000,
  "itemType": "Equipment",
  "tier": "none",
  "validSlots": [ "Amulet" ],
  "occupiesSlots": [...],
  "equipRequirements": [...],
  "equipmentStats": [...],
  "modifiers": {

  }
},
```
```json
{
  "id": "runescapeEncountersInMelvor:Salve_Amulet",
  "modifiers": {
    "add": {
      "increasedDamageAgainstUndead": 15,
      "increasedGlobalAccuracyAgainstUndead": 15
    }
  }
},
```

## API calls
Aside from data registration, you might also want to make use of API calls.
To avoid errors here, you should always check the api object, 
before actually trying to call the methods.

***Important**: All api calls related to monster type allocation should be made done by the time the **onMoadsLoaded** lifecycle hook is finished!*

```js
if (mod.api.customModifiersInMelvor) {
  mod.api.customModifiersInMelvor.addMonsters(MonsterType.Dragon, ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]); // if you have the type-definition classes, see "Intellisense" section
  mod.api.customModifiersInMelvor.addMonsters("Dragon", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]);
}
```

### Checking type during combat
While we are on the topic of API calls - while documentation below will also inform you of a way to check type allocation for a monster,
during combat there are two main checks to be aware of.

Organic type allocation is applied on spawm, as easily checkable properties on the character object.
This is qicker than always checking collections in the background.
```js
// Structure
character.isTYPE

// Example
if(game.combat.player.target.isHuman) {
  // Do stuff
}
```

Artificial type allocation (aka "trait") is applied through modifiers, and are therefore checked as you would expect from any other modifier.
That being said, depending on what you are implementing, artificial type allocation might not be a valid condition.
```js
// Structure
character.modifiers.TYPETraitApplied

// Example
if(game.combat.player.target.modifiers.humanTraitApplied > 0) {
  // Do stuff
}
```

# Working with monster type definition
The previous section should have given you a rough idea about the modifiers you can expect and how to work with them.
However, what if you want to add additional monster type definitions based on your mod?

First things first, one important thing to note is the difference between **active** and **inactive** types. 
Active types are those that at least one mod actually makes use of (e.g. using the `Human` type, because you want to use the `increasedDamageAgainstHumans` modifier),
whereas inactive types are those that get defined, but actually end up not being used by any of the loaded mods.
The reason for this difference is to avoid blurting the combat calculations with unnecessary processing.

With that out of the way, this mod provides multiple API endpoints that you can utilize. 
One thing of note, you don't have to worry about expansions purchased by the user, when utilizing these endpoints.

**IMPORTANT**: Please make sure, that all additions/updates to monster type definitions are made **before** `onCharacterLoaded`,
as that's the last lifecycle hook before offline calculation is processed, but furthermore, it's when settings of this mod are evaluated,
which are not supposed to have their changes to monster type definitions be overwritten by other mods!

```ts
// Structure
getActiveTypes() => MonsterTypeDefinitions[]
getInactiveTypes() => MonsterTypeDefinitions[]

// Example
getActiveTypes();
getInactiveTypes();

// Purpose: Primarily meant for debugging purposes, as it returns an object of type definitions info, that may be helpful, if you run into issues
```

```ts
// Structure
forceBaseModTypeActive(type: MonsterType) => void

// Example
forceBaseModTypeActive(MonsterType.Dragon); // if you have the type-definition classes, see "Intellisense" section
forceBaseModTypeActive("Dragon");

// Purpose: This mod comes with a list of monster types already completely pre-configured (check "MonsterType.ts"). 
// If you just want to make sure that one of those pre-configured types is "activated", this endpoint is the way to go.
// However, if the type is **not** pre-configured by the base-mod, then you will have to use the "registerOrUpdateType"-endpoint instead.
```

```ts
// Structure
addMonsters(type: string, monsterIds: string[]) => void

// Example
addMonsters(MonsterType.Dragon, ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]); // if you have the type-definition classes, see "Intellisense" section
addMonsters("Dragon", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]);

// Purpose: Add the list of monsters (full id, so including mod namespace).
// Whether the type is active or even exists is not relevant with this endpoint.
// Also, as you are only providing additional allocation definitions, you are NOT responsible for providing any of the other data required for proper type definition. (see "registerOrUpdateType" for more info)
```

```ts
// Structure
/**
* Registers (or updates) the given type. Do note, that some parameters may be ignored, if another mod has already provided data for the exact same data
* @param typeNameSingular - the main identifier of the type. Affects modifier name(s)
* @param typeNamePlural - the english plural variant of the type's name. Affects modifier name(s) 
* @param iconResourceUrl - a usable full URL to an image that will be used as icon for anything related to this type (e.g. "StackingEffects" or "Tiny Icon Mod Support")
* @param monsterIds - a list of monster ids. If you are defining a type not covered by the base mod, you should include any Melvor monsters that may fit
* @param active - whether the type should be set to active (can be omittet, in which case it will default to true) - as a mod consuming the api, this is basically always going to be true, but can technically be set to false as well
* @returns void
*/
registerOrUpdateType(typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[], active: Boolean)

// Example
registerOrUpdateType("Dragon", "Dragons", "https://cdn.melvor.net/core/v018/assets/media/monsters/dragon_green.png", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]);

// Purpose: The main endpoint, if you want to create a new type, for which this base mod does not provide any pre-configuration. (for such types, use "addMonsters" and "forceBaseModTypeActive" instead)
// If you want to support multi-language, it's also important that you load two language-entries (see "Translation of new monster type")
```

```ts
// Structure
monsterIsOfType: (monster: Monster, monsterType: string | MonsterType) => boolean

// Example
monsterIsOfType(monsterObject, "Dragon");

// Purpose: Check, for a specific monster, whether they are of a certain type
```

```ts
// Structure
getMonstersOfType: (type: string | MonsterType) => string[]

// Example
getMonstersOfType(MonsterType.Dragon); // if you have the type-definition classes, see "Intellisense" section
getMonstersOfType("Dragon");

// Purpose: If you want to run certain functionality for all monsters of a given type (lets say, disable all dragons to not be viable slayer tasks anymore),
// then this method is your go-to in order to get a list of relevant monster ids, so you don't have to tediously check via "getActiveTypes()" and "getInactiveTypes()" yourself
```

## Translation of new monster type
When adding a new monster type yourself, 
it's important that you also include the two following translation keys. It's also important that you set those keys up to not be prefixed by your mod's name.
Check the `TranslationManager` for more info on that.

Though, if you end up forgetting, the logic of the mod will simply display the type names provided during creation, for every language.
It won't result in an "UNDEFINED TRANSLATION" text appearing.

```js
// Structure
MONSTER_TYPE_SINGULAR_Monster type name singular: "Monster type name singular",
MONSTER_TYPE_PLURAL_Monster type name singular: "Monster type name plural",

// Example
MONSTER_TYPE_SINGULAR_Elf: "Elf",
MONSTER_TYPE_PLURAL_Elf: "Elves",
```