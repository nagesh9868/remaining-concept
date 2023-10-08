import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  products:any
  quantitiy = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(this.products.length)      
    }, 1000);
  })
  constructor(private http:HttpClient) { }
  isHide:boolean = true

  ngOnInit(): void {
    this.http.get("https://fakestoreapi.com/products").subscribe((res)=>{
      this.products = res
      console.log(res);      
    })
    
  }


}


