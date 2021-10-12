export type AuthState = {
  logged: boolean;
  token: string | null;
  error: string | null;
};
