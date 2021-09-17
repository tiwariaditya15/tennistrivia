import { useState } from "react";
import { useQuizContext } from "../../contexts/QuizProvider";
import { nextQuestion, skipQuestion } from "../../actions/quiz";
import { useTimer } from "../../hooks";
import { Quiz } from "../../types/quiz.types";
import {
  Option,
  Question,
  Box,
  QuestionNumber,
  Next,
  Skip,
  Countdown,
} from "./styles";
import { Flex } from "../shared/styles";

type QuizProps = {
  quiz: Quiz;
};

export default function QuizCard({ quiz }: QuizProps): JSX.Element {
  const [attempted, setAttempted] = useState<boolean>(false);
  const {
    quizDispatch,
    quizState: { current },
  } = useQuizContext();

  const { countdown } = useTimer();
  const checkAnswer = (selectedOption: string, idx: number) => {
    console.log({
      selectedOption,
      idx,
      a: quiz.correctValue,
      b: quiz.correctOption,
    });
    if (
      selectedOption === quiz.correctValue &&
      idx === quiz.correctOption - 1
    ) {
      console.log("hurray you got it right");
    } else {
      console.log("uhh uhh wrong");
    }
  };

  const handleSelection = (option: string, idx: number) => {
    setAttempted(true);
    checkAnswer(option, idx);
  };

  return (
    <Box>
      <Flex flexDirection="row" justify="space-between">
        <QuestionNumber>Q.{current}</QuestionNumber>
        <Countdown>{countdown}</Countdown>
      </Flex>
      <Question>{quiz.question}</Question>
      {quiz.options.map((option, idx) => (
        <Option onClick={() => handleSelection(option, idx)} key={idx}>
          {option}
        </Option>
      ))}
      <Flex flexDirection="row" justify="space-between">
        <Skip onClick={() => skipQuestion(quizDispatch)}>Skip</Skip>
        <Next>Next</Next>
      </Flex>
    </Box>
  );
}
