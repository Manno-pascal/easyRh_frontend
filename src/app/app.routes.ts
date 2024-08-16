import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login-page/login-page.module').then(mod => mod.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(mod => mod.HomePageModule)
  },
  {
    path: 'about/:id',
    loadChildren: () => import('./pages/about-page/about-page.module').then(mod => mod.AboutPageModule)
  },


];
