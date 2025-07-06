import { useEffect, useState } from "react";
import axios from "axios";
import { Product, Category } from "@/types";
import CategorySelector from "../CategorySelector/CategorySelector";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import {
  BackButton,
  TitleContainer,
  Wrapper,
  Title,
  ProductsGrid,
  AddButton,
  Actions,
  ButtonText,
  SearchBar,
} from "./StoreSection.styled";
import Loader from "../Loader";
import ProductModal from "../ProductModal";
import ProductCard from "../ProductCard";
import { FaSearch } from "react-icons/fa";

type Props = {
  onBack: () => void;
};

export default function AdminShop({ onBack }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCategories = async () => {
    const res = await axios.get("/api/categories");
    setCategories(res.data);
  };

  const fetchProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const handleCreate = async (data: FormData) => {
    await axios.post("/api/products/create", data);
    fetchProducts();
    setModalOpen(false);
  };

  const handleUpdate = async (id: string, data: FormData) => {
    await axios.patch(`/api/products/${id}`, data);
    fetchProducts();
    setEditingProduct(null);
    setModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    const term = searchTerm.toLowerCase();

    const filtered = products.filter((product) => {
      const matchesCategory =
        !activeCategory || product.category_id === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, activeCategory]);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Магазин</Title>

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
          <CategorySelector
            categories={categories}
            selectedCategoryId={activeCategory}
            onSelect={(id) => setActiveCategory(id || "")}
          />

          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Пошук продуктів"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>

          <ProductsGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={() => {
                  setEditingProduct(product);
                  setModalOpen(true);
                }}
                onDelete={() => handleDelete(product.id)}
              />
            ))}
          </ProductsGrid>
        </>
      )}

      {modalOpen && (
        <ProductModal
          categories={categories}
          product={editingProduct}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onClose={() => {
            setModalOpen(false);
            setEditingProduct(null);
          }}
        />
      )}
    </Wrapper>
  );
}
