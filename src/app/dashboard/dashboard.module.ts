import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {ProgressbarModule} from "ngx-bootstrap";
import {DashboardService} from "./dashboard.service";
import {CreateModalComponent} from "../shared/modal/createModal/createModal.component";
import {ModalModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path : 'dashboard' , component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent,CreateModalComponent],
  providers:[DashboardService]
})
export class DashboardModule { }
