import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  componentName = 'testing'
  constructor() { }

  ngOnInit(): void {
  }

  sum(a:number,b:number){
    return a + b
  }


}
