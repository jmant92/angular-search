/**
 * Search Service assigns the json values to their respective 
 * search boxes
 * 
 * @param boxURL
 * @param searchType
 * 
 * @func setBoxURL
 * @func getBoxes
 * @func generateSearchBoxes
 */

import { Injectable } from '@angular/core';

import { SearchBase } from '../search-base';
import { TextboxSearch } from '../search-type/search-textbox';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { DropdownSearch } from '../search-type/search-dropdown';

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    private boxURL: string; // url of the search box json files
    searchType = { // an object that holds different functions for each search box.
        'textbox' : (e) => new TextboxSearch(e),
        'dropdown' : (e) => new DropdownSearch(e)
    }

    constructor(private http: HttpClient) {
    }

    /**
     * Sets the url to the search box json file path
     * @param url 
     */
    setBoxURL(url): void {
        this.boxURL = url;
    }

    /**
     * Gets the search boxes from the json file
     */
    getBoxes(): Observable<SearchBase<any>> {
        return this.http.get<SearchBase<any>>(this.boxURL)
            .pipe(
                tap(_ => console.log(`Fetching search boxes from '${this.boxURL}'`))
            );
    }

    /**
     * Generates the search boxes based on their json data
     * @param searchArray 
     */
    generateSearchBoxes(searchArray): SearchBase<any>[] {
        if(!searchArray) return null;
        let searches: SearchBase<any>[] = []; // for holding the search boxes
        searchArray.forEach(e => {
            if(e['controlType']==='dropdown') { // If it's a dropdown
                // Add an empty choice at the beginning
                e['options'].unshift({"key": "_", "value": ""});
            }
            // Add the search box
            searches.push( // based on their control type
                this.searchType[e['controlType'] || 'textbox'](e)
            );
        });
        console.log(searches);
        return searches.sort((a,b) => a.order - b.order);
    }
}