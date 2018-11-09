import { Injectable } from '@angular/core'; 
import { Client } from './client/client'
import { CLIENTS } from './mock-clients'
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    console.log('Pasa por el servicio de clientes')
    //return of(CLIENTS);
    return this.http.get<Client[]>('http://localhost:3000/api/client');
  }

  getClient(id: number): Observable<Client>{
    return of(CLIENTS.find(client => client._id === id));
  }
}
