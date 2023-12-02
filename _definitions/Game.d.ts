declare global {
    interface CmimStackingEffectCollection {
        [key: string]: StackingEffect
    }

    interface CmimCustomModifierEffectCollection {
        [key: string]: CustomEffectData
    }

    interface CmimSpecialAttackCollection {
        [key: string]: SpecialAttack
    }

    interface Game {
        customModifiersInMelvor: {
            stackingEffects: CmimStackingEffectCollection
            customModifierEffects: CmimCustomModifierEffectCollection
            specialAttacks: CmimSpecialAttackCollection
        }
    }
}

export { };