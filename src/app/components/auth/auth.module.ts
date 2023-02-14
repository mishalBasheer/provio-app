import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavToSigninComponent } from './nav-to-signin/nav-to-signin.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NavToSigninComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    NavToSigninComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
