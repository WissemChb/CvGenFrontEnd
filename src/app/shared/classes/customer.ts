export class Customer {

  firstName : string;
  secondName : string;
  username : string;
  email : string;
  password : string;
  confirmPassword : string;

  skills :  [{
      domain : String,
      skill : String,
      rate : Number ,
      description  : String,

  }];
  educations : [{
    title : String,
    establishment : String,
    description : String,
    dateEduc : {
      startDate : Date,
      finishDate : Date
    }
  }];

  experiences : [{
    post : String,
    dateExperience : {
      startDate : Date,
      finishDate : Date
    },
    entreprise : {
      logo : String,
      description : String,
      webSite : String
    },
    description : String
  }];

  infos : {
    photo : String,
    birthDate : String,
    address : [{
      street : String,
      city : String,
      code : Number
    }];
  }
}

