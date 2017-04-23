import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesComponent} from "./templates.component";
import {ModalModule} from "ng2-bootstrap";
import { TemplateModalComponent} from "../shared/modal/templateModal.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
   RouterModule.forRoot([
      {path : 'templates' , component : TemplatesComponent }
    ])
  ],
  declarations: [TemplatesComponent,TemplateModalComponent ]
})
export class TemplatesModule { }
