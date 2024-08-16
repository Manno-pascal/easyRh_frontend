import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {LoginPageComponent} from "./login-page.component";
import {LoginRoutingModule} from "./login-page-routing.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ],
  declarations: [

  ],
  providers: [
  ],
})
export class LoginPageModule { }
