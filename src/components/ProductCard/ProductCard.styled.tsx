import styled from "@emotion/styled";

export const Card = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 0.8rem;
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Price = styled.p`
  color: #ff3333;
  font-weight: bold;
  margin: 0.3rem 0;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  color: #ff3333;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;
