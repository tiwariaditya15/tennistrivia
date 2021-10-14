import styled from "styled-components";

export const Box = styled.section`
  background: ${(props) => props.theme.primaryDark};
  color: ${(props) => props.theme.background};
  padding: 1.4rem 0;
  margin-bottom: 0%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

export const SidenavIcon = styled.img`
  background-color: ${(props) => props.theme.background};
  width: 1.5rem;
  margin-left: 0.6rem;
  border-radius: 0.1rem;
  cursor: pointer;
`;
