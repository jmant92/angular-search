/**
 * DynamicSearchSectionComponent returns the input values of each
 * search box
 * @param search
 * @param form
 * @param terms
 * @param choice
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchBase } from '../create-search-section/search-base';

@Component({
  selector: 'search-box',
  templateUrl: './dynamic-search-section.component.html',
  styleUrls: ['./dynamic-search-section.component.css']
})
export class DynamicSearchSectionComponent {
  @Input() search: SearchBase<any>; // holds the search box 
  @Input() form: FormGroup; // the group the form is part of
  @Output() terms = new EventEmitter(); // the terms to output
  @Output() choice = new EventEmitter(); // the choice selected

  /**
   * Take @param term and output it
   * @param term 
   */
  sendTerms(term: string) {
    this.terms.emit(term);
  }

  /**
   * Take @param key and @param event and combine them into a
   * readable format to output
   * @param key 
   * @param event 
   */
  sendChoice(key, event) {
    this.choice.emit(key + ':' + event.target.value);
  }
}
