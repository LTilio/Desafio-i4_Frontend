import { ConsultaDto } from "../types/types";
import { api } from "./axios";

const API_URL = '/consultas';

export const getConsultasByPetId = async (petId: number): Promise<ConsultaDto[]> => {
  try {
    const response = await api.get<ConsultaDto[]>(`${API_URL}/pet/${petId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter consultas:', error);
    throw error;
  }
};

export const addConsulta = async (petId: number, consultaDto: ConsultaDto): Promise<ConsultaDto> => {
  try {
    const response = await api.post<ConsultaDto>(`${API_URL}/${petId}`, consultaDto);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar consulta:', error);
    throw error;
  }
};