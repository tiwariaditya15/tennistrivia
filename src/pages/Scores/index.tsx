import ScoreHeat from "./ScoreHeat";
import { useScores } from "../../hooks";
import { Message, Wrapper, Heading, Score } from "./styles";
import { Flex } from "../../components/shared/styles";

export default function Scores(): JSX.Element {
  const { data, isLoading, isError, error } = useScores();
  const forehandScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "forehand")
      .map((score) => <Score>{score.score}</Score>);

  const backhandScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "backhand")
      .map((score) => <Score>{score.score}</Score>);
  const basicsScores =
    data &&
    data["data"].scores
      .filter((score) => score.category.toLowerCase() === "basic")
      .map((score) => <Score>{score.score}</Score>);

  if (isLoading) return <Message marginTop="1rem">Loading scores...</Message>;
  if (isError)
    return <Message marginTop="1rem">Something went wrong :'(</Message>;
  if (!data?.["data"].scores.length)
    return (
      <Message marginTop="4rem">
        You have't played any quiz yet. Please attempt quizes.
      </Message>
    );
  return (
    <Wrapper>
      {data && <ScoreHeat scores={data["data"].scores} />}
      <Heading>Scores (by category)&nbsp;&rarr;</Heading>
      <Flex flexDirection="row" justify="space-between">
        <Heading>Basic</Heading>
        <Heading>Forehand</Heading>
        <Heading>Backhand</Heading>
      </Flex>
      <Flex flexDirection="row" justify="space-between">
        <Flex align="center">{basicsScores}</Flex>
        <Flex align="center">{forehandScores}</Flex>
        <Flex align="center">{backhandScores}</Flex>
      </Flex>
    </Wrapper>
  );
}
