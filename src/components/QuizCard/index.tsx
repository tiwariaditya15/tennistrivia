import { Quiz } from "../../types/quiz.types";
import { Option, Question, Box } from "./styles";

type QuizProps = {
  quiz: Quiz;
};
export default function QuizCard({ quiz }: QuizProps): JSX.Element {
  return (
    <Box>
      <Question>{quiz.question}</Question>
      {quiz.options.map((option) => (
        <Option>{option}</Option>
      ))}
    </Box>
  );
}
