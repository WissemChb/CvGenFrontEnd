/**
 * Created by Rima on 4/5/2017.
 */


import {Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input} from "@angular/core";
import {Information} from "../../shared/classes/information";
import {InformationService} from "../../dashboard/createCvComponent/information/information.service";
import {Subscription} from "rxjs";

@Component({
  selector :   'app-viewtemplate1',
  templateUrl :'viewtemplate1.component.html',
  styleUrls : ['viewtemplate1.component.css']
})

export class Viewtemplate1Component implements OnInit, OnDestroy, OnChanges{
  user : any;
  infos : Information;
  subscription : Subscription;
  constructor(private informationService : InformationService){
    this.subscription = this.informationService.getData().subscribe(data => this.infos= data);
  }

  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }

  ngOnChanges(changes : any){

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

