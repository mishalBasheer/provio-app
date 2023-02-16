import { Injectable, Injector } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  mergeMap,
  map,
  catchError,
  tap,
} from 'rxjs/operators';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from '../auth.service';
import { loginStart, loginSuccess } from './auth.action';
import { Store } from '@ngrx/store';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.action';
import { of } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private injector: Injector,
    private store: Store<AppState>,
    private router: Router
  ) {}
  authService = this.injector.get(AuthService);
  sharedService = this.injector.get(SharedService);
  //login effect
  login$ = createEffect(() => {
    return this.action$.pipe(
      //when login action is fired
      ofType(loginStart),
      mergeMap((action) => {
        //calling auth service
        return this.authService
          .login(action.email, action.password)
          .pipe(
            map((data) => {
              //loading spinner set false
              this.store.dispatch(
                setLoadingSpinner({ status: false })
              );
              this.store.dispatch(
                setErrorMessage({ message: '' })
              );
              //on user login fomating the user
              const user =
                this.authService.formatUser(data);
              //funciton call to save the user on the state
              return loginSuccess({ user });
            }),
            catchError((errResponse) => {
              this.store.dispatch(
                setLoadingSpinner({ status: false })
              );
              const errorMsg =
                this.sharedService.getErroMsg(
                  errResponse.error.message
                );
              return of(
                setErrorMessage({ message: errorMsg })
              );
            })
          );
      })
    );
  });
  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.router.navigate(['/workspace']);
        })
      );
    },
    {
      dispatch: false,
    }
  );
}
