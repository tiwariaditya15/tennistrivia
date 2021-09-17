import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";
import {
  answeredCorrect,
  nextQuestion,
  answeredWrong,
} from "../../actions/quiz";
import { useTimer } from "../../hooks";
import { Quiz } from "../../types/quiz.types";
import {
  Option,
  Question,
  Box,
  QuestionNumber,
  Next,
  Countdown,
} from "./styles";
import { Flex } from "../shared/styles";

type QuizProps = {
  quiz: Quiz;
};

export default function QuizCard({ quiz }: QuizProps): JSX.Element {
  const [attempted, setAttempted] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const navigate = useNavigate();
  const {
    quizDispatch,
    quizState: { current },
  } = useQuizContext();

  const { countdown, setCountdown } = useTimer();

  const checkAnswer = (selectedOption: string, idx: number) => {
    if (
      selectedOption === quiz.correctValue &&
      idx === quiz.correctOption - 1
    ) {
      answeredCorrect(quizDispatch);
    } else {
      answeredWrong(quizDispatch);
    }
  };

  const handleSelection = (option: string, idx: number) => {
    setAttempted(true);
    setSelectedIdx(idx);
    checkAnswer(option, idx);
  };

  useEffect(() => {
    if (countdown === 0) {
      setAttempted(true);
    }
    if (attempted) {
      setCountdown(0);
    }
  }, [countdown]);
  return (
    <Box>
      <Flex flexDirection="row" justify="space-between">
        <QuestionNumber>Q.{current}</QuestionNumber>
        <Countdown>{countdown}/30</Countdown>
      </Flex>
      <Question>{quiz.question}</Question>
      {quiz.options.map((option, idx) => (
        <Option
          onClick={() => {
            if (!attempted) {
              handleSelection(option, idx);
            }
          }}
          key={idx}
          {...(attempted &&
            selectedIdx === quiz.correctOption - 1 &&
            idx === selectedIdx && { correct: "green" })}
          {...(attempted &&
            selectedIdx !== quiz.correctOption - 1 &&
            selectedIdx === idx && { incorrect: "red" })}
          notAllowed={countdown === 0 || attempted === true ? true : false}
        >
          {option}
        </Option>
      ))}
      <Flex flexDirection="row" justify="flex-end">
        <Next
          onClick={() => {
            nextQuestion(quizDispatch);
            setSelectedIdx(-1);
            setAttempted(false);
            setCountdown(30);
            if (current === 5) {
              navigate("/results", { replace: true });
            }
          }}
        >
          Next
        </Next>
      </Flex>
    </Box>
  );
}
