/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Category, Product } from "@/types";
import { Form, Input, Select, Btn } from "./ProductForm.styled";
import { useRef, useState } from "react";

type Props = {
  categories: Category[];
  product?: Product | null; 
  onCreate: (data: FormData) => Promise<void>;
  onUpdate: (id: string, data: FormData) => Promise<void>;
  onCancel: () => void;
};


export default function ProductForm({ categories, product, onCreate, onUpdate, onCancel }: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ref.current) return;

    const formData = new FormData(ref.current);
    setLoading(true);

    try {
      if (product) {
        await onUpdate(product.id, formData);
      } else {
        await onCreate(formData);
        ref.current.reset(); // очистка після створення
      }
    } catch (err) {
      alert("Помилка при збереженні");
    }

    setLoading(false);
  };

  return (
    <Form ref={ref} onSubmit={handleSubmit}>
      <Input name="title" defaultValue={product?.title} placeholder="Назва" required />
      <Input name="description" defaultValue={product?.description} placeholder="Опис" required />
      <Input
        name="price"
        type="number"
        defaultValue={product?.price || 0}
        placeholder="Ціна"
        required
      />
      <Select name="category_id" defaultValue={product?.category_id} required>
        <option value="">Оберіть категорію</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </Select>
      <Input name="images" type="file" accept="image/*" multiple={!product} />

      <div style={{ display: "flex", gap: "10px" }}>
        <Btn type="submit" disabled={loading}>
          {loading ? "Збереження..." : "Зберегти"}
        </Btn>
        {product && (
          <Btn type="button" onClick={onCancel}>
            Скасувати
          </Btn>
        )}
      </div>
    </Form>
  );
}
