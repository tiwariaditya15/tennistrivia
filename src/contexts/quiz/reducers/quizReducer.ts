import { QuizState } from "../../quizState.types";
import { QuizAction } from "./quizAction.types";
import { INCREMENT, DECREMENT, RESET } from "../../../constants/quiz.constants";

export function quizReducer(state: QuizState, action: QuizAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        score: state.score + 1,
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
    default:
      return { ...state };
  }
}
