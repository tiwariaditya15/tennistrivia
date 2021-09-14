import { useEffect, useState } from "react";
import { ImageSlider } from "./styles";

type CarouselProps = {
  images: string[];
};

export function Carousel({ images }: CarouselProps): JSX.Element {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    const indexInterval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);
    return () => clearInterval(indexInterval);
  }, [index]);
  return <ImageSlider src={images[index]} alt="img" />;
}
