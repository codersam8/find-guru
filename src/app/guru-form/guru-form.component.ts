import { Component, OnInit } from '@angular/core';
import { Tutor } from '../guru';
import { TutorService } from '../tutor.service';

@Component({
    selector: 'app-guru-form',
    templateUrl: './guru-form.component.html',
    styleUrls: ['./guru-form.component.css']
})
export class GuruFormComponent implements OnInit {

    constructor(private tutorService: TutorService) { }

    ngOnInit() {
    }

    model = new Tutor(18,
         'Sampath',
          'Surineni',
           'sampath@suri.com',
           1234567890,
           'hyderabad',
           'Mtech',
            'UOH');

    newGuru() {
        this.model = new Tutor(42, '', '', '',  0, '', '', '');
    }

    submitted = false;

    onSubmit() { 
        this.submitted = true;

        console.log(JSON.stringify(this.model));

        this.tutorService.addTutor();
     }
}
