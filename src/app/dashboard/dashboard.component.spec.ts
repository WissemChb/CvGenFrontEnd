import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {ProgressbarModule, ProgressbarConfig} from "ngx-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {ModalModule} from "ng2-bootstrap";
import {CreateModalComponent} from "./createModal/createModal.component";
import {DashboardService} from "./dashboard.service";
import {HttpModule} from "@angular/http";
import {PageScrollService} from "ng2-page-scroll";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ProgressbarModule,BrowserModule,RouterTestingModule, ModalModule.forRoot(),HttpModule],
      declarations: [ DashboardComponent ,CreateModalComponent],
      providers : [ProgressbarConfig,DashboardService,PageScrollService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
