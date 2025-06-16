export interface AlunoDto {
  id: number;
  nome: string;
  email: string;
  dataNascimento: Date;
}

export interface AlunoCreateDto {
  nome: string;
  email: string;
  dataNascimento: Date;
}

export interface AlunoUpdateDto extends AlunoCreateDto {}
