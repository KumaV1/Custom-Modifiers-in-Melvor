# Changelog

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