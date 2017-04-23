import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {ProgressbarModule} from "ngx-bootstrap";
import {DashboardService} from "./dashboard.service";

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    RouterModule.forRoot([
      {path : 'dashboard' , component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent],
  providers:[DashboardService]
})
export class DashboardModule { }
