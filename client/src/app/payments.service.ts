import { Injectable } from '@angular/core';
import { Payment } from './payments/payment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]> {
    console.log('Pasa por el servicio GET de Pagos')
    //return of(CLIENTS);
    return this.http.get<Payment[]>('http://localhost:3000/api/payment');
  }

  postPayment(payment: Payment): Observable<Payment> {
    console.log('Pasa por el servicio POST de Pagos')
    //return of(CLIENTS);
    return this.http.post<Payment>('http://localhost:3000/api/payment', payment, httpOptions);
  }
}
