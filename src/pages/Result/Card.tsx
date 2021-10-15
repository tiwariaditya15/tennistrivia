import { Box } from "./styles";
import { Quiz } from "../../types/quiz.types";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";
import { Selection } from "../../contexts/quiz/quizState.types";
type CardProps = {
  quiz: Quiz;
  quizIdx: number;
};

export default function Card({ quiz, quizIdx }: CardProps): JSX.Element {
  const {
    quizState: { selectedOptions },
  } = useQuizContext();

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
          wrong={
            selectedOptions.reduce((acc, cur) => {
              if (cur.category.toLowerCase() === quiz.category.toLowerCase()) {
                const selected =
                  cur.selection[(quizIdx + 1) as keyof Selection];
                return selected !== quiz.correctOption - 1 &&
                  selected === optionIdx
                  ? true
                  : acc;
              }
              return acc;
            }, false)
              ? "red"
              : undefined
          }
          border
        >
          {option}
        </Box>
      ))}
    </>
  );
}
