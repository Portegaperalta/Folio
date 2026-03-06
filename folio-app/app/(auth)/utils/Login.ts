import { LoginCredentialsDTO, LoginResponse } from '@/app/types/api';
import api from '@/lib/api';
import { AxiosError } from 'axios'

export async function login({ email, password }: LoginCredentialsDTO): Promise<LoginResponse> {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  }
  catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data || "Login Request Failed")
    }
    console.error(`Login request failed: ${error}`);
    throw error;
  }
}