//declare global {
//    // TODO: Change names to start with cmim prefix, to avoid collision with other mods
//    declare interface CharacterModifierTable {
//        readonly chanceToReduceAttackDamageToZero: number;
//        readonly damageFlatWhileTargetHasMaxHP: number;
//        readonly damagePercentWhileTargetHasMaxHP: number;
//        readonly damageFlatIgnoringResistance: number;
//        readonly damagePreventionThreshold: number;
//        readonly combatDamagePreventionThreshold: number; // TODO: Use aliases to rename to combatDamagePreventionThreshold (?)
//        readonly combatBarrierDamagePreventionThreshold: number;// TODO: Use aliases to rename to combatBarrierDamagePreventionThreshold (?)

//        // TODO: Effects have been reworked, so many following modifiers will have to be re-evaluated, whether they should still exist (and if not, whether they should at least be registered, for backwards compatibility?)
//        // They seem to have been moved to aliases for "effectXChance" (e.g. "effectIgnoreChance") with the corresponding effect's id as scope
//        readonly increasedChanceToApplySlowOnSpawn: number;
//        readonly decreasedChanceToApplySlowOnSpawn: number;
//        readonly increasedChanceToApplyStunOnSpawn: number;
//        readonly decreasedChanceToApplyStunOnSpawn: number;
//        readonly applyStunOnSpawn: number;
//        readonly increasedChanceToApplyPoisonOnSpawn: number;
//        readonly decreasedChanceToApplyPoisonOnSpawn: number;
//        readonly increasedChanceToApplyDeadlyPoisonOnSpawn: number;
//        readonly decreasedChanceToApplyDeadlyPoisonOnSpawn: number;
//        readonly increasedChanceToApplyAfflictionOnSpawn: number;
//        readonly decreasedChanceToApplyAfflictionOnSpawn: number;
//        readonly applyAfflictionOnSpawn: number;
//        readonly increasedChanceToApplyBleedOnSpawn: number;
//        readonly decreasedChanceToApplyBleedOnSpawn: number;
//        readonly increasedChanceToApplyBurnOnSpawn: number;
//        readonly decreasedChanceToApplyBurnOnSpawn: number;
//        readonly increasedChanceToApplyFreezeOnSpawn: number;
//        readonly decreasedChanceToApplyFreezeOnSpawn: number;
//        readonly applyFreezeOnSpawn: number;
//        readonly increasedChanceToApplyFrostburnOnSpawn: number;
//        readonly decreasedChanceToApplyFrostburnOnSpawn: number;
//        readonly increasedChanceToApplyShockOnSpawn: number;
//        readonly decreasedChanceToApplyShockOnSpawn: number;
//        readonly applyShockOnSpawn: number;
//        readonly increasedChanceToApplySleepOnSpawn: number;
//        readonly decreasedChanceToApplySleepOnSpawn: number;
//        readonly applySleepOnSpawn: number;

//        readonly increasedChanceToApplyBleed: number;
//        readonly decreasedChanceToApplyBleed: number;

//        /** Flag (by the custom effect) that effect has been applied, it's NOT an increasing value */
//        // TODO: An effect, so same as above; also think about using this opportunity to rework the logic behind death marks and counting them up/down, depending on what the combat effect refactor allows
//        readonly deathMark: number;
//        //readonly increasedDeathMarkOnHit: number;
//        //readonly increasedChanceToApplyStackOfDeathMark: number;
//        //readonly decreasedChanceToApplyStackOfDeathMark: number;
//        readonly deathMarkImmunity: number; // TODO: Add this as alias for "effectIgnoreChance", while possibly using a "deathMarkLike" id, depending on whether this is about combat effect (where more than one variant of death mark application may exist), or more about a "category", that can just be called death mark
//        //readonly decreasedDeathMarkImmunity: number;
//        //readonly applyDeathMarkOnSpawn: number;

//        //readonly magicDamage: number; magic spell damage taken moved to "magic max hit" via enemy Modifier and with spell scoping

//        // Only for monster types defined by this base mod
//        readonly animalTraitApplied: number;
//        readonly demonTraitApplied: number;
//        readonly dragonTraitApplied: number;
//        readonly elementalTraitApplied: number;
//        readonly elfTraitApplied: number;
//        readonly humanTraitApplied: number;
//        readonly mythicalCreatureTraitApplied: number;
//        readonly seaCreatureTraitApplied: number;
//        readonly undeadTraitApplied: number

//        // TODO: Add method that provides certain boosts based on monster type - although the according getters have to be patched anyway, so not sure if any custom methods/getters could be relevant
//    }
//}

//export { };