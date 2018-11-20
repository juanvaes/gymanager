import { Component, OnInit } from '@angular/core';
import { Payment } from './payment';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: Payment[];

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit() {
    console.log('Pasa por ngOnInit en Payments');
    this.getPayments();
  }

  getPayments(): void {
    console.log('Pasa por front en getPayments');
    this.paymentsService.getPayments()
        .subscribe(payments => this.payments = payments);


  }

}
