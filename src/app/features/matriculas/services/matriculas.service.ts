import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatriculaDto, MatriculaCreateDto } from 'src/app/shared/models/matricula.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MatriculasService {
  private apiUrl = `${environment.apiUrl}/matriculas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<MatriculaDto[]> {
    return this.http.get<MatriculaDto[]>(this.apiUrl);
  }

  create(dto: MatriculaCreateDto): Observable<void> {
    return this.http.post<void>(this.apiUrl, dto);
  }






delete(alunoId: number, cursoId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}?alunoId=${alunoId}&cursoId=${cursoId}`);
}

}
