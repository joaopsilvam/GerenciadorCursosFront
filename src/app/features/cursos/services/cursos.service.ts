import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoDto, CursoCreateDto, CursoUpdateDto } from 'src/app/shared/models/curso.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CursosService {
  private apiUrl = `${environment.apiUrl}/cursos`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CursoDto[]> {
    return this.http.get<CursoDto[]>(this.apiUrl);
  }

  create(curso: CursoCreateDto): Observable<any> {
    return this.http.post(this.apiUrl, curso);
  }

  update(id: number, curso: CursoUpdateDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, curso);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
