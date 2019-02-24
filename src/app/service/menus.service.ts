import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  url = 'http://aston.maquette-potion-mediatique.com/menus/';
  constructor(private http: HttpClient) { }

  /**
   *  Retrieve all Menus
   *  return a table of menus
   */
  getMenus(): Observable<any>
  {
    return this.http.get<any>(this.url).pipe(tap(data =>
      {
        data
      }),
      catchError(this.handleError('getMenus', [])))
  }

  getMenusByKey(key: string) : Observable<any>
  {
    return this.http.get<any>(this.url + key);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }
}
