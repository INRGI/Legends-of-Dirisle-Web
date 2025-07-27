import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: #111;
  padding: 2rem;
  border-radius: 16px;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #e53e3e;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Card = styled.div`
  display: flex;
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 180px;
  height: 120px;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 100%;
    height: 180px;
  }
`;

export const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EventTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

export const Timer = styled.div`
  font-family: monospace;
  font-size: 1.1rem;
  color: #f87171;
`;

export const EmptyText = styled.p`
  padding: 2rem;
  text-align: center;
  color: #999;
`;

// Modal styles
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #1a1a1a;
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  color: #fff;
  position: relative;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ModalBody = styled.div`
  margin-top: 1rem;
  h2 {
    margin-bottom: 0.5rem;
    color: #f87171;
  }
  p {
    margin-bottom: 1rem;
    color: #ccc;
  }
`;

export const EventDate = styled.div`
  font-size: 0.95rem;
  color: #999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;
