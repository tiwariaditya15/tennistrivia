export type Quiz = {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctValue: string;
  correctOption: number;
};

export type Score = {
  id: string;
  score: number;
  category: string;
  playerId?: string;
};
