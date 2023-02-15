import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'workspace',
    loadChildren: () =>
      import(
        './components/dashboard/workspace.module'
      ).then((m) => m.WorkspaceModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
