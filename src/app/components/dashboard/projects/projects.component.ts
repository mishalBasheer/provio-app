import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getOrgProjects } from '../state/workspace.selector';
import { ProjectState } from './state/projects.state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects!: Observable<ProjectState[] | undefined>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.projects = this.store.select(getOrgProjects);
  }
}
