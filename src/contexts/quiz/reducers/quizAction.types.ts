import { DECREMENT, INCREMENT, RESET } from "../../../constants/quiz.constants";
export type QuizAction =
  | { type: typeof RESET }
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT };
