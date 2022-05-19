import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private signUpFlag: BehaviorSubject<boolean>
  private userName: BehaviorSubject<string>

  constructor() {
    this.signUpFlag = new BehaviorSubject<boolean>(this.IsUserSignup)
    this.userName = new BehaviorSubject<string>("")

  }

  SignUp(userName: string) {
    let userToken = "01207284793"
    localStorage.setItem("Token", userToken)
    this.signUpFlag.next(true)
    this.userName.next(userName)
    console.log(this.userName);
  }

  get IsUserSignup(): boolean {
    return localStorage.getItem("Token") ? true : false
  }

  getUserName(): Observable<string> {
    return this.userName.asObservable()
  }

  logOut() {
    localStorage.removeItem("Token")
    this.signUpFlag.next(false)
    this.userName.next("")
  }

  getLogStatus(): Observable<boolean> {
    return this.signUpFlag.asObservable()
  }
}
