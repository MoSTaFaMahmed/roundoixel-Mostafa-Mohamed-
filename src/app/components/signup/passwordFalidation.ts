import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const passwordValidatorMatchFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password")
  const validatePasswoed = control.get("validatePasswoed")
  console.log()
  return password && validatePasswoed && password.value != validatePasswoed.value ? { dontmatch: true } : null
}
