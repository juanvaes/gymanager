import { Component, OnInit } from '@angular/core';
import { Payment } from '../payments/payment';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.css']
})
export class PaymentsTableComponent implements OnInit {

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
