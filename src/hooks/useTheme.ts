import { useLayoutEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<string>("dark");
  const nextTheme = () =>
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  useLayoutEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return {
    nextTheme,
  };
}
