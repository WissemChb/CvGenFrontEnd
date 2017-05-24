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
import {TemplateService} from "../../dashboard/template.service";
import {ProjectService} from "../../dashboard/createCvComponent/project/project.service";


@Component({
  selector :   'app-viewtemplate2',
  templateUrl :'viewtemplate2.component.html',
  styleUrls : ['viewtemplate2.component.css']
})

export class Viewtemplate2Component  implements OnInit, OnDestroy, OnChanges{
  error : any;
  localUser : any;
  user : Customer = new Customer();
  cv : CV;
  subscription : Subscription;
  hiddenButton : string;



  public max: number = 5;
  //public rate: number  = 3;
  public isReadonly: boolean = true;
  constructor(private informationService : InformationService,
              private educationService : EducationService, private skillService : SkillService,
              private experienceService : ExperienceService,private dashboardService : DashboardService,
              private leisureService: LeisureService, private languageService : LanguageService,
              private loginService : LoginService, private templateService : TemplateService,
              private projecService : ProjectService){
    debugger;
    this.subscription = this.informationService.getData().subscribe(data => {
      if(data){
        this.user.cv.infos = data;
        this.templateService.sendData(this.user);
      }
    });
    this.subscription = this.educationService.getData().subscribe(data =>{
      if(data){
        this.user.cv.educations.push(data);
        this.templateService.sendData(this.user);
      }
    });
    this.subscription = this.skillService.getData().subscribe(data =>{
      if(data){
        this.user.cv.skills.push(data);
        this.templateService.sendData(this.user);
      }
    });
    this.subscription = this.experienceService.getData().subscribe(data =>{
      if(data){
        this.user.cv.experiences.push(data);
        this.templateService.sendData(this.user);
      }
    });
    this.subscription = this.leisureService.getData().subscribe(data =>{if(data)
    {
      this.user.cv.leisures.push(data);
      this.templateService.sendData(this.user);
    }
    });
    this.subscription = this.languageService.getData().subscribe(data =>{
      if(data) {
        this.user.cv.languages.push(data);
        this.templateService.sendData(this.user);
      }
    });
    this.subscription = this.projecService.getData().subscribe(data =>{
      if(data) {
        this.user.cv.projects.push(data);
        this.templateService.sendData(this.user);
      }
    });

    this.subscription = this.templateService.getData().subscribe(data =>{
      if(data) {
        this.user.cv = data.cv;
      }
    });
  }
  ngOnInit(){
    debugger;
    this.localUser = this.loginService.getUser();
    this.dashboardService.getCv(this.localUser.username).subscribe(data => {
      debugger;

      if(data.cv){
        this.user.cv.infos = data.cv.infos || null;
        this.user.cv.educations = data.cv.educations || [];
        this.user.cv.experiences = data.cv.experiences ||  [];
        this.user.cv.leisures = data.cv.leisures || [];
        this.user.cv.skills = data.cv.skills || [];
        this.user.cv.languages = data.cv.languages  || [];
        this.user.cv.projects = data.cv.projects  || [];
        this.templateService.sendData(this.user);
      }
      else{
        this.user.cv.infos =  null;
        this.user.cv.educations =  [];
        this.user.cv.experiences =  [];
        this.user.cv.leisures = [];
        this.user.cv.skills = [];
        this.user.cv.languages = [];
        this.user.cv.projects = [];
        this.templateService.sendData(this.user);
      }

    }, error =>this.error=error);
    //this.user.cv = this.cv;
    debugger
    this.user.firstName = this.localUser.firstName;
    this.user.secondName = this.localUser.secondName;
    this.user.username = this.localUser.username;
    console.log(this.user);
    //this.templateService.sendData(JSON.parse(JSON.stringify(this.user) || ''));
  }

  ngOnChanges(changes : any){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  OnHover(event : any){
    debugger
    var target = event.target || event.srcElement || event.currentTarget;
    this.hiddenButton = target.attributes.id.value;
  }
  onShow(){
    this.hiddenButton = '';
  }
}

