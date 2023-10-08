import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //Parent to Child communication
  @Input() ram: any
  //Child To Parent communication
  @Output() nagesh = new EventEmitter<any>()
  

  constructor() { }

  ngOnInit(): void {
    this.nagesh.emit({
      name:'Nagesh',
      age: 33,
      email:'nagesh@test.com',
    })
  }


}
