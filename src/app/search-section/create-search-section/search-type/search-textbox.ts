/**
 * Create a textbox search
 * 
 * @param controlType
 * @param type
 */
import { SearchBase } from '../search-base';

export class TextboxSearch extends SearchBase<string> {
    controlType = 'textbox'; // Determines the type of search
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}