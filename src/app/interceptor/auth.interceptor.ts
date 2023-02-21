import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const user = localStorage.getItem('user');
    if (!user) {
      return next.handle(request);
    }
    const data = JSON.parse(user);
    const token = data.token;

    if (!token) return next.handle(request);
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });

    return next.handle(authRequest);
  }
}
