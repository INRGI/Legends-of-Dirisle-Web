import styled from "@emotion/styled";

export const Wrapper = styled.div`
  color: #fff;
  width: 100%;
`;

export const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ff4444;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 0 0 transparent;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 10px rgba(255, 68, 68, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const EventTitle = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #f1f1f1;
`;

export const Timer = styled.div`
  font-family: "Courier New", monospace;
  font-size: 1rem;
  color: #ff6666;
`;

export const EmptyText = styled.p`
  color: #777;
  text-align: center;
  padding: 3rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalContent = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  color: #fff;
  position: relative;
  margin: 0;
  padding: 0;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ModalBody = styled.div`
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    color: #ff4444;

    @media (max-width: 480px) {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
`;

export const EventDate = styled.div`
  font-size: 0.9rem;
  color: #999;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999999;

  &:hover {
    color: #ff4444;
  }
`;
