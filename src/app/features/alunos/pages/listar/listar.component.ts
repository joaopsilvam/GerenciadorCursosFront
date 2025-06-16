import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';
import { AlunoDto } from 'src/app/shared/models/aluno.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-alunos-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  alunos: AlunoDto[] = [];
  displayedColumns = ['id', 'nome', 'email', 'dataNascimento', 'acoes'];

  constructor(
    private alunosService: AlunosService,
    private feedback: FeedbackService
  ) {}

  ngOnInit(): void {
    this.alunosService.getAll().subscribe({
      next: data => this.alunos = data,
      error: () => this.feedback.erro('Erro ao carregar alunos')
    });
  }

  deletar(id: number): void {
    if (confirm('Deseja realmente excluir este aluno?')) {
      this.alunosService.delete(id).subscribe({
        next: () => {
          this.alunos = this.alunos.filter(a => a.id !== id);
          this.feedback.sucesso('Aluno excluído com sucesso');
        },
        error: () => this.feedback.erro('Erro ao excluir aluno')
      });
    }
  }
}
