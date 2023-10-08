import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMethodDecorator]'
})
export class MethodDecoratorDirective {

  constructor() { }
  @HostBinding("style.background-color") bgColor:any;
  @HostBinding("style.color") Color:any;
  @HostListener('click') clickMethode(): void{
    this.Color = 'white'
  }
  @HostListener('mouseover') mouseOverMethode(): void{
    this.bgColor = 'Blue'
  }
}
