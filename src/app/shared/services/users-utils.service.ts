import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import firebase from "firebase/app";
import "firebase/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class UsersUtilsService {
  userData: any; // Save logged in user data
  usersData: any[];

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }



  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      age: user.age,
      city: user.city,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      isTrainer: user.isTrainer,
      about :user.about
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  GetAllTrainersData(){

    return firebase.firestore().collection('users').get().then(data =>
      {
        let tempUsers = [];

        data.forEach(user =>
          {
            if (user.data().isTrainer == true)
            {
              let uidVal = user.data().uid;
              let emailVal = user.data().email;
              let displayNameVal = user.data().displayName;
              let ageVal = user.data().age;
              let cityVal = user.data().city;
              let photoURLVal = user.data().photoURL;
              let emailVerifiedVal = user.data().emailVerified;
              let isTrainerVal = user.data().isTrainer;
              let aboutVal = user.data().about;


              let obj = {uid : uidVal, email : emailVal ,displayName : displayNameVal ,age : ageVal , city : cityVal , photoURL : photoURLVal , emailVerified : emailVerifiedVal, isTrainer : isTrainerVal , about : aboutVal}

              tempUsers.push(obj)
            }

          })

      })


  }
  GetUserData(userid: string){

    return firebase.firestore().collection('users').get().then(data =>
      {
        let tempUsers = [];

        data.forEach(user =>
          {
            if (user.data().uid == userid)
            {
              let uidVal = user.data().uid;
              let emailVal = user.data().email;
              let displayNameVal = user.data().displayName;
              let ageVal = user.data().age;
              let cityVal = user.data().city;
              let photoURLVal = user.data().photoURL;
              let emailVerifiedVal = user.data().emailVerified;
              let isTrainerVal = user.data().isTrainer;
              let aboutVal = user.data().about;


              let obj = {uid : uidVal, email : emailVal ,age : ageVal , city : cityVal ,displayName : displayNameVal , photoURL : photoURLVal , emailVerified : emailVerifiedVal, isTrainer : isTrainerVal , about : aboutVal}

              tempUsers.push(obj)
            }

          })

      })


  }



}
