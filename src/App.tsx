import { ThemeProvider } from "styled-components";
import Appbar from "./components/Appbar";
import { theme } from "./defaultTheme/theme";
import Router from "./components/Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme["dark"]}>
        <Appbar />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
