import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Client } from '../client/client';
import { ClientService} from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() client: Client;
  constructor(
    private route: ActivatedRoute,  // ActivatedRoute holds information about the route to this instance of the ClientDetailComponent
    private clientService: ClientService, // ClientService gets client data from the remote server
    private location: Location  // Location is an Angular service for interacting with the browser
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const _id = +this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(_id)
        .subscribe(client => this.client = client)
  };

  goBack(): void {
    this.location.back();
  }
}

