import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./authentication/login/login.service";

@Component({
  selector : 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'My CV';

  constructor(private router: Router, private loginService: LoginService) {
  }

  user: any;
  key: String;


  ngOnInit(): void {
    debugger
     this.user = this.loginService.getUser();
    // this.key = localStorage.getItem('id_token');
    // this.user = JSON.parse(localStorage.getItem('user') || '');
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}

