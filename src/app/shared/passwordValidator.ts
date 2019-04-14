import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
export const passwordValidator = Validators.compose([
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(16)
]);
export function compareEqual(fieldName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.parent && control.parent.get(fieldName).value !== control.value) {
      return { compareEqual: true };
    }
    return null;
  };
}
