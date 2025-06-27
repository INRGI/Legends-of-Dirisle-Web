import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const smokeAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: #0c0c0c;
  background-image:
    radial-gradient(circle at 30% 30%, rgba(255, 0, 0, 0.08), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(255, 20, 20, 0.06), transparent 65%),
    radial-gradient(circle at 50% 50%, rgba(200, 0, 0, 0.05), transparent 75%);
  background-blend-mode: screen;
  animation: ${smokeAnimation} 35s ease-in-out infinite;
  background-size: 250% 250%;
  overflow: hidden;
`;
