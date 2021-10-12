import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";
import { useQuiz } from "../../hooks";
import { Quiz } from "../../types/quiz.types";
import { Loading, Score, Point, Message, NextQuiz } from "./styles";
import { Flex, StyledLink } from "../../components/shared/styles";
import { Location, TScores } from "./types";
import Card from "./Card";
import ScoreDoughnut from "./ScoreDoughnut";
import { useMutation, useQueryClient } from "react-query";
import { updateScore } from "../../api/scores";

export default function Result(): JSX.Element {
  const location = useLocation();
  const queryClient = useQueryClient();
  const { from } = (location.state as Location) || { from: { category: null } };
  const { isLoading, isError, data } = useQuiz(from.category);
  const {
    quizState: { selectedOptions, score },
  } = useQuizContext();

  const scoreMutation = useMutation(() => updateScore(score, from.category), {
    onMutate: async () => {
      await queryClient.cancelQueries("scores");
      const previousScores = queryClient.getQueryData<TScores>("scores");
      queryClient.setQueryData<TScores>("score", (old) => [
        ...old,
        { category: from.category, score },
      ]);
      console.log({ previousScores });
      return { previousScores };
    },
    onError: (err, variable, context) => {
      if (context?.previousScores) {
        queryClient.setQueryData<TScores>("scores", context.previousScores);
      }
    },
    onSettled: () => queryClient.invalidateQueries("scores"),
  });

  useEffect(() => {
    scoreMutation.mutate();
  }, []);

  if (!from.category) return <Navigate to="/" replace={true} />;
  if (isLoading) return <Loading>Loading...</Loading>;
  if (isError) return <Message>Couldn't fetch data server :'(</Message>;
  return (
    <>
      {data.quizes?.length && (
        <>
          <ScoreDoughnut />
          <Score>
            Scored: <Point>{score}</Point>/20
          </Score>
          {data.quizes.map((quiz: Quiz, quizIdx: number) => (
            <Card quiz={quiz} quizIdx={quizIdx} />
          ))}
          <StyledLink to="/">
            <Flex>
              <NextQuiz onClick={() => {}}>New Quiz</NextQuiz>
            </Flex>
          </StyledLink>
        </>
      )}
    </>
  );
}
