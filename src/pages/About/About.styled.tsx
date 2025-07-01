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

export const Logo = styled.img`
  width: 300px;
`;

export const Container = styled.div`
  background: #0b0b0b;
  color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 16px 40px;
  min-height: 100vh;
  animation: ${fadeUp} 1.5s ease-out;
  box-sizing: border-box;
`;

export const Section = styled.section`
  max-width: 1000px;
  width: 100%;
  padding: 0;
  margin-bottom: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

export const StatGrid = styled.div`
  max-width: 1000px;
  width: 100%;
  background: #1a1a1a;
  padding: 24px 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const StatItem = styled.div`
  flex: 1 1 220px;
  max-width: 300px;
  min-width: 220px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 100%;
    min-width: auto;
  }
`;

export const Label = styled.span`
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 4px;
`;

export const Value = styled.span`
  font-size: 1.05rem;
  color: #fff;
  font-weight: 500;
`;

export const ModsSection = styled.div`
  max-width: 1000px;
  width: 100%;
  background: #1a1a1a;
  padding: 24px 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  margin: 0 auto;

  h2 {
    color: #ff2e2e;
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const ModsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 12px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px 0;
  }
`;

export const ModItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 0.85rem;
  color: #ff4444;
  background: #1a1a1a;
  border: 1.5px solid #ff4444;
  border-radius: 9999px;
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    background: #ff4444;
    color: #1a1a1a;
    border-color: #ff6666;
  }

  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    white-space: normal;
    justify-content: center;
    padding: 10px 0;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 0;
  }
`;


