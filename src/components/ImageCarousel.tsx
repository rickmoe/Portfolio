import { useState } from "react";
import "./ImageCarousel.css";

interface ImageCarouselProps {
  imagePaths: string[];
}

const ImageCarousel = ({ imagePaths }: ImageCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Image credit: https://vectorified.com/white-arrow-icon
  const arrowIcon = "/arrow.webp";
  const nextImg = () => {
    setSelectedIndex((prev) => (prev + 1) % imagePaths.length);
  };
  const prevImg = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + imagePaths.length) % imagePaths.length
    );
  };

  return (
    <section className="carousel">
      <img src={imagePaths[selectedIndex]} />
      <img className="next arrow" src={arrowIcon} onClick={nextImg} />
      <img className="back arrow" src={arrowIcon} onClick={prevImg} />
    </section>
  );
};

export default ImageCarousel;
