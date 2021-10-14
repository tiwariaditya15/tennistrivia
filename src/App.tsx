import { useEffect } from "react";
import { theme } from "./defaultTheme/theme";
import { ThemeProvider } from "styled-components";
import { useInterceptors } from "./hooks";
import axios from "axios";
import Appbar from "./components/Appbar";
import Router from "./components/Router";
import Modal from "./components/Modal";
import Navigation from "./components/Navigation";

function App() {
  useInterceptors(axios);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme["dark"]}>
        <Appbar />
        <Router />
        <Modal>
          <Navigation />
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default App;
