export type Location = {
  from: {
    category: string;
  };
};

type TScore = {
  id: string;
  score: number;
  category: string;
  playerId: string;
}[];
