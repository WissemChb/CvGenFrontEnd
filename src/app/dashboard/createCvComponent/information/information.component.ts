import {Component, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Customer} from "../../../shared/classes/customer";
import {Router} from "@angular/router";
import {Information} from "../../../shared/classes/information";
import {InformationService} from "./information.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
@Output('AddInfos') infos : Information = new Information();

  informationForm : FormGroup;
  phoneArray : FormArray;
  user : any;

  constructor(private fb : FormBuilder, private router : Router,
              private informationService : InformationService) { }

  get phoneNumbers(): FormArray{
    return <FormArray> this.informationForm.get('phoneNumbers');
  }

  ngOnInit() : void {
    this.informationForm=this.fb.group({
      photo:'',
      birthDate : '',
      phoneNumbers : this.fb.array([this.buildPhoneNumber()]),
      skype : '',
      country : '',
      webSite:'',
      description : ''
    });
    this.informationService.clearData();
  }

  buildPhoneNumber(): FormGroup{
     return this.fb.group({
       phone : '',
     })
  }

  addPhoneNumber(){
    this.phoneNumbers.push(this.buildPhoneNumber());
  }

  save(){
    this.informationService.sendData(JSON.parse(JSON.stringify(this.informationForm.value)));
    this.router.navigate(['/dashboard', {outlets : {routerCV: ['education']}}]);

  }
}
