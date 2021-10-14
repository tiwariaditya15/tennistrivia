import { useScores } from "../../hooks";
import { Message } from "./styles";
export default function Scores(): JSX.Element {
  const { data, isLoading, isError, error } = useScores();
  console.log({ data, isLoading, isError, error });
  if (isLoading) return <Message>Loading scores...</Message>;
  return <></>;
}
