import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {

  // @ViewChild('highlight')marker?:ElementRef
  @ViewChildren('highlight')marker?:QueryList<any>
  @ViewChild('childView')counter?:CounterComponent

  // constructor() { }

  ngOnInit(): void {
    console.log(this.marker);
  }

  ngAfterViewInit(): void {
    console.log(this.marker);
    if(this.marker){     
      // this.marker.nativeElement.innerHTML = "hi"
      // this.marker.nativeElement.style.color  = "blue"
      // this.marker.nativeElement.style.backgroundColor  = "yellow"
      this.marker.first.nativeElement.style.color = "red"
      this.marker.last.nativeElement.style.color = "green"
    }
  }

  dec(){
    this.counter?.decreament()
  }

  inc(){
    this.counter?.increament()
  }

}
