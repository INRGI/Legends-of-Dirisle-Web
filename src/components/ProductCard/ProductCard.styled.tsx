import styled from "@emotion/styled";

export const Card = styled.div`
  background: #111;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 12px;
  color: white;
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Title = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

export const Price = styled.div`
  font-weight: bold;
  color: #f00;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Btn = styled.button`
  flex: 1;
  padding: 6px;
  background: #222;
  color: white;
  border: 1px solid #444;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #f00;
  }
`;