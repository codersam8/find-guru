import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuruFormComponent } from './guru-form/guru-form.component';
import { HttpClient } from 'selenium-webdriver/http';
import { TutorService } from './tutor.service';

@NgModule({
    declarations: [
        AppComponent,
        GuruFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [TutorService],
    bootstrap: [AppComponent]
})
export class AppModule { }
