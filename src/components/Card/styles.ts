import styled from "styled-components";
import { CardContainerProps } from "./styles.types";

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: ${(props) => props.theme.primaryDark};
  background: ${(props) => props.theme.backgroundLight};
  padding: 2rem;
  width: ${(props: CardContainerProps) => props.width || "100%"};
  border-radius: 0.1rem;
  margin: 0.2rem;
  cursor: pointer;
  margin-top: ${(props: CardContainerProps) => props.mt || "0"};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const CardHeader = styled.section``;

export const CardContent = styled.section`
  color: ${(props) => props.theme.primary};
`;
