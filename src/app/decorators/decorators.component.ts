import { Component, Inject, OnInit } from '@angular/core';
import { DecoratorService } from '../services/decorator.service';
@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent implements OnInit {
  messageInput?:string
  messageFromOp?:string
  
  constructor(@Inject(DecoratorService) decoratorS:any, public _dc:DecoratorService) { 
    console.log(decoratorS.info);
  }

  ngOnInit(): void {
    this.messageInput = "I am the Message for Child"
    
  }

  messgaeFromChild(data:string){
    console.log(data);
    this.messageFromOp = data
  }

  changeColor(){
    this._dc.info = "Jai Shree Ram"
  }
}
