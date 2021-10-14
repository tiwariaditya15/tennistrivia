import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { QuizProvider } from "./contexts/quiz/QuizProvider";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import App from "./App";
import "./index.css";
import InteractionsProvider from "./contexts/interactions/InteractionsProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <QuizProvider>
            <InteractionsProvider>
              <App />
            </InteractionsProvider>
          </QuizProvider>
        </AuthProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
