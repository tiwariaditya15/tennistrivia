import axios from "axios";
import { baseURL } from "./baseURL";

const quizesURL = `${baseURL}/quizes`;

export async function fetchQuiz(category: string) {
  const res = await axios.get(`${quizesURL}/${category}`);
  return res.data;
}
