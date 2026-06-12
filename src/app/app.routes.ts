import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'IntuiFit — Log a set in 3 seconds',
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support').then((m) => m.Support),
    title: 'Support — IntuiFit',
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy),
    title: 'Privacy Policy — IntuiFit',
  },
  { path: '**', redirectTo: '' },
];
