import styled from "styled-components";
export const Wrapper = styled.section`
  width: 30%;
  margin: 4rem auto;
  @media screen and (max-width: 748px) {
    width: 90%;
  }
`;

export const FillCreds = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.primaryDark};
  color: ${(props) => props.theme.background};
  border: 0;
  padding: 0.6rem 1.8rem;
  border-radius: 0.2rem;
  cursor: pointer;
`;

export const Redirect = styled.section`
  width: 100%;
  margin: 0.6rem auto;
  color: ${(props) => props.theme.primary};
`;

export const Text = styled.h5`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: #e53e3e;
  margin: 0.1rem;
`;
