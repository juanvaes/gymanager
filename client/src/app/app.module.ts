import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { RegisterClientComponent } from './register-client/register-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    RegisterClientComponent
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
