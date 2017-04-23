/**
 * Created by Rima on 3/30/2017.
 */

//import { Component} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {Component, ViewChild, ViewContainerRef, AfterViewInit, ElementRef} from '@angular/core';
import {TemplateModalComponent} from "../shared/modal/templateModal/templateModal.component";
import {any} from "codelyzer/util/function";
import {By} from "@angular/platform-browser";





@Component({
  selector :'app-templates',
  templateUrl : './templates.component.html',
  styleUrls : ['templates.component.css'],
})

export class TemplatesComponent{

  @ViewChild('childModal') childModal :TemplateModalComponent;

  pageTitle : string = 'Templates';
  value : any;
  idAttr : any;


  constructor( private viewContainerRef: ViewContainerRef) {}

  Onclick(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    console.log(this.idAttr);
    debugger
    this.value = document.getElementById(this.idAttr).getAttribute('src');
    debugger
    this.childModal.show();

  }
}


