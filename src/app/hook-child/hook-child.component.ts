import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ApplicationRef, Component, ContentChild, DoBootstrap, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../datatypes/product';
// import { proAppComponent } from '../app.component';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() parentData?:string
  @Input() product?:Product
  @ContentChild("child") contentChild?:ElementRef;
  @ViewChild("viewChild") viewChild?:ElementRef
  interval:any
  countIncreament:number = 0
  constructor() { 
    console.log('Constructor Called');
    this.interval = setInterval(()=>{
      this.countIncreament++
      console.log("Counter Running", this.countIncreament);
      
    }, 1000)
  }
  
  ngOnInit(): void {
    console.log('ngOnInit Called');
  }

  ngOnChanges(change:SimpleChanges){
    console.log('ngOnchange Called', change );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called', this.product); 
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Called', this.contentChild);
    // this.contentChild?.nativeElement.setAttribute('style', "color:red")
    this.contentChild?.nativeElement.setAttribute('style', `color:${this.parentData}`)
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called", this.contentChild);
    this.contentChild?.nativeElement.setAttribute('style', "color:red")
  }

  ngAfterViewInit():void{
    console.log("ngAfterViewInit called", this.viewChild);
    this.viewChild?.nativeElement.setAttribute("style", "background-color:yellow")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called", this.viewChild);
    this.viewChild?.nativeElement.setAttribute("style", `background-color:${this.parentData}`)    
  }


  ngOnDestroy(): void {
    console.log("ngOnDestroy Called");
    clearInterval(this.interval)
  }
}
