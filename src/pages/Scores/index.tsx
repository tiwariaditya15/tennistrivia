import { useScores } from "../../hooks";
import { Message } from "./styles";
export default function Scores(): JSX.Element {
  const { data, isLoading, isError, error } = useScores();

  const forehandScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "forehand")
      .map((score) => (
        <h3>
          {score.category}-{score.score}
        </h3>
      ));

  const backhandScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "backhand")
      .map((score) => (
        <h3>
          {score.category}-{score.score}
        </h3>
      ));
  const basicsScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "basic")
      .map((score) => (
        <h3>
          {score.category}-{score.score}
        </h3>
      ));
  if (isLoading) return <Message marginTop="1rem">Loading scores...</Message>;
  if (isError)
    return <Message marginTop="1rem">Something went wrong :'(</Message>;
  if (!data?.["data"].scores.length)
    return (
      <Message marginTop="4rem">
        You have't played any quiz yet. Please attempt quizes.
      </Message>
    );
  console.log({ data });
  return (
    <>
      <section>{basicsScores}</section>
      <section>{forehandScores}</section>
      <section>{backhandScores}</section>
    </>
  );
}
