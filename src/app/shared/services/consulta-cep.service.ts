import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  cep = <Cep>{};

  constructor(private http: HttpClient) { }

  consultaCEP(cep: string): Observable<Cep> {
    //nova variavel "cep" somento com digitos
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      //expressão regular para validadar o CEP
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.http.get<Cep>(`//viacep.com.br/ws/${cep}/json`);
      } else {
        //cep é inválido
        alert("Formato de CEP inválido.");
      }
    }
  }
}
