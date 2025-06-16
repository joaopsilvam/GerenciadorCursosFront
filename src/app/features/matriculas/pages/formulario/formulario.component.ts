import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatriculasService } from '../../services/matriculas.service';
import { CursosService } from 'src/app/features/cursos/services/cursos.service';
import { AlunosService } from 'src/app/features/alunos/services/alunos.service';
import { CursoDto } from 'src/app/shared/models/curso.model';
import { AlunoDto } from 'src/app/shared/models/aluno.model';
import { MatriculaCreateDto } from 'src/app/shared/models/matricula.model';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-matriculas-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;
  alunos: AlunoDto[] = [];
  cursos: CursoDto[] = [];

  constructor(
    private fb: FormBuilder,
    private matriculasService: MatriculasService,
    private alunosService: AlunosService,
    private cursosService: CursosService,
    private feedback: FeedbackService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      alunoId: ['', Validators.required],
      cursoIds: [[], Validators.required]
    });

    this.alunosService.getAll().subscribe({
      next: data => this.alunos = data,
      error: () => this.feedback.erro('Erro ao carregar alunos')
    });

    this.cursosService.getAll().subscribe({
      next: data => this.cursos = data,
      error: () => this.feedback.erro('Erro ao carregar cursos')
    });
  }

  salvar(): void {
    if (this.form.invalid) return;

    const dto: MatriculaCreateDto = this.form.value;

    this.matriculasService.create(dto).subscribe({
      next: () => {
        this.feedback.sucesso('Matrícula realizada com sucesso');
        this.router.navigate(['/matriculas']);
      },
      error: () => {
        this.feedback.erro('Erro ao realizar matrícula');
      }
    });


  }

  cancelar(): void {
    this.router.navigate(['/matriculas']);
  }
}
