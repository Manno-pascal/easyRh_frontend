import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-page-routing.module";
import {AboutPageComponent} from "./about-page.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    AboutPageComponent
  ],
  exports: [
    AboutPageComponent
  ],
  declarations: [

  ],
  providers: [
  ],
})
export class AboutPageModule { }
