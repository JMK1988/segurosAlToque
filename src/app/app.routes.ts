import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'cotizar',
        loadComponent: () =>
          import('./features/quote/quote.component').then((m) => m.QuoteComponent),
      },
      {
        path: 'contacto',
        loadComponent: () =>
          import('./features/quote/quote.component').then((m) => m.QuoteComponent),
      },
      {
        path: 'seguros',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
