
/**
 * Created by wissem on 2/26/17.
 */

import {Component, OnInit} from "@angular/core";
import {NgForm, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Login} from "./Login";
import {LoginService} from "./login.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {Customer} from "../../shared/classes/customer";


@Component({
    //moduleId : module.id,
    templateUrl:'login.component.html',
    styleUrls : ['login.component.css']
})
export class LoginComponent implements OnInit{
    pageTitle :string = "Login";
    user : Customer = new Customer();
    loginForm : FormGroup;
    errorMessage : String;
    modalMessage : String;

    constructor(private fb  : FormBuilder,
                private loginService: LoginService,
                  private _flashMessage : FlashMessagesService,
    private router : Router){}


    ngOnInit(): void{

      this.loginForm = this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    });

}

  login() {
    this.loginUser();
  }

  private loginUser(){
    // Copy the form values over the product object values
    let user = Object.assign({}, this.user, this.loginForm.value);
    this.loginService.login(user).subscribe(data =>  {
        if(data.success){
          this._flashMessage.show('welcome to My CV Generator App', {cssClass : 'alert-success',timeout: 5000});
          debugger
          this.loginService.saveLocalAuthentication(data.token, data.user)
          this.router.navigate(['/dashboard']);
        }else {
          this._flashMessage.show(data.msg, {cssClass : 'alert-danger', timeout : 5000});
          this.router.navigate(['/login']);
        }
      } ,
      (error: any) => this.errorMessage = <any>error);
    this.modalMessage = this.errorMessage
  }

}
