import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardComponent, BoardDialogData } from 'src/app/shared/dialog/board/board.component';
import { AppState } from 'src/app/store/app.state';
import { ProjectState } from '../projects/state/projects.state';
import { getOrgProjects } from '../state/workspace.selector';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  projects!: Observable<ProjectState[] | undefined>;
  constructor(private store: Store<AppState>,public dialog:MatDialog) {}
  ngOnInit(): void {
    this.projects = this.store.select(getOrgProjects);
  }
  openDialog(id:string){
    this.dialog.open<BoardComponent,BoardDialogData>(BoardComponent,{
      data:{project:id},
    })
  }
}
