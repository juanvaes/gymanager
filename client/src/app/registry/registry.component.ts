import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { ClientService } from '../client.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {
  filterClientForm: FormGroup;
  client: Client;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService
  ) { 
    this.filterClientForm = fb.group({
      'identification': [null, Validators.required] 
    })
  }

  ngOnInit() {
  }

  getClientByCC(form){
    const cc = form.identification;
    this.clientService.getClientByCC(cc)
      .subscribe(client => this.client = client);
  }

}
