import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { NormalButtonComponent } from '../reusable/buttons/normal-button/normal-button.component';
import { TaskCardGroupComponent } from '../reusable/cards/task-card-group/task-card-group.component';
import { BoardsComponent } from './boards/boards.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrgsComponent } from './orgs/orgs.component';
import { ProjectsComponent } from './projects/projects.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
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
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
})
export class WorkspaceModule {}
