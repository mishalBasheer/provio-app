import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      org: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  userSignUp() {
    if (this.signUpForm.invalid) {
      return;
    }
    const { fname, lname, email, password, org } = this.signUpForm.value;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(signupStart({ fname, lname, email, password, org }));
  }
}
