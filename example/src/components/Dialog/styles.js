import styled from "styled-components";

export const Dialog = styled.div`
  background-color: #fff;
  border-radius: 3px;
  /* Leave space for 15px of the close button */
  max-width: calc(100vw - 40px);
  padding: 1rem;
  position: relative;
`;
export const CornerCloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;
export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  width: 100vw;

  @supports (backdrop-filter: blur(5px)) {
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(3px);
  }
`;
