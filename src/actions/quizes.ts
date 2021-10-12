import React from "react";
import { QuizAction } from "../contexts/quiz/reducers/quizAction.types";
import {
  NEXT,
  SKIP,
  INCREMENT,
  DECREMENT,
  SELECTED_OPTION,
} from "../constants/quiz.constants";

export const answeredCorrect = (
  idx: number,
  current: number,
  category: string,
  quizDispatch: React.Dispatch<QuizAction>
) => {
  quizDispatch({ type: INCREMENT });
  quizDispatch({ type: SELECTED_OPTION, payload: { idx, current, category } });
};

export const answeredWrong = (
  idx: number,
  current: number,
  category: string,
  quizDispatch: React.Dispatch<QuizAction>
) => {
  quizDispatch({ type: DECREMENT });
  quizDispatch({ type: SELECTED_OPTION, payload: { idx, current, category } });
};

export const nextQuestion = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: NEXT });
};
export const skipQuestion = (quizDispatch: React.Dispatch<QuizAction>) => {
  quizDispatch({ type: SKIP });
};
