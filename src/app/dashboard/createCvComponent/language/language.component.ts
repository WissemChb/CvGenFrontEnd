import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languageForm : FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() : void {
    this. languageForm=this.fb.group({
      language:['',Validators.required],
       raiting:['',Validators.required]
    });


  }

  save(){
    console.log(this. languageForm);
    console.log('saved:'+JSON.stringify(this. languageForm));
  }
}
