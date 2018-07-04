/**
 * Creates a dropdown search box.
 * 
 * @param controlType 
 * @param options 
 */
import { SearchBase } from '../search-base';

export class DropdownSearch extends SearchBase<string> {
    controlType = 'dropdown'; // Determines the type of search box
    options: {key: string, value: string}[] = []; // Determines the options within the dropdown

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}