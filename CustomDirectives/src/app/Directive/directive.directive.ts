import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]',
  standalone: true
})
export class DirectiveDirective {
  @Input('appDirective') color: string='';
  fontsize:string='';

  constructor(private _element: ElementRef,private renderer:Renderer2) { }
    

    ngOnInit() {
      this.renderer.setStyle(this._element.nativeElement, 'color', this.color);
  }
}
