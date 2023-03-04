import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskComponent } from 'src/app/shared/dialog/task/task.component';
import { AppState } from 'src/app/store/app.state';
import {
  getIsAuthenticated,
  getUserName,
} from '../../auth/state/auth.selector';
import { getCurrentOrgName } from '../state/workspace.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuthenticated!: Observable<boolean>;
  constructor(private store: Store<AppState>,public dialog:MatDialog) {}
  userName!: Observable<string | undefined>;
  orgName!: Observable<string | undefined>;
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(getIsAuthenticated);
    this.userName = this.store.select(getUserName);
    this.orgName = this.store.select(getCurrentOrgName);
  }
  openDialog(){
    this.dialog.open(TaskComponent);
  }
}
