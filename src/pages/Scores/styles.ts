import styled from "styled-components";
import { MessageProps } from "./styles.types";

export const ScoreGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

export const Message = styled.section`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  margin-top: ${(props: MessageProps) => props.marginTop || "0"};
`;

export const Wrapper = styled.section`
  margin: 0 auto;
  width: 36%;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const Heading = styled.h3`
  color: ${(props) => props.theme.primaryDark};
  padding: 0.4rem 0;
  margin: 0.4rem auto;
`;

export const Score = styled.h4`
  color: ${(props) => props.theme.primary};
`;
