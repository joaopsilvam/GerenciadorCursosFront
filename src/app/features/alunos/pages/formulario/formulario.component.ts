import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';
import { AlunoCreateDto } from 'src/app/shared/models/aluno.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-aluno-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  alunoId!: number;

  constructor(
    private fb: FormBuilder,
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router,
    private feedback: FeedbackService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required, this.maiorDeIdadeValidator]]
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEdit = true;
      this.alunoId = +idParam;
      this.alunosService.getById(this.alunoId).subscribe({
        next: aluno => this.form.patchValue(aluno),
        error: () => this.feedback.erro('Erro ao carregar dados do aluno')
      });
    }
  }

  salvar(): void {
    if (this.form.invalid) return;

    const aluno = this.form.value as AlunoCreateDto;

    const obs = this.isEdit
      ? this.alunosService.update(this.alunoId, aluno)
      : this.alunosService.create(aluno);

    obs.subscribe({
      next: () => {
        this.feedback.sucesso('Aluno salvo com sucesso');
        this.router.navigate(['/alunos']);
      },
      error: () => {
        this.feedback.erro('Erro ao salvar aluno');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/alunos']);
  }

  private maiorDeIdadeValidator(control: AbstractControl): { [key: string]: any } | null {
    const data = new Date(control.value);
    const hoje = new Date();
    const idade = hoje.getFullYear() - data.getFullYear();
    const mes = hoje.getMonth() - data.getMonth();
    const dia = hoje.getDate() - data.getDate();

    const fezAniversario = mes > 0 || (mes === 0 && dia >= 0);
    const idadeFinal = fezAniversario ? idade : idade - 1;

    return idadeFinal < 18 ? { menorDeIdade: true } : null;
  }
}
