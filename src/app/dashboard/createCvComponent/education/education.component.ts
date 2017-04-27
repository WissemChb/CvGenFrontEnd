import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../shared/classes/customer";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
user : Customer = new Customer();
  constructor() { }

  ngOnInit() {
  }

  addEducation(){

  }

}
