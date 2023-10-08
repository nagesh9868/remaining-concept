import { AfterViewChecked, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-reff',
  templateUrl: './template-reff.component.html',
  styleUrls: ['./template-reff.component.css'],
})
export class TemplateReffComponent implements OnInit, AfterViewChecked{
  @ViewChild('template') _template:TemplateRef<any> | undefined
  // @ViewChild('template') template:ViewContainerRef | undefined
  quantity= [1,2]
  isHide:boolean = false
  constructor() { }
  hide(){
    this.isHide =  !this.isHide
  }

  ngOnInit(): void {
    
    console.log(this.quantity.length);
    
  }

  ngAfterViewChecked() {
    // this.name.createEmbeddedView(this._template, {fromContext: 'John'});
    // console.log(this._template);
    // if(this._template && this.template){
      // this.contref.createEmbeddedView(this._template)
    // }
}

}
