import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import  {HomeComponent} from  "./home/home.component";
import {SignUpModule} from "./authentication/sign-up/sign-up.module";
import {DropdownModule} from "ng2-dropdown";
import {ModalModule} from "ng2-modal";
import {TemplatesComponent} from "./templates/templates.component";
import {LoginModule} from "./authentication/login/login.module";
import {AboutModule} from "./about/about.module";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import {DashboardModule} from "./dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent,HomeComponent, TemplatesComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path : 'home' , component : HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
      {path : 'templates' , component : TemplatesComponent }
    ]) ,
    BrowserModule,
    SignUpModule,
    DropdownModule,
    ModalModule,
    LoginModule,
    AboutModule,
    FlashMessagesModule,
    DashboardModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
