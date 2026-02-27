import api from '@/lib/api';
import { AxiosError } from 'axios'

export type LoginCredentialsDTO = {
  Email: string,
  Password: string,
};

export type LoginResponse = {
  message: string
};

export async function login({ Email, Password }: LoginCredentialsDTO): Promise<LoginResponse> {

  try {
    const response = await api.post("/auth/login", { Email, Password });
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