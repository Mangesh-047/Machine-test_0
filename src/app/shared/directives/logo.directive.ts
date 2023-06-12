import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogo]'
})
export class LogoDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {
    // console.log(eve.target);
    let ele = <HTMLElement>eve.target

    // console.log(ele.nextElementSibling?.nextElementSibling?.childNodes[0].childNodes[1].childNodes[1]);
    let div = ele.nextElementSibling?.nextElementSibling?.childNodes[0].childNodes[1].childNodes[1] as HTMLElement
    div.classList.remove('show')
  }
}
