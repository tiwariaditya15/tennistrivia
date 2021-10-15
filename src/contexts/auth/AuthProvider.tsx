import React, { createContext, useContext, useReducer } from "react";
import { AuthState } from "./authState.types";
import { AuthAction } from "./reducer/authAction.types";
import authReducer from "./reducer/authReducer";
type TAuthProvider = {
  children: JSX.Element;
};
const initialValues: AuthState = {
  logged: localStorage.getItem("AUTH_TOKEN") ? true : false,
  token: localStorage.getItem("AUTH_TOKEN") || null,
  error: null,
};

const AuthContext = createContext<{
  authState: AuthState;
  authDispatch: React.Dispatch<AuthAction>;
}>({
  authState: initialValues,
  authDispatch: () => undefined,
});

export function AuthProvider({ children }: TAuthProvider): JSX.Element {
  const [authState, authDispatch] = useReducer(authReducer, initialValues);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
