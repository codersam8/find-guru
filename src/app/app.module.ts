import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorFormComponent } from './tutor-form/tutor-form.component';
import { HttpClient } from 'selenium-webdriver/http';
import { TutorService } from './tutor.service';

@NgModule({
    declarations: [
        AppComponent,
        TutorFormComponent
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
