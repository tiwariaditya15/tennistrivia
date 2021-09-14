import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Appbar from "../../components/Appbar";
import Carousel from "../../components/Carousel";
import Description from "../../components/Description";
import { Flex, StyledLink } from "../../components/shared/styles";
import { images } from "../../assets/images";

export default function Home(): JSX.Element {
  return (
    <>
      <Appbar />
      <Carousel images={images} />
      <Flex>
        <StyledLink to="/basics">
          <Card title="Basics" description="Basics of tennis" mt={"6rem"} />
        </StyledLink>
        <StyledLink to="/forehand">
          <Card title="Forehand" description="Forehand Tricks" />
        </StyledLink>
        <StyledLink to="/backhand">
          <Card title="Backhand" description="Backhand Skills" />
        </StyledLink>
      </Flex>
      <Description />
      <Footer />
    </>
  );
}
