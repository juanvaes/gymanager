import { Injectable } from '@angular/core'; 
import { Client } from './client/client'
import { CLIENTS } from './mock-clients'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  addClient(client: Client): Observable<Client>{
    console.log('Entra a servicio addClient');
    console.log(client);
    return this.http.post<Client>('http://localhost:3000/api/client', client, httpOptions);
  }

}
