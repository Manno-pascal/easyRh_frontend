import { Routes } from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

export const routes: Routes = [
  {path:'home', component : HomePageComponent},
  {path:'about/:id', component : AboutPageComponent},
  {path:'', component : LoginPageComponent}
];
