import { useEffect, useRef, useState } from "react";
import { Category, Product } from "@/types";
import {
  Overlay,
  ModalContainer,
  Title,
  Form,
  Input,
  SubmitButton,
  CancelButton,
  Label,
  Select,
  Actions,
  TextArea,
} from "./ProductModal.styled";
import Loader from "../Loader";

type Props = {
  product: Product | null;
  categories: Category[];
  onCreate: (data: FormData) => void;
  onUpdate: (id: string, data: FormData) => void;
  onClose: () => void;
};

export default function ProductModal({
  product,
  categories,
  onCreate,
  onUpdate,
  onClose,
}: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [images, setImages] = useState<File[]>([]);
  const [categoryId, setCategoryId] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.title);
      setDescription(product.description || "");
      setPrice(product.price);
      setCategoryId(product.category_id);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
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
    formData.append("title", name);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("category_id", categoryId);
    images.forEach((img) => formData.append("images", img));
  
    try {
      if (product) {
        await onUpdate(product.id, formData);
      } else {
        await onCreate(formData);
      }
    } catch (error) {
      console.error( error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Overlay>
      <ModalContainer ref={modalRef}>
        {loading && <Loader />}
        {!loading && <><Title>{product ? "Редагувати" : "Створити"} продукт</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Заголовок</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Label>Опис</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <Label>Ціна</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />

          <Label>Категорія</Label>
          <Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Оберіть категорію</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Select>

          <Label>Зображення</Label>
          <Input
            type="file"
            accept="image/*"
            required
            multiple
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files || []);
              setImages(selectedFiles);
            }}
          />

          <Actions>
            <SubmitButton type="submit">
              {product ? "Зберегти" : "Створити"}
            </SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              Скасувати
            </CancelButton>
          </Actions>
        </Form>
        </>}
      </ModalContainer>
    </Overlay>
  );
}
