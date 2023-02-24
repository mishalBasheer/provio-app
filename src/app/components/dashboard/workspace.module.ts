import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { BoardComponent } from 'src/app/shared/dialog/board/board.component';
import { ProjectComponent } from 'src/app/shared/dialog/project/project.component';
import { TaskComponent } from 'src/app/shared/dialog/task/task.component';
import { NormalButtonComponent } from '../shared/buttons/normal-button/normal-button.component';
import { BoardCardComponent } from '../shared/cards/board-card/board-card.component';
import { ProjectCardComponent } from '../shared/cards/project-card/project-card.component';
import { TaskCardGroupComponent } from '../shared/cards/task-card-group/task-card-group.component';
import { BoardsComponent } from './boards/boards.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrgsComponent } from './orgs/orgs.component';
import { OrgEffects } from './orgs/state/orgs.effects';
import { orgsReducer } from './orgs/state/orgs.reducer';
import { ORG_STATE_NAME } from './orgs/state/orgs.selector';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectEffects } from './projects/state/projects.effects';
import { ProjectsReducer } from './projects/state/projects.reducer';
import { PROJECT_STATE_NAME } from './projects/state/projects.selector';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WorkspaceEffects } from './state/workspace.effects';
import { WorkspaceReducer } from './state/workspace.reducer';
import { WORKSPACE_STATE_NAME } from './state/workspace.selector';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'boards', component: BoardsComponent },
      { path: 'orgs', component: OrgsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];

@NgModule({
  declarations: [
    BoardsComponent,
    HomeComponent,
    OrgsComponent,
    ProjectsComponent,
    SidenavComponent,
    TaskCardGroupComponent,
    NormalButtonComponent,
    TasksComponent,
    UsersComponent,
    NavbarComponent,
    ProjectCardComponent,
    BoardCardComponent,
    TaskComponent,
    ProjectComponent,
    BoardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forFeature(WORKSPACE_STATE_NAME, WorkspaceReducer),
    StoreModule.forFeature(ORG_STATE_NAME, orgsReducer),
    StoreModule.forFeature(PROJECT_STATE_NAME, ProjectsReducer),
    EffectsModule.forFeature([OrgEffects, ProjectEffects, WorkspaceEffects]),
    RouterModule.forChild(routes),
  ],
})
export class WorkspaceModule {}
