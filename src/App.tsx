import { ThemeProvider } from "styled-components";
import { theme } from "./defaultTheme/theme";
import Router from "./components/Router";

function App() {
  return (
    <>
      <ThemeProvider theme={theme["dark"]}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
