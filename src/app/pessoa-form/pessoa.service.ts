import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaModel } from '../Models/pessoa.model';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { HEXAGON_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<PessoaModel[]> {
    return this.http.get<PessoaModel[]>(`${HEXAGON_API.baseUrl}/api/v1/Pessoa`)
  }

  getById(id: number): Observable<PessoaModel> {
    return this.http.get<PessoaModel>(`${HEXAGON_API.baseUrl}/api/v1/Pessoa/{id}`)
  }

  update(pessoa: PessoaModel): Observable<PessoaModel> {
    return this.http.put<PessoaModel>(`${HEXAGON_API.baseUrl}/api/v1/Pessoa`, pessoa)
  }

  add(pessoa: PessoaModel): Observable<PessoaModel> {
    console.log("Aqui no serviço " + pessoa.estadoCivil);
    return this.http.post<PessoaModel>(`${HEXAGON_API.baseUrl}/api/v1/Pessoa`, pessoa)
  }

  del(pessoa: PessoaModel): Observable<any> {
    return this.http.delete(`${HEXAGON_API.baseUrl}/api/v1/Pessoa{pessoa.id}`)
  }
}
