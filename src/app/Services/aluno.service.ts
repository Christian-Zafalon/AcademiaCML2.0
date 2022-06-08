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
   // return this.http.get<any>(`${this.url}/alunos`);
    return this.http.get<any>(this.url + 'alunos');
  }

    obterAlunoId(id: number): Observable<number>{
      return this.http.get<any>(this.url + 'alunos/' + id);
    }

    public Adicionar(aluno: Aluno): Observable<number> {
      return this.http.post<number>(this.url + 'alunos', aluno);
    }
  
    public Editar(id:number, aluno:Aluno):Observable<number>{
      return this.http.put<number>(this.url + 'alunos/' + id, aluno);
  }

  public Deletar(id:number):Observable<number>{
    return this.http.delete<number>(this.url + 'alunos/' + id);

  }
}
