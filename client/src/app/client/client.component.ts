import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { CLIENTS } from '../mock-clients';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients = CLIENTS;
  selectedClient: Client;

  onSelect(client: Client): void {
  this.selectedClient = client;
  console.log(client)
}
  onSubmit(){
  }

  constructor() { }

  ngOnInit() {
  }

}
