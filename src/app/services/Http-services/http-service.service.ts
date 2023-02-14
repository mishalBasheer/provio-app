import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSignup } from 'src/app/modals/auth.modal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  constructor(private http: HttpClient) {}

  createUser(userData: UserSignup) {
    this.http
      .post(environment.apiUrl + 'users/signup', userData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
