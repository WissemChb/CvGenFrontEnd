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
  ngOnInit() {

    /*this.user=localStorage.getItem('user');
     console.log(this.user);
     }*/

  }
  Onclick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.idAttr = target.attributes.id.value;
    if(this.idAttr === 'infos'){
      this.childModal.scrollSomewhereHorizontally();
      this.router.navigate(['/dashboard', {outlets: {'routerInfos': ['infos']}}]);

    }
    if(this.idAttr === 'education'){
      this.router.navigate(['/dashboard', {outlets: {'routerEduc': ['education']}}]);
    }
    if(this.idAttr === 'experience'){
      this.router.navigate(['/dashboard', {outlets: {'routerExp': ['experience']}}]);
    }
    if(this.idAttr === 'skill'){
      this.router.navigate(['/dashboard', {outlets: {'routerSkill': ['skill']}}]);
    }
    if(this.idAttr === 'leisure'){
      this.router.navigate(['/dashboard', {outlets: {'routerLeisure': ['leisure']}}]);
    }
    if(this.idAttr === 'language'){
      this.router.navigate(['/dashboard', {outlets: {'routerLanguage': ['language']}}]);
    }
    this.childModal.show();
  }
}
