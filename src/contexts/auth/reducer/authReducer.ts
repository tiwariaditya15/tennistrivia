import { AuthState } from "../authState.types";
import { AuthAction } from "./authAction.types";
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
} from "../../../constants/auth.constants";

export default function authReducer(
  state: AuthState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        token: action.payload.token,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        token: null,
      };
    case SIGNUP:
      return {
        ...state,
        logged: true,
        token: action.payload.token,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        logged: false,
        token: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
