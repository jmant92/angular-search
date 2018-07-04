/**
 * SearchBase is an exported class that makes up the majority of
 * each search boxes elements.
 * 
 * @param value The value within the search box
 * @param key The key by which the search box is called
 * @param label The label on the search box
 * @param order The order the search box shows up in
 * @param controlType The type of the search box
 */

export class SearchBase<T> {
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        order?: number,
        controlType?: string
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1:options.order;
        this.controlType = options.controlType || '';
    }
}