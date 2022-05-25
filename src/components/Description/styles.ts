import styled from "styled-components";

type SectionProps = {
  pb?: string;
  pt?: string;
};
type LearnsProps = {
  pb?: string;
  pt?: string;
};

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundLight};
  color: ${(props) => props.theme.primary};
  margin-top: 6rem;
  margin-bottom: 6rem;
  padding: 1.5rem;
  font-size: 1.4rem;
  padding-bottom: ${(props: SectionProps) => props.pb || ""};
  padding-top: ${(props: SectionProps) => props.pt || ""};
`;

export const Learns = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: ${(props: LearnsProps) => props.pb || ""};
  padding-top: ${(props: LearnsProps) => props.pt || ""};
`;

export const Learn = styled.section`
  margin: 0.8rem 0;
`;
