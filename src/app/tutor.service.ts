import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tutor } from './guru';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TutorService {

  private addTutorUrl = 'http://localhost:8000/add_tutor';

  constructor(private http: HttpClient) { }

  addTutor(): Observable<Tutor> {
    console.log('Tried to call backend');
    var ret_val: any;
    ret_val = null;
    (this.http.get<Tutor>(this.addTutorUrl)
    .pipe(
      catchError(this.handleError('addTutor', null))
    )).subscribe(some_op => ret_val = some_op);
    ret_val = of(ret_val);
    console.log((ret_val) + 'ret val');
    return ret_val;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<Tutor> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      // return of(result as T);
      return null;
    };
  }

  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}
