
/**
 * Created by Rima on 4/28/2017.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'
import {ImageTemplates} from "./TemplateImages";

@Injectable()

export  class TemplateService{
  constructor( private http : Http){}

  url : string = "src/api/templates/templates.json";
  getTemplates ():Observable<ImageTemplates[]> {
    debugger
    return this.http.get(this.url)
      .map((response : Response) => <ImageTemplates[]> response.json())
      .do(data => console.log('Add Templates : ' + JSON.stringify(data)))
      .catch(error => Observable.throw("Error in x service"));
  }
  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');}

}
