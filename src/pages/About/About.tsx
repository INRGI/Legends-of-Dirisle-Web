import React from "react";
import {
  Container,
  Section,
  Title,
  StatGrid,
  StatItem,
  Label,
  Value,
  ModsSection,
  ModsList,
  ModItem,
} from "./About.styled";
import { useServerStatus } from "../../components/utils/serverStatus";

const AboutPage: React.FC = () => {
  const { data, loading } = useServerStatus("30125816");

  if (loading || !data) return <div>Loading server data...</div>;

  const attr = data.data.attributes;

  return (
    <Container>
      <Title>Legends of Deerisle PvE</Title>

      <Section>
        <p style={{ marginBottom: "2rem", fontSize: "1.05rem", color: "#aaa" }}>
          <strong>Legends of Deerisle</strong> — це PvE сервер, створений для справжніх поціновувачів атмосферного виживання. 
          Тут ви знайдете баланс між хардкором та комфортом, багатий вибір модів, продуману економіку, кастомні івенти, унікальну карту Deerisle і теплу спільноту без рейдів. 
          Приєднуйтесь, досліджуйте, будуйте, полюйте — без токсичності, без зайвих правил, тільки чисте DayZ-задоволення.
        </p>

        <StatGrid>
          <StatItem><Label>Рейтинг:</Label> <Value>#2748</Value></StatItem>
          <StatItem><Label>Гравці:</Label> <Value>{attr.players}/{attr.maxPlayers}</Value></StatItem>
          <StatItem><Label>Статус:</Label> <Value style={{ color: attr.status === "online" ? "#4caf50" : "#f44336" }}>{attr.status}</Value></StatItem>
          <StatItem><Label>Версія:</Label> <Value>{attr.details?.version || "1.28.160123"}</Value></StatItem>
          <StatItem><Label>Аптайм (30 днів):</Label> <Value>99%</Value></StatItem>
          <StatItem><Label>Аптайм (7 днів):</Label> <Value>98%</Value></StatItem>
          <StatItem><Label>Пароль:</Label> <Value>{attr.details?.passwordProtected ? "Так" : "Ні"}</Value></StatItem>
          <StatItem><Label>Офіційний:</Label> <Value>{attr.details?.official ? "Так" : "Ні"}</Value></StatItem>
          <StatItem><Label>Від 3-ї особи:</Label> <Value>Дозволено</Value></StatItem>
          <StatItem><Label>Країна:</Label> <Value>🇬🇧 United Kingdom</Value></StatItem>
          <StatItem><Label>Відстань:</Label> <Value>{attr.details?.distance || 1448} км</Value></StatItem>
          <StatItem><Label>IP (гра):</Label> <Value>{attr.ip}:{attr.port}</Value></StatItem>
          <StatItem><Label>IP (запит):</Label> <Value>51.89.142.191:2681</Value></StatItem>
        </StatGrid>
      </Section>

      <ModsSection>
        <h2 >🧩 Встановлені моди</h2>
        <ModsList>
          {attr.details?.modNames.map((mod, i) => (
            <ModItem key={i}>{mod}</ModItem>
          ))}
        </ModsList>
      </ModsSection>
    </Container>
  );
};

export default AboutPage;
