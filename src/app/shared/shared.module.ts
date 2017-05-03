import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Angular2FontawesomeModule} from "angular2-fontawesome";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {RatingModule} from "ngx-bootstrap";



@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RatingModule.forRoot()

  ],
  declarations: []
})
export class SharedModule {}
