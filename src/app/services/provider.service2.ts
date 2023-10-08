import { Injectable } from '@angular/core';
import { ProviderService } from './provider.service';
import { testservice } from './test.servie';

// @Injectable({
//   providedIn: 'root'
// })

//use class
@Injectable()
// export class ProviderService2 extends ProviderService{
//   public override counter:number = 0 
//   constructor(private _testService:testservice) { super(); }

//   public override dec(){
//     console.log("THIS IS COUNTER 2 CLASS");
//      this.counter-= 10 
//   }
//   public override inc(){
//     console.log(this.counter);    
//     this.counter+=10
//   }
// }


//useExisting
export class ProviderService2{
    public counter:number = 0 
    constructor() { }
  
    public dec(){
      console.log("THIS IS COUNTER 2 CLASS");
       this.counter-= 10 
    }
    public   inc(){
      console.log(this.counter);    
      this.counter+=10
    }
  }