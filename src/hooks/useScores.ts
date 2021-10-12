import { useQuery } from "react-query";
import { getScores } from "../api/scores";
export function useScores() {
  const { data, isLoading, isError, error } = useQuery("scores", getScores);
  return { data, isLoading, isError, error };
}
