import styled from "styled-components";

export const CardContainer = styled.section`
  color: ${(props) => props.theme.primary}};
  border: ${(props) => props.theme.background};
  width: 25%;
`;

export const CardHeader = styled.section`
  padding: 0.4rem;
`;
