import { Routes } from '@angular/router';
import {LoginFormComponent} from "./login-form/login-form.component";
import {WorkerCardsListComponent} from "./worker-cards-list/workers-cards-list.component";

export const routes: Routes = [
  {path:'home', component : WorkerCardsListComponent},
  {path:'', component : LoginFormComponent}
];
