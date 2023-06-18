import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email_validators';
import { CustomRegex } from '../../const/validators_regexp';

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

  userForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createUserForm()
  }


  createUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      gender: new FormControl('', [Validators.required]),
    })
  }

  get f() {
    return this.userForm.controls
  }

  changeInputType() {
    this.inputType === 'password' ? this.inputType = 'text' : this.inputType = 'password'
    this.icon2 === 'visibility' ? this.icon2 = 'visibility_off' : this.icon2 = 'visibility'
  }
  changeInputType2() {
    this.inputType2 === 'password' ? this.inputType2 = 'text' : this.inputType2 = 'password'
    this.icon === 'visibility' ? this.icon = 'visibility_off' : this.icon = 'visibility'
  }

  onFormSubmit() {
    console.log(this.userForm);

  }
}
