import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsAuthenticated } from '../components/auth/state/auth.selector';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.select(getIsAuthenticated).subscribe((data) => {
      if (!data) {
        this.router.navigate(['/auth']);
      }
    });
    return true;
  }
}
