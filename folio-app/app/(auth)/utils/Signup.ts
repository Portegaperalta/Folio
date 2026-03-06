import { RegisterCredentialsDTO, RegisterResponse } from '@/app/types/api';
import api from '@/lib/api';

export async function Signup({ name,
  email, password, phoneNumber }: RegisterCredentialsDTO):
  Promise<RegisterResponse> {
  try {
    let response = await api.post("/auth/register", { name, email, password, phoneNumber });
    return response.data;
  }
  catch (error) {
    console.error(`Login request failed: ${error}`);
    throw error;
  }
}