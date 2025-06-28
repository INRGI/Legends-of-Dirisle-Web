import { useState } from "react";
import { Container } from "./Home.styled";
import IntroAnimation from "../../components/IntroAnimation";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroAnimation onFinish={() => setShowIntro(false)} />
  ) : (
    <>
      <Header />
      <Container>
        <h1>Home</h1>
      </Container>
    </>
  );
};

export default Home;
