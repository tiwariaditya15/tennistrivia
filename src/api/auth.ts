import { baseURL } from "./baseURL";
import axios from "axios";
const authURL = `${baseURL}/accounts`;
type TResponse = {
  token: string;
};
export const login = (email: string, password: string) =>
  axios.post<TResponse>(`${authURL}/login`, {
    email,
    password,
  });

export const signup = (name: string, email: string, password: string) =>
  axios.post(`${authURL}/login`);
