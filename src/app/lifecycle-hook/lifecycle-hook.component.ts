import { Component, OnInit } from '@angular/core';
import { Product } from '../datatypes/product';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit {
  Hook?:string
  name?:string
  price?:number
  product:Product = new Product()
  ngOnChange?: string
  
  constructor() {
    console.log('Constructor');
    this.Hook = 'Constructor Loaded'
    // this.child.alertInChild()
   }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.Hook = 'ngOnInit Loaded '
  }

  handleData(e:any){
    this.Hook = e.target.value
  }

  updateProduct(){
    this.product = new Product()
    this.product.name = this.name
    this.product.price = this.price
  }

}
