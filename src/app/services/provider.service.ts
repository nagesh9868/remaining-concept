import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProviderService {
  public counter:number = 0
  constructor() { }

  public dec(){
    console.log("THIS IS COUNTER SERVICE");
     this.counter--
  }
  public inc(){
    console.log(this.counter);    
    this.counter++
  }
}
