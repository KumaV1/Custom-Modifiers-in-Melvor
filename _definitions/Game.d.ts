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
            originalFunctions: {
                utils: {
                    stunNotify(damage: number): void
                }
            }
        }
    }
}

export { };