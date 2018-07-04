/**
 * App Component is soley used to execute the search section.
 * It becomes unnecessary when the module gets integrated into an app
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <search-section [searchLoc]="searchLoc" [listLoc]="listLoc">
  </search-section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchLoc = 'assets/searches.json';
  listLoc = 'assets/list.json';

  constructor() {}

  ngOnInit() {
  }

}
