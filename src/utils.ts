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
}