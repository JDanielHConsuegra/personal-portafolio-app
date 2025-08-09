import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postMessage = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, formData);
    if (response.status !== 200) {
        return {
            error: response.data,
            message: "Failed to send message"
        }
    }
    else{
        return {
            data: response.data,
            message: "Message sent successfully"
        }
    }
  } catch (error) {
    const err = error as AxiosError;
    if (err.status === 400) {
      return {
        error: err.response?.data,
        message: "Bad Request"
      };
    }
    else {
        return {
            error: err.response?.data,
            message: "An unexpected error occurred"
        }
    }
  }
};
