import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url: string = environment.baseUrl;

  constructor( private http: HttpClient) { }

  obterAluno(): Observable<any>{
    return this.http.get<any>(`${this.url}/clientes`);
  }
}
