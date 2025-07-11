import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  max-height: 100vh;
`;

export const ModalContainer = styled.div`
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  color: white;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: calc(95% - 40px);
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #ff3333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #2a2a2a;
  color: white;
`;

export const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #2a2a2a;
  color: white;
  resize: vertical;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #2a2a2a;
  color: white;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const SubmitButton = styled.button`
  padding: 10px 16px;
  background: #ff3333;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #cc0000;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  background: #444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #666;
  }
`;
