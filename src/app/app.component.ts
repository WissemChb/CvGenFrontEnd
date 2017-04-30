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
  user : any;
  key : String;
  ngOnInit(): void {
    debugger
    this.key = localStorage.getItem('id_token');
    this.user = JSON.parse(localStorage.getItem('user') || '');
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
