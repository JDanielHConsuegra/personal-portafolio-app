import { IMessage } from "@/components/Form";
import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const postMessage = async (values: IMessage) => {
  try {
    const response = await axios.post(`${API_URL}messages`, values);
    if (response.status === 201) {
        return {
            error: response.data,
            message: "Message sent successfully"
        }
    }
    else{
        return {
            data: response.data,
            message: "Failed to send message"
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
