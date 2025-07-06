import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from "@emotion/styled";

const CarouselWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
  });

  return (
    <CarouselWrapper ref={sliderRef} className="keen-slider">
      {images.map((src, index) => (
        <div key={index} className="keen-slider__slide">
          <SlideImage src={src} alt={`product-${index}`} />
        </div>
      ))}
    </CarouselWrapper>
  );
}
