import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../authentication/login/login.service";
import {FlashMessagesService} from "angular2-flash-messages";


@Injectable()
export class AuthGardGuard implements CanActivate {
  constructor(private loginService  : LoginService , private router : Router,
              private flashMessage : FlashMessagesService ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.loginService.loggidIn()){
        return true;
      }else {
        this.router.navigate(['/login']);
        this.flashMessage.show('you should be logged',{cssClass : 'alert-success', timout : 3000})
        return false;
      }

  }
}
