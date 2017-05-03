import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languageForm : FormGroup;
  constructor(private fb : FormBuilder, private languageService : LanguageService) { }

  ngOnInit() : void {
    this. languageForm=this.fb.group({
      language:['',Validators.required],
      starRate: 0
    });
 this.languageService.clearData();

  }

  save(event : any){
    debugger
    event.preventDefault();
    this.languageService.sendData(JSON.parse(JSON.stringify(this.languageForm.value)));
    console.log(this.languageForm.value);
    this.languageForm.reset();
  }
}
