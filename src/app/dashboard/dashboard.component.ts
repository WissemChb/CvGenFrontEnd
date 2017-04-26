import {Component, OnInit, ViewChild, ViewContainerRef, Directive} from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Router} from "@angular/router";
import {CreateModalComponent} from "./createModal/createModal.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('childModal') childModal : CreateModalComponent;
  constructor(private dashService : DashboardService , private router : Router, private viewContainer : ViewContainerRef) { }
  user: Object;
  idAttr : string;

  ngOnInit() {

    /*this.user=localStorage.getItem('user');
     console.log(this.user);
     }*/

  }
  Onclick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
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
}
