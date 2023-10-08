import { AfterViewInit, Component, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs'

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild('ssHand')ssHand:ElementRef|undefined
  @ViewChild('mnHand')mnHand:ElementRef|undefined
  @ViewChild('hrHand')hrHand:ElementRef|undefined
  router:any
  constructor(private route:Router) { }
  secHand:any
  indiaTime:any
  home:boolean = false
  ngOnInit(): void {
    // console.log(this.mnHand);  
    // this.router = interval(5000).subscribe(() => {
    //     this.route.navigate(['/directive'])
    //   });    
    setTimeout(() => {
          console.log("ngOnChange called");
          this.home = true
    }, 3000);

  }
  
  ngAfterViewInit():void{
    this.indiaTime = setInterval(()=>{
      let date = new Date();
      let seconds = date.getSeconds()
      let minutes = date.getMinutes()
      let hours = date.getHours()
      let dateNow = Date.now()
      if(this.ssHand && this.mnHand && this.hrHand){        
        this.ssHand.nativeElement.style.transform = `rotate(${seconds*6}deg)`
        this.mnHand.nativeElement.style.transform = `rotate(${minutes*6}deg)`
        // this.hrHand.nativeElement.style.transform = `rotate(${hours/10/360/60*dateNow}deg)`
        this.hrHand.nativeElement.style.transform =  `rotate(${(hours * 30) + (minutes * 0.5) + (seconds * (0.5 / 60))}deg)`;
      }
      console.log("clock is running ");
    },1000)
    console.log("clock is running");
    // this.indiaClock()
  }

  ngOnDestroy():void{
    console.log("ngOnDestroy Called");
    
    clearInterval(this.indiaTime)
  }
  
}
function rotate(arg0: number, deg: any): any {
  throw new Error('Function not implemented.');
}

function Interval(arg0: number) {
  throw new Error('Function not implemented.');
}

