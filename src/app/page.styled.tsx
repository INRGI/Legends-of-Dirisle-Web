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
  gap: 16px;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 24px;
  background-color: #0c0c0c;
  background-image: radial-gradient(circle at 30% 30%, rgba(255, 0, 0, 0.08), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(255, 20, 20, 0.06), transparent 65%),
    radial-gradient(circle at 50% 50%, rgba(200, 0, 0, 0.05), transparent 75%);
  background-blend-mode: screen;
  animation: ${smokeAnimation} 35s ease-in-out infinite;
  background-size: 250% 250%;
  text-align: center;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(230, 57, 70, 0.5);
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

export const Description = styled.p`
  max-width: 520px;
  color: #bbb;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Button = styled.button`
  padding: 10px 28px;
  background: transparent;
  border: 2px solid #e63946;
  border-radius: 24px;
  color: #e63946;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  user-select: none;

  &:hover {
    background-color: #e63946;
    color: #0c0c0c;
  }

  &:active {
    background-color: #a02732;
    border-color: #a02732;
  }

  @media (max-width: 480px) {
    padding: 8px 22px;
    font-size: 0.9rem;
  }
`;
