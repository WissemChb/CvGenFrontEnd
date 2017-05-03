import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ExperienceService} from "./experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceForm : FormGroup;
  constructor(private fb  : FormBuilder, private experienceSevice : ExperienceService) { }

  ngOnInit(): void{

    this.experienceForm = this.fb.group({
      post : ['',Validators.required],
      startDate : ['', Validators.required],
      finishDate : ['', Validators.required],
      entreprise: ['',Validators.required],
      logo: [''],
      description: ''

    });
    this.experienceSevice.clearData();

  }

  save(){
    this.experienceSevice.sendData(JSON.parse(JSON.stringify(this.experienceForm.value)));
    debugger
    console.log(this.experienceForm.value);
    this.experienceForm.reset()
  }
}
