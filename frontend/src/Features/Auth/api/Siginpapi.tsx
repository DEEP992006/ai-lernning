import axios, { AxiosError } from 'axios';
import type SigninSchema from '../components/Schema/Signinschema';

// Signin API call
export const Siginpapi = async (data: SigninSchema) => {
  try {
    // Send credentials to backend
    const response = await axios.post("http://localhost:3000/auth/signin", {
      email: data.email,
      password: data.password,
    });

    console.log(response); // Log response for debugging

    // Return token from response
    return response.data.token;
  } catch (err: any) {
    // Handle and throw error
    const message = err?.response?.data?.message || "Something went wrong";
    console.log(message);
    throw new Error(message);
  }
};
