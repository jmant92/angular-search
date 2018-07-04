import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from './results.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [ResultsService]
})
export class SearchResultsComponent implements OnInit {
  @Input() listLoc: String;
  @Input() set inputTerms(search: string) {
    
    this.displayList(search);
  }
  private searchTerms = new Subject<string>();
  //list: Object[];
  items$: Observable<Object[]>;

  constructor(private results: ResultsService) { }

  displayList(term: string) {
    this.searchTerms.next(term);
    console.log("Searching for: " + term);
  }

  ngOnInit() {
    this.results.setList(this.listLoc);

    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      switchMap((term: string) => this.results.searchList(term))
    );
  }

}
