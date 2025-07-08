"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  TabsWrapper,
  Tab,
  ProductsSection,
} from "./StorePage.styled";
import { Product } from "@/types";
import ProductGrid from "../ProductGrid/ProductGrid";
import { FaCar } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import axios from "axios";
import Loader from "../Loader";

const StorePage: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      id: "1f8ddd32-f581-42c8-afbc-696f31d869c1",
      name: "Транспорт",
      icon: <FaCar />,
    },
    {
      id: "7f490c8f-0a0c-4b1c-b1e4-9a8b6fa80c55",
      name: "Зброя",
      icon: <GiPistolGun />,
    },
  ];

  const handleSelectCategory = (id: string) => {
    setActiveCategoryId(id);

    const filtered = products.filter((product) => product.category_id === id);
    setFilteredProducts(filtered);
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/products");
      setProducts(res.data);
  
      const defaultCategoryId = categories[0].id;
      const filtered = res.data.filter((product: Product) => product.category_id === defaultCategoryId);
      setFilteredProducts(filtered);
      setActiveCategoryId(defaultCategoryId);
    } catch (error) {
      console.error("Помилка при завантаженні продуктів:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TabsWrapper>
            {categories.map((category) => (
              <Tab
                key={category.id}
                active={activeCategoryId === category.id}
                onClick={() => handleSelectCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </Tab>
            ))}
          </TabsWrapper>

          <ProductsSection>
            <ProductGrid products={filteredProducts} />
          </ProductsSection>
        </>
      )}
    </Container>
  );
};

export default StorePage;
