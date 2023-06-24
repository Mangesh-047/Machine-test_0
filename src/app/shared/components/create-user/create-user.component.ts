import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email_validators';
import { CustomRegex } from '../../const/validators_regexp';
import { NospaceBar } from '../../validators/noSpace_validators';

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
    this.f['password']
      .valueChanges
      .subscribe((res: string) => {
        // console.log(res);
        if (this.f['password'].valid) {
          this.f['confirmPassword'].enable()
        } else {
          this.f['confirmPassword'].disable()
        }
      })
  }


  createUserForm() {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, NospaceBar.noSpace]),
      lastName: new FormControl(null, [Validators.required, NospaceBar.noSpace]),
      dob: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      gender: new FormControl('', [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.password)]),
      confirmPassword: new FormControl({ value: null, disabled: true }, [Validators.required]),
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

    if (this.userForm.valid && this.f['password'].value === this.f['confirmPassword'].value) {

      console.log(this.userForm);
      console.log(this.userForm.value);
    }

  }
}
