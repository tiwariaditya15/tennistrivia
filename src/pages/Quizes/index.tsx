import { useParams } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import { Flex } from "../../components/shared/styles";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";
import { useQuiz } from "../../hooks/";
import { Message } from "./styles";

export default function Quizes(): JSX.Element {
  const { category } = useParams();
  const { isLoading, data, error } = useQuiz(category);
  const {
    quizState: { current },
  } = useQuizContext();
  if (error)
    return (
      <Message marginTop="3rem">Couldn't fetch data from server :'(</Message>
    );
  return (
    <Flex>
      {isLoading ? (
        <Message>Loading...</Message>
      ) : (
        <QuizCard quiz={data.quizes[current - 1]} />
      )}
    </Flex>
  );
}
