import styled from "styled-components";

export const Overlay = styled.section`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ModalBody = styled.section`
  background-color: ${(props) => props.theme.primaryDark};
  width: 20%;
  color: ${(props) => props.theme.background};
  height: 100%;
  @media screen and (max-width: 748px) {
    width: 38%;
  }
`;
