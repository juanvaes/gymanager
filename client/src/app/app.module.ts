import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterClientComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
