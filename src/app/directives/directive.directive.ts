import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[appDirective]'
// })

//below is the example of direct manipulation of the DOM element but it is not recommended
// export class DirectiveDirective implements OnInit{
//private el:ElementRef = we could write this in contructor property 
// constructor(el:ElementRef) {
// constructor(private el:ElementRef) {
// console.log(el.nativeElement);

//assigning the ele value to el property
// this.el = el - No need to do this also

// el.nativeElement.style.fontSize = "3rem"
// el.nativeElement.style.color = "red"
// el.nativeElement.style.backgroundColor = "yellow"
// el.nativeElement.style.textAlign = "center"
//  }

//To use the local property of constructor to outside of the constructor
// ngOnInit(): void {
//   this.el.nativeElement.style.fontSize = "3rem"
//   this.el.nativeElement.style.color = "red"
//   this.el.nativeElement.style.backgroundColor = "yellow"
//   this.el.nativeElement.style.textAlign = "center"
// }

// }

@Directive({
  selector: '[bgColor]'
})

export class DirectiveDirective {
  renderer : Renderer2
  constructor(renderer: Renderer2, private element:ElementRef) {
    this.renderer = renderer
    // renderer.addClass(this.element.nativeElement, 'container')
    renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'gray')
    renderer.setStyle(this.element.nativeElement, 'color', 'White')
    renderer.setStyle(this.element.nativeElement, 'textAlign', 'center')
    renderer.setAttribute(this.element.nativeElement, "title", "this is modified by the renderee2")
    // renderer.setStyle(this.element.nativeElement, "display", "none")
    }
}
