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
  registerClientForm: FormGroup;
  post: any;
  submittedClient = false;

  constructor(
      private fb: FormBuilder,
      private clientService: ClientService
    ){
    // Validation specification
    this.registerClientForm = fb.group({
      'fname': [null, Validators.required],
      'lname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      'password': [null, Validators.required],
      'email': [null, Validators.required],
      'sex': [null, Validators.required], // true: male, false: female
      'phone': [null, Validators.required],
      'country': '',
      'city': '',
      'postalCodeId': '',
      'birthDate': [null, Validators.required],
      'sicknesses': [null, Validators.required],
      'surgeries': [null, Validators.required],
      'emergencyContact': [null, Validators.required],
      'lastVisited': '',
      'profession': [null, Validators.required],
      'isCompetitor': '',
      'competitorId': '',
      'payments': '',
      'isFrozeen': '',
      'hobbies': '',
      'validate': '' 
    })
  }

  ngOnInit() {
    }

  addClient(formClient){
    this.submittedClient = true;
    const client = new Client(
      formClient.fname,
      formClient.lname,
      formClient.password,
      formClient.email,
      formClient.sex,
      formClient.phone,
      formClient.country,
      formClient.city,
      formClient.birthDate,
      formClient.sicknesses,
      formClient.surgeries,
      formClient.emergencyContact,
      formClient.lastVisited,
      formClient.profession,
      formClient.isCompetitor,
      formClient.competitorId,
      "sdfads",
      formClient.postalCodeId,
      formClient.isFrozeen,
      formClient.hobbies
      );
    this.clientService.addClient(client)
      .subscribe();
  }
}