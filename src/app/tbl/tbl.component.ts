import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']
})
export class TblComponent implements OnInit {

  Alunos!: any;
  constructor(private route: Router, private api: AlunoService) { }

  alunos!: Aluno[];

  exibirTabela: boolean = false;

  ngOnInit(): void {
    this.obterAluno()
  }

  obterAluno(){
    this.api.obterAluno().subscribe({
      next: (result:any) => {
        this.Alunos = result;
        console.log(this.Alunos);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  cadastrarAluno() {
    this.route.navigate(['/aluno'])
  }

  removerAluno(id: number) {
    let isExecuted = confirm('Deseja realmente remover este Aluno?');

    if (isExecuted) {
      this.api.Deletar(id).subscribe({
        next: (d) => {
          this.obterAluno();
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
