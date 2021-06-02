import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TrainersListComponent } from './components/trainers-list/trainers-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from "./shared/services/auth.service";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    TrainersListComponent,
    UserProfileComponent,
    TrainerPageComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
