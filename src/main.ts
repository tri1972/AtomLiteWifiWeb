/// <reference types="@angular/localize" />

import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));

