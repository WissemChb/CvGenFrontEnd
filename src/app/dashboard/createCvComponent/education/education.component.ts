import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {EducationService} from "./education.service";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationForm : FormGroup;
  education : any;
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
    debugger
    this.educationService.sendData(JSON.parse(JSON.stringify(this.educationForm.value)));
    this.educationForm.reset()
  }


}
