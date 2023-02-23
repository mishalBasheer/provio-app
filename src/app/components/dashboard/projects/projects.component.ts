import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ProjectComponent } from 'src/app/shared/dialog/project/project.component';
import { AppState } from 'src/app/store/app.state';
import { getOrgId, getOrgProjects } from '../state/workspace.selector';
import { ProjectState } from './state/projects.state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit,OnDestroy {
  projects$!: Observable<ProjectState[] | undefined>;
  orgId$!: Observable<string | undefined>;
  orgSub!: Subscription;
  orgId!: string | undefined;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}
  ngOnInit(): void {
    this.projects$ = this.store.select(getOrgProjects);
    this.orgSub = this.store.select(getOrgId).subscribe((data) => {
      this.orgId = data;
    });
  }
  openDialog() {
    this.dialog.open(ProjectComponent);
  }
  ngOnDestroy(): void {
      if(this.orgSub){
        this.orgSub.unsubscribe();
      }
  }
}
