import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private listUrl: string;

  constructor(private http: HttpClient) { }

  setList(url) {
    this.listUrl = url;
  }

  getList(): Observable<Object[]> {
    return this.http.get<Object[]>(this.listUrl)
    .pipe(
      tap(items => console.log(`fetched items`)),
      catchError(this.handleError(`getList`, []))
    );
  }

  searchList(term): Observable<Object[]> {
    let option = term.substring(0, term.indexOf(':'));
    let search = term.substring(term.indexOf(':')+1, term.length);
    console.log(`Option: ${option}, Search: ${search}`);
    if(!search.trim()) {
      // if not search term, return empty hero array
      return of([]);
    }

    return this.http.get<Object[]>(`${this.listUrl}`)
      .pipe(
        map(res =>
          res.filter(item => {
            return item[option].toString().toLowerCase().indexOf(search) !== -1;
          })
        ),
        tap(_ => console.log(`found heroes matching ${option}: ${search}`)),
        catchError(this.handleError<Object[]>(`searchList`, []))
      )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}
