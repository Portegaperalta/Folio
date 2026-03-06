import { RegisterCredentialsDTO } from '@/app/types/api';
import api from '@/lib/api';

export async function Signup({ name, email, password, phoneNumber }: RegisterCredentialsDTO) {
  try {
    let response = await api.post("/auth/register");
    return response.data;
  }
  catch (error) {
    console.error(`Login request failed: ${error}`);
    throw error;
  }
}