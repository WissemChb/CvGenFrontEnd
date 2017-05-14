import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import {ProgressbarModule, ProgressbarConfig, RatingModule} from "ngx-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {ModalModule} from "ng2-bootstrap";
import {CreateModalComponent} from "./createModal/createModal.component";
import {DashboardService} from "./dashboard.service";
import {HttpModule} from "@angular/http";
import {PageScrollService} from "ng2-page-scroll";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {EducationComponent} from "./createCvComponent/education/education.component";
import {InformationComponent} from "./createCvComponent/information/information.component";
import {ProjectComponent} from "./createCvComponent/project/project.component";
import {SkillComponent} from "./createCvComponent/skill/skill.component";
import {LeisureComponent} from "./createCvComponent/leisure/leisure.component";
import {LanguageComponent} from "./createCvComponent/language/language.component";
import {ExperienceComponent} from "./createCvComponent/experience/experience.component";
import {SkillService} from "./createCvComponent/skill/skill.service";
import {ExperienceService} from "./createCvComponent/experience/experience.service";
import {EducationService} from "./createCvComponent/education/education.service";
import {LanguageService} from "./createCvComponent/language/language.service";
import {LeisureService} from "./createCvComponent/leisure/leisure.service";
import {ProjectService} from "./createCvComponent/project/project.service";
import {InformationService} from "./createCvComponent/information/information.service";
import {LoginService} from "../authentication/login/login.service";
import {AuthGardGuard} from "../Guards/auth-gard.guard";
import {TemplateService} from "./template.service";
import {FlashMessagesService, FlashMessagesModule} from "angular2-flash-messages";
import {RatingComponent} from "./createCvComponent/rating/rating.component";
import {Viewtemplate1Component} from "../templates/template1/viewtemplate1.component";
import {Viewtemplate2Component} from "../templates/template2/viewtemplate2.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ProgressbarModule.forRoot(),
        ModalModule.forRoot(),
        SharedModule,
        HttpModule,
        FlashMessagesModule,
        RatingModule.forRoot(), RouterTestingModule],
      declarations: [ DashboardComponent,CreateModalComponent,Viewtemplate1Component, Viewtemplate2Component,
        EducationComponent, ExperienceComponent, SkillComponent, InformationComponent,
        LeisureComponent, LanguageComponent, RatingComponent, ProjectComponent],
      providers : [DashboardService,
        InformationService, EducationService,SkillService,ExperienceService,
        LeisureService,LanguageService, FlashMessagesService, AuthGardGuard,TemplateService,ProjectService]
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
