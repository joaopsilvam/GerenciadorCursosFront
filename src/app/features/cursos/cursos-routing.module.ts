import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { AlunosPorCursoComponent } from './pages/alunos-por-curso/alunos-por-curso.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'novo', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent },
  { path: ':id/alunos', component: AlunosPorCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
