import { Component, OnInit } from '@angular/core';
import { Guru } from '../guru';

@Component({
    selector: 'app-guru-form',
    templateUrl: './guru-form.component.html',
    styleUrls: ['./guru-form.component.css']
})
export class GuruFormComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    model = new Guru(18,
         'Sampath',
          'Surineni',
           'sampath@suri.com',
           1234567890,
           'hyderabad',
           'Mtech',
            'UOH');

    newGuru() {
        this.model = new Guru(42, '', '', '',  0, '', '', '');
    }

    submitted = false;

    onSubmit() { this.submitted = true; }
}
