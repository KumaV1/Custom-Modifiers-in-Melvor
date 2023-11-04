# FOR DEATH MARK IMPLEMENTATION
* Tested and is working, only issue being the non increasing modifier value (which is technically useless anyway...)
and the description being reliant on a modifier being setup, unnecessarily :/

# LATER STUFF

* Maybe add "death mark" and "canTriggerDeathMark" modifiers (use "sticky" notification to communicate that execution happened)
* Add "slayer (area) creature" and "slayer task monster (aka +x% y to slayer tasks)" as additional conditions
  * both conditions seem to currently have "increased/decreased % damage", but nothing else
* Add the following custom modifiers as addition to max hit
  * increased/decreased min hit
  * increased/decreased accuracy
  * increased/decreased damage taken (already exists for bosses I think)
  * increased/decreased damage reduction
 
 2 damage taken modifiers and 3 "traitApplied" modifiers excluded,
 should result in approximately 60 modifiers

 **IMPORTANT: SOME MODIFIERS WILL ONLY MAKE SENSE ON A PLAYER (e.g. slayer task related) AND SHOULD THEREFORE BE A PLAYERMODIFIER, NOT COMBATMODIFIER**

 
 * Maybe add +-flat xp modifierm and +-flat xp per skill level
	 
# FINDINGS
Accuracy cannot get patched (before/after anyway), because "modifier.js" doesn't have a reference to the ongoing battle (?)
and the end of "modifyAccuracy" has a "globalAccuracyHPScaling" calculation, but no way to patch inbetween...