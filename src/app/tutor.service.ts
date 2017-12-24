import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Tutor } from './tutor';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class TutorService {

    private addTutorUrl = 'http://localhost:8000/add_tutor';
    private searchTutorsUrl = 'http://localhost:8000/search_tutors?location=';

    constructor(private http: HttpClient) { }

    addTutor(aTutor): Observable<Tutor> {
        console.log('Tried to call backend');
        console.log(JSON.stringify(aTutor));
        var ret_val: any;
        ret_val = null;

        // this.http.get<Tutor>(this.addTutorUrl)
        //     .pipe(
        //     catchError(this.handleError('addTutor', null))
        //     ).subscribe(some_op => ret_val = some_op);

        this.http.post(this.addTutorUrl, JSON.stringify(aTutor)).subscribe(data => {
            console.log('inside request');
            // console.log(data)
        }, err => {
            console.log('Error occured');
            console.log(err);
        });
        ret_val = of(ret_val);
        console.log((ret_val) + 'ret val');
        return ret_val;
    }

    searchTutors(term: string): Observable<string[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http.get<string[]>(`${this.searchTutorsUrl}${term}`).pipe(
            tap(_ => console.log('success response from server')),
            catchError(this.handleError<string[]>('searchTutors', []))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            // return of(result as T);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log('HeroService: ' + message);
    }
}
