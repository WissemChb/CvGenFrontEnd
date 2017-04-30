import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Education} from "../../../shared/classes/education";

@Injectable()
export class EducationService {

  subject : Subject<any> = new Subject<any>();

  sendData(data : any){
    this.subject.next(data)
  }
  clearData(){
    this.subject.next();
  }
  getData(): Observable<Education[]>{
    return this.subject.asObservable()
  }
}
