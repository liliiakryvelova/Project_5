// export default function Triangle(side1, side2, side3) {
//  ...
//}

export default class Person {
  constructor(name){
    this.name = name;
    this.age;
    this.averageLifeExpectation;
  }
  
  calculateMercury(age){
    this.age = age;
    return this.age/0.24;
  }

  calculateVenus(age){
    this.age = age;
    return this.age/0.62;
  }

  calculateMars(age){
    this.age = age;
    return Math.round(this.age/1.88);
  }

  calculateJupiter(age){
    this.age = age;
    return Math.round(this.age/11.86);
  }

  lifestyleList = function(life_S){

    let lifeS;
    switch (life_S){
      case "professional sport": 
        lifeS = 5;
        console.log("You choose - professional sport");
        break;
      case "sport":
        lifeS = 10;
        console.log("You choose - sport");
        break;
      case "no sport":
        lifeS = 15;
        console.log("You choose - no sport");
        break;
      default:
        //console.log(`Sorry, we are out of ${lifeS}`);
        lifeS = 0;
        break;
    }
    return lifeS;
  }

  activityLevel = function(activity_L){

    let lifeSactivityL;
    switch (activity_L){
      case "every day": 
      lifeSactivityL = 5;
        console.log("You choose - professional sport");
        break;
      case "one per week":
        lifeSactivityL = 10;
        console.log("You choose - sport");
        break;
      case "not often":
        lifeSactivityL = 15;
        console.log("You choose - no sport");
        break;
      default:
        //console.log(`Sorry, we are out of ${lifeSactivityL}`);
        lifeSactivityL = 0;
        break;
    }
    return lifeSactivityL;
  }

  calculateAverage = function (life_S, activity_L){
    let lifeStyle = this.lifestyleList(life_S);
    let activityL = this.activityLevel(activity_L);
    let result = lifeStyle + activityL;
    let aver;
    if (result == 10 || result == 20){
     aver = 50;
    }
    else if (result == 15){
     aver = 80;
    }
    else if (result == 25){
      aver = 75;
    }
    else
      aver = 60;
    return aver;
  }

  calculateMercuryAver = function(age, lifeS, activityL){
    let Mercury_age = this.calculateMercury(age);
    let life_S = lifeS;
    let activity_L = activityL;
    let aver_Age = this.calculateAverage(life_S, activity_L);
    let difference;
    if (Mercury_age > aver_Age){
      difference = Mercury_age - aver_Age;
      return `You will live on Mercury on ${Math.round(difference)} year more`;
    }
    else {
      difference = aver_Age - Mercury_age;
      return `You will live on Mercury on ${Math.round(difference)} year less`;
    }
    
  }

  calculateVenusAver = function(age){
    let Venus_age = this.calculateVenus(age);
    let life_S = "no sport";
    let activity_L = "not often";
    let aver_Age = this.calculateAverage(life_S, activity_L);
    let difference;
    if (Venus_age > aver_Age){
      difference = Venus_age - aver_Age;
      return `You will live on Venus on ${Math.round(difference)} year more`;
    }
    else {
      difference = aver_Age - Venus_age;
      return `You will live on Venus on ${Math.round(difference)} year less`;
    }
  }

  calculateMarsAver = function(age){
    let Mars_age = this.calculateMars(age);
    let life_S = "professional sport";
    let activity_L = "one per week";
    let aver_Age = this.calculateAverage(life_S, activity_L);
    let difference;
    if (Mars_age > aver_Age){
      difference = Mars_age - aver_Age;
      return `You will live on Mars on ${Math.round(difference)} year more`;
    }
    else {
      difference = aver_Age - Mars_age;
      return `You will live on Mars on ${Math.round(difference)} year less`;
    }

}

calculateJupiterAver = function(age, lifeS, activityL){
  let Jupiter_age = this.calculateJupiter(age);
  let life_S = lifeS;
  let activity_L = activityL;
  let aver_Age = this.calculateAverage(life_S, activity_L);
  let difference;
  difference = aver_Age - Jupiter_age;
    return `You will live on Jupiter on ${Math.round(difference)} year less`;

}
  
}





