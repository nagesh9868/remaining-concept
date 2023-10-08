import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
  @Output() childMethod = new EventEmitter<any>();
  constructor() {}
  fruits:string[]=[]
  blank?:string
  ngOnInit(): void {
    let localItem = localStorage.getItem('fruits_array')
    if (localItem !== null){
      this.fruits = JSON.parse(localItem)
      console.log(this.fruits);
      
    }else{
      this.fruits = []
    }
  }

  fruitsArray(Data:any){
    console.log('fruits array function called'); 
    this.blank = ''
    this.fruits.push(Data)
    localStorage.setItem('fruits_array', JSON.stringify(this.fruits))
    this.childMethod.emit(this.fruits)
  }

}
