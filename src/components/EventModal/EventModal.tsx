import { useEffect, useRef, useState } from "react";
import { Event } from "@/types";
import {
  Overlay,
  ModalContainer,
  Title,
  Form,
  Input,
  SubmitButton,
  CancelButton,
  Label,
  TextArea,
  Actions,
} from "./EventModal.styled";
import Loader from "../Loader";

type Props = {
  event: Event | null;
  onCreate: (data: FormData) => void;
  onUpdate: (id: string, data: FormData) => void;
  onClose: () => void;
};

export default function EventModal({
  event,
  onCreate,
  onUpdate,
  onClose,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDescription(event.description);
      setDate(event.date.slice(0, 10));
      setImageFile(null);
    }
  }, [event]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (event) {
        await onUpdate(event.id, formData);
      } else {
        await onCreate(formData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay>
      <ModalContainer ref={modalRef}>
        {loading && <Loader />}
        {!loading && (
          <>
            <Title>{event ? "Редагувати" : "Створити"} івент</Title>
            <Form onSubmit={handleSubmit}>
              <Label>Назва</Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <Label>Опис</Label>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <Label>Дата</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />

              <Label>Зображення</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  setImageFile(file);
                }}
              />

              <Actions>
                <SubmitButton type="submit">
                  {event ? "Зберегти" : "Створити"}
                </SubmitButton>
                <CancelButton type="button" onClick={onClose}>
                  Скасувати
                </CancelButton>
              </Actions>
            </Form>
          </>
        )}
      </ModalContainer>
    </Overlay>
  );
}
