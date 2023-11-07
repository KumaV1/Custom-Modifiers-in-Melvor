# FINDINGS
Accuracy cannot get patched (before/after anyway), because "modifier.js" doesn't have a reference to the ongoing battle (?)
and the end of "modifyAccuracy" has a "globalAccuracyHPScaling" calculation, but no way to patch inbetween... (except for a replace-patch on the whole function)

Damage reduction can't really be patchex (except for replace), because of the same issue as Accuracy (a major re-calculation towards the end of an important function that you must keep after custom logic, but not possible to)