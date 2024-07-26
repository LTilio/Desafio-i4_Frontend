export interface ConsultaDto {
  id: number;
  nomeVeterinario: string;
  dataConsulta: string;
  sintomas: string;
  diagnostico: string;
  tratamento: string;
  observacoes: string;
}

export interface PetDto {
  id: number;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  peso: number;
  corPelagem: string;
  observacoes: string;
  nomeDono: string;
  contatoDono: string;
  dataRegistro?: string;
  imagemUrl?: string;
  consultas?: ConsultaDto[];
}

export type PetFormValues = {
  nome: string;
  especie: string;
  raca?: string;
  idade: number;
  peso: number;
  corPelagem?: string;
  observacoes?: string;
  nomeDono?: string;
  contatoDono?: string;
  imagem?: File | null;
};