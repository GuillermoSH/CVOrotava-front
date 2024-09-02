import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private url: string = environment.apiUrl + '/payments';

  constructor(private _http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this._http.get<Payment[]>(this.url);
  }

  getPaymentById(id: string): Observable<Payment> {
    return this._http.get<Payment>(this.url + '/' + id);
  }

  savePayment(payment: Payment): Observable<Payment> {
    return this._http.post<Payment>(this.url + '/save', payment);
  }

  addPlayerToPayment(payment: Payment): Observable<Payment> {
    return this._http.post<Payment>(this.url + '/save', payment);
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this._http.post<Payment>(this.url + '/save', payment);
  }

  deletePayment(payment: Payment): Observable<Payment> {
    return this._http.request<Payment>('DELETE', this.url + '/delete', {
      body: payment,
    });
  }

  deletePlayerFromPayment(
    player_id: string,
    payment_id: string
  ): Observable<Payment> {
    return this._http.delete<Payment>(
      this.url + '/' + payment_id + '/delete/player/' + player_id
    );
  }

  searchBy(search: string): Observable<Payment[]> {
    return this._http.get<Payment[]>(this.url + '/search/' + search);
  }

  getBySeason(season: string): Observable<Payment[]> {
    return this._http.get<Payment[]>(this.url + '/season/' + season);
  }

  getAvailableSeasons(): Observable<string[]> {
    return this._http.get<string[]>(this.url + '/seasons');
  }
}
