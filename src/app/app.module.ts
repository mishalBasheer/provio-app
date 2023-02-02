import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavToSigninComponent } from './auth/nav-to-signin/nav-to-signin.component';
import { HomeComponent } from './dashboard/home/home.component';
import { UsersComponent } from './dashboard/users/users.component';
import { OrgsComponent } from './dashboard/orgs/orgs.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { TaskGroupCardComponent } from './components/cards/task-group-card/task-group-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    SignupComponent,
    NavToSigninComponent,
    HomeComponent,
    UsersComponent,
    OrgsComponent,
    ProjectsComponent,
    TasksComponent,
    ButtonComponent,
    TaskGroupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
