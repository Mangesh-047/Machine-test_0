import { AbstractControl, ValidationErrors } from "@angular/forms";


export class NospaceBar {

    static noSpace(control: AbstractControl): null | ValidationErrors {
        let val = control.value as string;


        if (!val) {
            return null
        }

        if (val.includes(' ')) {
            return {
                noSpaceError: 'space not allowed'
            }
        } else {
            return null
        }
    }
}