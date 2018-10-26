import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  fname = 'Juan camilo';
  lname = 'valencia'
  password = '123456'
  
  genres = ['Masculino', 'Femenino'];
  clientone = new Client(1, this.fname, this.lname, this.password);
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diatnostic(){
    return JSON.stringify(this.clientone);
  }

  constructor() { }

  ngOnInit() {
  }

}
