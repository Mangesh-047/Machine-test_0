import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {


  inputType: string = 'password'
  inputType2: string = 'password'

  icon: string = 'visibility'
  icon2: string = 'visibility'

  constructor() { }

  ngOnInit(): void {
  }

  changeInputType() {

    this.inputType === 'password' ? this.inputType = 'text' : this.inputType = 'password'
    this.icon2 === 'visibility' ? this.icon2 = 'visibility_off' : this.icon2 = 'visibility'


  }


  changeInputType2() {

    this.inputType2 === 'password' ? this.inputType2 = 'text' : this.inputType2 = 'password'

    this.icon === 'visibility' ? this.icon = 'visibility_off' : this.icon = 'visibility'

  }

}
