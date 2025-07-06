import { Product } from "@/types";
import {
  Card,
  Info,
  Name,
  Price,
  Actions,
  ActionButton,
} from "./ProductCard.styled";
import ImageCarousel from "@/components/ImageCarousel";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

type Props = {
  product: Product;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProductCard({ product, onEdit, onDelete }: Props) {
  return (
    <Card>
      <ImageCarousel images={product.images} />
      <Info>
        <Name>{product.title}</Name>
        <Price>{product.price} грн</Price>
        <Actions>
          <ActionButton onClick={onEdit}>
            <FaEdit />
          </ActionButton>
          <ActionButton onClick={onDelete}>
            <MdOutlineDelete />
          </ActionButton>
        </Actions>
      </Info>
    </Card>
  );
}
