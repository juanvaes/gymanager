import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from '../client.service';
import { ClientTableComponent } from '../client-table/client-table.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    console.log('Pasa por ngOnInit en Clients');
    //this.getClients();
  }

  getClients(): void {
    console.log('Pasa por front en getClients');
    this.clientService.getClients()
        .subscribe(clients => this.clients = clients);
  }
}
