import axios from 'axios'

export type LoginCredentialsDTO = {
  Email: string,
  Password: string,
};

export type LoginResponse = {
  message: string
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiLoginUrl = `${apiBaseUrl}/auth/login`;

export async function Login({ Email, Password }: LoginCredentialsDTO): Promise<LoginResponse> {

  if (!apiBaseUrl) {
    throw new Error("Missing API base url");
  }

  try {
    const response = await axios.post(apiLoginUrl, { Email, Password }, { withCredentials: true });

    return response.data;
  }
  catch (error) {
    console.log(`Login request failed: ${error}`);
    throw error;
  }
}

