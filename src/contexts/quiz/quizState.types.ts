export type SelectedOptions = {
  category: string;
  selection: {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
  };
};
export type QuizState = {
  score: number;
  current: number;
  selectedOptions: SelectedOptions[];
  error: string | null;
};
