import { useEffect } from "react";
import { theme } from "./defaultTheme/theme";
import { ThemeProvider } from "styled-components";
import { useInterceptors } from "./hooks";
import axios from "axios";
import Appbar from "./components/Appbar";
import Router from "./components/Router";
import { NavLink } from "react-router-dom";

function App() {
  useInterceptors(axios);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme["dark"]}>
        <Appbar />
        <NavLink to="/scores">Score</NavLink>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
