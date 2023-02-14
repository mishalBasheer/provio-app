import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { OrgsComponent } from './components/dashboard/orgs/orgs.component';
import { TasksComponent } from './components/dashboard/tasks/tasks.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { NormalButtonComponent } from './components/reusable/buttons/normal-button/normal-button.component';
import { TaskCardGroupComponent } from './components/reusable/cards/task-card-group/task-card-group.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { NavToSigninComponent } from './components/auth/nav-to-signin/nav-to-signin.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './components/dashboard/sidenav/sidenav.component';
import { BoardsComponent } from './components/dashboard/boards/boards.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomeComponent,
    OrgsComponent,
    TasksComponent,
    UsersComponent,
    ProjectsComponent,
    NormalButtonComponent,
    TaskCardGroupComponent,
    NavbarComponent,
    SidenavComponent,
    BoardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
