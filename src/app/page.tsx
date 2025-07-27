"use client";

import { useRouter } from "next/navigation";
import { Container, Description, Button, VideoWrapper, Iframe } from "./page.styled";
// import UpcomingEvents from "@/components/UpcomingEvents";
// import { Event } from "@/types";

export default function Home() {
  const router = useRouter();


  //  const mockEvents: Event[] = [
  //   {
  //     id: "1",
  //     title: "Нічний рейд на авіабазу",
  //     description: "Під покровом ночі збираємось біля північного входу на авіабазу. Всі з глушниками. Координація через рацію 2.",
  //     date: "2025-08-01T20:00:00.000Z",
  //     image: "https://qozpvechkkxefhsuwrfp.supabase.co/storage/v1/object/public/product-images/31dd88a4-564c-4916-8264-433affc890f7.png"
  //   },
  //   {
  //     id: "2",
  //     title: "Оборона Зеленогорська",
  //     description: "Орди заражених насуваються на Зеленогорськ. Побудуйте барикади, використовуйте кулемети та координуйтеся з іншими гравцями. Виживе найміцніший.",
  //     date: "2025-08-03T18:30:00.000Z",
  //     image: "https://qozpvechkkxefhsuwrfp.supabase.co/storage/v1/object/public/product-images/31dd88a4-564c-4916-8264-433affc890f7.png"
  //   },
  //   {
  //     id: "3",
  //     title: "Полювання на гелікоптер",
  //     description: "Розвідка зафіксувала ворожий гелікоптер. Озброюйтесь і готуйтеся до захоплення. Хто перший – той і летить.",
  //     date: "2025-08-05T17:00:00.000Z",
  //     image: "https://qozpvechkkxefhsuwrfp.supabase.co/storage/v1/object/public/product-images/31dd88a4-564c-4916-8264-433affc890f7.png"
  //   },
  //   {
  //     id: "4",
  //     title: "Медичний евакуаційний конвой",
  //     description: "Супроводжуємо вантаж із медикаментами через заражену зону до шпиталю в Черногорську. Бронетехніка і розвідка необхідні.",
  //     date: "2025-08-07T16:45:00.000Z",
  //     image: "https://qozpvechkkxefhsuwrfp.supabase.co/storage/v1/object/public/product-images/31dd88a4-564c-4916-8264-433affc890f7.png"
  //   },
  //   {
  //     id: "5",
  //     title: "PvP Турнір: 2x2",
  //     description: "Випробуйте свої сили в коротких PvP раундах 2 на 2. Переможці отримають рідкісне спорядження.",
  //     date: "2025-08-09T19:00:00.000Z",
  //     image: "https://qozpvechkkxefhsuwrfp.supabase.co/storage/v1/object/public/product-images/31dd88a4-564c-4916-8264-433affc890f7.png"
  //   },
  // ];
  

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

      {/* <UpcomingEvents events={mockEvents} /> */}
    </Container>
  );
}
