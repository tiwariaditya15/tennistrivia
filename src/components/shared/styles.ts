import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContainerProps, FlexProps } from "./styles.types";

export const Container = styled.section`
  display: ${(props: ContainerProps) => (props.flex ? "flex" : "")};
`;

export const Flex = styled.section`
  display: flex;
  flex-direction: ${(props: FlexProps) => props.flexDirection || "column"};
  justify-content: ${(props: FlexProps) => props.justify || "center"};
  align-items: ${(props: FlexProps) => props.align || "center"};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.4rem;
  margin: 0.4rem;
`;
