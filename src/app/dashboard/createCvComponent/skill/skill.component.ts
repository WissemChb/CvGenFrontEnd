import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  get skills(): FormArray{
    return <FormArray> this.skillForm.get('skills');
  }

  ngOnInit() : void {
    this.skillForm= this.fb.group({
        domain : ['', Validators.required],
        skills : this.fb.array([this.buildSkill()])
    });

  }

  buildSkill(){
    return this.fb.group({
      skill :['', Validators.required],
      rating : ['', Validators.required],
      description : ['']
    })
  }

  addSkill(){
    this.skills.push(this.buildSkill());
  }
  save(){
    console.log(this. skillForm);
    console.log('saved:'+JSON.stringify(this. skillForm));
  }
}
