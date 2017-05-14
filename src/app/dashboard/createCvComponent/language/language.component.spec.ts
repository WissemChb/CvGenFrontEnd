import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponent } from './language.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {LanguageService} from "./language.service";
import {RatingComponent} from "../rating/rating.component";
import {RatingModule} from "ngx-bootstrap";


describe('LanguageComponent', () => {
  let component: LanguageComponent;
  let fixture: ComponentFixture<LanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ReactiveFormsModule, FormsModule, RouterTestingModule, RatingModule.forRoot()],
      declarations: [ LanguageComponent, RatingComponent ],
      providers : [LanguageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
