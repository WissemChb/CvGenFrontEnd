import {Information} from "./information";
import {Education} from "./education";
import {Experience} from "./experience";
import {Skill} from "./skill";
import {Leisure} from "./leisure";
import {Language} from "./language";
export class Customer {

  firstName : string;
  secondName : string;
  username : string;
  email : string;
  password : string;
  confirmPassword : string;
  skills :  Skill[];
  educations : Education[];
  experiences : Experience[];
  infos : Information;
  leisure : Leisure[];
  language : Language[];

}

