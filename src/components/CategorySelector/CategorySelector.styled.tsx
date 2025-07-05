import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ active }) => (active ? "#a00" : "#222")};
  color: white;
  border: 1px solid #a00;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #a00;
  }
`;