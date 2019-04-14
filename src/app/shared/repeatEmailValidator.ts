import { FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
export function repeatEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent) {
      const emails = (control as FormArray).value as string[];
      const emailsSet = new Set(emails);
      if (emails.length !== emailsSet.size) {
        return { repeatEmail: true };
      }
    }
    return null;
  };
}
