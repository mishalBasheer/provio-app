import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavToSigninComponent } from './components/auth/nav-to-signin/nav-to-signin.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'login',component:NavToSigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
