import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
