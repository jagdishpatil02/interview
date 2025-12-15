import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./form/form.component').then((c) => c.FormComponent),
  },
  {
    path: 'http',
    loadComponent: () =>
      import('./http/http.component').then((c) => c.HttpComponent),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./signals/signals.component').then((c) => c.SignalsComponent),
  },
];
