
import {CV} from "./CV";
export class Customer {

  firstName : string;
  secondName : string;
  username : string;
  email : string;
  password : string;
  confirmPassword : string;
  cv : CV;
  constructor(){
    debugger
    this.cv = new CV();
  }

}

