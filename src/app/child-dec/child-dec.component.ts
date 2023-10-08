import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-dec',
  templateUrl: './child-dec.component.html',
  styleUrls: ['./child-dec.component.css']
})
export class ChildDecComponent implements OnInit {
  @Output() messageOp = new EventEmitter<string>()
  @Input() messageIp:any
  messageChild:string = "I am The message for Parent"
  constructor() { }

  ngOnInit(): void {
    
    this.messageOp.emit(this.messageChild)
  }

}
