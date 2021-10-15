import { useEffect, useState } from "react";
import { calculateScore, calculateAttempts } from "./utility";
import { PolarArea } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { Score } from "../../types/quiz.types";
import { Heading } from "./styles";
import { Flex } from "../../components/shared/styles";
type ScoreHeatProps = {
  scores: Score[];
};

export default function ScoreHeat({ scores }: ScoreHeatProps): JSX.Element {
  const [scoreData, setScoreData] = useState<ChartData | null>(null);
  const [attemptsData, setAttemptsData] = useState<ChartData | null>(null);

  useEffect(() => {
    if (scores.length) {
      setScoreData({
        labels: ["Basics", "Forehand", "Backhand"],
        datasets: [
          {
            label: "Score Aggregation Map",
            data: [
              calculateScore(scores, "basic"),
              calculateScore(scores, "forehand"),
              calculateScore(scores, "backhand"),
            ],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      });

      setAttemptsData({
        labels: ["Basics", "Forehand", "Backhand"],
        datasets: [
          {
            label: "Score Aggregation Map",
            data: [
              calculateAttempts(scores, "basic"),
              calculateAttempts(scores, "forehand"),
              calculateAttempts(scores, "backhand"),
            ],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(75, 192, 192)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      });
    }
  }, [scores]);
  return (
    <>
      <Flex flexDirection="row" justify="center">
        <Heading>Number of attempts in each quiz</Heading>
      </Flex>
      {attemptsData && <PolarArea data={attemptsData} />}
      <Flex flexDirection="row" justify="center">
        <Heading>Score Aggregation Map</Heading>
      </Flex>
      {scoreData && <PolarArea data={scoreData} />}
    </>
  );
}
