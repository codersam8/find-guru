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

    constructor(private tutorService: TutorService) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit() {
        this.tutors$ = this.searchTerms.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => this.tutorService.searchTutors(term)),
        );
    }

}
