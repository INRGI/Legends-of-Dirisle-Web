"use client";

import { useEffect, useState } from "react";
import { Event } from "@/types";
import {
  Card,
  CloseButton,
  Content,
  EmptyText,
  EventDate,
  EventTitle,
  Image,
  List,
  ModalBody,
  ModalContent,
  ModalImage,
  ModalOverlay,
  Timer,
  Title,
  Wrapper,
} from "./UpcomingEvents.styled";

type Props = {
  events: Event[];
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function UpcomingEvents({ events }: Props) {
  const [countdowns, setCountdowns] = useState<Record<string, Countdown>>({});
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const kyivDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return new Date(date.toLocaleString("en-US", { timeZone: "Europe/Kyiv" }));
  };

  const upcomingEvents = events
    .filter((event) => kyivDate(event.date) > new Date())
    .sort((a, b) => kyivDate(a.date).getTime() - kyivDate(b.date).getTime());

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns: Record<string, Countdown> = {};
      upcomingEvents.forEach((event) => {
        const distance = kyivDate(event.date).getTime() - new Date().getTime();
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / 1000 / 60) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        newCountdowns[event.id] = { days, hours, minutes, seconds };
      });
      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [events]);

  return (
    <Wrapper>
      <Title>Майбутні івенти</Title>
      {upcomingEvents.length === 0 ? (
        <EmptyText>Немає майбутніх івентів</EmptyText>
      ) : (
        <List>
          {upcomingEvents.map((event) => {
            const countdown = countdowns[event.id];
            return (
              <Card key={event.id} onClick={() => setSelectedEvent(event)}>
                <Image src={event.image} alt={event.title} />
                <Content>
                  <EventTitle>{event.title}</EventTitle>
                  <Timer>
                    {countdown ? (
                      <>
                        {countdown.days}д : {countdown.hours}г :{" "}
                        {countdown.minutes}х : {countdown.seconds}с
                      </>
                    ) : (
                      "Розрахунок..."
                    )}
                  </Timer>
                </Content>
              </Card>
            );
          })}
        </List>
      )}

      {selectedEvent && (
        <ModalOverlay onClick={() => setSelectedEvent(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalImage src={selectedEvent.image} alt={selectedEvent.title} />
            <ModalBody>
              <h2>{selectedEvent.title}</h2>
              <p>{selectedEvent.description}</p>
              <EventDate>
                Початок:{" "}
                {kyivDate(selectedEvent.date).toLocaleString("uk-UA", {
                  timeZone: "Europe/Kyiv",
                  dateStyle: "long",
                  timeStyle: "short",
                })}{" "}
                (за Києвом)
              </EventDate>
            </ModalBody>
            <CloseButton onClick={() => setSelectedEvent(null)}>×</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Wrapper>
  );
}
