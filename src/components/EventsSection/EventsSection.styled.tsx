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
  background-color: #1a1a1a;
  border: 1px solid rgba(255, 0, 0, 0.4);
  padding: 10px 16px;
  border-radius: 10px;
  max-width: 450px;
  margin-bottom: 10px;

  svg {
    margin-right: 8px;
    color: #ff5555;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    font-size: 1.1rem;
  }
`;

export const BackButton = styled.button`
  background: #1b1b1b;
  border: 1px solid rgba(204, 0, 0, 0.4);
  border-radius: 10px;
  padding: 9px 18px;
  color: #cc0000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 7px;

  &:hover {
    border-color: rgba(255, 0, 0, 0.6);
    box-shadow: 0 0 14px rgba(255, 0, 0, 0.3);
    background: #2a0d0d;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const AddButton = styled(BackButton)`
  color: #00ff88;
  border-color: rgba(0, 255, 136, 0.4);

  &:hover {
    border-color: rgba(0, 255, 136, 0.6);
    box-shadow: 0 0 14px rgba(0, 255, 136, 0.3);
    background: #0d2a1a;
  }
`;

export const Wrapper = styled.div`
  color: #fff;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: #ff4444;
  margin: 0;
  padding: 0;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
`;
