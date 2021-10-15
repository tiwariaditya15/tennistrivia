import { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";
import { RESET } from "../../constants/quiz.constants";
import { useQuiz, useScoreMutation } from "../../hooks";
import { Quiz } from "../../types/quiz.types";
import { Loading, Score, Point, Message, NextQuiz } from "./styles";
import { Flex, StyledLink } from "../../components/shared/styles";
import { Location } from "./types";
import Card from "./Card";
import ScoreDoughnut from "./ScoreDoughnut";

export default function Result(): JSX.Element {
  const location = useLocation();
  const { from } = (location.state as Location) || { from: { category: null } };
  const { isLoading, isError, data } = useQuiz(from.category);
  const {
    quizState: { score },
    quizDispatch,
  } = useQuizContext();
  const { scoreMutation } = useScoreMutation(score, from.category);
  useEffect(() => {
    scoreMutation.mutate();
  }, []);
  useEffect(() => {
    quizDispatch({ type: RESET });
  }, []);
  if (!from.category) return <Navigate to="/" replace={true} />;
  if (isLoading) return <Loading>Loading...</Loading>;
  if (isError) return <Message>Couldn't fetch data from server :'(</Message>;
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
          <StyledLink to="/" replace={true}>
            <Flex>
              <NextQuiz>New Quiz</NextQuiz>
            </Flex>
          </StyledLink>
        </>
      )}
    </>
  );
}
