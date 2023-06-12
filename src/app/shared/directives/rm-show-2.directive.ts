import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRmShow2]'
})
export class RmShow2Directive {

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(eve: Event) {

    let ele = eve.target as HTMLElement
    // console.log(ele.closest('li')?.previousElementSibling?.children[1]);
    // ele.closest('li')?.previousElementSibling?.classList.remove('show')

    ele.closest('li')?.previousElementSibling?.children[1].classList.remove('show')
  }

}
