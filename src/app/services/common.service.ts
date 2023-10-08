import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  observable = new EventEmitter<string>()
  subjectObservable = new Subject<string>()
  beheaviourSubjectObservable = new BehaviorSubject<string>('Jai Shree Ram')
  replaySubjectObservable = new ReplaySubject<string>()
  asyncSubjectObservable = new AsyncSubject<string>()
  constructor() { }

  something(data: string) {
    //EventEmitter in Action
    this.observable.emit(data)

    //Subject in Action
    this.subjectObservable.next(data)

    //BehaviourSubject in Action 
    this.beheaviourSubjectObservable.next(data)

    //ReplaySubject in Action
    this.replaySubjectObservable.next("Stay Safe...")
    this.replaySubjectObservable.next("be at Home")
    this.replaySubjectObservable.next("Never Give Up")
    this.replaySubjectObservable.next(data)

    //AsyncSubject in Action 
    this.asyncSubjectObservable.next("Be carefull about everything near you")
    this.asyncSubjectObservable.next("Keep Quite and listen carefully")
    this.asyncSubjectObservable.next("You are the most Important person in the world")
    this.asyncSubjectObservable.next(data)
    this.asyncSubjectObservable.complete()

    let url = "https://restcountries.com/v3.1/name/india?fullText=true"
    let cache: any = {}
    function getCountryInfo(url: any) {
      if (!cache[url]) {
        cache[url] = new AsyncSubject();
        fetch(url).then(res => res.json()).then(d => {
          cache[url].next(d);
          cache[url].complete()
        })
      }
      return cache[url].asObservable()
    }
    getCountryInfo(url).subscribe((d: any) => console.log(d));
  }
}
