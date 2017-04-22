import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {ProgressbarModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    RouterModule.forRoot([
      {path : 'dashboard' , component: DashboardComponent}
    ])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
