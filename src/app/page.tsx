"use client";

import { useRouter } from "next/navigation";
import { Container, Description, Button, HeaderWrapper } from "./page.styled";
import UpcomingEvents from "@/components/UpcomingEvents";
export default function Home() {
  const router = useRouter();

  return (
    <Container>
       <UpcomingEvents />
      <HeaderWrapper>
        <Description>
          PvE сервер DayZ для справжніх фанатів виживання. Унікальна мапа, моди,
          події, тепла спільнота. Без рейдів. Без токсичності. Тільки DayZ.
        </Description>

        <Button onClick={() => router.push("/about")}>Дізнатися більше</Button>
      </HeaderWrapper>
    </Container>
  );
}
