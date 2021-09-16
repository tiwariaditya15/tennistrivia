import Timer from "../Timer";
import { Quiz } from "../../types/quiz.types";
import { Option, Question, Box, QuestionNumber, Next, Skip } from "./styles";
import { Flex } from "../shared/styles";

type QuizProps = {
  quiz: Quiz;
};
export default function QuizCard({ quiz }: QuizProps): JSX.Element {
  return (
    <Box>
      <Flex flexDirection="row" justify="space-between">
        <QuestionNumber>No.</QuestionNumber>
        <Timer />
      </Flex>
      <Question>{quiz.question}</Question>
      {quiz.options.map((option) => (
        <Option>{option}</Option>
      ))}
      <Flex flexDirection="row" justify="space-between">
        <Skip>Skip</Skip>
        <Next>Next</Next>
      </Flex>
    </Box>
  );
}
