import { Event } from "@/types";
import {
  Card,
  Info,
  Title,
  DateText,
  Description,
  Actions,
  ActionButton,
} from "./EventCard.styled";
import ImageCarousel from "@/components/ImageCarousel";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

type Props = {
  event: Event;
  onEdit: () => void;
  onDelete: () => void;
};

export default function EventCard({ event, onEdit, onDelete }: Props) {
  return (
    <Card>
      <ImageCarousel images={[event.image]} />
      <Info>
        <Title title={event.title}>{event.title}</Title>
        <DateText>{new Date(event.date).toLocaleDateString()}</DateText>
        <Description>
          {event.description.length > 100
            ? event.description.slice(0, 100) + "..."
            : event.description}
        </Description>
        <Actions>
          <ActionButton onClick={onEdit} aria-label="Редагувати івент">
            <FaEdit />
          </ActionButton>
          <ActionButton onClick={onDelete} aria-label="Видалити івент">
            <MdOutlineDelete />
          </ActionButton>
        </Actions>
      </Info>
    </Card>
  );
}
