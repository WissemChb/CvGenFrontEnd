import { Injectable } from '@angular/core';
import {Response, RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Customer} from "../shared/classes/customer";
import {CV} from "../shared/classes/CV";



@Injectable()
export class DashboardService {
  constructor(private http : Http) { }

  url : string = "http://localhost:5000/cv/user";


  saveCV (user : Customer){
    debugger;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url,user,options)
      .map(this.extractResponseData)
      .do(data => console.log('Add user : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getCv (id : String):Observable<any> {
    debugger
    const url = `${this.url}/${id}`
    return this.http.get(url)
      .map((response : Response) =>  <any>response.json())
      .do(data => console.log('Add CV : ' +JSON.stringify(data)))
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
