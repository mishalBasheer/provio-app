import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { autoLogin } from './components/auth/state/auth.action';
import { AppState } from './store/app.state';
import { getErrorMsg, getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoading!: Observable<boolean>;
  showErrorMsg!: Observable<string>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
    this.showErrorMsg = this.store.select(getErrorMsg);
    this.store.dispatch(autoLogin());
  }
}
