import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component'
import { RegisterClientComponent } from './register-client/register-client.component';

import { PaymentsComponent } from './payments/payments.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistryComponent } from './registry/registry.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clientDetail/:id', component: ClientDetailComponent },
  { path: 'clientRegister', component: RegisterClientComponent },
  { path: 'payments', component:  PaymentsComponent},
  { path: 'paymentRegister', component:  RegisterPaymentComponent},
  { path: 'registry', component:  RegistryComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

 }
