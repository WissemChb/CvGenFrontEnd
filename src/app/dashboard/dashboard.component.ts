import {Component, OnInit, ViewChild} from '@angular/core';
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
  constructor(private dashService : DashboardService , private router : Router) { }
  user: Object;
  idAttr : string;
  routeOutlet : String;
  ngOnInit() {

    /*this.user=localStorage.getItem('user');
     console.log(this.user);
     }*/

  }
  Onclick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    if(this.idAttr === 'infos'){
      this.router.navigate(['/dashboard', {outlets: {'routerInfos': ['infos']}}]);
      this.routeOutlet = 'infos';

    }
    if(this.idAttr === 'education'){
      this.router.navigate(['/dashboard', {outlets: {'routerEduc': ['education']}}]);
      this.routeOutlet = 'education';
    }
    if(this.idAttr === 'experience'){
      this.router.navigate(['/dashboard', {outlets: {'routerExp': ['experience']}}]);
      this.routeOutlet = 'experience';
    }
    if(this.idAttr === 'skill'){
      this.router.navigate(['/dashboard', {outlets: {'routerSkill': ['skill']}}]);
      this.routeOutlet = 'skill';
    }
    if(this.idAttr === 'leisure'){
      this.router.navigate(['/dashboard', {outlets: {'routerLeisure': ['leisure']}}]);
      this.routeOutlet = 'leisure';
    }
    if(this.idAttr === 'language'){
      this.router.navigate(['/dashboard', {outlets: {'routerLanguage': ['language']}}]);
      this.routeOutlet = 'language';
    }
    this.childModal.show();
  }
}
