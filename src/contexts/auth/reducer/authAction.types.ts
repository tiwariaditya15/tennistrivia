import {
  ERROR,
  LOGIN,
  LOGOUT,
  SIGNUP,
} from "../../../constants/auth.constants";

export type AuthAction =
  | { type: typeof LOGIN; payload: { token: string } }
  | { type: typeof SIGNUP; payload: { token: string } }
  | { type: typeof ERROR; payload: { error: string } }
  | { type: typeof LOGOUT };
