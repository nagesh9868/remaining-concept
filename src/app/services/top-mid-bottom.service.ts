import { Injectable } from '@angular/core';


export class TopMidBottomService1{
  constructor() {
    console.log("this is class TopMidBottomSerivceX");
  }

  className():string{
    return "TopMidBottomSerivceX"
  }
  
}
@Injectable({
  providedIn: 'root',
  // useClass: TopMidBottomService1,
})
export class TopMidBottomService {
  
  constructor() {
    // console.log("this is class TopMidBottomSerivce");
  }
  
  className():string{
    return "TopMidBottomService"
  }
  array = [
    { name: "Ram", age: 40, email: "ram@test.com" },
    { name: "Nagesh", age: 33, email: "nagesh@test.com" },
    { name: "Suresh", age: 45, email: "suresh@test.com" },
    { name: "Saroj", age: 32, email: "saroj@test.com" }
  ]
  // topMidBottom(){
  //   return this.array.
  // }
}
