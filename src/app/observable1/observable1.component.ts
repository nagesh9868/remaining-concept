import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  constructor(private _cS:CommonService) { }

  ngOnInit(): void {
  }

  observable1(data:string){
    this._cS.something(data)
  }
}
