import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContainerProps, FlexProps, StyledLinkProps } from "./styles.types";

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
  width: 40%;
  color: ${(props) => props.theme.background};
  text-decoration: none;
  padding: ${(props: StyledLinkProps) => props.p || "0.2rem"};
  margin: ${(props: StyledLinkProps) => props.margin || "0.2rem"};
  margin-left: ${(props: StyledLinkProps) => props.ml || "0rem"};
  @media screen and (max-width: 748px) {
    width: 70%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin: 0.2rem auto;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.2rem;
  &::focus {
    border: 1px solid ${(props) => props.theme.primaryDark};
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.primaryDark};
  color: ${(props) => props.theme.background};
  border: 0;
  padding: 0.6rem 1.8rem;
  border-radius: 0.2rem;
  margin: 1rem 0;
  cursor: pointer;
`;

export const Bold = styled.span`
  font-weight: 800;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
`;
