import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'novo', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
