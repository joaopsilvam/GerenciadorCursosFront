import { Component, OnInit } from '@angular/core';
import { MatriculasService } from '../../services/matriculas.service';
import { MatriculaDto } from 'src/app/shared/models/matricula.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-matriculas-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  matriculas: MatriculaDto[] = [];
  displayedColumns = ['nomeAluno', 'nomeCurso', 'acoes'];

  constructor(
    private matriculasService: MatriculasService,
    private feedback: FeedbackService
  ) {}

  ngOnInit(): void {
    this.matriculasService.getAll().subscribe({
      next: data => this.matriculas = data,
      error: () => this.feedback.erro('Erro ao carregar matrículas')
    });
  }

  remover(alunoId: number, cursoId: number): void {
    if (confirm('Remover esse aluno deste curso?')) {
      this.matriculasService.delete(alunoId, cursoId).subscribe({
        next: () => {
          this.matriculas = this.matriculas.filter(
            m => !(m.alunoId === alunoId && m.cursoId === cursoId)
          );
          this.feedback.sucesso('Matrícula removida com sucesso');
        },
        error: () => this.feedback.erro('Erro ao remover matrícula')
      });
    }
  }
}
