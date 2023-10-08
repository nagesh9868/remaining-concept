import { Component, OnInit } from '@angular/core';
import { todo } from './data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:todo[] = []
  titleBlank:string = ''
  descBlank:string = ''
  show:boolean = true

  
  constructor() {}
  ngOnInit(): void {
    let localItem:any = localStorage.getItem('todo')
    let localArray= JSON.parse(localItem)
      if(localArray.length>0){
        this.todo = localArray
        this.show = false
      }
  }

  addToDo(Data:todo){   
    this.titleBlank = ''
    this.descBlank = ''
    this.todo.push(Data)
    localStorage.setItem('todo', JSON.stringify(this.todo))
    let localItem:any = localStorage.getItem('todo')
    let localArray= JSON.parse(localItem)
    if(localArray.length>0){
      this.todo = localArray
      this.show = false
    }else{
      this.show = true
    }
  }

  deleteToDo(Item:todo){
    console.log(Item);
    let one = this.todo.indexOf(Item)
    this.todo.splice(one, 1)
    localStorage.setItem('todo', JSON.stringify(this.todo))
    let localItem:any = localStorage.getItem('todo')
    let localArray= JSON.parse(localItem)
    if(localArray.length>0){
        this.todo = localArray
        this.show = false
      }else{
        this.show = true
      }
  }

}
