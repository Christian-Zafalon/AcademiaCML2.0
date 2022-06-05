import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {

  Alunos!: any;

  constructor(private api: AlunoService) { }
// CRIAÇÃO DOS ALUNOS

  model: Aluno = new Aluno;
  ngOnInit(): void {
   
  }

  //Função Submit, aonde tudo que estiver no forms irá printar no console
  onSubmit(){
    console.log(this.model);
  }

  obterAluno(){
    this.api.obterAluno().subscribe({
      next: (result:any) => {
        this.Alunos = result;
        console.log(this.Alunos);
      }
    })
  }

  UsarCor=true;
}
