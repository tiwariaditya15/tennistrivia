import Card from "../../components/Card";
import { Flex, StyledLink } from "../../components/shared/styles";

export default function Home(): JSX.Element {
  return (
    <Flex flexDirection="column">
      <StyledLink to="/basics">
        <Card title="Basics" description="Basics of tennis" />
      </StyledLink>
      <StyledLink to="/forehand">
        <Card title="Forehand" description="Forehand Tricks" />
      </StyledLink>
      <StyledLink to="/backhand">
        <Card title="Backhand" description="Backhand Skills" />
      </StyledLink>
    </Flex>
  );
}
