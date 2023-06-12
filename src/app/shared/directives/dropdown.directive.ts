import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  onclick(eve: Event) {
    // console.log(eve.firstChild as HTMLElement);

    // console.log(eve.target);

    let ele = <HTMLElement>eve.target





    ele.nextElementSibling?.classList.toggle('show')


  }
}
