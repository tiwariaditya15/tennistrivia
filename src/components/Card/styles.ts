import styled from "styled-components";
import { CardContainerProps } from "./styles.types";

export const CardContainer = styled.section`
  color: ${(props) => props.theme.backgroundDark};
  background: ${(props) => props.theme.backgroundLight};
  padding: 0.4rem;
  width: ${(props: CardContainerProps) => props.width || "100%"};
  border-radius: 0.2rem;
  margin: 0.2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const CardHeader = styled.section`
  &:hover {
    text-decoration: underline;
  }
`;

export const CardContent = styled.section`
  color: ${(props) => props.theme.background};
`;
