import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {Customer} from "../shared/classes/customer";

@Injectable()
export class TemplateService {

  subject : Subject<any> = new Subject<any>();

  sendData(data : Customer){
    this.subject.next(data)
  }
  clearData(){
    this.subject.next();
  }
  getData(): Observable<Customer>{
    return this.subject.asObservable()
  }

}
