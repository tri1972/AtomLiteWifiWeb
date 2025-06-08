import { Routes } from '@angular/router';
import {ApplicationComponent} from './application/application.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

export const routes: Routes = 
[
      { path: 'page-a', component: ApplicationComponent },
      { path: 'error', component: PageNotFoundComponent }
];
