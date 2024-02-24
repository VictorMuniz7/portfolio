import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverSrc]',
  standalone: true
})
export class HoverSrcDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const imgElement = this.elementRef.nativeElement as HTMLImageElement;
    const src = imgElement.src;
    if (src.includes('.png')) {
      imgElement.src = src.replace('.png', '-gif.gif');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    const imgElement = this.elementRef.nativeElement as HTMLImageElement;
    const src = imgElement.src;
    if (src.includes('-gif.gif')) {
      imgElement.src = src.replace('-gif.gif', '.png');
    }
  }

}
