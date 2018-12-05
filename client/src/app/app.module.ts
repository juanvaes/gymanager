import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { ClientTableComponent } from './client-table/client-table.component';
import { PaymentsTableComponent } from './payments-table/payments-table.component';
import { RegistryComponent } from './registry/registry.component';
import { RegistryTableComponent } from './registry-table/registry-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterClientComponent,
    ClientDetailComponent,
    DashboardComponent,
    PaymentsComponent,
    RegisterPaymentComponent,
    ClientTableComponent,
    PaymentsTableComponent,
    RegistryComponent,
    RegistryTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SidebarModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
