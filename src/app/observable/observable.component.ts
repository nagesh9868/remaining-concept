import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, from, of, interval } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  constructor() { }
  counterObservable = interval(1000)
  unsubscribeObs: any
  subscribeObs: any
  subUnsub1?: boolean
  subUnsub: string = "unsubscribe"

  unsubscribe() {
    // this.subUnsub = !this.subUnsub with the help of if else
    this.subUnsub == this.subUnsub ? this.subUnsub == "subscribe" : this.subUnsub == "unsubscribe"
    if (this.subUnsub == "unsubscribe") {
      this.subUnsub = "subscribe"
      this.subscribeObs = this.counterObservable.subscribe((res) => {
        console.log(res);
      })

    } else if (this.subUnsub == "subscribe") {
      this.subUnsub = "unsubscribe"
      this.subscribeObs.unsubscribe(() => { })
    }

    //sub/unsub with the help of boolean
    // if(this.subUnsub1 == true){
    //   this.subscribeObs = this.counterObservable.subscribe((res)=>{
    //     console.log(res);    
    //   })
    //   }else{
    // this.subscribeObs.unsubscribe(()=>{})
    // }
  }
  //learning subject 
  enteredText?: string
  clickBtn() {
    console.log(this.enteredText);

  }

  ngOnInit(): void {
    // console.log(subUnsub);
    // this.unsubscribeObs = this.counterObservable.subscribe((res)=>{
    //   console.log(res);
    //   this.subUnsub = false
    // })



    // this.myObservable.subscribe(next, error, complete)
    // this.myObservable.subscribe((val)=>{
    //   console.log(val);   
    // },(error)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');     
    // })

    //using create method
    // this.createObservable.subscribe((val:any)=>{
    //   console.log(val);   
    // },(error:any)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');

    // })
    //using of method
    // this.ofObservable.subscribe((val:any)=>{
    //   console.log(val);   
    // },(error:any)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');     
    // })

    //using from method
    // this.fromObservable.subscribe((val:any)=>{
    //   console.log(val);   
    // },(error:any)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');  
    // })

    //map operator of rxjs
    // this.transformObservable.subscribe((val:any)=>{
    //   console.log(val);   
    // },(error:any)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');      
    // })

    // //filter operator of rxjs
    // this.filteredObservable.subscribe((val)=>{
    //   console.log(val);   
    // },(error:any)=>{
    //   alert(error.message)
    // },()=>{
    //   console.log('All the Data has been recieved!! Hurray!!');      
    // })

    //chaining of operators
    this.fromObservable.subscribe((val) => {
      console.log(val);
    }, (error: any) => {
      alert(error.message)
    }, () => {
      console.log('All the Data has been recieved!! Hurray!!');
    })
  }

  //observable
  myObservable = new Observable((observer) => {
    console.log('Observable Starts');
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
    setTimeout(() => { observer.next('1') }, 1000);
    setTimeout(() => { observer.next('2') }, 2000);
    setTimeout(() => { observer.next('3') }, 3000);
    // setTimeout(() => { observer.error(new Error('Something went wrong!! Please try again later')) }, 3000);
    setTimeout(() => { observer.next('4') }, 4000);
    setTimeout(() => { observer.next('5') }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  })

  //observable with create method
  createObservable = Observable.create((observer: any) => {
    console.log('Observable Starts');
    observer.next('1')
    observer.next('2')
    observer.next('3')
    observer.next('4')
    observer.next('5')
    setTimeout(() => { observer.next('1') }, 1000);
    setTimeout(() => { observer.next('2') }, 2000);
    setTimeout(() => { observer.next('3') }, 3000);
    // setTimeout(() => { observer.error(new Error('Something went wrong!! Please try again later')) }, 3000);
    setTimeout(() => { observer.next('4') }, 4000);
    setTimeout(() => { observer.next('5') }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  })

  //observable with of method - it could takes multiple argument
  array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  array2 = ['a', 'b', 'c', 'd', 'e']
  ofObservable = of(this.array1, this.array2)

  //observable with from from operator - it only take one argument
  fromObservable = from(this.array1).pipe(map((val) => {
    return val * 5;
  }), (filter((val: any) => {
    return val >= 20
  })))

  //observable with map operator
  transformObservable = this.fromObservable.pipe(map((val) => {
    return val * 5;
  }), (filter((val: any) => {
    return val >= 20
  })))

  filteredObservable = this.transformObservable.pipe(filter((val: any) => {
    return val >= 20
  }))

  ngOnDestroy(): void {
    console.log("Observable Destroyed");
    
    this.subscribeObs?.unsubscribe()
  }
}
function unsubscribe() {
  throw new Error('Function not implemented.');
}

