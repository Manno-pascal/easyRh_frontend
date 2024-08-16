import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRoutingModule} from "./home-page-routing.module";
import {HomePageComponent} from "./home-page.component";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  declarations: [

  ],
  providers: [
  ],
})
export class HomePageModule { }
