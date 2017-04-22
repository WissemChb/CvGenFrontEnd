import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Login} from "./Login";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  constructor(private http : Http){}
  user : Login;
  authToken : any;
  url : string = "http://localhost:5000/auth/login";
  login (user : Login){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url,user,options)
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

  saveLocalAuthentication(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
