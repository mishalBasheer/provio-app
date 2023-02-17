import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { autoLogout } from '../../auth/state/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private store: Store<AppState>) {}
  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
