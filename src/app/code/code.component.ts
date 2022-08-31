import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  otp: string = '';
  verify: any;
  phone = '';
  config = {
    allowNumberOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles:{
      width: '50px',
      height: '50px',
    }
  }

  constructor(
    private router: Router,
    ) { }


  ngOnInit(): void {
    if(localStorage.getItem('verificationId') === null){
      this.router.navigate(['/phone']);
    }

    if( localStorage.getItem('user_data') !== null){
      this.router.navigate(['/dashboard']);
    }
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}')

  }

  onOtpChange(otpCode: any){
    this.otp = otpCode;
    alert(1);
  }

  handleClick(){
    var credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, this.otp);

    firebase.auth().signInWithCredential(credentials).then((res) => {

      localStorage.setItem('user_data', JSON.stringify(res))
      this.router.navigate(['/dashboard']);

    }).catch((err) => {
      alert(err.message)
    })

  }







}
