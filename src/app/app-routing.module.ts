import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavToSigninComponent } from './auth/nav-to-signin/nav-to-signin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: NavToSigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
