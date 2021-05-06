import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from "firebase/app";
import { Subscription } from 'rxjs';
import { UsersUtilsService} from '../../shared/services/users-utils.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

  @Input()

  trainerData : any = {};
  userid : string ;
  sub1 : Subscription;


  constructor( private ar :ActivatedRoute, private router : Router, private utils : UsersUtilsService) { }

  ngOnInit(): void {

    this.sub1 = this.ar.params.subscribe(data =>
      {
        this.userid = data['uid'];
        this.getTrainer().then(data => this.trainerData= data);

      })
  }

   getTrainer()
  {
    return new Promise( (resolve, reject) =>
     firebase.firestore().collection('users').doc(this.userid).get()
    .then(function(doc) {
      if (doc.exists)
      {
        resolve(doc.data())
        //console.log( doc.data());
      }
      else
      {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    })
    )

  }

  ngOnDestroy()
  {
    this.sub1.unsubscribe();
  }

}
