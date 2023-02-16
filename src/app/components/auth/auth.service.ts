import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/modals/auth.modal';
import { User } from 'src/app/modals/user.modal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  //   createUser(email: string, password: string) {
  //     return this.http.post(
  //       environment.apiUrl + 'users/signup',
  //       { email, password }
  //     );
  //   }
  login(
    email: string,
    password: string
  ): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      environment.apiUrl + 'user/signin',
      { email, password }
    );
  }
  formatUser(data: AuthResponseData) {
    const expiresIn = +data.expiresIn * 1000;
    const user = new User(
      data.user.name,
      data.token,
      data.user.userid,
      expiresIn
    );
    return user;
  }
}
