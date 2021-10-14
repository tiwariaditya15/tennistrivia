import { useMutation, useQueryClient } from "react-query";
import { updateScore } from "../api/scores";
import { TScores } from "../pages/Result/types";

export function useScoreMutation(score: number, category: string) {
  const queryClient = useQueryClient();
  const scoreMutation = useMutation(() => updateScore(score, category), {
    onMutate: async () => {
      await queryClient.cancelQueries("scores");
      const previousScores = queryClient.getQueryData<TScores>("scores");
      // queryClient.setQueryData<TScores>("score", (old) => ({
      //   scores: [...old.scores, { category: from.category, score }],
      // }));
      return { previousScores };
    },
    onError: (err, variable, context) => {
      if (context?.previousScores) {
        queryClient.setQueryData<TScores>("scores", context.previousScores);
      }
    },
    onSettled: () => queryClient.invalidateQueries("scores"),
  });
  return {
    scoreMutation,
  };
}
