import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TaskComponent } from 'src/app/shared/dialog/task/task.component';
import { getIsAuthenticated } from '../../auth/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isAuthenticated!: Observable<boolean>;
  constructor(private store: Store,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(getIsAuthenticated);
  }
  openDialog() {
    this.dialog.open(TaskComponent);
  }
}
