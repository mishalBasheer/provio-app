import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AuthResponseData,
  SignUpData,
  SignUpResponseData,
} from 'src/app/models/auth.model';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';
import { autoLogout } from '../components/auth/state/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeoutInterval!: ReturnType<typeof setTimeout>;
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      environment.apiUrl + 'user/signin',
      { email, password }
    );
  }
  signup(data: SignUpData): Observable<SignUpResponseData> {
    return this.http.post<SignUpResponseData>(
      environment.apiUrl + 'user/signup',
      data
    );
  }
  logout() {
    localStorage.removeItem('user');
    if (this.timeoutInterval) {
      clearTimeout(this.timeoutInterval);
    }
  }
  formatUser(data: AuthResponseData) {
    const expirationDate = data.expirationDate;
    const user = new User(
      data.user.name,
      data.token,
      data.user.userid,
      expirationDate
    );
    return user;
  }
  setUserInLocal(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    this.runTimeOutInterval(user);
  }
  runTimeOutInterval(user: User) {
    const expirationDate = new Date(user.getExpirationTime()).getTime();
    const todaysDate = new Date().getTime();
    const expiresIn: number = expirationDate - todaysDate;
    this.timeoutInterval = setTimeout(() => {
      //logout functioinallity or refresh token
      this.store.dispatch(autoLogout());
    }, expiresIn);
  }
  getUserFromLocal() {
    const userDataString = localStorage.getItem('user');
    if (!userDataString) {
      return null;
    }
    const userData = JSON.parse(userDataString);
    const user = new User(
      userData.name,
      userData.token,
      userData.userid,
      userData.expirationDate
    );
    this.runTimeOutInterval(user);
    return user;
  }
}
