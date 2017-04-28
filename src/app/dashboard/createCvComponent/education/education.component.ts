import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../shared/classes/customer";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm : FormGroup;
user : Customer = new Customer();
  constructor(private fb  : FormBuilder) { }

  ngOnInit(): void{

    this.educationForm = this.fb.group({
      college : ['',Validators.required],
      from : ['',Validators.required],
      to : ['',Validators.required]

    });

  }

  save(){
    console.log(this.educationForm);
    console.log('saved:'+JSON.stringify(this.educationForm));
  }


  addEducation(){

  }

}
