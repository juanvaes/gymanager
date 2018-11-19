import { Component, OnInit } from '@angular/core';
import { Client } from '../client/client';
import { ClientService } from '../client.service'
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {  
  /*
  registerClientForm: FormGroup;

  submitted = false;
  client = new Client('Alfonsini','Alvarez','12345','example@hotmail.com',true,3190001234,1,2,'1990-04-12',2,3,4,'2018-11-20',3,true,5,56,4,false);

  constructor(
    private clientService: ClientService, 
    private fb: FormBuilder
    ) { }

  onSubmit(){
    this.submitted = true;
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
    this.registerClientForm = this.fb.group({
      fname: '',
      lname: ''
    })
  }
  */
  registerClientForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';

  constructor(private fb: FormBuilder){
    // Validation specification
    this.registerClientForm = fb.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'validate': ''
    })
  }

  ngOnInit() {
    }

  addPost(post){
    this.description = post.description;
    this.name = post.name;
  }

  addClient(client){
    console.log(client);
  }
}