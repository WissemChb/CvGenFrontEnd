/**
 * Created by Rima on 4/5/2017.
 */


import {Component, OnInit, OnChanges, OnDestroy,} from "@angular/core";
import {InformationService} from "../../dashboard/createCvComponent/information/information.service";
import {Subscription} from "rxjs";
import {EducationService} from "../../dashboard/createCvComponent/education/education.service"
import {SkillService} from "../../dashboard/createCvComponent/skill/skill.service";
import {ExperienceService} from "../../dashboard/createCvComponent/experience/experience.service";
import {LeisureService} from "../../dashboard/createCvComponent/leisure/leisure.service";
import {LanguageService} from "../../dashboard/createCvComponent/language/language.service";
import {Customer} from "../../shared/classes/customer";
import {CV} from "../../shared/classes/CV";
import {DashboardService} from "../../dashboard/dashboard.service";



@Component({
  selector :   'app-viewtemplate1',
  templateUrl :'viewtemplate1.component.html',
  styleUrls : ['viewtemplate1.component.css']
})

export class Viewtemplate1Component implements OnInit, OnDestroy, OnChanges{

  error : any;
  user : Customer = new Customer();
  cv : CV = new CV();
  infos : any;
  education: Object[] = [];
  experience: Object[] = [];
  skills : Object[] = [];
  leisure : Object[] = [];
  language : Object[] = [];
  subscription : Subscription;

  public max: number = 5;
  //public rate: number  = 3;
  public isReadonly: boolean = true;
  constructor(private informationService : InformationService,
              private educationService : EducationService, private skillService : SkillService,
              private experienceService : ExperienceService,private dashboardService : DashboardService,
              private leisureService: LeisureService, private languageService : LanguageService){
    this.subscription = this.informationService.getData().subscribe(data => {if(data){this.user.cv.infos = data}});
    this.subscription = this.educationService.getData().subscribe(data =>{if(data){this.education.push(data)}});
    this.subscription = this.skillService.getData().subscribe(data =>{if(data){this.skills.push(data)}});
    this.subscription = this.experienceService.getData().subscribe(data =>{if(data){this.experience.push(data)}});
    this.subscription = this.leisureService.getData().subscribe(data =>{if(data){this.leisure.push(data)}});
    this.subscription = this.languageService.getData().subscribe(data =>{if(data){this.language.push(data)}});
  }
  ngOnInit(){
    debugger;
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.dashboardService.getCv(this.user.username).subscribe(data => this.user.cv = data, error =>this.error=error);

    this.cv.infos = this.infos;
    this.cv.educations = this.education;
    this.cv.experiences =this.experience;
    this.cv.language = this.language;
    this.cv.leisure = this.leisure;
    this.cv.skills = this.skills;
    this.user.cv = this.cv;
    console.log(this.user);


    //this.templateService.sendData(JSON.parse(JSON.stringify(this.user) || ''));

  }

  ngOnChanges(changes : any){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }




}

