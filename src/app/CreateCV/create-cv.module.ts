import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCVService} from "./create-cv.service";
import { LanguageComponent } from './language/language.component';
import { LeisureComponent } from './leisure/leisure.component';
import { InformationComponent } from './information/information.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import {RouterModule} from "@angular/router";
import {CreateCVComponent} from "./create-cv.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path : 'create' , component : CreateCVComponent , children:[
        {path : ':id', component : EducationComponent , outlet : 'routerCreate'}
      ]}
    ])
  ],
  declarations: [CreateCVComponent,LanguageComponent, LeisureComponent, InformationComponent,
    SkillComponent, ExperienceComponent, EducationComponent],
  providers : [CreateCVService]
})
export class CreateCVModule { }
