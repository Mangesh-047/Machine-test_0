import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFullscreen]'
})
export class FullscreenDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {

    let ele = eve.target as HTMLElement
    // console.log(ele.closest('li')?.previousElementSibling?.previousElementSibling?.childNodes);

    let drop = <HTMLElement>ele.closest('li')?.previousElementSibling?.previousElementSibling?.childNodes[1]
    drop.classList.remove('show')
  }
}
