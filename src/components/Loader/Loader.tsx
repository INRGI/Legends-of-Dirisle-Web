import ClipLoader from "react-spinners/ClipLoader";
import styled from "@emotion/styled";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

type LoaderProps = {
  size?: number;
  color?: string;
};

const Loader = ({ size = 50, color = "#ff3333" }: LoaderProps) => {
  return (
    <LoaderWrapper>
      <ClipLoader size={size} color={color} />
    </LoaderWrapper>
  );
};

export default Loader;
