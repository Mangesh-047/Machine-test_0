import { AbstractControl, ValidationErrors } from "@angular/forms";



export class EmailValidator {


    static isEmailValid(control: AbstractControl): null | ValidationErrors {
        let val = control.value as string

        if (val) {

            let emailregexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\\.[a-zA-Z]{2,100}$/

            let isValid = emailregexp.test(val)

            return isValid ? null : { invalidEmail: 'please Enter valid Email Id' }
        } else {
            return null
        }
    }
}