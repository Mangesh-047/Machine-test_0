import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _authService: AuthService
  ) { }
  elem: any;

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  flag: boolean = true

  onFullscreen() {
    if (this.elem.requestFullscreen && this.flag) {
      this.elem.requestFullscreen();
      this.flag = !this.flag
    } else if (this.elem.mozRequestFullScreen && this.flag) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
      this.flag = !this.flag
    } else if (this.elem.webkitRequestFullscreen && this.flag) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
      this.flag = !this.flag
    } else if (this.elem.msRequestFullscreen && this.flag) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
      this.flag = !this.flag
    }
  }

  closeFullscreen() {
    if (this.document.mozCancelFullScreen && !this.flag) {
      /* Firefox */
      this.document.mozCancelFullScreen();
      this.flag = !this.flag

    } else if (this.document.webkitExitFullscreen && !this.flag) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
      this.flag = !this.flag

    } else if (this.document.msExitFullscreen && !this.flag) {
      /* IE/Edge */
      this.document.msExitFullscreen();
      this.flag = !this.flag

    }
  }


  onLogOut(eve: Event) {
    this._authService.logOutToApp()
    let ele = eve.target as HTMLFormElement
    // console.log(ele.closest('div'));
    ele.closest('div')?.classList.remove('show')
    // console.log(ele.parentElement?.previousElementSibling?.previousElementSibling?.previousElementSibling?.childNodes[1]);

    let dropdown = <HTMLElement>ele.parentElement?.previousElementSibling?.previousElementSibling?.previousElementSibling?.childNodes[1]

    dropdown.classList.remove('show')
  }
}
