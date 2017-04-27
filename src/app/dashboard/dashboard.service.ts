import { Injectable } from '@angular/core';
import {Response, RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Customer} from "../shared/classes/customer";



@Injectable()
export class DashboardService {
  user : Customer;
  constructor(private http : Http) { }

  url : string = "http://localhost:5000/user/user";

  saveCV (){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url,this.user,options)
      .map(this.extractResponseData)
      .do(data => console.log('Add user : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');}

  private extractResponseData(response: Response){
    let body = response.json();
    console.log(body.success);
    return body || {};
  }

}
