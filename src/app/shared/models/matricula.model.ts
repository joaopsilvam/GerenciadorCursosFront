export interface MatriculaDto {
  alunoId: number;
  cursoId: number;
  nomeAluno: string;
  nomeCurso: string;
}

export interface MatriculaCreateDto {
  alunoId: number;
  cursoIds: number[];
}
