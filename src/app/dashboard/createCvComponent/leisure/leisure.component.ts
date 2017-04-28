import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';


@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {
  leisureForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() : void {
    this.leisureForm=this.fb.group({
      leisure:['',Validators.required]

    });


  }

  save(){
    console.log(this.leisureForm);
    console.log('saved:'+JSON.stringify(this.leisureForm));
  }
}
