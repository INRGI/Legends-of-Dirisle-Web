import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: calc(100%);
  min-height: calc(100vh - 64px);
  padding: 60px 24px 20px;
  background: #0d0d0d;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 480px) {
    padding: 60px 12px 10px;
  }
`;

export const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  min-height: calc(100vh - 150px);
  justify-content: center;
`;

export const Card = styled.div`
  background: #121212;
  border: 1px solid rgba(204, 0, 0, 0.3);
  border-radius: 12px;
  width: calc(100% - 40px);
  max-width: 320px;
  height: 70px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(204, 0, 0, 0.1);

  &:hover {
    border-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0 0 12px rgba(255, 0, 0, 0.2);
    background: #1a0d0d;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff3b3b;
  margin: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardSubtitle = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin: 0;
`;

export const SectionContainer = styled.div`
  margin-top: 30px;
  padding: 24px;
  background: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 0 10px #a3000088;
`;

export const DeniedContainer = styled.div`
  height: 100vh;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff4d4d;
  font-size: 1.2rem;
  font-weight: bold;
`;
