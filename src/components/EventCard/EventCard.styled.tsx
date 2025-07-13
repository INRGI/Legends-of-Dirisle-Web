import styled from "@emotion/styled";

export const Card = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
  }
`;

export const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #ff4444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DateText = styled.p`
  font-size: 0.9rem;
  color: #cc0000;
  font-weight: 600;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  margin: 0;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #ff4444;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }
`;
