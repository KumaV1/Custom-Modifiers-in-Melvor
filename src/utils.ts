export class CmimUtils {
    /**
     * Remove ALL elements with the given class from the document tree
     * @param className
     */
    public static removeElementsByClass(className: string) {
        const elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].parentNode?.removeChild(elements[0]);
        }
    }

    /**
     * Order list of objects alphabetically
     * @param list
     * @param propertyName
     * @param asc whether to order in ascending or descending order
     */
    public static orderAlphabetically(arr: object[], propertyName: string, asc: boolean = true): void {
        arr.sort(function (a, b) {
            // @ts-ignore - you can access properties with this syntax
            if (a[propertyName] < b[propertyName]) {
                return asc ? -1 : 1;
            }

            // @ts-ignore - you can access properties with this syntax
            if (a[propertyName] > b[propertyName]) {
                return asc ? 1 : -1;
            }

            return 0;
        });
    }

    /**
     * Returns one of two different modifier descriptions, as some may, ever so slightly, vary between singular and plural.
     * That being said, it's important to note that this method expects a certain naming convention for plural texts
     * @param value the value of the modifier
     * @param modifierName
     * @returns
     */
    public static getModifierDescription(value: number, modifierName: string): string {
        return value > 1
            ? templateLangString(`MODIFIER_DATA_${modifierName}_Plural`, {
                value: numberWithCommas(value)
            })
            : templateLangString(`MODIFIER_DATA_${modifierName}`, {
                value: numberWithCommas(value)
            });
    }
}