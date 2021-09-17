import {
  DECREMENT,
  INCREMENT,
  NEXT,
  RESET,
  SKIP,
} from "../../../constants/quiz.constants";

export type QuizAction =
  | { type: typeof RESET }
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof SKIP }
  | { type: typeof NEXT };
