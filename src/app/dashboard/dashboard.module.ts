import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {ProgressbarModule, RatingModule} from "ngx-bootstrap";
import {DashboardService} from "./dashboard.service";
import {CreateModalComponent} from "./createModal/createModal.component";
import {ModalModule} from "ng2-bootstrap";
import {Viewtemplate2Component} from "../templates/template2/viewtemplate2.component";
import {BrowserModule} from "@angular/platform-browser";
import {Viewtemplate1Component} from "../templates/template1/viewtemplate1.component";
import { EducationComponent } from './createCvComponent/education/education.component';
import { ExperienceComponent } from './createCvComponent/experience/experience.component';
import { SkillComponent } from './createCvComponent/skill/skill.component';
import { InformationComponent } from './createCvComponent/information/information.component';
import { LeisureComponent } from './createCvComponent/leisure/leisure.component';
import { LanguageComponent } from './createCvComponent/language/language.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HttpModule} from "@angular/http";
import {InformationService} from "./createCvComponent/information/information.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'dashboard' , component: DashboardComponent, children : [
        {path : 'template1' , component: Viewtemplate1Component, outlet : 'routertemp'},
        {path : 'template2' , component: Viewtemplate2Component, outlet : 'routertemp'},
        {path : 'education', component : EducationComponent , outlet : 'routerCV'},
        {path : 'skill', component : SkillComponent , outlet : 'routerCV'},
        {path : 'experience', component : ExperienceComponent , outlet : 'routerCV'},
        {path : 'leisure', component : LeisureComponent, outlet : 'routerCV'},
        {path : 'infos', component : InformationComponent , outlet : 'routerCV'},
        {path : 'language', component : LanguageComponent , outlet : 'routerCV'},
      ]}
    ]),
  ],
  declarations: [DashboardComponent,CreateModalComponent,Viewtemplate1Component, Viewtemplate2Component,
    EducationComponent, ExperienceComponent, SkillComponent, InformationComponent,
    LeisureComponent, LanguageComponent],
  providers:[DashboardService, InformationService]
})
export class DashboardModule { }
