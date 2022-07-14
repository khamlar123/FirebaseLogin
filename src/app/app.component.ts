import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './service/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'phone_service';
  isSignedIn = false;


  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {
      if(localStorage.getItem('user') !== null){
        this.isSignedIn = true;
      }else{
        this.isSignedIn = false;
      }
  }

 async onSignup(email:string, password: string){
    this.firebaseService.signup(email, password);
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn = true;
 }

 async onSignin(email:string, password: string){
  this.firebaseService.signin(email, password);
  if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true;
}

handleLogout(){
  this.isSignedIn = false;
  localStorage.clear();

}


}
