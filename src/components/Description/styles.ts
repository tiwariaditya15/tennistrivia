import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.background};
  margin-top: 6rem;
  margin-bottom: 6rem;
  padding: 1.5rem;
  font-size: 1.4rem;
`;

export const Learns = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Learn = styled.section`
  margin: 0.8rem 0;
`;
