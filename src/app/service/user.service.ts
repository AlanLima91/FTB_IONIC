import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://aston.maquette-potion-mediatique.com/users/';

  constructor(private http: HttpClient) { }

  /**
   *  Retrieve all Users
   *  return a table of user
   */
  getUsers(): Observable<any>
  {
    return this.http.get<any>(this.url).pipe(tap(data =>
      {
        data
      }),
      catchError(this.handleError('getUsers', [])))
  }

  /**
   *  Read all Users and look for one user
   *  return a user
   */
  getUserByKey(key: string): Observable<any>
  {
    return this.http.get<any>(this.url + key);
  }

  /**
   *  Add a new User to the table
   *  @param User
   *  @return Observable
   */
  addUser(user: any): Observable<any>
  {
    return this.http.post<any>(this.url, user, {responseType: 'json'}).pipe(
        tap((user: any) => console.log('User Added')),
        catchError(this.handleError<any>('addUser')),
      );
  }

  deleteUser(key: string): Observable<any>
  {
    return this.http.delete<any>(this.url).pipe(
      tap((user: any) => console.log('User deleted')),
      catchError(this.handleError<any>('deleteUser')),
    );
  }

  updateUser(key: string, user: any): Observable<any>
  {
    return this.http.patch<any>(this.url + key, user).pipe(
      tap((user: any) => console.log('User updated')),
      catchError(this.handleError<any>('updateUser')),
    );
  }

  loginUser(user: any): Observable<HttpResponse<Object>>
  {
    return this.http.post<HttpResponse<Object>>(this.url + 'login', user, {
      observe: "response"
    });
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
