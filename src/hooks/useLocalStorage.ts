import { useState } from "react";

export function useLocalStorage() {
  const [token, setToken] = useState<string | null>(null);

  const storeToken = (value: string) => {
    localStorage.setItem("AUTH_TOKEN_TENNISTRIVIA", value);
    setToken(value);
  };

  return [token, storeToken] as const;
}
