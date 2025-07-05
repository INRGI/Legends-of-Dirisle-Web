"use client";

import { Product } from "@/types";
import {
  Card,
  Image,
  Title,
  Price,
  ButtonGroup,
  Btn,
} from "./ProductCard.styled";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
};

export default function ProductCard({ product, onEdit, onDelete }: Props) {
  return (
    <Card>
      <Image src={product.images?.[0]} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>{product.price} $</Price>
      <ButtonGroup>
        <Btn onClick={() => onEdit(product)}>Редагувати</Btn>
        <Btn onClick={() => onDelete(product.id)}>Видалити</Btn>
      </ButtonGroup>
    </Card>
  );
}
