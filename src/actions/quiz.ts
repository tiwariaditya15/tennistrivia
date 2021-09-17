import React from "react";
import { QuizAction } from "../contexts/quiz/reducers/quizAction.types";
import { NEXT, SKIP } from "../constants/quiz.constants";

export const nextQuestion = (quizDipatch: React.Dispatch<QuizAction>) => {
  quizDipatch({ type: NEXT });
};

export const skipQuestion = (quizDipatch: React.Dispatch<QuizAction>) => {
  quizDipatch({ type: SKIP });
};
