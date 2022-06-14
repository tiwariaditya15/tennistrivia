import { useEffect } from "react";
import {
  AxiosStatic,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";
import { useAuthContext } from "../contexts/auth/AuthProvider";
import { LOGOUT } from "../constants/auth.constants";
import { useNavigate } from "react-router-dom";

const UNAUTHORIZED = 401;

export function useInterceptors(axios: AxiosStatic) {
  const navigate = useNavigate();
  const {
    authState: { token },
    authDispatch,
  } = useAuthContext();

  const onRequest = (config: AxiosRequestConfig) => {
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  };
  const onRequestError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  const onResponse = (response: AxiosResponse) => {
    return response;
  };
  const onResponseError = (error: AxiosError) => {
    if (error.response?.status === UNAUTHORIZED) {
      localStorage.removeItem("AUTH_TOKEN_TENNISTRIVIA");
      authDispatch({ type: LOGOUT });
      navigate("/login");
    }
    return Promise.reject(error);
  };

  useEffect(() => {
    axios.interceptors.request.use(onRequest, onRequestError);
    axios.interceptors.response.use(onResponse, onResponseError);
  }, [token]);
}
