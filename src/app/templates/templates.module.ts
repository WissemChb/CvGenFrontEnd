import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesComponent} from "./templates.component";
import {ModalModule} from "ng2-bootstrap";
import { TemplateModalComponent} from "./templateModal/templateModal.component";
import {RouterModule} from "@angular/router";
import {TemplateService} from "./templates.service";

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path : 'templates' , component : TemplatesComponent },
      {path : 'template/:id' , component : TemplateModalComponent}
    ])
  ],
  declarations: [TemplatesComponent,TemplateModalComponent ],
  providers : [TemplateService]
})
export class TemplatesModule { }
