import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { AuthGuard } from "../app/shared/guard/auth.guard";
import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';
import { TrainersListComponent } from './components/trainers-list/trainers-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TrainerPageComponent  } from './components/trainer-page/trainer-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard],
   children: [
    { path: 'trainers-list' , component: TrainersListComponent , outlet: "mainOutlet",canActivate: [AuthGuard] }
    ,{ path: 'trainer-page/:uid' , component: TrainerPageComponent , outlet: "mainOutlet",canActivate: [AuthGuard] }
    ,{ path: '' , component: UserProfileComponent , outlet: "mainOutlet",canActivate: [AuthGuard] }
    ,{ path: 'user-profile' , component: UserProfileComponent , outlet: "mainOutlet",canActivate: [AuthGuard] }
   ]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
