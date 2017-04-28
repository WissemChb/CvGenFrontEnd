import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {


  informationForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() : void {
    this.informationForm=this.fb.group({
      firstName:['',Validators.required],
      lastName : ['',Validators.required],
      phoneNumber :['',Validators.required],
      country : ['',Validators.required],
      email: ['',Validators.required],
      website:['',Validators.required],
    });


  }

  save(){
    console.log(this.informationForm);
    console.log('saved:'+JSON.stringify(this.informationForm));
  }
}
