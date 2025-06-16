import { Component, OnInit } from '@angular/core';
import { AlunoDto } from 'src/app/shared/models/aluno.model';
import { CursoDto } from 'src/app/shared/models/curso.model';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from 'src/app/features/alunos/services/alunos.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos-por-curso',
  templateUrl: './alunos-por-curso.component.html',
  styleUrls: ['./alunos-por-curso.component.scss']
})

export class AlunosPorCursoComponent implements OnInit {
  alunos: AlunoDto[] = [];
  cursoId!: number;
  colunas = ['nome', 'email', 'dataNascimento'];

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.cursoId) {
      this.alunosService.getAlunosPorCurso(this.cursoId).subscribe(a => this.alunos = a);
    }
  }
}