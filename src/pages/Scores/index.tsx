import { useScores } from "../../hooks";

export default function Scores(): JSX.Element {
  const { data, isLoading, isError, error } = useScores();
  console.log({ data, isLoading, isError, error });
  return <>Scores!</>;
}
