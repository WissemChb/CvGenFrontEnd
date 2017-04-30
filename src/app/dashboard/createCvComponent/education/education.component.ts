import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Education} from "../../../shared/classes/education";
import {Router} from "@angular/router";
import {EducationService} from "./education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm : FormGroup;
  education : Education [];
  constructor(private fb  : FormBuilder,
              private educationService : EducationService) { }

  ngOnInit(): void{

    this.educationForm = this.fb.group({
      title : ['',Validators.required],
      establishment : ['',Validators.required],
      from : ['',Validators.required],
      to : ['',Validators.required],
      description : ['']
    });

  }

  save(){
    let ed = Object.assign({}, this.education, this.educationForm.value);
    this.educationService.sendData(ed);
    console.log(ed);
    this.educationForm.reset()
  }
  addmore(){
    this.education.push(this.educationForm.value)
  }

}
