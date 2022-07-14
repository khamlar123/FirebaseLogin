import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier : any;

  constructor(private router: Router) { }

  ngOnInit() {}

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier
    ('sign-in-button', {sizr: 'invisible'})


    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier).then(
      (confirmtionResult) => {
        console.log(confirmtionResult);

        localStorage.setItem('verificationId', JSON.stringify(confirmtionResult.verificationId))
        this.router.navigate(['/code']);
      }
    ).catch((err) => {
      alert(err.message);
      setTimeout(() => {
        window.location.reload()
      },5000)
    })
  }

}
