import { PetDto } from "../types/types";
import { api, apiFormData } from "./axios";


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

export const addPet = async (formData: FormData) => {
  try {
    const response = await apiFormData.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar pet:', error);
    throw error;
  }
};

export const getPetById = async (id: number): Promise<PetDto> => {
  try {
    const response = await api.get<PetDto>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter pet com id ${id}:`, error);
    throw error;
  }
};