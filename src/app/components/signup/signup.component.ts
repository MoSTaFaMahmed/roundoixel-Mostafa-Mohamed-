import { Icountrys } from './../../ViewModel/icountrys';
import { MyApisService } from './../../services/my-apis.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { passwordValidatorMatchFn } from './passwordFalidation';
import { IPadresss } from 'src/app/ViewModel/ipadresss';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  countrys: Icountrys[];
  Ip: IPadresss;
  nationality: string;
  form!: FormGroup;
  fetched: boolean = false;
  constructor(
    private myServes: MyApisService,
    private router: Router,
    private auth: AuthServiceService
  ) {}

  ngOnInit(): void {

// get All getAllCountries Data

    this.myServes.getAllCountries().subscribe((res) => {
      this.countrys = res;
      console.log(this.countrys);
    });

    // Get Counter Name By using IP address
    this.myServes.getUserIp().pipe(
      mergeMap((res) => this.myServes.getUserNationality(res.ip))
    ).subscribe((result) => {
      this.nationality = result;
      console.log(this.nationality);
      console.log(result);
      this.fetched = true;
    });





    //Reactiv Form

    this.form = new FormGroup(
      {
        // Validte Name (Requird and accept only CHAR and Spaces)
        name: new FormControl('', [
          Validators.required,
          Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$'
          ),
          this.emailValitor(),
        ]),

        password: new FormControl('', [
          Validators.required,
          Validators.pattern('[A-Za-z/0-9]{8,}'),
        ]),
        validatePasswoed: new FormControl('', [Validators.required]),
      },
       //Match password and confirm password
      { validators: [passwordValidatorMatchFn] }
    );
  }

                  //Email Validator Function

  emailValitor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let emailVal: string = control.value;
      let validtationError = { EmailNotValid: { value: emailVal } };
      if (emailVal.length == 0 && control.untouched) {
        return null;
      }
      return emailVal.includes('@') ? null : validtationError;
    };
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

            //Submit Button

  register() {
    console.log(this.name);
    console.log(this.form);
    this.auth.SignUp(this.name.value);
    this.router.navigate(['/Welcome']);
  }

           //Disable Arabic Language

  disableArabic(event: any){
    console.log(event.target.value);
    let ew=event.which;
    if(ew == 32)
    return true;
    if(48 <= ew && ew <= 57)
    return true;
    if(65 <= ew && ew <= 90)
    return true;
    if(97 <= ew && ew <= 122)
    return true;
    return false;
 }
}
