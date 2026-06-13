import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: $localize`:@@route.title.home:IntuiFit — Log a set in 3 seconds`,
  },
  {
    path: 'support',
    loadComponent: () => import('./pages/support/support').then((m) => m.Support),
    title: $localize`:@@route.title.support:Support — IntuiFit`,
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy),
    title: $localize`:@@route.title.privacy:Privacy Policy — IntuiFit`,
  },
  { path: '**', redirectTo: '' },
];
