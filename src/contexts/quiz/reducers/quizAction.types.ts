import {
  DECREMENT,
  INCREMENT,
  NEXT,
  RESET,
  SKIP,
  SELECTED_OPTION,
} from "../../../constants/quiz.constants";

export type QuizAction =
  | { type: typeof RESET }
  | { type: typeof INCREMENT }
  | { type: typeof DECREMENT }
  | { type: typeof SKIP }
  | { type: typeof NEXT }
  | {
      type: typeof SELECTED_OPTION;
      payload: { idx: number; current: number; category: string };
    };
