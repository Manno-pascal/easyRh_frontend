import { Routes } from '@angular/router';
import {WorkerCardsListComponent} from "./components/homePage/worker-cards-list/workers-cards-list.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

export const routes: Routes = [
  {path:'home', component : HomePageComponent},
  {path:'', component : LoginPageComponent}
];
