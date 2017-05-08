import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Router} from "@angular/router";
import {InformationService} from "./information.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  informationForm : FormGroup;
  user : any;

  constructor(private fb : FormBuilder, private router : Router,
              private informationService : InformationService) { }

  get contact(): FormArray{
    return <FormArray> this.informationForm.get('contact');
  }

  ngOnInit() : void {
    this.informationForm=this.fb.group({
      photo:'',
      birthDate : '',
      contact : this.fb.array([this.buildContact()]),
      skype : '',
      country : '',
      webSite:'',
      description : ''
    });
    this.informationService.clearData();
  }

  buildContact(): FormGroup{
     return this.fb.group({
       phone : '',
       email : ''
     })
  }

  addContact(){
    this.contact.push(this.buildContact());
  }

  save(){
    debugger;
    this.informationService.sendData(JSON.parse(JSON.stringify(this.informationForm.value)));
    this.router.navigate(['/dashboard', {outlets : {routerCV: ['education']}}]);

  }
}
