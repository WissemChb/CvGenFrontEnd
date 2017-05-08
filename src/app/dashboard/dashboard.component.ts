import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Router} from "@angular/router";
import {CreateModalComponent} from "./createModal/createModal.component";

import {Customer} from "../shared/classes/customer";
import {FlashMessagesService} from "angular2-flash-messages";
import {Subscription} from "rxjs";

import {EducationService} from "./createCvComponent/education/education.service";
import {SkillService} from "./createCvComponent/skill/skill.service";
import {ExperienceService} from "./createCvComponent/experience/experience.service";
import {LanguageService} from "./createCvComponent/language/language.service";
import {LeisureService} from "./createCvComponent/leisure/leisure.service";
import {InformationService} from "./createCvComponent/information/information.service";
import {CV} from "../shared/classes/CV";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('childModal') childModal : CreateModalComponent;
  user :Customer = new Customer();
  cv : CV = new CV();
  education: Object[] = [];
  experience: Object[] = [];
  skills : Object[] = [];
  leisure : Object[] = [];
  language : Object[] = [];
  subscription : Subscription;
  idAttr : string;


  constructor(private dashService : DashboardService, private router : Router,private informationService : InformationService,private flashMessage : FlashMessagesService,
              private educationService : EducationService, private skillService : SkillService,
               private experienceService : ExperienceService,
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
    this.cv.educations = this.education;
    this.cv.experiences =this.experience;
    this.cv.language = this.language;
    this.cv.leisure = this.leisure;
    this.cv.skills = this.skills;
    this.user.cv = this.cv;
    console.log(this.user);
  }

  Onclick(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    if(this.idAttr === 'infos'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['infos']}}]);
    }
    if(this.idAttr === 'education'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['education']}}]);
    }
    if(this.idAttr === 'experience'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['experience']}}]);
    }
    if(this.idAttr === 'skill'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['skill']}}]);
    }
    if(this.idAttr === 'leisure'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['leisure']}}]);
    }
    if(this.idAttr === 'language'){
      this.router.navigate(['/dashboard', {outlets: {routerCV: ['language']}}]);
    }
    this.childModal.show();
  }

  save(){
    this.addCV(this.user)
  }
  addCV(user : Customer)
  {
    debugger;
    this.dashService.saveCV(user).subscribe(data =>{
      if(data.success){
        this.flashMessage.show(data.msg,{cssClass : 'alert-success', timeout : 5000});
      }
    })
  }


}
