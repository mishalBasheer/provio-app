import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { requestOrgData } from '../orgs/state/orgs.action';
import { requestProjectData } from '../projects/state/projects.action';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(requestOrgData());
    this.store.dispatch(requestProjectData());
  }
}
