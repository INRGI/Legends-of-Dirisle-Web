import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const Container = styled.div`
  padding: 100px 24px 40px;
  margin: 0;
  background: #0b0b0b;
  color: #ccc;
  min-height: calc(100vh - 64px);
`;

export const Title = styled.h1`
  color: #ff4444;
  font-size: 2rem;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.4);
  margin-bottom: 24px;
  text-align: center;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #141414;
  border: 1px solid rgba(255, 0, 0, 0.3);
  padding: 10px 16px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto 32px;

  svg {
    margin-right: 8px;
    color: #ff4444;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: white;
    outline: none;
    font-size: 1rem;
  }
`;

export const RulesGrid = styled.div`
  display: grid;
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CategoryCard = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 0, 0, 0.2);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.1);

  opacity: 0;
  animation: ${fadeInUp} 1.2s ease forwards;
  animation-delay: 0.3s;
`;

export const RuleCard = styled.div`
  margin-bottom: 16px;

  opacity: 0;
  animation: ${fadeInUp} 1.2s ease forwards;
  animation-delay: 0.6s;
`;

export const RuleText = styled.p`
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
  white-space: pre-line;
`;

export const CategoryTitle = styled.h2`
  color: #ff2e2e;
  font-size: 1.5rem;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const RuleTitle = styled.h3`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const ToggleIcon = styled.span`
  margin-left: 8px;
  color: #ff4444;
  font-size: 0.9rem;
`;

export const RulePunishment = styled.p`
  color: #ff6666;
  font-size: 0.9rem;
  margin-top: 4px;
  line-height: 1.4;
`;
