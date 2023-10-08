import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      Counter Child Component
    </p>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
  public counter:number = 0
  constructor() { }

  ngOnInit(): void {
  //   for(i=1,i++,i)
  }

  decreament(){
    this.counter = this.counter+10
  }

  increament(){
    this.counter = this.counter-10
    // console.log(this.counter+10);
    
  }

  
}
