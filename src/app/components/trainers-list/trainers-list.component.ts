import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import firebase from "firebase/app";

import { User } from '../../shared/services/user';
import {UsersUtilsService } from '../../shared/services/users-utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trainers-list',
  templateUrl: './trainers-list.component.html',
  styleUrls: ['./trainers-list.component.css']
})
export class TrainersListComponent implements OnInit {

  sub : Subscription
  trainerData : User[] = [];

  constructor( public authService: AuthService, public router: Router, private utils : UsersUtilsService
  ) { }

  ngOnInit(): void {
    this.allTrainers()
     }

   allTrainers()
  {
    firebase.firestore().collection('users').get().then(data =>
      {
        let tempUsers = [];

        data.forEach(user =>
          {
            if (user.data().isTrainer == true)
            {
              let uidVal = user.data().uid;
              let emailVal = user.data().email;
              let displayNameVal = user.data().displayName;
              let photoURLVal = user.data().photoURL;
              let emailVerifiedVal = user.data().emailVerified;
              let isTrainerVal = user.data().isTrainer;
              let aboutVal = user.data().about;


              let obj = {uid : uidVal, email : emailVal ,displayName : displayNameVal , photoURL : photoURLVal , emailVerified : emailVerifiedVal, isTrainer : isTrainerVal , about : aboutVal}

              tempUsers.push(obj)
            }

          })
          this.trainerData = tempUsers;
        })
      }

}
