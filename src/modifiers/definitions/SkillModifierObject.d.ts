declare global {
    interface SkillModifierObject<Skill> {
        /** Percentage */
        increasedSkillXPPerSkillLevel: Skill,
        /** Percentage */
        decreasedSkillXPPerSkillLevel: Skill,
        /** Increases total xp gain for given skill (so unaffected by xp multipliers!) */
        increasedFlatSkillXP: Skill,
        /** Decreased total xp gain for given skill (so unaffected by xp multipliers!) */
        decreasedFlatSkillXP: Skill,
        /** Increases total xp gain for given skill (so unaffected by xp multipliers!) */
        increasedFlatSkillXPPerSkillLevel: Skill,
        /** Decreased total xp gain for given skill (so unaffected by xp multipliers!) */
        decreasedFlatSkillXPPerSkillLevel: Skill,
    }
}

export { };