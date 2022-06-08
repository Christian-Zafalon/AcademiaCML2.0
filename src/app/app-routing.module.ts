import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuComponentComponent } from './meu-component/meu-component.component';
import { TblComponent } from './tbl/tbl.component';

const routes: Routes = [
  { path: 'cadastro/:id', component: MeuComponentComponent},
  { path: 'cadastro', component: MeuComponentComponent},
  { path: 'tabela', component: TblComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
