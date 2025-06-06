import axios, { AxiosError } from 'axios';
import type SignupSchema from '../components/Schema/Signupschema';

// Signup API call
export const signupapi = async (data: SignupSchema) => {
  try {
    // Send signup data to backend
    const response = await axios.post("http://localhost:3000/auth/signup", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    // Store name in localStorage
    localStorage.setItem("name", data.name);

    // Return token from response
    return response.data.token;
  } catch (err: any) {
    // Handle and throw error
    const message = err?.response?.data?.message || "Something went wrong";
    throw new Error(message);
  }
};
