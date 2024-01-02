# Changelog

## v2.3.1
* Re-designed monster-type-list-based settings to be way more compact (courtesy of slahsh's "Skill Boosts" mod)
* Fixed issue where, under certain circumstances, mods could accidentally overwrite monster type allocations of other mods

## v2.3.0
* Game data is now always loaded for all monster types
* Added mod setting to forcefully set monster types active

## v2.2.2
* Re-added/Newly-added api-methods are now actually added/accessible (rather than just the logic behind them...)

## v2.2.1
* Readded deprecated monster-type-related api methods
* Added a new monster-type-related api method, as some of the api methods previously removed didn't have a "parameterized version" yet

## v2.2.0
* Updated monster type allocations
* Added indicator badges for bosses, as well as active and inactive monster types to combat areas
* Added mod settings
  * Toggle whether or not to actually render the respective badges
  * Being able to forcefully keep desired monster types inactive - allows to improve performance, if there are many active monster types, most of which aren't relevant in your current combat situation
* Adjusted monster-type-related calculations, to slightly improve performance in general
* Removed the previously deprecated api methods

## v2.1.2
* Fixed minor issue with [Tiny Icons mod](https://mod.io/g/melvoridle/m/tiny-icons) compatibility,
where icons for monster type modifiers would not be registered
for types activated before the [Tiny Icons mod](https://mod.io/g/melvoridle/m/tiny-icons) is loaded

## v2.1.1
* Removed redundant second go at adding tiny icons for monster type modifiers (technically already preventet by tiny icons mod)

## v2.1.0
* Added "damage taken from monster type" modifiers
* Added modifiers and effects to apply monster types ("trait") during combat
* After some time for backwards-compatibility, all monster types are now inactive by default
* `registerOrUpdateType` endpoint now defaults to `true` for the `active` parameter

## v2.0.0
* Completely revamped monster type system, to be completely dynamic and easy to expand by other mods, 
while also avoiding additional calculations through unutilized types

## v1.2.1
* Quick fix regarding native typing not actually working (refactor with 1.3.0 incoming anyway)

## v1.2.0
* Added Monster and Area Type based Accuracy % modifiers
* Added Monster and Area Type based DR% modifiers

## v1.1.0
* Added more api endpoints
* fixed certain modifiers not actually being boosted by skill lvl

## v1.0.0
* Added type to some monsters
* Upped version to first official release

## v0.2.0
* Added (%) damage taken modifiers for standard spell types

## v0.1.0
* First iteration, with a bunch of modifiers already