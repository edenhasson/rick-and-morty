// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './app/interceptors/http.interceptor';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import {  CharactersUiComponent } from '@rick-and-morty/characters-ui';

const routes: Routes = [
  {
    path: '',
    component: CharactersUiComponent, // Use the component class directly
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
