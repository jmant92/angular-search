/**
 * Search Control Service is used the add in the form that
 * holds all of the search boxes
 */

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SearchBase } from '../search-base';

@Injectable({
  providedIn: 'root'
})
export class SearchControlService {
  constructor() { }

  toFormGroup(searches: SearchBase<any>[]) {
    let group: any = [];
    // Assign a value to each search box
    searches.forEach(search => {
      group[search.key] = new FormControl(search.value || '');
    });
    return new FormGroup(group);
  }
}
