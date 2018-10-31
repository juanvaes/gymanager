import { Injectable } from '@angular/core'; 
import { Client } from './client/client'
import { CLIENTS } from './mock-clients'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  getHeroes(): Client[] {
    return CLIENTS;
  }
  constructor() { }
}
