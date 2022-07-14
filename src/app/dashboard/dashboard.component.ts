import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: any;
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    if(localStorage.getItem('user_data') === null || undefined){
      this.router.navigate(['/phone']);
    }

    this.userData = JSON.parse(localStorage.getItem('user_data')!);
  }

  logout():void{
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/phone']);
      localStorage.clear();
    })
  }

}
