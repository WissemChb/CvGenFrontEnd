import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "./project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectForm : FormGroup;
  constructor(private fb  : FormBuilder,
              private projectService : ProjectService) { }

  ngOnInit(): void{
    this.projectForm = this.fb.group({
      title : ['',Validators.required],
      startDate : ['',Validators.required],
      finishDate : ['',Validators.required],
      description : ['']
    });
    this.projectService.clearData();
  }

  save(){
    debugger
    this.projectService.sendData(JSON.parse(JSON.stringify(this.projectForm.value)));
    this.projectForm.reset()
  }
}
