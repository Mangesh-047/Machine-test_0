import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }
  elem: any;

  ngOnInit(): void {
    this.elem = document.documentElement;
  }

  flag: boolean = true

  onFullscreen() {
    if (this.elem.requestFullscreen && this.flag) {
      this.elem.requestFullscreen();
      this.flag = false
    } else if (this.elem.mozRequestFullScreen && this.flag) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
      this.flag = false
    } else if (this.elem.webkitRequestFullscreen && this.flag) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
      this.flag = false
    } else if (this.elem.msRequestFullscreen && this.flag) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
      this.flag = false
    }
  }

  closeFullscreen() {
    if (this.document.mozCancelFullScreen && !this.flag) {
      /* Firefox */
      this.document.mozCancelFullScreen();
      this.flag = true

    } else if (this.document.webkitExitFullscreen && !this.flag) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
      this.flag = true

    } else if (this.document.msExitFullscreen && !this.flag) {
      /* IE/Edge */
      this.document.msExitFullscreen();
      this.flag = true

    }
  }

}
