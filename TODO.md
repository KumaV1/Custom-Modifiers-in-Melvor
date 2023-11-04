# Soon
* Add "slayer (area) creature" and "slayer task monster (aka +x% y to slayer tasks)" as additional conditions
  * both conditions seem to currently have "increased/decreased % damage", but nothing else
* Add the following custom modifiers as addition to max hit
  * increased/decreased min hit
  * increased/decreased damage taken (already exists for bosses I think)
  * increased/decreased damage reduction
	 
# FINDINGS
Accuracy cannot get patched (before/after anyway), because "modifier.js" doesn't have a reference to the ongoing battle (?)
and the end of "modifyAccuracy" has a "globalAccuracyHPScaling" calculation, but no way to patch inbetween... (except for a replace-patch on the whole function)