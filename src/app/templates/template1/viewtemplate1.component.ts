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
import {LoginService} from "../../authentication/login/login.service";



@Component({
  selector :   'app-viewtemplate1',
  templateUrl :'viewtemplate1.component.html',
  styleUrls : ['viewtemplate1.component.css']
})

export class Viewtemplate1Component implements OnInit, OnDestroy, OnChanges{

  error : any;
  localUser : any;
  user : Customer = new Customer();
  cv : CV;
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
              private leisureService: LeisureService, private languageService : LanguageService, private loginService : LoginService){
    debugger;
    this.subscription = this.informationService.getData().subscribe(data => {if(data){this.user.cv.infos = data}});
    this.subscription = this.educationService.getData().subscribe(data =>{if(data){this.user.cv.educations.push(data)}});
    this.subscription = this.skillService.getData().subscribe(data =>{if(data){this.user.cv.skills.push(data)}});
    this.subscription = this.experienceService.getData().subscribe(data =>{if(data){this.user.cv.experiences.push(data)}});
    this.subscription = this.leisureService.getData().subscribe(data =>{if(data){this.user.cv.leisure.push(data)}});
    this.subscription = this.languageService.getData().subscribe(data =>{if(data){this.user.cv.language.push(data)}});
  }
  ngOnInit(){
    debugger;
    this.localUser = this.loginService.getUser();
    this.dashboardService.getCv(this.localUser.username).subscribe(data => {
      debugger;

      if(data.cv){
        console.log(data.cv.educations);
        this.user.cv.infos = data.cv.infos || null;
        this.user.cv.educations = data.cv.educations || [];
        this.user.cv.experiences = data.cv.experiences ||  [];
        this.user.cv.leisure = data.cv.leisure || [];
        this.user.cv.skills = data.cv.skills || [];
        this.user.cv.language = data.cv.language  || [];
      }
      else{
        this.user.cv.infos =  null;
        this.user.cv.educations =  [];
        this.user.cv.experiences =  [];
        this.user.cv.leisure = [];
        this.user.cv.skills = [];
        this.user.cv.language = [];
      }

    }, error =>this.error=error);
    //this.user.cv = this.cv;
    debugger
    this.user.firstName = this.localUser.firstName;
    this.user.secondName = this.localUser.secondName;
    console.log(this.user.cv);


    //this.templateService.sendData(JSON.parse(JSON.stringify(this.user) || ''));

  }

  ngOnChanges(changes : any){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }




}

