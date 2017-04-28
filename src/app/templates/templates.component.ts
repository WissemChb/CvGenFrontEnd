/**
 * Created by Rima on 3/30/2017.
 */

//import { Component} from '@angular/core';

import {Component, ViewChild, OnInit} from '@angular/core';
import {TemplateModalComponent} from "./templateModal/templateModal.component";
import {TemplateService} from "./templates.service";
import {ImageTemplates} from "./TemplateImages";


@Component({
  selector :'app-templates',
  templateUrl : './templates.component.html',
  styleUrls : ['templates.component.css'],
})

export class TemplatesComponent implements OnInit{

  @ViewChild('childModal') childModal :TemplateModalComponent;

  constructor( private  tempService : TemplateService){}

  pageTitle : string = 'Templates';
  value : any;
  idAttr : any;
  val : any;
  templateImages : ImageTemplates[];
  error : any;

  ngOnInit(){
     debugger
     this.tempService.getTemplates().subscribe(data => {
       this.templateImages = data, error => this.error = error
     });
  }

  Onclick(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    this.value = document.getElementById(this.idAttr).getAttribute('src');
    this.childModal.show();
  }


}


