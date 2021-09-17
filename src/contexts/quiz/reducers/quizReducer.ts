import { QuizState } from "../../quizState.types";
import { QuizAction } from "./quizAction.types";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  SKIP,
  NEXT,
} from "../../../constants/quiz.constants";

export function quizReducer(state: QuizState, action: QuizAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        score: state.score + 4,
      };
    case DECREMENT:
      if (state.score > 0) {
        return {
          ...state,
          score: state.score - 1,
        };
      }
      return { ...state };
    case RESET:
      return {
        ...state,
        score: 0,
        current: -1,
      };
    case SKIP:
      if (state.current === 5) {
        return {
          ...state,
          current: 1,
        };
      }
      return {
        ...state,
        current: state.current + 1,
      };

    case NEXT:
      if (state.current === 5) {
        return {
          ...state,
          current: 1,
        };
      }
      return {
        ...state,
        current: state.current + 1,
      };
    default:
      return { ...state };
  }
}
