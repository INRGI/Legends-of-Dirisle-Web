'use client'
import Link from "next/link";
import styled from "@emotion/styled";
import { IoHome } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #0a0a0a;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #ff4444;
  margin-bottom: 12px;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.4);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 32px;
  color: #ccc;
`;

const StyledLink = styled(Link)`
  background-color: #141414;
  color: #ff4444;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 0, 0, 0.2);
  box-shadow: 0 0 6px rgba(255, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #1e1e1e;
    color: #ffffff;
    border-color: #ff2e2e;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
  }
`;

export default function Custom404() {
  return (
    <Container>
      <Title>404</Title>
      <Subtitle>Сторінку не знайдено</Subtitle>
      <StyledLink href="/"><IoHome /> Назад на головну</StyledLink>
    </Container>
  );
}
