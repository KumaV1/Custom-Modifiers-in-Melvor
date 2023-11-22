# Prefice
With this being a base mod, the purpose is obviously to be taken advantage of by other mods.

As of now, and based on its name also in the future, this is "limited" to the modifiers (and effects) this mod provides. 
The following will therefore give a quick explanation how to utilize those modifiers 
and how they should be implemented to avoid errors as much as possible.

# Getting started
First of all, feel free to have a look at any of the files under `./translations`. Those files naturally contain a list of "all" (more on that later) modifiers and what they do.
That's all there really is to it, you can just use them as you would any other modifier.

But should you do it the usual way?

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

You can make use of the endpoint `mod.api.customModifiersInMelvor.getTypes()`, to have a closer look at the names of the modifiers created.
The translation entries then generally follow the pattern `MODIFIER_DATA_Name of Modifier`.

## Data files
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
```js
if (mod.api.customModifiersInMelvor) {
  mod.api.customModifiersInMelvor.addMonsters("Dragon", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"])
}
```
*Note: There is currently no type support for API calls. 
Just check `initApiEndpoints` in the `setup.ts` file to see exact type definition for the methods you want to call*


# Working with monster types
The previous section should have given you a rough idea about the modifiers you can expect and how to work with them.
However, what if you want to add additional monster type definitions based on your mod?

For that purpose, this mod provides multiple API endpoints that you can utilize.

```ts
// Structure
addMonsters(type: string, monsterIds: string[])

// Example
addMonsters("Dragon", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]);

// Purpose: Add the list of monsters (full id, so including mod namespace) to an already existing type
```

```ts
// Structure
monsterIsOfType: (monster: Monster, monsterType: string | MonsterType)

// Example
monsterIsOfType(monsterObject, "Dragon");

// Purpose: Check, for a specific monster, whether they are of a certain type
```

```ts
// Structure
registerOrUpdateType(typeNameSingular: string, typeNamePlural: string, iconResourceUrl: string, monsterIds: string[])

// Example
registerOrUpdateType("Dragon", "Dragons", "Both full URL and /asset path (should) work", ["runescapeEncountersInMelvor:Gorvek_And_Vindicta"]);

// Purpose: Creating an additional type. Or add the monsters to an existing type definition, if one with the same name already exists.
// The resource url is used for compatibility with the "Tiny Icons" mod and, in the future, for "Stacking Effects", which will apply the corresponding type trait
```

```ts
// Structure
getTypes()

// Example
getTypes();

// Purpose: Returns an object containing all loaded type definitions. Helpful for checking whether your data has been registered successfully
```

## Translation of new monster type
When adding a new monster type yourself, 
it's important that you also include the two following translation keys.
```js
// Structure
MONSTER_TYPE_SINGULAR_Monster type name singular: "Monster type name singular",
MONSTER_TYPE_PLURAL_Monster type name singular: "Monster type name plural",

// Example
MONSTER_TYPE_SINGULAR_Human: "Human",
MONSTER_TYPE_PLURAL_Human: "Humans",
```