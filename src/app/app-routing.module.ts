import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TutorFormComponent } from './tutor-form/tutor-form.component';
import { TutorSearchComponent } from './tutor-search/tutor-search.component';

const routes: Routes = [
    { path: '', redirectTo: 'search-tutors', pathMatch: 'full' },
    { path: 'add-tutor', component: TutorFormComponent },
    { path: 'search-tutors', component: TutorSearchComponent }]

@NgModule({
    imports: [RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
