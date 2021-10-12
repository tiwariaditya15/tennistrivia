import { Box } from "./styles";
import { Quiz } from "../../types/quiz.types";

type CardProps = {
  quiz: Quiz;
  quizIdx: number;
};

export default function Card({ quiz, quizIdx }: CardProps): JSX.Element {
  return (
    <>
      <Box mt="2rem" mb="0.5rem" fontSize="1.2rem" key={quiz.id}>
        {quizIdx + 1}.&nbsp;{quiz.question}
      </Box>
      {quiz.options.map((option: string, optionIdx: number) => (
        <Box
          key={optionIdx}
          p="0.5rem"
          correct={quiz.correctOption - 1 === optionIdx ? "green" : undefined}
          border
        >
          {option}
        </Box>
      ))}
    </>
  );
}
