import { PetDto } from "../types/types";
import { api } from "./axios";


const API_URL = '/pets';

export const getAllPets = async (): Promise<PetDto[]> => {
  try {
    const response = await api.get<PetDto[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter pets:', error);
    throw error;
  }
};

export const addPet = async (petDto: PetDto, file: File): Promise<PetDto> => {
    const formData = new FormData();
    formData.append('pet', JSON.stringify(petDto));
    formData.append('file', file);
  
    try {
      const response = await api.post<PetDto>(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar pet:', error);
      throw error;
    }
  };