import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { ClientService } from '../client.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {  
  submitted = false;
  client = new Client('Alfonsini','Alvarez','12345','example@hotmail.com',true,3190001234,1,2,'1990-04-12',2,3,4,'2018-11-20',3,true,5,56,4,false);

  constructor(private clientService: ClientService) { }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value);
    //this.client = new Client();
    this.addClient();
  }

  addClient(){
    console.log(this.client);
    this.submitted = true;
    this.clientService.addClient(this.client)
      .subscribe();
  }

  ngOnInit() {
  }

}