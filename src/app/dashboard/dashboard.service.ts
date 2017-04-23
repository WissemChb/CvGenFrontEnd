import { Injectable } from '@angular/core';
import {Customer} from "../shared/classes/customer";
import {Headers, RequestOptions, Response, Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

  authToken : any;
  constructor(private http : Http) { }

  /*url : string = "http://localhost:5000/user/user";
  getUser (){
    this.loadToken();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization',this.authToken);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url,options)
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

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }*/

}
