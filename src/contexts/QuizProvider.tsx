import React, { createContext, useReducer } from "react";
import { quizReducer } from "./quiz/reducers/quizReducer";
import { QuizAction } from "./quiz/reducers/quizAction.types";
import { QuizState } from "./quizState.types";

const initialQuizState: QuizState = { score: 0, current: 1, error: null };

const QuizContext = createContext<{
  quizState: QuizState;
  quizDispatch: React.Dispatch<QuizAction>;
}>({
  quizState: initialQuizState,
  quizDispatch: () => undefined,
});

type QuizProviderProps = {
  children: JSX.Element;
};

export function QuizProvider({ children }: QuizProviderProps): JSX.Element {
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  return (
    <QuizContext.Provider
      value={{
        quizState,
        quizDispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
