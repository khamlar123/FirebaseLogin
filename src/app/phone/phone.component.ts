import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier : any;
  config ={
    apiKey: "AIzaSyBOeY-wFgYB0Nt_dNEvqjr1ZfLKflxa_sk",
    authDomain: "phone-login-service.firebaseapp.com",
    projectId: "phone-login-service",
    storageBucket: "phone-login-service.appspot.com",
    messagingSenderId: "484249561648",
    appId: "1:484249561648:web:3c8766a1988ab82f485bf5"
  }

  swMode = 0;

  loginModal ={
    email: '',
    password: '',
  }

  constructor(private router: Router) {}

  ngOnInit() {
    firebase.initializeApp(this.config);
  }

  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {sizr: 'invisible'});
    firebase.auth().signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier).then(
      (confirmtionResult) => {
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

  loginBymaile():void{
    firebase.auth().signInWithEmailAndPassword(this.loginModal.email, this.loginModal.password).then((res) => {
        localStorage.setItem('user_data', JSON.stringify(res));
        this.router.navigate(['/dashboard']);
    })
  }

}
