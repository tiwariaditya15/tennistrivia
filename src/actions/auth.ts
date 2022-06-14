import axios, { AxiosError } from "axios";
import React from "react";
import * as api from "../api/auth";
import { ERROR, LOGIN } from "../constants/auth.constants";
import { AuthAction } from "../contexts/auth/reducer/authAction.types";

type TCredentails = { email: string; password: string };
type LoginError = { errorMessage: string };

export async function login(
  { email, password }: TCredentails,
  authDispatch: React.Dispatch<AuthAction>
) {
  try {
    const res = await api.login(email, password);
    localStorage.setItem("AUTH_TOKEN_TENNISTRIVIA", res.data.token);
    authDispatch({ type: LOGIN, payload: { token: res.data.token } });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const loginError = error as AxiosError<LoginError>;
      if (loginError && loginError.response) {
        authDispatch({
          type: ERROR,
          payload: { error: loginError.response.data.errorMessage },
        });
      }
    }
  }
}
