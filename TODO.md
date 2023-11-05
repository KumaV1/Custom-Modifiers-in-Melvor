# Soon
* Add the following custom modifiers by type as addition to max hit
  * increased/decreased min hit (Flat min hit modifiers; %, if also added, should be based on max hit I guess, so before modifyMinHit)
  * increased/decreased damage taken (already exists for bosses I think)
  * increased/decreased damage reduction
* Add "slayer (area) creature" and "slayer task monster (aka +x% y to slayer tasks)" as additional conditions
  * both conditions seem to currently have "increased/decreased % damage", but nothing else
 
# FINDINGS
Accuracy cannot get patched (before/after anyway), because "modifier.js" doesn't have a reference to the ongoing battle (?)
and the end of "modifyAccuracy" has a "globalAccuracyHPScaling" calculation, but no way to patch inbetween... (except for a replace-patch on the whole function)