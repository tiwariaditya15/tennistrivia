import styled from "styled-components";

export const Question = styled.section`
  margin: 2rem 0;
  color: ${(props) => props.theme.primaryDark};
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Option = styled.section`
  border: 1px solid ${(props) => props.theme.background};
  padding: 1rem;
  color: ${(props) => props.theme.primary};
  width: 100%;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const Box = styled.section``;
