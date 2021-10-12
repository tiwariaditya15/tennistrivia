import { baseURL } from "./baseURL";
import axios from "axios";

const scoresURL = `${baseURL}/scores`;

export async function getScores() {
  return axios.get(`${scoresURL}`);
}

export function updateScore(score: number, category: string) {
  return axios.post(`${scoresURL}`, {
    score,
    category,
  });
}
