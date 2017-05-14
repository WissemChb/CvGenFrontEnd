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

  get phones(): FormArray{
    return <FormArray> this.informationForm.get('phones');
  }

  get emails(): FormArray{
    return <FormArray> this.informationForm.get('emails');
  }
  ngOnInit() : void {
    this.informationForm=this.fb.group({
      photo:'',
      birthDate : '',
      phones : this.fb.array([this.buildPhone()]),
      emails : this.fb.array([this.buildEmail()]),
      skype : '',
      country : '',
      webSite:'',
      description : ''
    });
    this.informationService.clearData();
  }

  buildPhone(): FormGroup{
     return this.fb.group({
       phone : '',
     });
  }
  buildEmail(): FormGroup{
    return this.fb.group({
      email : ''
    });
  }

  addPhone(){
    this.phones.push(this.buildPhone());
  }
  addEmail(){
    this.emails.push(this.buildEmail());
  }
  removeEmail(){
    this.emails.removeAt(this.emails.length-1);
  }
  removePhone(){
    this.phones.removeAt(this.phones.length-1);
  }
  save(){
    debugger;
    this.informationService.sendData(JSON.parse(JSON.stringify(this.informationForm.value)));

  }
}
