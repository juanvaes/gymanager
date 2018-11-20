import { Component, OnInit } from '@angular/core';
import { Payment } from '../payments/payment';
import { PaymentsService } from '../payments.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.css']
})
export class RegisterPaymentComponent implements OnInit {
  registerPaymentForm: FormGroup;
  submittedPayment = false;

  constructor(
    private fb: FormBuilder,
    private paymentsService: PaymentsService
  ) { 
    this.registerPaymentForm = fb.group({
      'client': [null, Validators.required],
      'value': [null, Validators.required],
      'paymentDate': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  addPayment(formPayment){
    this.submittedPayment = true;
    const payment = new Payment(
      formPayment.client,
      formPayment.value,
      formPayment.paymentDate
    )
    console.log(payment);
    this.paymentsService.postPayment(payment)
      .subscribe();
  }

}
