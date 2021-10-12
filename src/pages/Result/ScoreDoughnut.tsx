import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { DoughnutWrapper } from "./styles";
import { useQuizContext } from "../../contexts/quiz/QuizProvider";

export default function ScoreDoughnut(): JSX.Element {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const {
    quizState: { score },
  } = useQuizContext();
  useEffect(() => {
    setChartData({
      labels: ["Correct", "Incorrect"],
      datasets: [
        {
          label: "Result",
          backgroundColor: ["#38A169", "#E53E3E"],
          borderColor: "#F7FAFC",
          data: [(score / 20) * 100, 100 - (score / 20) * 100],
        },
      ],
    });
  }, []);
  return (
    <DoughnutWrapper>
      {chartData && <Doughnut data={chartData} width={300} />}
    </DoughnutWrapper>
  );
}
