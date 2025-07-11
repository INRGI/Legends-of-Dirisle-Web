"use client";

import React, { useEffect, useState } from "react";
import {
  Grid,
  EmptyWrapper,
  EmptyText,
  Card,
  Title,
  Slider,
  Slide,
  Image,
  Price,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalSlider,
  ModalSlide,
  ModalImage,
  CardInfoContainer,
  ModalPrice,
} from "./ProductGrid.styled";
import { useKeenSlider } from "keen-slider/react";
import { Product } from "@/types";
import { FiPackage, FiX } from "react-icons/fi";
import "keen-slider/keen-slider.min.css";

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  if (products.length === 0) {
    return (
      <EmptyWrapper>
        <FiPackage size={48} color="#555" />
        <EmptyText>У цій категорії не знайдено продуктів.</EmptyText>
      </EmptyWrapper>
    );
  }

  return (
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelected(product)}
          />
        ))}
      </Grid>

      {selected && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelected(null)}>
              <FiX />
            </CloseButton>

            <ModalSliderWrapper images={selected.images} />

            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
            <ModalPrice>{selected.price} грн</ModalPrice>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ProductGrid;

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({
  product,
  onClick,
}) => {
  const hasMultipleImages = product.images.length > 1;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    hasMultipleImages
      ? {
          loop: true,
          renderMode: "performance",
          slides: { origin: "center", perView: 1 },
          created(slider) {
            setInterval(() => slider.next(), 6000);
          },
        }
      : undefined
  );

  return (
    <Card onClick={onClick}>
      <Slider ref={sliderRef} className="keen-slider">
        {product.images.map((src, idx) => (
          <Slide className="keen-slider__slide" key={idx}>
            <Image src={src} alt={`product-${product.id}-${idx}`} />
          </Slide>
        ))}
      </Slider>
      <CardInfoContainer>
        <Title>{product.title}</Title>
        <Price>{product.price} грн</Price>
      </CardInfoContainer>
    </Card>
  );
};

const ModalSliderWrapper: React.FC<{ images: string[] }> = ({ images }) => {
  const hasMultiple = images.length > 1;
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    hasMultiple
      ? {
          loop: true,
          slides: { origin: "center", perView: 1 },
          created(slider) {
            setInterval(() => slider.next(), 6000);
          },
        }
      : undefined
  );

  return (
    <ModalSlider ref={sliderRef} className="keen-slider">
      {images.map((src, i) => (
        <ModalSlide className="keen-slider__slide" key={i}>
          <ModalImage src={src} alt={`modal-img-${i}`} />
        </ModalSlide>
      ))}
    </ModalSlider>
  );
};
