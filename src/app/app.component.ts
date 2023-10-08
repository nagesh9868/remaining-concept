import { Component, OnDestroy, OnInit } from '@angular/core';
import { TopMidBottomService } from './services/top-mid-bottom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'remaining-concept';
  fruits: string[] = []
  show: boolean = true
  isVisible: boolean = true
  items = [1, 2, 3, 4, 5, 6]
  //Parent to Child communication
  ram = {
    name: "Ram",
    age: 46,
    email: "ram@Test.com"
  }

  //Child To Parent Communication
  nagesh: any
  data: any
  digitalTime:any
  constructor(private _TMB: TopMidBottomService) {
  }
  
  // time(){
  //   this.digitalTime = setInterval(()=>{
  //     let date = new Date()
  //     this.data = date
  //     console.log("time");
      
  //   }, 1000)
  // }

  ngOnInit(): void {
    // this.time()
    let arr = [
      { name: 'a', status: 'f' },
      { name: 'b', status: 'p' },
      { name: 'c', status: 'p' },
      { name: 'd', status: 'p' },
      { name: 'e', status: 'f' },
    ]

    let passed = arr.slice(1, 4)

    let passedFilter = arr.filter((arr) => arr.status === "p").forEach((item) => {
      console.log(item.name);
    })

    let passedFilter1 = arr.filter((arr) => arr.status == "p" ? arr.name : "")

    console.log(passed)
    console.log(passedFilter1)


    function sum(x: any, y: any, z: any) {
      console.log(x);
      console.log(y);
      console.log(z);

    }
    // sum(1,2,3);

    // sum= (x:any,y:any,z:any)=>{ return console.log(x);
    // }


  }

  childToParent(nagesh: any) {
    this.nagesh = nagesh
  }

  toggle() {
    this.show = !this.show
  }
  // todo app 
  // ngOnInit(): void {
  //   let localItem: any = localStorage.getItem('fruits_array')
  //   this.fruits = JSON.parse(localItem)
  //   if (this.fruits === null) {
  //     this.show = true
  //   }
  // }


  // childMethod(data: any) {
  //   this.fruits = data
  //   if (this.fruits.length === 0) {
  //     this.show = true
  //   } else {
  //     this.show = false
  //   }

  // }

  // deletename(fruit: any) {
  //   let a = this.fruits.indexOf(fruit)
  //   this.fruits.splice(a, 1)
  //   localStorage.setItem('fruits_array', JSON.stringify(this.fruits))
  //   if (this.fruits.length === 0) {
  //     console.log('if condition');
  //     this.show = true
  //   } else {
  //     console.log('else condition');
  //     this.show = false
  //   }
  // }

  ngOnDestroy(): void {
    clearInterval(this.digitalTime)
  }


}
