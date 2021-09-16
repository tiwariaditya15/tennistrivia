import { useParams } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import { Flex } from "../../components/shared/styles";
import { useQuiz } from "../../hooks/";
import { Message } from "./styles";

export default function Quizes(): JSX.Element {
  const { category } = useParams();
  const { isLoading, data } = useQuiz(category);

  if (!data) return <Message>Something went wrong! Try refreshing!</Message>;
  return (
    <Flex>
      {isLoading && <Message>Loading...</Message>}
      <QuizCard quiz={data.quizes[0]} />
    </Flex>
  );
}
