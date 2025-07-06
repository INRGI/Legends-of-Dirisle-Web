"use client";

import { Category } from "@/types";
import { Wrapper, Button } from "./CategorySelector.styled";
import { useEffect } from "react";

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
  useEffect(() => {
    if (!selectedCategoryId && categories.length > 0) {
      onSelect(categories[0].id);
    }
  }, [categories]);
  return (
    <Wrapper>
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
