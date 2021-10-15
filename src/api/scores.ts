import { baseURL } from "./baseURL";
import { Score } from "../types/quiz.types";
import axios from "axios";

const scoresURL = `${baseURL}/scores`;

export type Scores = {
  scores: Score[];
};

export async function getScores() {
  return axios.get<Scores>(`${scoresURL}`);
}

export function updateScore(score: number, category: string) {
  return axios.post(`${scoresURL}`, {
    score,
    category,
  });
}
