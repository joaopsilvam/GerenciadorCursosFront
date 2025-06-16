import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  {
    path: 'cursos',
    loadChildren: () => import('./features/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./features/alunos/alunos.module').then(m => m.AlunosModule)
  },
  {
    path: 'matriculas',
    loadChildren: () => import('./features/matriculas/matriculas.module').then(m => m.MatriculasModule)
  },
  { path: '**', redirectTo: 'cursos' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
