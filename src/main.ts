// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AppComponent } from './app/app.component';
import { AppEffects } from './app/app.effects';
import { HomeTasksEffects } from './app/home-tasks.effects';
import { reducers } from './app/reducers';
import { WorkTasksEffects } from './app/work-tasks.effects';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(reducers, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    provideEffects([AppEffects, HomeTasksEffects, WorkTasksEffects]),
    provideStoreDevtools({
      maxAge: 50,
      logOnly: environment.production,
      trace: true
    }),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
