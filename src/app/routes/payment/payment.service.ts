import { MeioPagamento } from './../../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.SERVER_ORIGIN;

  constructor(protected http: HttpClient) { }

  listAll() {
    return this.http.get<MeioPagamento>(`${this.apiUrl}/meiosPagamento`)
  }

}
