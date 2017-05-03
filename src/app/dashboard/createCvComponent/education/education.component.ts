import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Education} from "../../../shared/classes/education";
import {EducationService} from "./education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm : FormGroup;
  education : Education []  = new Array<Education>();
  constructor(private fb  : FormBuilder,
              private educationService : EducationService) { }

  ngOnInit(): void{
    this.educationForm = this.fb.group({
      title : ['',Validators.required],
      establishment : ['',Validators.required],
      startDate : ['',Validators.required],
      finishDate : ['',Validators.required],
      description : ['']
    });
     this.educationService.clearData();
  }

  save(){
    this.educationService.sendData(JSON.parse(JSON.stringify(this.educationForm.value)));
    debugger
    console.log(this.education);
    this.educationForm.reset()
  }


}
