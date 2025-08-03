import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { AboutComponent } from './about/about.component';
import { OptionComponent } from './option/option.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

export const routes: Routes = 
[
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'application', component: ApplicationComponent },
      { path: 'about', component: AboutComponent },
      { path: 'option', component:OptionComponent },
      { path: 'error', component: PageNotFoundComponent }
];
