import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService
{
  url = 'http://aston.maquette-potion-mediatique.com/orders/';
  constructor(private http: HttpClient) { }

  /**
   *  Read all Orders
   *  return a table of order
   */
  getOrders(): Observable<any>
  {
    return this.http.get<any>(this.url)
      .pipe(
        tap(data => {
          data
        }),
        catchError(this.handleError('getOrders', []))
      );
  }

  getOrderByKey(key: string) : Observable<any>
  {
    return this.http.get<any>(this.url + key)
    .pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleError('getOrderByKey', []))
    );
  }

  /**
   *  Add a new Order to the table
   *  @param Order
   */
  addOrder(order: any): Observable<any>
  {
    return this.http.post<any>(this.url, order, { responseType: 'json' }).pipe(
      tap((product: any) => console.log('order Added')),
      catchError(this.handleError<any>('addBeer')),
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T)
  {
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
