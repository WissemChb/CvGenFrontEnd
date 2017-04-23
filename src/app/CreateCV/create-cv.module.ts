import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateCVService} from "./create-cv.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [CreateCVService]
})
export class CreateCVModule { }
