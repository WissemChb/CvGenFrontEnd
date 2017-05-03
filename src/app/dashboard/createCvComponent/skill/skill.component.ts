import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import {Skill} from "../../../shared/classes/skill";
import {SkillService} from "./skill.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillForm : FormGroup;
  skill : Object[] = new Array<Skill>();

  constructor(private fb : FormBuilder, private skillService : SkillService) { }

  get skills(): FormArray{
    return <FormArray> this.skillForm.get('skills');
  }

  ngOnInit() : void {
    this.skillForm= this.fb.group({
        domain : ['', Validators.required],
        skills : this.fb.array([this.buildSkill()])
    });
    this.skillService.clearData();
  }

  buildSkill(){
    debugger
    return this.fb.group({
      skill :['', Validators.required],
      starRate : 0
    });

  }

  addSkill(){
    this.skills.push(this.buildSkill());
  }
  save(event : any){
    debugger
    event.preventDefault();
    this.skillService.sendData(JSON.parse(JSON.stringify(this.skillForm.value)));
    console.log(this.skillForm.value);
    this.skillForm.reset();

  }
}
