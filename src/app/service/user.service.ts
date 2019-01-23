import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { tap, catchError, filter } from 'rxjs/operators';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   *  Read all Users
   *  return a table of user
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://fronttoback-9bb02.firebaseio.com/users.json')
      .pipe(
        tap(data => {
          data
        }),
        catchError(this.handleError('getUsers', []))
      );
  }

  /**
   *  Read all Users and look for one user
   *  return a user
   */
  getUserByKey(key: string): Observable<User[]>
  {
    //console.log('https://fronttoback-9bb02.firebaseio.com/users/' + key + '.json'); /* Cette console.log() est utile pour debug */
    return this.http.get<User[]>('https://fronttoback-9bb02.firebaseio.com/users/' + key + '.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getUserByKey', []))
      );
  }

  /**
   *  Add a new User to the table
   *  @param User
   */
  addUser(user: User): Observable<User>
  {
    let url = `https://fronttoback-9bb02.firebaseio.com/users.json`;
    return this.http.post<User>(url, user, {responseType: 'json'}).pipe(
        tap((product: User) => console.log('User Added')),
        catchError(this.handleError<User>('addUser')),
      );
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
