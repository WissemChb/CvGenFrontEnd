import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import {LeisureService} from "./leisure.service";


@Component({
  selector: 'app-leisure',
  templateUrl: './leisure.component.html',
  styleUrls: ['./leisure.component.css']
})
export class LeisureComponent implements OnInit {
  leisureForm : FormGroup;
  constructor(private fb : FormBuilder, private leisureService : LeisureService) { }

  ngOnInit() : void {
    this.leisureForm=this.fb.group({
      leisure:['',Validators.required],
    });

   this.leisureService.clearData();

  }

  save(event : any){
    debugger
    event.preventDefault();
    this.leisureService.sendData(JSON.parse(JSON.stringify(this.leisureForm.value)));
    console.log(this.leisureForm.value);
    this.leisureForm.reset();

  }
}

