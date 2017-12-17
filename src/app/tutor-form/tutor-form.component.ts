import { Component, OnInit } from '@angular/core';
import { Tutor } from '../tutor';
import { TutorService } from '../tutor.service';

@Component({
    selector: 'app-tutor-form',
    templateUrl: './tutor-form.component.html',
    styleUrls: ['./tutor-form.component.css']
})
export class TutorFormComponent implements OnInit {

    constructor(private tutorService: TutorService) { }

    ngOnInit() {
    }

    model = new Tutor(18,
        '',
        '',
        '',
        null,
        '',
        '',
        '');

    newGuru() {
        this.model = new Tutor(42, '', '', '', 0, '', '', '');
    }

    submitted = false;

    onSubmit() {
        this.submitted = true;

        console.log(JSON.stringify(this.model));

        this.tutorService.addTutor(this.model);
    }
}
