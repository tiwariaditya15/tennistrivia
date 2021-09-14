import styled from "styled-components";

export const Box = styled.section`
  background: ${(props) => props.theme.backgroundDark};
  color: ${(props) => props.theme.primary};
  padding: 1.2rem;
  margin-bottom: 0%;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
`;
