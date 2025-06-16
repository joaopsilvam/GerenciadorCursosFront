import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { CursoDto } from 'src/app/shared/models/curso.model';
import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-cursos-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  cursos: CursoDto[] = [];
  displayedColumns = ['id', 'nome', 'descricao', 'acoes'];

  constructor(
    private cursosService: CursosService,
    private feedback: FeedbackService
  ) {}

  ngOnInit(): void {
    this.cursosService.getAll().subscribe({
      next: data => this.cursos = data,
      error: () => this.feedback.erro('Erro ao carregar cursos')
    });
  }

  deletar(id: number): void {
    if (confirm('Tem certeza que deseja excluir este curso?')) {
      this.cursosService.delete(id).subscribe({
        next: () => {
          this.cursos = this.cursos.filter(c => c.id !== id);
          this.feedback.sucesso('Curso excluído com sucesso');
        },
        error: () => this.feedback.erro('Erro ao excluir curso')
      });
    }
  }
}
