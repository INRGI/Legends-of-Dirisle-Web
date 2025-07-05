import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #111;
  border: 1px solid #333;
  padding: 16px;
  border-radius: 10px;
  color: white;
`;

export const Input = styled.input`
  background: #222;
  border: 1px solid #444;
  padding: 8px;
  border-radius: 6px;
  color: white;
`;

export const Select = styled.select`
  background: #222;
  border: 1px solid #444;
  padding: 8px;
  border-radius: 6px;
  color: white;
`;

export const Btn = styled.button`
  background: #a00;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #c00;
  }
`;
