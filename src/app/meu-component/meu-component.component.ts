import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {

  constructor() { }
// CRIAÇÃO DOS ALUNOS

  model: Aluno = new Aluno;
  ngOnInit(): void {
  }

  //Função Submit, aonde tudo que estiver no forms irá printar no console
  onSubmit(){
    console.log(this.model);
  }
  UsarCor=true;
}
