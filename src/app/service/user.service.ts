import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8000/users/';

  constructor(private http: HttpClient) { }

  /**
   *  Read all Users
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
  getUserByKey(key: string): Observable<User>
  {
    return this.http.get<User>(this.url + key)
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError<User>('getUserByKey')),
      );
  }

  /**
   *  Add a new User to the table
   *  @param User
   *  @return Observable
   */
  addUser(user: User): Observable<User>
  {
    return this.http.post<User>(this.url, user, {responseType: 'json'}).pipe(
        tap((user: User) => console.log('User Added')),
        catchError(this.handleError<User>('addUser')),
      );
  }

  deleteUser(key: string): Observable<User>
  {
    return this.http.delete<User>(this.url).pipe(
      tap((user: User) => console.log('User deleted')),
      catchError(this.handleError<User>('deleteUser')),
    );
  }

  updateUser(key: string, user: User): Observable<User>
  {
    return this.http.patch<User>(this.url + key, user).pipe(
      tap((user: User) => console.log('User updated')),
      catchError(this.handleError<User>('updateUser')),
    );
  }

  loginUser(user: User): Observable<HttpResponse<Object>>
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
