import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit()  {

  }



}
