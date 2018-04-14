import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';

@Component({
    selector: 'app-tutor-search',
    templateUrl: './tutor-search.component.html',
    styleUrls: ['./tutor-search.component.css']
})
export class TutorSearchComponent implements OnInit {
    tutors$: Observable<string[]>;
    private searchTerms = new Subject<string>();
    locations = [];
    constructor(private tutorService: TutorService) { }

    search(term: string): void {
        this.searchTerms.next(term);
        var tutString;
        this.tutors$.subscribe(function(event) {
            tutString = event;
            console.log('term is ' + term);
            console.log('tutors ' + tutString);
            if (term === tutString[0]) {
                alert('Bingo');
            }
        });
    }

    ngOnInit() {
        this.tutors$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.tutorService.searchTutors(term)),
        );
    }

}
