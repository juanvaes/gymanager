import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterClientComponent,
    ClientDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
