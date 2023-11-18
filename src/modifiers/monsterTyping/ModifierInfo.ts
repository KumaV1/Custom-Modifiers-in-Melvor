export class ModifierInfo implements StandardModifierTemplate {
    public modifierName: string;
    public isSkill: false;
    public isNegative: boolean;
    public description: string;
    public modifyValue?: ((value: number) => string | number) | undefined;
    public langDescription?: string | undefined;
    public tags: string[];

    constructor(modifierName: string) {
        this.modifierName = modifierName;
        this.isSkill = false;
        this.isNegative = false; // TODO: To be defined by property/modifier name
        this.description = '';
        this.modifyValue = multiplyByNumberMultiplier; // TODO: To be defined by property/modifier name
        this.langDescription = getLangString(`MODIFIER_DATA_${this.modifierName}`);
        this.tags = ['combat'];
    }
}