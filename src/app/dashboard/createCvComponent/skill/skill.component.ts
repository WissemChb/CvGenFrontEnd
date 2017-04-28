import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() : void {
    this.skillForm= this.fb.group({
        skill :'',
        description : ''
    });


  }

  save(){
    console.log(this. skillForm);
    console.log('saved:'+JSON.stringify(this. skillForm));
  }
}
