import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private element:ElementRef, private renderer: Renderer2) { }


  @HostBinding('style.backgroundColor') background = "tranparent"
  @HostBinding('style.border') border = 'none'
  @HostBinding('style.textAlign') center = 'center'
  @HostBinding('style.color') color = 'white'
  @HostBinding('style.padding') padding = '1rem'
  @HostListener('mouseenter')
  mouseenter(){
    this.background = 'green'
    this.border = '5px solid black'
    this.center = 'left'
    this.renderer.setStyle(this.element.nativeElement, "color", 'white')
  }
  @HostListener('mouseleave') 
  mouseleave(){
    this.background = 'red'
    this.center = 'right'
    this.border = '5px solid blue'
    this.renderer.setStyle(this.element.nativeElement, "color", 'white')
  }
}
