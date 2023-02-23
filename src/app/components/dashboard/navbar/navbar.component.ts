import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { autoLogout } from '../../auth/state/auth.action';
import { getUserName } from '../../auth/state/auth.selector';
import { getCurrentOrgName } from '../state/workspace.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  orgName!:Observable<string|undefined>;
  userName!:Observable<string|undefined>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
      this.orgName= this.store.select(getCurrentOrgName);
      this.userName=this.store.select(getUserName);
  }
  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }
}
