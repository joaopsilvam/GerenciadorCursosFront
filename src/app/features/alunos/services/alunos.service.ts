import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoDto, AlunoCreateDto, AlunoUpdateDto } from 'src/app/shared/models/aluno.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AlunosService {
  private apiUrl = `${environment.apiUrl}/alunos`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AlunoDto[]> {
    return this.http.get<AlunoDto[]>(this.apiUrl);
  }

  getById(id: number): Observable<AlunoDto> {
    return this.http.get<AlunoDto>(`${this.apiUrl}/${id}`);
  }

  create(aluno: AlunoCreateDto): Observable<any> {
    return this.http.post(this.apiUrl, aluno);
  }

  update(id: number, aluno: AlunoUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aluno);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getAlunosPorCurso(cursoId: number) {
    return this.http.get<AlunoDto[]>(`${this.apiUrl}/porcurso/${cursoId}`);
  }

}
