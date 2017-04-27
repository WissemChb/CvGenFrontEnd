import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector : 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  pageTitle = 'My CV';

  constructor( private router : Router){}

  key = localStorage.getItem('id_token');
  user = JSON.parse(JSON.stringify(localStorage.getItem('user') || null));

  logout(){
    debugger
    localStorage.setItem('id_token',null);
    localStorage.setItem('user',null);
    localStorage.clear();
    this.router.navigate(['/home']);
    location.reload();

  }
}
