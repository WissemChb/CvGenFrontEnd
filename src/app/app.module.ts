import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { CreateCVComponent } from './CreateCV/create-cv.component';
import {CreateCVModule} from "./CreateCV/create-cv.module";
import {TemplatesModule} from "./templates/templates.module";
import {LocalStorageModule} from "angular-2-local-storage";


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
    TemplatesModule,
    LocalStorageModule.withConfig({
      prefix : 'app-login',
      storageType : 'localStorage'
    })
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
