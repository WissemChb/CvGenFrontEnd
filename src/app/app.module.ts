import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import  {HomeComponent} from  "./home/home.component";
import {SignUpModule} from "./authentication/sign-up/sign-up.module";
import {DropdownModule} from "ng2-dropdown";
import {ModalModule} from "ng2-modal";
import {LoginModule} from "./authentication/login/login.module";
import {AboutModule} from "./about/about.module";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import {DashboardModule} from "./dashboard/dashboard.module";
import {TemplatesModule} from "./templates/templates.module";



@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path : 'home' , component : HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]) ,
    BrowserModule,
    SignUpModule,
    DropdownModule,
    ModalModule,
    LoginModule,
    AboutModule,
    FlashMessagesModule,
    DashboardModule,
    TemplatesModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
