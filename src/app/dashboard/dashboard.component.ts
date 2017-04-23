import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {Router} from "@angular/router";
//import {Customer} from "../shared/classes/customer";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashService : DashboardService , private router : Router) { }
  user: Object;
  ngOnInit() {
   /* this.dashService.getUser().subscribe(profile => {
      this.user= profile;
    },
    err => {
      console.log(err);
      return false;
    })*/
   this.user=localStorage.getItem('user');
   console.log(this.user);
  }

}
