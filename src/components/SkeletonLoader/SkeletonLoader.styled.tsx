import styled from "@emotion/styled";

export const SkeletonBox = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  height: 280px;
  width: 100%;
  max-width: 280px;
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;
