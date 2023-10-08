import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseenter')
  mouseover(){
    this.renderer.setStyle(this.el.nativeElement, "margin", "1rem 1rem")
    this.renderer.setStyle(this.el.nativeElement, "padding", "1rem 1rem")
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "gray")
    this.renderer.setStyle(this.el.nativeElement, "color", "white")
    this.renderer.setStyle(this.el.nativeElement, "textAlign", "center")
    this.renderer.setStyle(this.el.nativeElement, "transition", "0.5s")
  }
  
  @HostListener('mouseleave')
  mouseleave(){
    this.renderer.setStyle(this.el.nativeElement, "margin", "0rem 0rem")
    this.renderer.setStyle(this.el.nativeElement, "padding", "0rem 0rem")
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "blue")
    this.renderer.setStyle(this.el.nativeElement, "color", "white")
    // this.renderer.setStyle(this.el.nativeElement, "textAlign", "right")
    this.renderer.setStyle(this.el.nativeElement, "transition", "0.5s")
  }
}
