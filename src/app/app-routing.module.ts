import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponentComponent } from './components/notfound-component/notfound-component.component';
import { AuthgurdGuardGuard } from './Gurd/authgurd-guard.guard';

const routes:Routes=[
  {path:'',redirectTo:'/Singnup',pathMatch:'full'},
  {path:'Singnup',component:SignupComponent},
  {path:'Welcome',component:WelcomeComponent,canActivate:[AuthgurdGuardGuard]},
   {path:'**',component:NotfoundComponentComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
