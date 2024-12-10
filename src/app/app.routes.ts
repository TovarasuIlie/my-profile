import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';
import { HobbiesPageComponent } from './components/hobbies-page/hobbies-page.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexPageComponent
    },
    {
        path: "hobbies",
        component: HobbiesPageComponent
    },
    {
        path: "resume",
        component: ResumePageComponent
    }
];
