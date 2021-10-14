import styled from "styled-components";
import { MessageProps } from "./styles.types";

export const Message = styled.section`
  color: ${(props) => props.theme.primary};
  display: flex;
  justify-content: center;
  margin-top: ${(props: MessageProps) => props.marginTop || "0"};
`;
