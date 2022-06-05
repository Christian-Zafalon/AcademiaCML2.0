import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']
})
export class TblComponent implements OnInit {

  Alunos!: any;
  constructor(private api: AlunoService) { }

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
      }
    })
  }

  

}
