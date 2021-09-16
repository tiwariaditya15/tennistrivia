import styled from "styled-components";

export const Box = styled.section`
  width: 50%;
  margin-top: 3rem;

  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const QuestionNumber = styled.section`
  color: ${(props) => props.theme.primary};
  font-size: 1.2rem;
  font-weight: 300;
`;

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
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const Next = styled.button`
  background-color: ${(props) => props.theme.primaryDark};
  color: ${(props) => props.theme.background};
  border: 0;
  padding: 0.8rem 1.8rem;
  border-radius: 0.1rem;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export const Skip = styled(Next)`
  color: ${(props) => props.theme.primaryDark};
  border: 1px solid ${(props) => props.theme.primaryDark};
  background-color: inherit;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
