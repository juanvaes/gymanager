import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    console.log('Pasa por ngOnInit en Clients');
    this.getClients();
  }

  getClients(): void {
    console.log('Pasa por front en getClients');
    this.clientService.getClients()
        .subscribe(clients => this.clients = clients);
  }

}
