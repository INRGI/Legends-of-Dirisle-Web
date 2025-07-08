import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: #111;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #222;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 14px rgba(255, 68, 68, 0.2);
  }
`;

export const Slider = styled.div`
  border-bottom: 1px solid #222;
`;

export const Slide = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: #eee;
  padding: 10px 14px 0;
`;

export const Price = styled.div`
  color: #ff4444;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0 0 10px 14px;
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 300px);
  text-align: center;
  color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.div`
  margin-top: 12px;
  font-size: 1rem;
  color: #777;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999998;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  color: #eee;
  position: relative;

  h2 {
    margin: 0;
    padding: 0 15px 0 15px;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.95rem;
    color: #bbb;
    margin: 0;
    padding: 15px;
    white-space: pre-line;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  color: #888;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 999999;

  &:hover {
    color: #ff4444;
  }
`;

export const ModalSlider = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ModalSlide = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
