import styled from "@emotion/styled";

export const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  width: 320px;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.05);
  color: #f0f0f0;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #ff2a2a;
  text-align: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
`;

export const StatusCircle = styled.span<{ online: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? "#27ae60" : "#c0392b")};
`;
