import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from '../client.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];
  selectedClient: Client;

  onSubmit(){
  }

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(client: Client): void {
    this.selectedClient = client;
    console.log(client)
  }

  getHeroes(): void {
    this.clients = this.clientService.getHeroes();
  }
}
