import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnHoverEffect]'
})
export class BtnHoverEffectDirective {

  @Input() defaultBackground: string = 'linear-gradient(0deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBackground: string = 'rgb(215, 72, 92)';

  constructor(private el: ElementRef, private rend: Renderer2) {
    this.setBackground(this.defaultBackground);
  }

  // наведение мыши
  @HostListener('mouseenter') onMouseEnter(): void {
      this.setBackground(this.hoverBackground);
  }

  // выход мыши
  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBackground(this.defaultBackground);
  }

  private setBackground(color: string): void {
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }
}
