import React from "react";
import { QuizAction } from "../contexts/quiz/reducers/quizAction.types";
import { NEXT, SKIP, INCREMENT, DECREMENT } from "../constants/quiz.constants";

export const answeredCorrect = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: INCREMENT });
};

export const answeredWrong = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: DECREMENT });
};

export const nextQuestion = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: NEXT });
};
export const skipQuestion = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: SKIP });
};
