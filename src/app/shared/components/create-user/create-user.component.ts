import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {


  inputType: string = 'password'
  inputType2: string = 'password'

  icon: string = 'remove_red_eye'
  icon2: string = 'remove_red_eye'

  constructor() { }

  ngOnInit(): void {
  }

  changeInputType() {

    this.inputType === 'password' ? this.inputType = 'text' : this.inputType = 'password'
    this.icon2 === 'remove_red_eye' ? this.icon2 = 'remove_eye' : this.icon2 = 'remove_red_eye'


  }


  changeInputType2() {

    this.inputType2 === 'password' ? this.inputType2 = 'text' : this.inputType2 = 'password'

    this.icon === 'remove_red_eye' ? this.icon = 'remove_eye' : this.icon = 'remove_red_eye'

  }

}
