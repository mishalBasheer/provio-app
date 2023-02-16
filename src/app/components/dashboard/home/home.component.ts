import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsAuthenticated } from '../../auth/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuthenticated!: Observable<boolean>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(getIsAuthenticated);
  }
}
