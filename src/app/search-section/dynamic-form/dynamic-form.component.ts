/**
 * DynamicFormComponent handles everything pertaining to
 * whatever happens in the search section
 * 
 * @param searchLoc
 * @param listLoc
 * @param searches
 * @param form
 * @param inputSearch
 */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SearchBase } from '../create-search-section/search-base';
import { SearchControlService } from '../create-search-section/search-services/search-control.service';
import { SearchService } from '../create-search-section/search-services/search.service';

@Component({
  selector: 'search-section',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() searchLoc: string; // the file path of the search boxes
  @Input() listLoc: string; // the file path of the list to conduct the search within
  searches: SearchBase<any>[] = []; // holds the search boxes
  form: FormGroup; // a form group to hold the search boxes in
  inputSearch = ''; // the item to search for

  constructor(private scs: SearchControlService,
    private service: SearchService) { }

  ngOnInit() {
    this.service.setBoxURL(this.searchLoc); // set the searchbox json file url
    this.service.getBoxes().subscribe((data) => { // get the searchbox json data
      this.searches = this.service.generateSearchBoxes(data) // generate the search boxes
    });
    this.form = this.scs.toFormGroup(this.searches); // add the searchboxes to the form group
  }

  /**
   * Sets inputSearch equal to @param term so it can be used to
   * search for an item in the list
   * @param term 
   */
  searchFor(term) {
    this.inputSearch = term;
  }
}
