"use client";

import { useRouter } from "next/navigation";
import { Container, Description, Button, VideoWrapper, Iframe } from "./page.styled";

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <VideoWrapper>
        <Iframe
          src="https://www.youtube.com/embed/test_id?rel=0&showinfo=0&autoplay=0&modestbranding=1"
          title="Трейлер Legends of Dirisle"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </VideoWrapper>

      <Description>
        PvE сервер DayZ для справжніх фанатів виживання. Унікальна мапа, моди,
        події, тепла спільнота. Без рейдів. Без токсичності. Тільки DayZ.
      </Description>

      <Button onClick={() => router.push("/about")}>Дізнатися більше</Button>
    </Container>
  );
}
