import styled from "styled-components";
import { BoxProps, MessageProps } from "./styles.types";
import { Next } from "../../components/QuizCard/styles";

export const Loading = styled.section`
  margin-top: 1rem;
  color: ${(props) => props.theme.primary};
`;

export const Box = styled.section`
  width: 35%;
  color: ${(props) => props.theme.primary};

  font-size: ${(props: BoxProps) => props.fontSize || "1rem"};

  margin: ${(props: BoxProps) => props.mt || "0"} auto
    ${(props: BoxProps) => props.mb || "0"} auto;

  border: ${(props: BoxProps) => (props.border ? "1px" : "0px")} solid
    ${(props: BoxProps) => props.correct || props.wrong || "#E2E8F0"};

  padding: ${(props: BoxProps) => props.p || "0rem"};

  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const Score = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  margin: 1.4rem auto -1rem auto;
  color: ${(props) => props.theme.primary};
  font-style: italic;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const Point = styled.section`
  font-size: 1.2rem;
  padding: 0 0.2rem;
  color: ${(props) => props.theme.primaryDark};
`;

export const Message = styled.section`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  margin-top: ${(props: MessageProps) => props.marginTop || "0"};
`;

export const DoughnutWrapper = styled.section`
  margin: 0 auto;
  width: 35%;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const NextQuiz = styled(Next)`
  border-radius: 0.2rem;
`;
