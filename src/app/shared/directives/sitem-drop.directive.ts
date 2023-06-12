import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSitemDrop]'
})
export class SitemDropDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    // console.log(eve.target);
    let ele = <HTMLElement>eve.target

    ele.closest('div')?.classList.toggle('show')
  }
}
