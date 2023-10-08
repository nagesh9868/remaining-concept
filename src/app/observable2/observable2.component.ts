import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {
  something?:string
  somethingFromBS?:string
  somethingFromRS?:string
  somethingFromAS?:string
  constructor(private _cS:CommonService) { }

  ngOnInit(): void {
    //with the helo of eventEmitter 
    this._cS.observable.subscribe((res:string)=>{
      this.something = res
      console.log(res);     
    })

    // with the help of subject
    this._cS.subjectObservable.subscribe((res:string)=>{
      this.something = res
    })
    
    //with the help of BehaviourSubject
    this._cS.beheaviourSubjectObservable.subscribe((res)=>{
      this.somethingFromBS = res
    })

    //with the help of replaySubject
    this._cS.replaySubjectObservable.subscribe(msg=>console.log(msg));
    this._cS.replaySubjectObservable.subscribe(msg => this.somethingFromRS = msg)

    //with the help of asyncSubject
    this._cS.asyncSubjectObservable.subscribe(msg=>console.log(msg));
    this._cS.asyncSubjectObservable.subscribe(msg => this.somethingFromAS = msg)
  }
}
