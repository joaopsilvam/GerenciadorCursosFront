export interface CursoDto {
  id: number;
  nome: string;
  descricao: string;
}

export interface CursoCreateDto {
  nome: string;
  descricao: string;
}

export interface CursoUpdateDto extends CursoCreateDto {}
