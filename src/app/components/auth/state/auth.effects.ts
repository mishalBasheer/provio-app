import { Injectable, Injector } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { loginStart, loginSuccess } from './auth.action';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    // private authService: AuthService,
    private injector:Injector,
  ) {}
  authService=this.injector.get(AuthService)
  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      mergeMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(
            map((data) => {
              console.log(data);
              const user =
                this.authService.formatUser(data);
              return loginSuccess({ user });
            })
          );
      })
    );
  });
}
