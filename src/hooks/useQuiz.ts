import { useQuery } from "react-query";
import { fetchQuiz } from "../api/quizes";

export function useQuiz(category: string) {
  const { isLoading, isError, data, error } = useQuery("quiz", () =>
    fetchQuiz(category)
  );

  return {
    isLoading,
    isError,
    error,
    data,
  };
}
