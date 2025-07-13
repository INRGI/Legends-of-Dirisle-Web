import { useEffect, useState } from "react";
import axios from "axios";
import { Event } from "@/types";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import {
  BackButton,
  TitleContainer,
  Wrapper,
  Title,
  EventsGrid,
  AddButton,
  Actions,
  ButtonText,
  SearchBar,
} from "./EventsSection.styled";
import Loader from "../Loader";
import { FaSearch } from "react-icons/fa";
import EventCard from "../EventCard";
import EventModal from "../EventModal";

type Props = {
  onBack: () => void;
};

export default function EventsSection({ onBack }: Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events");
      setEvents(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCreate = async (data: FormData) => {
    await axios.post("/api/events/create", data);
    fetchEvents();
    setModalOpen(false);
  };

  const handleUpdate = async (id: string, data: FormData) => {
    await axios.patch(`/api/events/${id}`, data);
    fetchEvents();
    setEditingEvent(null);
    setModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/events/${id}`);
    fetchEvents();
  };

  useEffect(() => {
    const term = searchTerm.toLowerCase();

    const filtered = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term);
      return matchesSearch;
    });

    setFilteredEvents(filtered);
  }, [events, searchTerm]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Івенти</Title>

        <Actions>
          <AddButton onClick={() => setModalOpen(true)}>
            <IoMdAdd size={20} />
            <ButtonText>Створити</ButtonText>
          </AddButton>
          <BackButton onClick={onBack}>
            <IoIosArrowRoundBack size={20} />
            <ButtonText>Назад</ButtonText>
          </BackButton>
        </Actions>
      </TitleContainer>

      {loading ? (
        <Loader />
      ) : (
        <>
          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Пошук івентів"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

          <EventsGrid>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onEdit={() => {
                  setEditingEvent(event);
                  setModalOpen(true);
                }}
                onDelete={() => handleDelete(event.id)}
              />
            ))}
          </EventsGrid>
        </>
      )}

      {modalOpen && (
        <EventModal
          event={editingEvent}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onClose={() => {
            setModalOpen(false);
            setEditingEvent(null);
          }}
        />
      )}
    </Wrapper>
  );
}
