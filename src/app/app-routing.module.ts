import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavToSigninComponent } from './components/auth/nav-to-signin/nav-to-signin.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { OrgsComponent } from './components/dashboard/orgs/orgs.component';
import { ProjectsComponent } from './components/dashboard/projects/projects.component';
import { TasksComponent } from './components/dashboard/tasks/tasks.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'login',component:NavToSigninComponent},
  {path:'dashboard',component:HomeComponent},
  {path:'orgs',component:OrgsComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'tasks',component:TasksComponent},
  {path:'users',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
