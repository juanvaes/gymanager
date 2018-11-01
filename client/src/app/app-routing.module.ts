import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { RegisterClientComponent } from './register-client/register-client.component';

const routes: Routes = [
  {path: 'clients', component: ClientComponent},
  {path: 'clientRegister', component: RegisterClientComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

 }
