import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;
export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #141414;
  border: 1px solid rgba(255, 0, 0, 0.3);
  padding: 10px 16px;
  border-radius: 8px;
  max-width: 400px;

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

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid rgba(204, 0, 0, 0.3);
  background: #121212;
  border-radius: 8px;
  padding: 8px 16px;
  color: #cc0000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    border-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0 0 12px rgba(255, 0, 0, 0.2);
    background: #1a0d0d;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const AddButton = styled(BackButton)`
  color: #00ff00;
  border-color: rgba(0, 255, 0, 0.3);

  &:hover {
    border-color: rgba(0, 255, 0, 0.5);
    box-shadow: 0 0 12px rgba(0, 255, 0, 0.2);
    background: #0d1a0d;
  }
`;



export const Wrapper = styled.div`
  color: #fff;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ff3333;
  margin: 0;
  padding: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
`;