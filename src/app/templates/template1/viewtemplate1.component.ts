/**
 * Created by Rima on 4/5/2017.
 */


import {Component, OnInit, OnChanges, OnDestroy} from "@angular/core";
import {InformationService} from "../../dashboard/createCvComponent/information/information.service";
import {Subscription} from "rxjs";
import {EducationService} from "../../dashboard/createCvComponent/education/education.service"
import {SkillService} from "../../dashboard/createCvComponent/skill/skill.service";
import {ExperienceService} from "../../dashboard/createCvComponent/experience/experience.service";
import {LeisureService} from "../../dashboard/createCvComponent/leisure/leisure.service";
import {LanguageService} from "../../dashboard/createCvComponent/language/language.service";


@Component({
  selector :   'app-viewtemplate1',
  templateUrl :'viewtemplate1.component.html',
  styleUrls : ['viewtemplate1.component.css']
})

export class Viewtemplate1Component implements OnInit, OnDestroy, OnChanges{
  user : any;
  infos : any;
  education : Object[] = [];
  skills : Object[] = [];
  experience : Object[] = [];
  leisures : Object[] = [];
  languages : Object[] = [];
  subscription : Subscription;

  public max: number = 5;
  //public rate: number  = 3;
  public isReadonly: boolean = true;
  constructor(private informationService : InformationService,
              private educationService : EducationService, private skillService : SkillService,
  private experienceService : ExperienceService, private leisureService: LeisureService, private languageService : LanguageService){
    this.subscription = this.informationService.getData().subscribe(data => this.infos= data);
    this.subscription = this.educationService.getData().subscribe(data =>{if(data){this.education.push(data)}});
    this.subscription = this.skillService.getData().subscribe(data =>{if(data){this.skills.push(data)}});
    this.subscription = this.experienceService.getData().subscribe(data =>{if(data){this.experience.push(data)}});
    this.subscription = this.leisureService.getData().subscribe(data =>{if(data){this.leisures.push(data)}});
    this.subscription = this.languageService.getData().subscribe(data =>{if(data){this.languages.push(data)}});
  }
  ngOnInit(){
    debugger
    this.user = JSON.parse(localStorage.getItem('user') || '');
    console.log(this.experience);
  }

  ngOnChanges(changes : any){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

