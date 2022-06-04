import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrls: ['./tbl.component.css']
})
export class TblComponent implements OnInit {

  constructor() { }

  alunos!: Aluno[];

  exibirTabela: boolean = false;
  ngOnInit(): void {
  }

  

}
