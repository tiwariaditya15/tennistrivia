import { Score } from "../../types/quiz.types";

export function calculateScore(scores: Score[], category: string) {
  return scores.reduce((acc, cur) => {
    if (cur.category.toLowerCase() === category.toLowerCase()) {
      return acc + cur.score;
    }
    return acc;
  }, 0);
}

export function calculateAttempts(score: Score[], category: string) {
  return score.reduce((acc, cur) => {
    if (cur.category.toLowerCase() === category.toLowerCase()) {
      return ++acc;
    }
    return acc;
  }, 0);
}
