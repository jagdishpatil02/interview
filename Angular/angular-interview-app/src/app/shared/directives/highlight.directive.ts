import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighLightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }
}
