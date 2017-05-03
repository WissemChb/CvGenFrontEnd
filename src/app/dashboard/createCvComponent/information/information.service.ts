import { Injectable } from '@angular/core';
import {Subject, Observable} from "rxjs";
import {Information} from "../../../shared/classes/information";

@Injectable()
export class InformationService {
  subject : Subject<any> = new Subject<any>();

  sendData(data : any){
    this.subject.next(data)
  }
  clearData(){
    this.subject.next();
  }
  getData(): Observable<any>{
    return this.subject.asObservable()
  }

}
