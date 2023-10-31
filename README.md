# Introduction
This mod implements a couple of new modifiers to melvor.

## Regular users
You don't have to care about this mod, unless another mod specifically defines this mod as a dependency. In that case, please make sure that this mod is loaded before any mods that uses this mod.

## Developers
Feel free to have a look at the `src/modifiers/CombatModifiersManager.ts` file, to have a look at what modifiers you can implement. (TODO: Modifiers will probably be moved to their own file)

Of course, if you use any of these modifiers, remember to flag this mod as a dependency for your mod.

### Monster type definition
One important thing to note is that this mod adds a couple of modifiers, which affect monsters of a certain type. 
For example, there is an `increasedMaxHitPercentAgainstDragons`, which, as the name suggests, 
increases your max hit by a certain percentage, but only against dragons.

As Melvor doesn't come with monster types by default, an alternative way had to be taken instead.
Basically, for each type, there is a static array of monster ids, that will be checked to see if a certain modifier should be applied against the current enemy.

If you add new monsters in your mod, then you will have to specifically register the types to the monsters you implement, in order for corresponding modifiers to take effect. 
To do so, you will have to call the following method(s) during your setup.
```js
mod.api.customModifiersInMelvor.addDragons(["MOD_NAMESPACE:MONSTER_ID", "MOD_NAMESPACE:MONSTER_ID", "..."]);
```

**NOTE**: In the future, there will be a "Monster typing overview" in the game, that will make it easy for users and developers alike to see exactly which types are currently allocated to which monsters.