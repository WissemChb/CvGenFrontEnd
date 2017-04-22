import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login.component";
import {ReactiveFormsModule, FormsModule, FormBuilder} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {LoginService} from "./login.service";
import {FlashMessagesModule} from "angular2-flash-messages";
import {Http, RequestOptions, HttpModule, ConnectionBackend} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {path : "login", component : LoginComponent}
    ]),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FlashMessagesModule,
    HttpModule
  ],
  declarations: [LoginComponent],
  providers : [LoginService, FormBuilder]
})
export class LoginModule { }
