import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  personForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() : void {
    this.personForm=this.fb.group({
      firstName:['',Validators.required],
      lastName : ['',Validators.required],
      city:'',
      zip:'',
      pays:'',
      phone:''
    });


  }

  save(){
    console.log(this.personForm);
    console.log('saved:'+JSON.stringify(this.personForm));
  }
}
