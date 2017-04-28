import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceForm : FormGroup;
  constructor(private fb  : FormBuilder) { }

  ngOnInit(): void{

    this.experienceForm = this.fb.group({
      experience : ['',Validators.required],
      task : ['',Validators.required],
      company: ['',Validators.required],
      period: ['',Validators.required]

    });

  }
}
