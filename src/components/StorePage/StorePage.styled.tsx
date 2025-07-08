import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background: #0b0b0b;
  color: #ccc;
  min-height: 100vh;
  padding: 80px 16px 40px;
  animation: ${fadeUp} 0.6s ease-out;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 32px;
  width: 100%;
`;

export const Tab = styled.button<{ active: boolean }>`
  background: ${({ active }) => (active ? "#ff4444" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#888")};
  border: 1px solid ${({ active }) => (active ? "#ff4444" : "#333")};
  padding: 12px 28px;
  font-size: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #222;
    color: #fff;
  }

  & svg {
    font-size: 1.1rem;
  }
`;

export const ProductsSection = styled.section`
  width: 100%;
`;
