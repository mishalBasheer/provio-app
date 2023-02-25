import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  BoardComponent,
  BoardDialogData,
} from 'src/app/shared/dialog/board/board.component';
import { ProjectState } from '../projects/state/projects.state';
import { getProjectById } from '../state/workspace.selector';

@Component({
  selector: 'app-projectbyid',
  templateUrl: './projectbyid.component.html',
  styleUrls: ['./projectbyid.component.css'],
})
export class ProjectbyidComponent implements OnInit, OnDestroy {
  projectid!: string;
  projectidSub!: Subscription;
  project$!: Observable<ProjectState | undefined>;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.projectidSub = this.route.params.subscribe((params) => {
      this.projectid = params['id'];
    });
    this.project$ = this.store.select(getProjectById(this.projectid));
  }
  openDialog() {
    this.dialog.open<BoardComponent, BoardDialogData>(BoardComponent, {
      data: { project: this.projectid },
    });
  }
  ngOnDestroy(): void {
    if (this.projectidSub) {
      this.projectidSub.unsubscribe();
    }
  }
}
