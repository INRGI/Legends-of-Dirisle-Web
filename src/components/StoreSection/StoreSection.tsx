import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { Product, Category } from "@/types";
import CategorySelector from "../CategorySelector/CategorySelector";
import ProductForm from "../ProductForm";
import SkeletonLoader from "../SkeletonLoader";
import ProductCard from "../ProductCard";
import { getCategoriesWithProducts } from "@/lib/api";

const Wrapper = styled.div`
  color: #fff;
  background: #121212;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #ff3333;
  margin-bottom: 1rem;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export default function AdminShop() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchCategories = async () => {
    const res = await getCategoriesWithProducts();
    setCategories(res);
    if (!activeCategory && res.length > 0) {
      setActiveCategory(res[0].id);
    }
  };

  const fetchProducts = async (categoryId: string) => {
    setLoading(true);
    const res = await axios.get("/api/products");
    const filtered = res.data.filter(
      (p: Product) => p.category_id === categoryId
    );
    setProducts(filtered);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      fetchProducts(activeCategory);
    }
  }, [activeCategory]);

  const handleCreate = async (data: FormData) => {
    await axios.post("/api/products", data);
    fetchProducts(activeCategory);
  };

  const handleUpdate = async (id: string, data: FormData) => {
    await axios.patch(`/api/products/${id}`, data);
    fetchProducts(activeCategory);
    setEditingProduct(null);
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts(activeCategory);
  };

  return (
    <Wrapper>
      <Title>Магазин</Title>
      <CategorySelector
        categories={categories}
        selectedCategoryId={activeCategory}
        onSelect={(id) => setActiveCategory(id || "")}
      />

      <ProductForm
        categories={categories}
        product={editingProduct}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onCancel={() => setEditingProduct(null)}
      />

      {loading ? (
        <SkeletonLoader />
      ) : (
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={() => setEditingProduct(product)}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </ProductsGrid>
      )}
    </Wrapper>
  );
}
