import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
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