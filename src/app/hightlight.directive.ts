import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el: ElementRef) { }

  get_rand_color()
  {
      var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
      while(color.length < 6) {
          color = "0" + color;
      }
      return "#" + color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.get_rand_color());
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
