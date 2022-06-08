import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../models/Aluno';
import { AlunoService } from '../Services/aluno.service';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {
  constructor(private api: AlunoService,
  private router: Router,
  private route: ActivatedRoute ) {}
// CRIAÇÃO DOS ALUNOS

  model: Aluno = new Aluno;
  Alunos!: any;
  id!: number;


  voltarParaLista() {
    this.router.navigate(['/tabela']);
  }

  obterAlunoId(id:number){

    this.api.obterAlunoId(id).subscribe({
      error: (e) => { console.log(e) },
      next: (dados) => { this.Alunos = dados },
      });
  }

  obterAluno(){
    this.api.obterAluno().subscribe({
      next: (result:any) => {
        this.Alunos = result;
        console.log(this.Alunos);
      }
    })
  }

  submit(): void {

    const { id } = this.route.snapshot.params;
    this.id = id;
    this.model.id = this.id;
    
    console.log(id);

    if (this.id > 0) {

      this.api.Editar(this.id,this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          console.log(dados)
          alert('Aluno alterado com sucesso!!!!!');
          this.voltarParaLista();
         },
        });

    } else {
      this.api.Adicionar(this.model).subscribe({
        error: (e) => { console.log(e) },
        next: (dados) => {
          alert('Aluno cadastrado com sucesso!!!!!');
          this.voltarParaLista();
         },
        });
    }
  }

  ngOnInit(): void {
   
  }


  onSubmit(){
    
  }

}
