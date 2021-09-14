import { Section, Learn, Learns } from "./styles";
export default function Description(): JSX.Element {
  return (
    <Section>
      <span>Learn</span>
      <Learns>
        <Learn>&#9900; How to stand when trying to hit forehand</Learn>
        <Learn>&#9900; Leg positions when hitting forehand/backhand</Learn>
        <Learn>&#9900; Tennis Serving Rules</Learn>
        <Learn>&#9900; Court rules</Learn>
        <Learn>&#9900; Point rules</Learn>
      </Learns>
    </Section>
  );
}
