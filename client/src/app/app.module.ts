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

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterClientComponent,
    ClientDetailComponent,
    DashboardComponent,
    PaymentsComponent
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
