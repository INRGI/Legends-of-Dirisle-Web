"use client";

import { Category } from "@/types";
import { Wrapper, Button } from "./CategorySelector.styled";

type Props = {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelect: (id: string | null) => void;
};

export default function CategorySelector({
  categories,
  selectedCategoryId,
  onSelect,
}: Props) {
  return (
    <Wrapper>
      <Button active={!selectedCategoryId} onClick={() => onSelect(null)}>
        Усі
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat.id}
          active={selectedCategoryId === cat.id}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </Button>
      ))}
    </Wrapper>
  );
}
