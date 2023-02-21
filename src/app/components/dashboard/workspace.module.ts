import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { NormalButtonComponent } from '../reusable/buttons/normal-button/normal-button.component';
import { TaskCardGroupComponent } from '../reusable/cards/task-card-group/task-card-group.component';
import { BoardsComponent } from './boards/boards.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrgsComponent } from './orgs/orgs.component';
import { OrgEffects } from './orgs/state/orgs.effects';
import { orgsReducer } from './orgs/state/orgs.reducer';
import { ORG_STATE_NAME } from './orgs/state/orgs.selector';
import { ProjectsComponent } from './projects/projects.component';
import { SidenavComponent } from './sidenav/sidenav.component';
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
    TasksComponent,
    UsersComponent,
    NormalButtonComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forFeature(WORKSPACE_STATE_NAME, WorkspaceReducer),
    StoreModule.forFeature(ORG_STATE_NAME, orgsReducer),
    EffectsModule.forFeature([OrgEffects]),
    RouterModule.forChild(routes),
  ],
})
export class WorkspaceModule {}
