import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector : 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  pageTitle = 'My CV';

  constructor( private router : Router){}
  user : Object;
  key : String;
  ngOnInit(): void {
    this.key = localStorage.getItem('id_token');
    this.user = JSON.parse(JSON.stringify(localStorage.getItem('user')) || null);
    console.log(this.user);
  }

  logout(){
    //debugger
    localStorage.setItem('id_token',null);
    localStorage.setItem('user',null);
    localStorage.clear();
    this.router.navigate(['/home']);
    location.reload();

  }
}
