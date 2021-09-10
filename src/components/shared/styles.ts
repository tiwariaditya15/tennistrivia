import styled from "styled-components";
import { ContainerProps } from "./styles.types";

export const Container = styled.section`
  display: ${(props: ContainerProps) => (props.flex ? "flex" : "block")};
`;
