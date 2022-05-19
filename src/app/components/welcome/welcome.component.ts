import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   recivedName:string='';
   userFlag:boolean;
  constructor(private authServc:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.authServc.getLogStatus().subscribe(state=>this.userFlag=state)
    this.authServc.getUserName().subscribe(name=>{
      this.recivedName=name;
    })
  }
  logOut(){
    this.authServc.logOut();
    this.userFlag=this.authServc.IsUserSignup;
    this.router.navigate(['/Singnup'])
    }
}
