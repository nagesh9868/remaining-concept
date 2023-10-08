import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[template]'
})
export class TemplateDirective {
  constructor(private contref:ViewContainerRef, private template:TemplateRef<any>) {
    console.log(this.template.elementRef);
    this.contref.createEmbeddedView(template)
   }

   
}
