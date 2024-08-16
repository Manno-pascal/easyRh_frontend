import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-page-routing.module";
import {AboutPageComponent} from "./about-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    AboutPageComponent,
    ReactiveFormsModule
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
