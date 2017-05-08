import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable()
export class EducationService {

  subject : Subject<any> = new Subject<any>();

  sendData(data : any){
    this.subject.next(data)
  }
  clearData(){
    this.subject.next();
  }
  getData(): Observable<any[]>{
    return this.subject.asObservable()
  }
}
