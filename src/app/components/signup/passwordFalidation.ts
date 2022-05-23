import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export const passwordValidatorMatchFn: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//GET password From The Form
  const password = control.get("password")
  //GET password From The Form
  const validatePasswoed = control.get("validatePasswoed")
  console.log()
  //Check If Passowrd==Confirm Password
  return password && validatePasswoed && password.value != validatePasswoed.value ? { dontmatch: true } : null
}
