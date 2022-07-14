import { DashboardComponent } from './dashboard/dashboard.component';
import { CodeComponent } from './code/code.component';
import { PhoneComponent } from './phone/phone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'phone', pathMatch:'full'},
  {path: 'phone', component:PhoneComponent},
  {path: 'code', component:CodeComponent},
  {path: 'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
