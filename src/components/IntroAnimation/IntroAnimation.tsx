import { useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: fixed;
  inset: 0;
  z-index: 10001;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 300px;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out forwards;
  animation-delay: 0.5s;
`;

const Crows = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 120vw;   
  height: 120vh;  
  object-fit: cover;  
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
  z-index: 1;
  transform: translate(-10vw, -10vh); 
`;



interface Props {
  onFinish: () => void;
}

export const IntroAnimation: React.FC<Props> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Wrapper>
      <Logo src="/logo2.png" alt="Logo" />
      <Crows src="/crows.gif" alt="Crows" />
    </Wrapper>
  );
};

export default IntroAnimation;
