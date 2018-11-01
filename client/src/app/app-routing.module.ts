import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component'
import { RegisterClientComponent } from './register-client/register-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clientDetail/:id', component: ClientDetailComponent },
  { path: 'clientRegister', component: RegisterClientComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

 }