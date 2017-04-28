
/**
 * Created by Rima on 4/28/2017.
 */

import {Injectable} from "@angular/core";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
import {Observable, Subscription} from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'

@Injectable()

export  class TemplateService{
  constructor( private http : Http){}

  url : string = "api/templates/templates.json";
  getTemplates (){
    let headers = new Headers({ 'Content-Type': 'application/json' });
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


}
