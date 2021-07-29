import styled from "@emotion/styled";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.7);
`;

export const Image = styled.img`
  width: 800px;
  height: auto;

  opacity: 1;
`;
