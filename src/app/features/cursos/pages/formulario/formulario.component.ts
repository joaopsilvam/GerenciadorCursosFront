import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { CursoCreateDto } from 'src/app/shared/models/curso.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-curso-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  cursoId!: number;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
    private feedback: FeedbackService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required]]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.cursoId = +idParam;
      this.cursosService.getAll().subscribe({
        next: cursos => {
          const curso = cursos.find(c => c.id === this.cursoId);
          if (curso) this.form.patchValue(curso);
          else this.feedback.erro('Curso não encontrado');
        },
        error: () => this.feedback.erro('Erro ao carregar curso')
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    const curso = this.form.value as CursoCreateDto;

    const obs = this.isEdit
      ? this.cursosService.update(this.cursoId, curso)
      : this.cursosService.create(curso);

    obs.subscribe({
      next: () => {
        this.feedback.sucesso('Curso salvo com sucesso');
        this.router.navigate(['/cursos']);
      },
      error: () => {
        this.feedback.erro('Erro ao salvar curso');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/cursos']);
  }
}
