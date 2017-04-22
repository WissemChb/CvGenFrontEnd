import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SignUpComponent} from "./sign-up.component";
import {SignUpService} from "./sign-up.service";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ng2-bootstrap";
import {LoadingAnimateModule, LoadingAnimateService} from "ng2-loading-animate";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : 'signup', component : SignUpComponent}
    ]),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    LoadingAnimateModule.forRoot(),
    FlashMessagesModule,

  ],
  declarations: [SignUpComponent],
  providers : [SignUpService, LoadingAnimateService, FlashMessagesService],

})
export class SignUpModule { }
