import Card from "../../components/Card";
import { Appbar } from "../../components/Appbar";
import { Carousel } from "../../components/Carousel";
import { Flex, StyledLink } from "../../components/shared/styles";
import { images } from "../../assets/images";

export default function Home(): JSX.Element {
  return (
    <>
      <Appbar />
      <Carousel images={images} />
      <Flex>
        <StyledLink to="/basics">
          <Card title="Basics" description="Basics of tennis" mt={"4rem"} />
        </StyledLink>
        <StyledLink to="/forehand">
          <Card title="Forehand" description="Forehand Tricks" />
        </StyledLink>
        <StyledLink to="/backhand">
          <Card title="Backhand" description="Backhand Skills" />
        </StyledLink>
      </Flex>
    </>
  );
}
