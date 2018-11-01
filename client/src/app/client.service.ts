import { Injectable } from '@angular/core'; 
import { Client } from './client/client'
import { CLIENTS } from './mock-clients'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getClients(): Client[] {
    return CLIENTS;
  }

  getClient(id: number): Observable<Client>{
    return of(CLIENTS.find(client => client._id === id));
  }
  constructor() { }
}
